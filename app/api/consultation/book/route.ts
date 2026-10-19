import { NextResponse } from "next/server";
import type { ZodError } from "zod";
import { isBookableDate } from "@/lib/consultation/rules";
import {
  consultationBookingSchema,
  type BookingErrorCode,
  type BookingResponse,
} from "@/lib/consultation/schema";
import { appendBooking, ConsultationConfigurationError } from "@/lib/consultation/sheet";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;
const MIN_FORM_DURATION_MS = 1500;

function errorResponse(
  code: BookingErrorCode,
  status: number,
  fieldErrors?: Record<string, string>,
) {
  const body: BookingResponse = { success: false, code, ...(fieldErrors ? { fieldErrors } : {}) };
  return NextResponse.json(body, { status });
}

function getFieldErrors(error: ZodError): Record<string, string> {
  return error.issues.reduce<Record<string, string>>((fieldErrors, issue) => {
    const field = issue.path[0];
    if (typeof field === "string" && !fieldErrors[field]) fieldErrors[field] = issue.message;
    return fieldErrors;
  }, {});
}

export async function POST(request: Request) {
  const rawBody = await request.text().catch(() => "");
  if (!rawBody || Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return errorResponse("VALIDATION_ERROR", 400);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return errorResponse("VALIDATION_ERROR", 400);
  }

  const parsed = consultationBookingSchema.safeParse(body);
  if (!parsed.success) {
    if (parsed.error.issues.some((issue) => issue.path[0] === "website")) {
      return errorResponse("SPAM_REJECTED", 400);
    }
    return errorResponse("VALIDATION_ERROR", 422, getFieldErrors(parsed.error));
  }

  const input = parsed.data;
  const startedAt = Date.parse(input.formStartedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_DURATION_MS) {
    return errorResponse("SPAM_REJECTED", 400);
  }
  if (!isBookableDate(input.date)) return errorResponse("DATE_UNAVAILABLE", 409);

  try {
    const result = await appendBooking({
      date: input.date,
      name: input.name,
      phone: input.phone,
      topic: input.topic,
      lang: input.locale,
    });
    if (!result.ok) return errorResponse("FULL", 409);
    const response: BookingResponse = { success: true, row: result.row };
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof ConsultationConfigurationError) {
      console.error("[consultation] configuration error", error.message);
      return errorResponse("CONFIGURATION_ERROR", 503);
    }
    console.error("[consultation] booking failed", error);
    return errorResponse("UPSTREAM_ERROR", 502);
  }
}
