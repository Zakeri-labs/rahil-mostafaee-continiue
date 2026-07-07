import { NextResponse } from "next/server";
import { getDaySlots } from "@/lib/booking/availability";
import { slotsInputSchema } from "@/lib/booking/schemas";

export async function POST(request: Request) {
  try {
    const input = slotsInputSchema.parse(await request.json());
    return NextResponse.json(getDaySlots(input));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request";
    return new Response(message, { status: 400 });
  }
}
