import type { BookingService } from "./catalog";
import type { DaySlot } from "./availability";
import type { StripeEnv } from "@/lib/stripe/client";

async function readJson<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Request failed");
  }
  return response.json() as Promise<T>;
}

export async function fetchServices(): Promise<BookingService[]> {
  return readJson(await fetch("/api/booking/services"));
}

export async function fetchSlots(input: { serviceId: string; date: string }): Promise<DaySlot[]> {
  return readJson(
    await fetch("/api/booking/slots", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    }),
  );
}

export async function createCheckout(input: {
  serviceId: string;
  startAt: string;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  notes?: string;
  language: "en" | "fa";
  returnUrl: string;
  environment: StripeEnv;
}): Promise<{ clientSecret: string | null }> {
  return readJson(
    await fetch("/api/booking/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    }),
  );
}

export async function confirmCheckout(input: {
  sessionId: string;
  environment: StripeEnv;
}): Promise<{ paid: boolean; status: string | null }> {
  return readJson(
    await fetch("/api/booking/confirm", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
    }),
  );
}
