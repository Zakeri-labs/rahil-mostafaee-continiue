import { z } from "zod";

const normalizePhone = (raw: string) => raw.replace(/[^\d+]/g, "");

export const SUMMARY_MIN_LENGTH = 20;
export const SUMMARY_MAX_LENGTH = 1000;

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, { message: "tooShort" }).max(120, { message: "tooLong" }),

  whatsappNumber: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .transform(normalizePhone)
    .pipe(z.string().regex(/^\+?\d{8,15}$/, { message: "invalidPhone" })),

  email: z
    .union([
      z.literal(""),
      z.string().trim().max(200, { message: "tooLong" }).email({ message: "invalidEmail" }),
    ])
    .optional(),

  matterType: z.string().trim().min(1, { message: "required" }).max(120, { message: "tooLong" }),

  approximateAmount: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .max(120, { message: "tooLong" }),

  counterpartyType: z.enum(["person", "company", "unknown"]),

  counterpartyLocation: z
    .string()
    .trim()
    .min(1, { message: "required" })
    .max(120, { message: "tooLong" }),

  urgency: z.string().trim().min(1, { message: "required" }).max(120, { message: "tooLong" }),

  availableDocuments: z.array(z.string()).min(1, { message: "required" }),

  lastContact: z.string().trim().max(160, { message: "tooLong" }).optional(),

  assetTransferOrEvidenceRisk: z.enum(["yes", "no", "unknown"]),

  summary: z
    .string()
    .trim()
    .min(SUMMARY_MIN_LENGTH, { message: "tooShort" })
    .max(SUMMARY_MAX_LENGTH, { message: "tooLong" }),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const step1Fields: (keyof LeadFormValues)[] = [
  "fullName",
  "whatsappNumber",
  "email",
  "matterType",
  "approximateAmount",
  "counterpartyType",
  "counterpartyLocation",
];

export const step2Fields: (keyof LeadFormValues)[] = [
  "urgency",
  "availableDocuments",
  "lastContact",
  "assetTransferOrEvidenceRisk",
  "summary",
];
