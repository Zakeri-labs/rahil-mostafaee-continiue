export type LeadPageType = "commercial-dispute" | "asset-debt-recovery";

export type CounterpartyType = "person" | "company" | "unknown";

export type RiskAnswer = "yes" | "no" | "unknown";

/**
 * Human-readable labels for the stable machine values below, resolved at
 * submission time from whichever language was active. This exists purely
 * for the current WhatsApp handoff — it is optional and additive so a
 * future backend adapter can ignore it entirely and rely only on the
 * stable `value` fields, which never change with language.
 */
export type LeadPayloadDisplay = {
  matterType: string;
  approximateAmount: string;
  urgency: string;
  availableDocuments: string[];
  counterpartyType: string;
  assetTransferOrEvidenceRisk: string;
};

export type LeadPayload = {
  sourcePage: LeadPageType;
  language: "fa" | "en";

  fullName: string;
  whatsappNumber: string;
  email?: string;

  /** Stable, language-independent identifier (e.g. "breach-of-contract"). */
  matterType: string;
  /** Stable, language-independent identifier (e.g. "under-50000-aed"). */
  approximateAmount: string;

  counterpartyType: CounterpartyType;
  counterpartyLocation: string;

  /** Stable, language-independent identifier (e.g. "within-days"). */
  urgency: string;
  /** Stable, language-independent identifiers (e.g. "contract"). */
  availableDocuments: string[];
  lastContact?: string;

  assetTransferOrEvidenceRisk: RiskAnswer;
  summary: string;

  display?: LeadPayloadDisplay;
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
