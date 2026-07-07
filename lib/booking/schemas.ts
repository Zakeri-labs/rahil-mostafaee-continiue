import { z } from "zod";

export const slotsInputSchema = z.object({
  serviceId: z.string().uuid(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const createBookingCheckoutSchema = z.object({
  serviceId: z.string().uuid(),
  startAt: z.string().datetime(),
  guestName: z.string().min(1).max(120).optional(),
  guestEmail: z.string().email().max(200).optional(),
  guestPhone: z.string().min(4).max(40).optional(),
  notes: z.string().max(2000).optional(),
  language: z.enum(["en", "fa"]).default("en"),
  returnUrl: z.string().url(),
  environment: z.enum(["sandbox", "live"]),
});

export const confirmBookingSchema = z.object({
  sessionId: z.string().min(1),
  environment: z.enum(["sandbox", "live"]),
});
