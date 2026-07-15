import { z } from "zod";

export const urgencyValues = ["critical", "high", "medium", "initial_review", "unsure"] as const;
export const matterTypeValues = [
  "commercial_dispute",
  "debt_recovery",
  "asset_or_fraud_recovery",
  "partner_shareholder_dispute",
  "iran_uae_cross_border",
  "other",
] as const;
export const estimatedValueValues = [
  "under_100k_aed",
  "100k_to_500k_aed",
  "500k_to_2m_aed",
  "over_2m_aed",
  "unknown_amount",
  "non_financial",
] as const;
export const counterpartyLocationValues = [
  "dubai",
  "other_uae",
  "iran",
  "other_country",
  "unknown_location",
] as const;
export const documentValues = [
  "contract",
  "invoice",
  "payment_proof",
  "communications",
  "counterparty_information",
  "no_documents",
] as const;
export const preferredLanguageValues = ["fa", "en", "ar"] as const;

export type Urgency = (typeof urgencyValues)[number];
export type MatterType = (typeof matterTypeValues)[number];
export type EstimatedValue = (typeof estimatedValueValues)[number];
export type CounterpartyLocation = (typeof counterpartyLocationValues)[number];
export type AvailableDocument = (typeof documentValues)[number];
export type PreferredLanguage = (typeof preferredLanguageValues)[number];

export const SUMMARY_MIN_LENGTH = 30;
export const SUMMARY_MAX_LENGTH = 800;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return raw.trim().startsWith("+") ? `+${digits}` : digits;
}

const documentSelection = z
  .array(z.enum(documentValues))
  .min(1, { message: "required" })
  .max(documentValues.length, { message: "tooManyDocuments" })
  .refine((values) => new Set(values).size === values.length, { message: "duplicateDocuments" });

export const caseIntakeFormSchema = z.object({
  urgency: z.enum(urgencyValues, { message: "required" }),
  matterType: z.enum(matterTypeValues, { message: "required" }),
  estimatedValue: z.enum(estimatedValueValues, { message: "required" }),
  counterpartyLocation: z.enum(counterpartyLocationValues, { message: "required" }),
  summary: z
    .string()
    .trim()
    .min(SUMMARY_MIN_LENGTH, { message: "summaryTooShort" })
    .max(SUMMARY_MAX_LENGTH, { message: "summaryTooLong" }),
  availableDocuments: documentSelection,
  fullName: z
    .string()
    .trim()
    .min(3, { message: "nameTooShort" })
    .max(100, { message: "nameTooLong" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .transform(normalizePhone)
    .pipe(z.string().regex(/^\+?\d{8,15}$/, { message: "invalidPhone" })),
  email: z
    .string()
    .trim()
    .max(200, { message: "emailTooLong" })
    .refine((value) => value === "" || emailPattern.test(value), { message: "invalidEmail" }),
  preferredLanguage: z.enum(preferredLanguageValues, { message: "required" }),
  consent: z.boolean().refine((value) => value, { message: "consentRequired" }),
});

export const caseIntakeSchema = caseIntakeFormSchema
  .extend({
    pagePath: z.string().trim().min(1).max(500),
    referrer: z.string().trim().max(1000),
    utmSource: z.string().trim().max(200),
    utmMedium: z.string().trim().max(200),
    utmCampaign: z.string().trim().max(200),
    utmContent: z.string().trim().max(200),
    utmTerm: z.string().trim().max(200),
    formStartedAt: z.string().datetime({ offset: true }),
    submittedAt: z.string().datetime({ offset: true }),
    locale: z.enum(["fa", "en"]),
    honeypot: z.string().max(200),
  })
  .superRefine((payload, context) => {
    if (
      payload.availableDocuments.includes("no_documents") &&
      payload.availableDocuments.length > 1
    ) {
      context.addIssue({
        code: "custom",
        path: ["availableDocuments"],
        message: "noDocumentsExclusive",
      });
    }
    if (payload.honeypot.trim().length > 0) {
      context.addIssue({ code: "custom", path: ["honeypot"], message: "spamDetected" });
    }
  });

export type CaseIntakeFormValues = z.input<typeof caseIntakeFormSchema>;
export type CaseIntakePayload = z.infer<typeof caseIntakeSchema>;
