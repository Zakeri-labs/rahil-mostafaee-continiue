import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { ContactEmailConfigurationError, sendContactEmail } from "@/lib/contact/email";
import { contactSubmissionSchema, type ContactPayload } from "@/lib/contact/schema";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 32 * 1024;
const MIN_FORM_DURATION_MS = 1500;

function errorResponse(code: string, status: number, fieldErrors?: Record<string, string>) {
  return NextResponse.json(
    { success: false, code, ...(fieldErrors ? { fieldErrors } : {}) },
    { status },
  );
}

function getFieldErrors(error: ZodError): Record<string, string> {
  return error.issues.reduce<Record<string, string>>((fieldErrors, issue) => {
    const field = issue.path[0];
    if (typeof field === "string" && !fieldErrors[field]) fieldErrors[field] = issue.message;
    return fieldErrors;
  }, {});
}

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.split(";", 1)[0] !== "application/json") {
    return errorResponse("UNSUPPORTED_MEDIA_TYPE", 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) return errorResponse("PAYLOAD_TOO_LARGE", 413);

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return errorResponse("INVALID_REQUEST", 400);
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return errorResponse("PAYLOAD_TOO_LARGE", 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return errorResponse("INVALID_JSON", 400);
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    if (parsed.error.issues.some((issue) => issue.path[0] === "honeypot")) {
      return errorResponse("SPAM_REJECTED", 400);
    }
    return errorResponse("VALIDATION_ERROR", 422, getFieldErrors(parsed.error));
  }

  const payload: ContactPayload = parsed.data;
  const startedAt = Date.parse(payload.formStartedAt);
  const submittedAt = Date.parse(payload.submittedAt);
  if (
    !Number.isFinite(startedAt) ||
    !Number.isFinite(submittedAt) ||
    submittedAt - startedAt < MIN_FORM_DURATION_MS
  ) {
    return errorResponse("SPAM_REJECTED", 400);
  }

  try {
    const result = await sendContactEmail(payload);
    return NextResponse.json({
      success: true,
      message: result.devMode ? "CONTACT_DEV_ACCEPTED" : "CONTACT_EMAIL_SENT",
    });
  } catch (error) {
    if (error instanceof ContactEmailConfigurationError) {
      console.error("[contact] configuration error", error.message);
      return errorResponse("CONFIGURATION_ERROR", 503);
    }
    console.error("[contact] email delivery failed", error);
    return errorResponse("EMAIL_SEND_FAILED", 502);
  }
}
