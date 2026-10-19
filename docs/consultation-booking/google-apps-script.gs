/**
 * Consultation booking backend for rahilmostafaei.com.
 *
 * Paste this whole file into the Google Sheet's Apps Script editor
 * (Extensions → Apps Script), set SECRET below, then deploy it as a Web App
 * (Execute as: Me, Who has access: Anyone). The website server calls it with
 * the same secret; visitors never see the URL or the secret.
 *
 * Sheet layout (created automatically on first booking):
 *   ردیف | تاریخ | نام | موضوع | شماره
 */

// Must match CONSULTATION_SHEET_SECRET in the website's environment variables.
var SECRET = "CHANGE_ME_TO_A_LONG_RANDOM_SECRET";

var SHEET_NAME = "Bookings";
var NOTIFY_EMAIL = "rahil@lutfilaw.ae";
var DAILY_CAPACITY = 5;
var HEADERS = ["ردیف", "تاریخ", "نام", "موضوع", "شماره"];
var DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function doGet(e) {
  var params = (e && e.parameter) || {};
  if (params.token !== SECRET) return json_({ ok: false, code: "UNAUTHORIZED" });
  if (params.action !== "availability") return json_({ ok: false, code: "UNKNOWN_ACTION" });
  if (!DATE_PATTERN.test(params.from || "") || !DATE_PATTERN.test(params.to || "")) {
    return json_({ ok: false, code: "INVALID_RANGE" });
  }

  var counts = countByDate_(getSheet_());
  var result = {};
  Object.keys(counts).forEach(function (date) {
    if (date >= params.from && date <= params.to) result[date] = counts[date];
  });
  return json_({ ok: true, capacity: DAILY_CAPACITY, counts: result });
}

function doPost(e) {
  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (error) {
    return json_({ ok: false, code: "INVALID_JSON" });
  }
  if (body.token !== SECRET) return json_({ ok: false, code: "UNAUTHORIZED" });
  if (!DATE_PATTERN.test(body.date || "") || !body.name || !body.phone || !body.topic) {
    return json_({ ok: false, code: "INVALID_BOOKING" });
  }

  // The lock makes "count, then append" atomic so a sixth booking can never slip in.
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return json_({ ok: false, code: "BUSY" });

  var row;
  try {
    var sheet = getSheet_();
    var booked = countByDate_(sheet)[body.date] || 0;
    if (booked >= DAILY_CAPACITY) return json_({ ok: false, code: "FULL" });

    row = Math.max(sheet.getLastRow(), 1);
    var values = [String(row), body.date, clean_(body.name), clean_(body.topic), clean_(body.phone)];
    var range = sheet.getRange(row + 1, 1, 1, HEADERS.length);
    range.setNumberFormat("@");
    range.setValues([values]);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  try {
    sendNotification_(row, body);
  } catch (error) {
    // The booking is already saved; a mail hiccup must not fail it.
    console.error("Notification email failed: " + error);
  }

  return json_({ ok: true, row: row });
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.setRightToLeft(true);
    sheet.getRange("B:B").setNumberFormat("@");
  }
  return sheet;
}

function countByDate_(sheet) {
  var counts = {};
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return counts;
  var dates = sheet.getRange(2, 2, lastRow - 1, 1).getDisplayValues();
  dates.forEach(function (cell) {
    var date = String(cell[0]).trim();
    if (DATE_PATTERN.test(date)) counts[date] = (counts[date] || 0) + 1;
  });
  return counts;
}

// Neutralise spreadsheet formulas and cap length.
function clean_(value) {
  var text = String(value).replace(/[\r\n]+/g, " ").trim().slice(0, 1000);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function sendNotification_(row, body) {
  var isFree = new Date(body.date + "T12:00:00Z").getUTCDay() === 2;
  var subject = "نوبت جدید مشاوره حقوقی | " + body.date + (isFree ? " (رایگان)" : "");
  var lines = [
    "یک نوبت جدید از طریق سایت rahilmostafaei.com رزرو شد.",
    "",
    "ردیف: " + row,
    "تاریخ: " + body.date + (isFree ? " (سه‌شنبه، مشاوره رایگان)" : ""),
    "نام: " + body.name,
    "شماره تماس: " + body.phone,
    "موضوع: " + body.topic,
    "",
    "لیست کامل نوبت‌ها: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
  ];
  var html =
    '<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:14px;line-height:1.9">' +
    lines.map(escapeHtml_).join("<br>") +
    "</div>";
  MailApp.sendEmail({ to: NOTIFY_EMAIL, subject: subject, body: lines.join("\n"), htmlBody: html });
}

function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

/** Run once from the editor to create the sheet header and grant permissions. */
function setup() {
  getSheet_();
  MailApp.getRemainingDailyQuota();
}
