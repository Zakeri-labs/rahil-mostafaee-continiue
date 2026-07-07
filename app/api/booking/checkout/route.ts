import { NextResponse } from "next/server";
import { getDaySlots } from "@/lib/booking/availability";
import { getServiceById } from "@/lib/booking/catalog";
import { createBookingCheckoutSchema } from "@/lib/booking/schemas";
import { createStripeClient } from "@/lib/stripe/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = createBookingCheckoutSchema.parse(await request.json());
    const service = getServiceById(input.serviceId);
    if (!service) return new Response("Service not found", { status: 404 });

    const selectedDate = input.startAt.slice(0, 10);
    const validSlot = getDaySlots({ serviceId: input.serviceId, date: selectedDate }).some(
      (slot) => slot.start === input.startAt,
    );
    if (!validSlot) return new Response("This time slot is not available.", { status: 409 });

    const stripe = createStripeClient(input.environment);
    const prices = await stripe.prices.list({ lookup_keys: [service.price_id] });
    const stripePrice = prices.data[0];
    if (!stripePrice) return new Response("Price not found", { status: 404 });

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      mode: "payment",
      ui_mode: "embedded_page",
      return_url: `${input.returnUrl}?session_id={CHECKOUT_SESSION_ID}`,
      customer_email: input.guestEmail,
      metadata: {
        serviceId: service.id,
        serviceSlug: service.slug,
        serviceName: service.name_en,
        startAt: input.startAt,
        language: input.language,
        guestName: input.guestName ?? "",
        guestEmail: input.guestEmail ?? "",
        guestPhone: input.guestPhone ?? "",
        notes: input.notes ?? "",
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : "Could not start checkout";
    return new Response(message, { status: 400 });
  }
}
