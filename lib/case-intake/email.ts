import type { CaseIntakePayload } from "./schema";

type EmailLocale = "fa" | "en";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LabelSet = {
  title: string;
  subject: string;
  fields: Record<string, string>;
  languages: Record<string, string>;
  urgency: Record<string, string>;
  matterType: Record<string, string>;
  estimatedValue: Record<string, string>;
  counterpartyLocation: Record<string, string>;
  documents: Record<string, string>;
};

const labels: Record<EmailLocale, LabelSet> = {
  en: {
    title: "New confidential case review request",
    subject: "New Case Review Request",
    fields: {
      fullName: "Full name",
      phone: "Phone / WhatsApp",
      email: "Email",
      preferredLanguage: "Preferred communication language",
      urgency: "Urgency",
      matterType: "Matter type",
      estimatedValue: "Estimated value",
      counterpartyLocation: "Counterparty location",
      availableDocuments: "Available documents",
      summary: "Matter summary",
      locale: "Submission locale",
      submittedAt: "Submitted at",
      pagePath: "Source page",
      referrer: "Referrer",
      utmSource: "UTM source",
      utmMedium: "UTM medium",
      utmCampaign: "UTM campaign",
      utmContent: "UTM content",
      utmTerm: "UTM term",
    },
    languages: { fa: "Persian", en: "English", ar: "Arabic" },
    urgency: {
      critical: "Critical",
      high: "High priority",
      medium: "Within the next few days",
      initial_review: "Initial assessment",
      unsure: "Not sure",
    },
    matterType: {
      commercial_dispute: "Commercial dispute or unperformed contract",
      debt_recovery: "Debt recovery or unpaid invoice",
      asset_or_fraud_recovery: "Asset recovery or suspected investment fraud",
      partner_shareholder_dispute: "Partner or shareholder dispute",
      iran_uae_cross_border: "Iran–UAE cross-border matter",
      other: "Other matter",
    },
    estimatedValue: {
      under_100k_aed: "Under AED 100,000 or equivalent",
      "100k_to_500k_aed": "AED 100,000 to AED 500,000",
      "500k_to_2m_aed": "AED 500,000 to AED 2 million",
      over_2m_aed: "More than AED 2 million",
      unknown_amount: "The amount is not yet clear",
      non_financial: "The matter is not necessarily financial",
    },
    counterpartyLocation: {
      dubai: "Dubai",
      other_uae: "Another Emirate",
      iran: "Iran",
      other_country: "Another country",
      unknown_location: "The exact location is unclear",
    },
    documents: {
      contract: "Contract or agreement",
      invoice: "Invoice or account statement",
      payment_proof: "Payment or transfer evidence",
      communications: "Emails, WhatsApp messages, or other communications",
      counterparty_information: "Company or counterparty information",
      no_documents: "No documents currently available",
    },
  },
  fa: {
    title: "درخواست جدید بررسی محرمانه پرونده",
    subject: "درخواست جدید بررسی پرونده",
    fields: {
      fullName: "نام و نام خانوادگی",
      phone: "شماره موبایل / واتساپ",
      email: "ایمیل",
      preferredLanguage: "زبان ترجیحی برای ارتباط",
      urgency: "میزان فوریت",
      matterType: "نوع موضوع",
      estimatedValue: "ارزش تقریبی",
      counterpartyLocation: "محل طرف مقابل",
      availableDocuments: "مدارک موجود",
      summary: "خلاصه موضوع",
      locale: "زبان فرم",
      submittedAt: "زمان ارسال",
      pagePath: "صفحه مبدأ",
      referrer: "ارجاع‌دهنده",
      utmSource: "منبع UTM",
      utmMedium: "رسانه UTM",
      utmCampaign: "کمپین UTM",
      utmContent: "محتوای UTM",
      utmTerm: "عبارت UTM",
    },
    languages: { fa: "فارسی", en: "English", ar: "العربية" },
    urgency: {
      critical: "فوری",
      high: "فوریت بالا",
      medium: "طی چند روز آینده",
      initial_review: "ارزیابی اولیه",
      unsure: "مطمئن نیستم",
    },
    matterType: {
      commercial_dispute: "اختلاف تجاری یا قرارداد اجرا نشده",
      debt_recovery: "وصول مطالبات یا فاکتور پرداخت نشده",
      asset_or_fraud_recovery: "بازیابی دارایی یا سرمایه‌گذاری مشکوک",
      partner_shareholder_dispute: "اختلاف شریک یا سهامدار",
      iran_uae_cross_border: "پرونده مرزی ایران–امارات",
      other: "موضوعی خارج از دسته‌های اصلی",
    },
    estimatedValue: {
      under_100k_aed: "کمتر از ۱۰۰ هزار درهم یا معادل آن",
      "100k_to_500k_aed": "۱۰۰ تا ۵۰۰ هزار درهم",
      "500k_to_2m_aed": "۵۰۰ هزار تا ۲ میلیون درهم",
      over_2m_aed: "بیش از ۲ میلیون درهم",
      unknown_amount: "مبلغ دقیق مشخص نیست",
      non_financial: "موضوع الزاماً مالی نیست",
    },
    counterpartyLocation: {
      dubai: "دبی",
      other_uae: "سایر امارات",
      iran: "ایران",
      other_country: "کشور دیگری",
      unknown_location: "محل دقیق مشخص نیست",
    },
    documents: {
      contract: "قرارداد یا توافق‌نامه",
      invoice: "فاکتور یا صورت‌حساب",
      payment_proof: "رسید پرداخت یا انتقال وجه",
      communications: "ایمیل، WhatsApp یا مکاتبات",
      counterparty_information: "اطلاعات شرکت یا شخص مقابل",
      no_documents: "فعلاً مدرکی در اختیار ندارم",
    },
  },
};

