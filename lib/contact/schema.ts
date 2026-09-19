import { z } from "zod";

export const contactMatterValues = [
  "commercial_dispute_uae",
  "debt_recovery_unpaid_invoice",
  "asset_recovery_lost_funds",
  "fraud_suspicious_investment",
  "partner_shareholder_dispute",
  "cross_border_contract_corporate",
  "other_commercial_financial",
] as const;

export const contactUrgencyValues = [
  "urgent_asset_transfer",
  "urgent_counterparty_unresponsive",
  "action_needed_soon",
  "initial_assessment",
  "unclear",
] as const;

export const contactLocaleValues = ["en", "fa"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return raw.trim().startsWith("+") ? `+${digits}` : digits;
}

const contactFormShape = {
  name: z.string().trim().min(2, { message: "nameTooShort" }).max(120, { message: "nameTooLong" }),
  lang: z.string().trim().max(80, { message: "languageTooLong" }),
  email: z
    .string()
    .trim()
    .max(200, { message: "emailTooLong" })
    .refine((value) => value === "" || emailPattern.test(value), { message: "invalidEmail" }),
  phone: z
    .string()
    .trim()
    .max(40, { message: "phoneTooLong" })
    .transform(normalizePhone)
    .refine((value) => value === "" || /^\+?\d{8,15}$/.test(value), {
      message: "invalidPhone",
    }),
  matter: z.enum(contactMatterValues, { message: "required" }),
  urgency: z.enum(contactUrgencyValues, { message: "required" }),
  amount: z.string().trim().max(120, { message: "amountTooLong" }),
  counterparty_location: z.string().trim().max(160, { message: "locationTooLong" }),
  documents: z.string().trim().max(500, { message: "documentsTooLong" }),
  brief: z
    .string()
    .trim()
    .min(30, { message: "briefTooShort" })
    .max(2000, { message: "briefTooLong" }),
};

function requireContactMethod(payload: { email: string; phone: string }, context: z.RefinementCtx) {
  if (!payload.email && !payload.phone) {
    context.addIssue({ code: "custom", path: ["contact"], message: "contactMethodRequired" });
  }
}

export const contactFormSchema = z.object(contactFormShape).superRefine(requireContactMethod);

export const contactSubmissionSchema = z
  .object({
    ...contactFormShape,
    locale: z.enum(contactLocaleValues, { message: "invalidLocale" }),
    formStartedAt: z.string().datetime({ offset: true }),
    submittedAt: z.string().datetime({ offset: true }),
    honeypot: z.string().max(200),
  })
  .superRefine((payload, context) => {
    requireContactMethod(payload, context);
    if (payload.honeypot.trim().length > 0) {
      context.addIssue({ code: "custom", path: ["honeypot"], message: "spamDetected" });
    }
  });

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactPayload = z.infer<typeof contactSubmissionSchema>;
