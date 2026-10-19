import { z } from "zod";
import { isDateString } from "@/lib/consultation/rules";

/** Digits only, so "+971 50-123 4567" and "00971501234567" both validate. */
function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export const consultationBookingSchema = z.object({
  date: z.string().refine(isDateString, "INVALID_DATE"),
  name: z.string().trim().min(2, "NAME_REQUIRED").max(120, "NAME_TOO_LONG"),
  phone: z
    .string()
    .trim()
    .max(32, "PHONE_INVALID")
    .regex(/^\+?[\d\s()-]+$/, "PHONE_INVALID")
    .refine((value) => {
      const digits = phoneDigits(value).length;
      return digits >= 8 && digits <= 15;
    }, "PHONE_INVALID"),
  topic: z.string().trim().min(3, "TOPIC_REQUIRED").max(1000, "TOPIC_TOO_LONG"),
  locale: z.enum(["fa", "en"]),
  // Bots fill every field; people never see this one.
  website: z.string().max(0, "SPAM").optional().default(""),
  formStartedAt: z.string().datetime(),
});

export type ConsultationBookingInput = z.infer<typeof consultationBookingSchema>;

export const availabilityQuerySchema = z.object({
  from: z.string().refine(isDateString),
  to: z.string().refine(isDateString),
});

export type AvailabilityResponse = {
  capacity: number;
  /** Bookings per date, only for dates that have at least one. */
  counts: Record<string, number>;
};

export type BookingErrorCode =
  | "VALIDATION_ERROR"
  | "DATE_UNAVAILABLE"
  | "FULL"
  | "SPAM_REJECTED"
  | "CONFIGURATION_ERROR"
  | "UPSTREAM_ERROR";

export type BookingResponse =
  | { success: true; row: number }
  | { success: false; code: BookingErrorCode; fieldErrors?: Record<string, string> };
