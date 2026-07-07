import { NextResponse } from "next/server";
import { type StripeEnv, verifyWebhook } from "@/lib/stripe/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rawEnv = new URL(request.url).searchParams.get("env");
  if (rawEnv !== "sandbox" && rawEnv !== "live") {
    return NextResponse.json({ received: true, ignored: "invalid env" });
  }

  try {
    await verifyWebhook(request, rawEnv as StripeEnv);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response("Webhook error", { status: 400 });
  }
}
