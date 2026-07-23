import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import type { LeadPayload, LeadSubmissionAdapter } from "@/lib/leads/types";

type MessageLabels = {
  title: string;
  sourcePage: string;
  language: string;
  fullName: string;
  whatsappNumber: string;
  email: string;
  matterType: string;
  approximateAmount: string;
  counterpartyType: string;
  counterpartyLocation: string;
  urgency: string;
  availableDocuments: string;
  lastContact: string;
  assetTransferOrEvidenceRisk: string;
  summary: string;
};

const SOURCE_PAGE_LABELS: Record<"en" | "fa", Record<LeadPayload["sourcePage"], string>> = {
  en: {
    "commercial-dispute": "Corporate Commercial Disputes",
    "asset-debt-recovery": "UAE Asset & Debt Recovery",
  },
  fa: {
    "commercial-dispute": "اختلافات تجاری ایران-امارات",
    "asset-debt-recovery": "بازیابی دارایی و وصول مطالبات در امارات",
  },
};

const MESSAGE_LABELS: Record<"en" | "fa", MessageLabels> = {
  en: {
    title: "New case-review request",
    sourcePage: "Landing page",
    language: "Language",
    fullName: "Full name",
    whatsappNumber: "WhatsApp number",
    email: "Email",
    matterType: "Matter type",
    approximateAmount: "Approximate amount",
    counterpartyType: "Counterparty type",
    counterpartyLocation: "Counterparty location",
    urgency: "Urgency",
    availableDocuments: "Available documents",
    lastContact: "Last contact",
    assetTransferOrEvidenceRisk: "Asset transfer / evidence risk",
    summary: "Summary",
  },
  fa: {
    title: "درخواست بررسی پرونده جدید",
    sourcePage: "صفحه ورودی",
    language: "زبان",
    fullName: "نام و نام خانوادگی",
    whatsappNumber: "شماره واتساپ",
    email: "ایمیل",
    matterType: "نوع پرونده",
    approximateAmount: "مبلغ تقریبی",
    counterpartyType: "نوع طرف مقابل",
    counterpartyLocation: "محل طرف مقابل",
    urgency: "فوریت",
    availableDocuments: "مدارک موجود",
    lastContact: "آخرین ارتباط",
    assetTransferOrEvidenceRisk: "ریسک انتقال دارایی یا از بین رفتن مدارک",
    summary: "خلاصه پرونده",
  },
};

export function buildWhatsAppMessage(payload: LeadPayload): string {
  const labels = MESSAGE_LABELS[payload.language];
  const sourcePageLabel = SOURCE_PAGE_LABELS[payload.language][payload.sourcePage];
  const lines: string[] = [labels.title, ""];

  const push = (label: string, value?: string) => {
    if (value && value.trim().length > 0) lines.push(`${label}: ${value}`);
  };

  // Prefer the localized `display` labels resolved by the form (matches the
  // active language and reads naturally); fall back to the stable machine
  // values only if a caller didn't supply `display` (e.g. a future adapter
  // built around raw values only).
  const display = payload.display;

  push(labels.sourcePage, sourcePageLabel);
  push(labels.language, payload.language === "fa" ? "فارسی" : "English");
  push(labels.fullName, payload.fullName);
  push(labels.whatsappNumber, payload.whatsappNumber);
  push(labels.email, payload.email);
  push(labels.matterType, display?.matterType ?? payload.matterType);
  push(labels.approximateAmount, display?.approximateAmount ?? payload.approximateAmount);
  push(labels.counterpartyType, display?.counterpartyType ?? payload.counterpartyType);
  push(labels.counterpartyLocation, payload.counterpartyLocation);
  push(labels.urgency, display?.urgency ?? payload.urgency);
  push(
    labels.availableDocuments,
    (display?.availableDocuments ?? payload.availableDocuments).join(", "),
  );
  push(labels.lastContact, payload.lastContact);
  push(
    labels.assetTransferOrEvidenceRisk,
    display?.assetTransferOrEvidenceRisk ?? payload.assetTransferOrEvidenceRisk,
  );
  push(labels.summary, payload.summary);

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string, number: string = LEADS_WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Current lead-submission adapter: prepares a structured WhatsApp message
 * and attempts to open it for the visitor to review and send manually.
 * Never claims the message was actually sent, stored, or registered —
 * only that it was prepared and an attempt was made to open it.
 *
 * `window.open(...)` returning `null` is not reliable evidence of failure:
 * some browsers/OS combinations return `null` even when the tab or the
 * WhatsApp app opened successfully, and the browser can never confirm the
 * user actually pressed Send. So a `null`/falsy return is treated the same
 * as a successful attempt — the message and URL were still validly
 * prepared, and the caller always gets `fallbackUrl` to offer a manual
 * link regardless. Only a genuine thrown exception while building the
 * message, building the URL, or calling `window.open` produces `ok: false`.
 * No polling, timers, or focus-detection are used to guess otherwise.
 */
export const whatsAppSubmissionAdapter: LeadSubmissionAdapter = async (payload) => {
  let url: string | undefined;

  try {
    const message = buildWhatsAppMessage(payload);
    url = buildWhatsAppUrl(message);

    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    return { ok: true, destination: "whatsapp", fallbackUrl: url, openAttempted: true };
  } catch {
    return { ok: false, error: "openFailed", fallbackUrl: url };
  }
};
