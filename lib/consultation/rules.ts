/**
 * Consultation booking rules shared by the booking page and its route handlers.
 * Dates are plain `YYYY-MM-DD` strings on the Dubai calendar; no times are booked.
 */

export const DAILY_CAPACITY = 5;
/** Days ahead (inclusive of today + this many days) that can be booked. */
export const BOOKING_WINDOW_DAYS = 60;
export const BOOKING_TIME_ZONE = "Asia/Dubai";

/** Monday–Friday (Date#getUTCDay numbering). */
const BOOKABLE_WEEKDAYS = new Set([1, 2, 3, 4, 5]);
const FREE_WEEKDAY = 2; // Tuesday

const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

export type DayStatus = "past" | "closed" | "outOfRange" | "full" | "open";

export function isDateString(value: string): boolean {
  const match = DATE_PATTERN.exec(value);
  if (!match) return false;
  const date = parseDate(value);
  return toDateString(date) === value;
}

/** Midday UTC keeps the weekday stable regardless of the runtime time zone. */
export function parseDate(value: string): Date {
  return new Date(`${value}T12:00:00.000Z`);
}

export function toDateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function addDays(value: string, days: number): string {
  const date = parseDate(value);
  date.setUTCDate(date.getUTCDate() + days);
  return toDateString(date);
}

export function weekday(value: string): number {
  return parseDate(value).getUTCDay();
}

export function todayInDubai(now: Date = new Date()): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: BOOKING_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isFreeConsultationDay(value: string): boolean {
  return weekday(value) === FREE_WEEKDAY;
}

/** First and last bookable dates: from tomorrow (Dubai) through the booking window. */
export function getBookingRange(now: Date = new Date()): { first: string; last: string } {
  const today = todayInDubai(now);
  return { first: addDays(today, 1), last: addDays(today, BOOKING_WINDOW_DAYS) };
}

/** Calendar status of one day, ignoring capacity unless `booked` is supplied. */
export function getDayStatus(value: string, booked = 0, now: Date = new Date()): DayStatus {
  const { first, last } = getBookingRange(now);
  if (value < first) return "past";
  if (!BOOKABLE_WEEKDAYS.has(weekday(value))) return "closed";
  if (value > last) return "outOfRange";
  if (booked >= DAILY_CAPACITY) return "full";
  return "open";
}

export function isBookableDate(value: string, now: Date = new Date()): boolean {
  return isDateString(value) && getDayStatus(value, 0, now) === "open";
}
