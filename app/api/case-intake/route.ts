import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { caseIntakeSchema, type CaseIntakePayload } from "@/lib/case-intake/schema";
import { CaseIntakeConfigurationError, sendCaseIntakeEmail } from "@/lib/case-intake/email";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 32 * 1024;
const MIN_FORM_DURATION_MS = 1500;

function validationResponse(fieldErrors: Record<string, string>, status = 422) {
  return NextResponse.json({ success: false, code: "VALIDATION_ERROR", fieldErrors }, { status });
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
    return validationResponse({ form: "jsonOnly" }, 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return validationResponse({ form: "payloadTooLarge" }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ success: false, code: "VALIDATION_ERROR" }, { status: 400 });
  }

  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return validationResponse({ form: "payloadTooLarge" }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return validationResponse({ form: "invalidJson" }, 400);
  }

  const parsed = caseIntakeSchema.safeParse(body);
  if (!parsed.success) return validationResponse(getFieldErrors(parsed.error));

  const payload: CaseIntakePayload = parsed.data;
  const startedAt = Date.parse(payload.formStartedAt);
  const submittedAt = Date.parse(payload.submittedAt);
  if (
    !Number.isFinite(startedAt) ||
    !Number.isFinite(submittedAt) ||
    submittedAt - startedAt < MIN_FORM_DURATION_MS
  ) {
    return validationResponse({ formStartedAt: "submissionTooFast" }, 422);
  }

  try {
    const result = await sendCaseIntakeEmail(payload);
    return NextResponse.json({
      success: true,
      message: result.devMode ? "CASE_INTAKE_DEV_ACCEPTED" : "CASE_INTAKE_SENT",
      devMode: result.devMode,
    });
  } catch (error) {
    if (error instanceof CaseIntakeConfigurationError) {
      console.error("[case-intake] configuration error", error.message);
      return NextResponse.json({ success: false, code: "CONFIGURATION_ERROR" }, { status: 503 });
    }
    console.error("[case-intake] email delivery failed", error);
    return NextResponse.json({ success: false, code: "EMAIL_SEND_FAILED" }, { status: 502 });
  }
}
