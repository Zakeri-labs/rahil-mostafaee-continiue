export type LeadPageType = "commercial-dispute" | "asset-debt-recovery";

export type CounterpartyType = "person" | "company" | "unknown";

export type RiskAnswer = "yes" | "no" | "unknown";

export type LeadPayload = {
  sourcePage: LeadPageType;
  language: "fa" | "en";

  fullName: string;
  whatsappNumber: string;
  email?: string;

  matterType: string;
  approximateAmount: string;

  counterpartyType: CounterpartyType;
  counterpartyLocation: string;

  urgency: string;
  availableDocuments: string[];
  lastContact?: string;

  assetTransferOrEvidenceRisk: RiskAnswer;
  summary: string;
};

export type FormOption = { value: string; label: string };

/**
 * Future backend integration point: replace `whatsAppSubmissionAdapter`
 * (lib/leads/whatsapp.ts) with an adapter of this same shape (e.g. an
 * `apiSubmissionAdapter` calling `POST /api/leads`) without changing
 * QualificationForm, the validation schema, or any field configuration.
 *
 * `openAttempted` on the success branch reflects only that an attempt was
 * made to open the destination (e.g. `window.open`) — the browser cannot
 * reliably confirm the user actually completed sending the message, so
 * `ok: true` must never be read as "message sent."
 */
export type LeadSubmissionResult =
  | { ok: true; destination: "whatsapp" | "api"; fallbackUrl?: string; openAttempted?: boolean }
  | { ok: false; error: string; fallbackUrl?: string };

export type LeadSubmissionAdapter = (payload: LeadPayload) => Promise<LeadSubmissionResult>;
