import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { type StripeEnv, verifyWebhook } from "@/lib/stripe.server";

async function handleEvent(evt: { type: string; data: { object: any } }) {
  const obj = evt.data.object;
  if (evt.type === "checkout.session.completed" || evt.type === "checkout.session.async_payment_succeeded") {
    const bookingId = obj.metadata?.bookingId;
    if (bookingId && obj.payment_status === "paid") {
      await supabaseAdmin
        .from("bookings")
        .update({ payment_status: "paid", status: "confirmed", updated_at: new Date().toISOString() })
        .eq("id", bookingId);
    }
  } else if (evt.type === "checkout.session.expired" || evt.type === "checkout.session.async_payment_failed") {
    const bookingId = obj.metadata?.bookingId;
    if (bookingId) {
      await supabaseAdmin
        .from("bookings")
        .update({ status: "cancelled", updated_at: new Date().toISOString() })
        .eq("id", bookingId);
    }
  }
}

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawEnv = new URL(request.url).searchParams.get("env");
        if (rawEnv !== "sandbox" && rawEnv !== "live") {
          return Response.json({ received: true, ignored: "invalid env" });
        }
        const env: StripeEnv = rawEnv;
        try {
          const evt = await verifyWebhook(request, env);
          await handleEvent(evt);
          return Response.json({ received: true });
        } catch (e) {
          console.error("Webhook error:", e);
          return new Response("Webhook error", { status: 400 });
        }
      },
    },
  },
});
