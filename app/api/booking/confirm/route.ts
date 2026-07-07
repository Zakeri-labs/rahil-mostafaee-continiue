import { NextResponse } from "next/server";
import { confirmBookingSchema } from "@/lib/booking/schemas";
import { createStripeClient } from "@/lib/stripe/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = confirmBookingSchema.parse(await request.json());
    const stripe = createStripeClient(input.environment);
    const session = await stripe.checkout.sessions.retrieve(input.sessionId);
    return NextResponse.json({
      paid: session.payment_status === "paid",
      status: session.payment_status,
    });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Could not confirm checkout";
    return new Response(message, { status: 400 });
  }
}
