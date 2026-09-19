import type { ContactPayload } from "./schema";

type EmailLocale = ContactPayload["locale"];

type EmailLabels = {
  title: string;
  subject: string;
  fields: Record<
    | "name"
    | "lang"
    | "email"
    | "phone"
    | "matter"
    | "urgency"
    | "amount"
    | "counterpartyLocation"
    | "documents"
    | "brief",
    string
  >;
  matter: Record<ContactPayload["matter"], string>;
  urgency: Record<ContactPayload["urgency"], string>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labels: Record<EmailLocale, EmailLabels> = {
  en: {
    title: "New confidential contact case review",
    subject: "New Contact Case Review",
    fields: {
      name: "Full Name",
      lang: "Preferred Language",
      email: "Email",
      phone: "Phone / WhatsApp",
      matter: "Matter Type",
      urgency: "Urgency",
      amount: "Approximate Disputed Amount",
      counterpartyLocation: "Counterparty Location",
      documents: "Available Documents",
      brief: "Brief Description",
    },
    matter: {
      commercial_dispute_uae: "Commercial dispute in the UAE",
      debt_recovery_unpaid_invoice: "Debt recovery or unpaid invoice",
      asset_recovery_lost_funds: "Asset recovery or lost funds",
      fraud_suspicious_investment: "Fraud or suspicious investment",
      partner_shareholder_dispute: "Partner or shareholder dispute",
      cross_border_contract_corporate: "Cross-border contract or corporate matter",
      other_commercial_financial: "Other commercial or financial matter",
    },
    urgency: {
      urgent_asset_transfer: "Urgent; possible asset transfer",
      urgent_counterparty_unresponsive: "Urgent; counterparty unresponsive",
      action_needed_soon: "Action may be needed soon",
      initial_assessment: "Initial assessment request",
      unclear: "Urgency is unclear",
    },
  },
  fa: {
    title: "درخواست جدید بررسی محرمانه پرونده از صفحه تماس",
    subject: "درخواست جدید بررسی پرونده از صفحه تماس",
    fields: {
      name: "نام و نام خانوادگی",
      lang: "زبان ترجیحی",
      email: "ایمیل",
      phone: "شماره تماس یا واتساپ",
      matter: "نوع پرونده",
      urgency: "فوریت موضوع",
      amount: "مبلغ تقریبی اختلاف",
      counterpartyLocation: "کشور یا محل طرف مقابل",
      documents: "مدارک موجود",
      brief: "خلاصه پرونده",
    },
    matter: {
      commercial_dispute_uae: "اختلاف تجاری در امارات",
      debt_recovery_unpaid_invoice: "وصول مطالبات یا فاکتور پرداخت‌نشده",
      asset_recovery_lost_funds: "بازیابی دارایی یا پول ازدست‌رفته",
      fraud_suspicious_investment: "کلاهبرداری یا سرمایه‌گذاری مشکوک",
      partner_shareholder_dispute: "اختلاف شریک یا سهامدار",
      cross_border_contract_corporate: "قرارداد یا پرونده ایران–امارات",
      other_commercial_financial: "سایر پرونده‌های مالی یا تجاری",
    },
    urgency: {
      urgent_asset_transfer: "فوری؛ احتمال انتقال دارایی",
      urgent_counterparty_unresponsive: "فوری؛ طرف مقابل پاسخ نمی‌دهد",
      action_needed_soon: "نیاز به اقدام طی چند روز",
      initial_assessment: "درخواست ارزیابی اولیه",
      unclear: "فوریت مشخص نیست",
    },
  },
};

export type ContactEmail = { html: string; text: string; subject: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeSubjectValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function buildContactEmail(payload: ContactPayload): ContactEmail {
  const copy = labels[payload.locale];
  const matter = copy.matter[payload.matter];
  const urgency = copy.urgency[payload.urgency];
  const values: Array<[string, string]> = [
    [copy.fields.name, payload.name],
    [copy.fields.lang, payload.lang || "—"],
    [copy.fields.email, payload.email || "—"],
    [copy.fields.phone, payload.phone || "—"],
    [copy.fields.matter, matter],
    [copy.fields.urgency, urgency],
    [copy.fields.amount, payload.amount || "—"],
    [copy.fields.counterpartyLocation, payload.counterparty_location || "—"],
    [copy.fields.documents, payload.documents || "—"],
    [copy.fields.brief, payload.brief],
  ];

  const text = [copy.title, "", ...values.map(([label, value]) => `${label}: ${value}`)].join("\n");
  const htmlRows = values
    .map(
      ([label, value]) =>
        `<tr><th style="padding:10px 12px;text-align:left;vertical-align:top;color:#8d877b;border-bottom:1px solid #2c2a25;font-weight:500">${escapeHtml(label)}</th><td style="padding:10px 12px;vertical-align:top;color:#f4efe4;border-bottom:1px solid #2c2a25">${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`,
    )
    .join("");
  const html = `<!doctype html><html><body style="margin:0;background:#100f0c;color:#f4efe4;font-family:Arial,sans-serif"><main style="max-width:760px;margin:0 auto;padding:32px 20px"><div style="border:1px solid #5d4a23;background:#171510;padding:26px"><p style="margin:0 0 8px;color:#c7a45a;font-size:12px;letter-spacing:.12em;text-transform:uppercase">Rahil Mostafaei</p><h1 style="margin:0 0 22px;font-size:24px;font-weight:600">${escapeHtml(copy.title)}</h1><table style="width:100%;border-collapse:collapse;font-size:14px">${htmlRows}</table></div></main></body></html>`;
  const subject = `[${urgency}] [${matter}] ${copy.subject} — ${sanitizeSubjectValue(payload.name)}`;

  return { html, text, subject };
}

export class ContactEmailConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactEmailConfigurationError";
  }
}

function readRecipients(): string[] {
  const recipients = (process.env.CASE_INTAKE_RECIPIENTS ?? "")
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);
  if (recipients.length < 2 || recipients.some((recipient) => !emailPattern.test(recipient))) {
    throw new ContactEmailConfigurationError("Contact email recipient configuration is invalid");
  }
  return recipients;
}

export async function sendContactEmail(payload: ContactPayload): Promise<{ devMode: boolean }> {
  const devMode = process.env.CASE_INTAKE_DEV_MODE === "true";
  const email = buildContactEmail(payload);

  if (devMode) {
    console.info("[contact] dev mode accepted", {
      locale: payload.locale,
      matter: payload.matter,
      urgency: payload.urgency,
      briefLength: payload.brief.length,
      hasEmail: Boolean(payload.email),
      hasPhone: Boolean(payload.phone),
    });
    return { devMode: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CASE_INTAKE_FROM_EMAIL;
  if (!apiKey || !from) {
    throw new ContactEmailConfigurationError("Contact email configuration is incomplete");
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