export type CaseIntakeEmail = { html: string; text: string; subject: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function displayValue(map: Record<string, string>, value: string): string {
  return map[value] ?? "—";
}

function phoneHref(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8 ? `https://wa.me/${digits}` : null;
}

export function buildCaseIntakeEmail(payload: CaseIntakePayload): CaseIntakeEmail {
  const locale: EmailLocale = payload.locale === "fa" ? "fa" : "en";
  const copy = labels[locale];
  const urgency = displayValue(copy.urgency, payload.urgency);
  const matterType = displayValue(copy.matterType, payload.matterType);
  const subject = `[${urgency}] [${matterType}] ${copy.subject} — ${payload.fullName}`;
  const phoneLink = phoneHref(payload.phone);
  const values: Array<[string, string]> = [
    [copy.fields.fullName, payload.fullName],
    [copy.fields.phone, payload.phone],
    [copy.fields.email, payload.email || "—"],
    [copy.fields.preferredLanguage, displayValue(copy.languages, payload.preferredLanguage)],
    [copy.fields.urgency, urgency],
    [copy.fields.matterType, matterType],
    [copy.fields.estimatedValue, displayValue(copy.estimatedValue, payload.estimatedValue)],
    [
      copy.fields.counterpartyLocation,
      displayValue(copy.counterpartyLocation, payload.counterpartyLocation),
    ],
    [
      copy.fields.availableDocuments,
      payload.availableDocuments.map((value) => displayValue(copy.documents, value)).join(", "),
    ],
    [copy.fields.summary, payload.summary],
    [copy.fields.locale, payload.locale === "fa" ? "فارسی" : "English"],
    [copy.fields.submittedAt, payload.submittedAt],
    [copy.fields.pagePath, payload.pagePath],
    [copy.fields.referrer, payload.referrer || "—"],
    [copy.fields.utmSource, payload.utmSource || "—"],
    [copy.fields.utmMedium, payload.utmMedium || "—"],
    [copy.fields.utmCampaign, payload.utmCampaign || "—"],
    [copy.fields.utmContent, payload.utmContent || "—"],
    [copy.fields.utmTerm, payload.utmTerm || "—"],
  ];

  const text = [
    copy.title,
    "",
    ...values.map(([label, value]) => `${label}: ${value}`),
    ...(phoneLink ? ["", `WhatsApp: ${phoneLink}`] : []),
  ].join("\n");

  const htmlRows = values
    .map(([label, value]) => {
      const safeLabel = escapeHtml(label);
      const safeValue = escapeHtml(value).replace(/\n/g, "<br />");
      const renderedValue =
        label === copy.fields.phone && phoneLink
          ? `<a href="${escapeHtml(phoneLink)}">${safeValue}</a>`
          : safeValue;
      return `<tr><th style="padding:10px 12px;text-align:left;vertical-align:top;color:#8d877b;border-bottom:1px solid #2c2a25;font-weight:500">${safeLabel}</th><td style="padding:10px 12px;vertical-align:top;color:#f4efe4;border-bottom:1px solid #2c2a25">${renderedValue}</td></tr>`;
    })
    .join("");

  const html = `<!doctype html><html><body style="margin:0;background:#100f0c;color:#f4efe4;font-family:Arial,sans-serif"><main style="max-width:760px;margin:0 auto;padding:32px 20px"><div style="border:1px solid #5d4a23;background:#171510;padding:26px"><p style="margin:0 0 8px;color:#c7a45a;font-size:12px;letter-spacing:.12em;text-transform:uppercase">Rahil Mostafaei</p><h1 style="margin:0 0 22px;font-size:24px;font-weight:600">${escapeHtml(copy.title)}</h1><table style="width:100%;border-collapse:collapse;font-size:14px">${htmlRows}</table></div></main></body></html>`;

  return { html, text, subject };
}

export class CaseIntakeConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CaseIntakeConfigurationError";
  }
}

function readRecipients(): string[] {
  const recipients = (process.env.CASE_INTAKE_RECIPIENTS ?? "")
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);
  if (recipients.length < 2 || recipients.some((recipient) => !emailPattern.test(recipient))) {
    throw new CaseIntakeConfigurationError(
      "CASE_INTAKE_RECIPIENTS must contain two valid email addresses",
    );
  }
  return recipients;
}

export async function sendCaseIntakeEmail(
  payload: CaseIntakePayload,
): Promise<{ devMode: boolean }> {
  const devMode = process.env.CASE_INTAKE_DEV_MODE === "true";
  const email = buildCaseIntakeEmail(payload);

  if (devMode) {
    console.info("[case-intake] dev mode accepted", {
      urgency: payload.urgency,
      matterType: payload.matterType,
      locale: payload.locale,
      preferredLanguage: payload.preferredLanguage,
      summaryLength: payload.summary.length,
      documentCount: payload.availableDocuments.length,
      hasEmail: Boolean(payload.email),
    });
    return { devMode: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CASE_INTAKE_FROM_EMAIL;
  if (!apiKey || !from) {
    throw new CaseIntakeConfigurationError("Resend configuration is incomplete");
  }

  const recipients = readRecipients();
  const replyTo = payload.email || process.env.CASE_INTAKE_REPLY_TO_EMAIL || undefined;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: recipients,
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend request failed with status ${response.status}`);
  }

  return { devMode: false };
}
