import { NextResponse } from "next/server";
import { BOOKING_WINDOW_DAYS, DAILY_CAPACITY } from "@/lib/consultation/rules";
import { availabilityQuerySchema, type AvailabilityResponse } from "@/lib/consultation/schema";
import { ConsultationConfigurationError, getBookingCounts } from "@/lib/consultation/sheet";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_RANGE_DAYS = BOOKING_WINDOW_DAYS + 45;

export async function GET(request: Request) {
  const params = Object.fromEntries(new URL(request.url).searchParams);
  const parsed = availabilityQuerySchema.safeParse(params);
  if (!parsed.success || parsed.data.from > parsed.data.to) {
    return NextResponse.json({ success: false, code: "VALIDATION_ERROR" }, { status: 400 });
  }

  const { from, to } = parsed.data;
  const spanDays = (Date.parse(to) - Date.parse(from)) / 86_400_000;
  if (spanDays > MAX_RANGE_DAYS) {
    return NextResponse.json({ success: false, code: "VALIDATION_ERROR" }, { status: 400 });
  }

  try {
    const counts = await getBookingCounts(from, to);
    const body: AvailabilityResponse = { capacity: DAILY_CAPACITY, counts };
    return NextResponse.json(body, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    if (error instanceof ConsultationConfigurationError) {
      console.error("[consultation] configuration error", error.message);
      return NextResponse.json({ success: false, code: "CONFIGURATION_ERROR" }, { status: 503 });
    }
    console.error("[consultation] availability failed", error);
    return NextResponse.json({ success: false, code: "UPSTREAM_ERROR" }, { status: 502 });
  }
}
