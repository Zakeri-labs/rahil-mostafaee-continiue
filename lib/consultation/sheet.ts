import { DAILY_CAPACITY } from "@/lib/consultation/rules";

/**
 * Server-side client for the Google Apps Script web app that owns the bookings
 * sheet (see docs/consultation-booking/). The script enforces daily capacity
 * under a lock and emails the new booking, so this module only relays.
 */

export class ConsultationConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConsultationConfigurationError";
  }
}

export class ConsultationUpstreamError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConsultationUpstreamError";
  }
}

export type NewBooking = {
  date: string;
  name: string;
  phone: string;
  topic: string;
  lang: "fa" | "en";
};

export type AppendResult = { ok: true; row: number } | { ok: false; code: "FULL" };

const REQUEST_TIMEOUT_MS = 20_000;

function isDevMode() {
  return process.env.CONSULTATION_DEV_MODE === "true";
}

function readConfig() {
  const url = process.env.CONSULTATION_SHEET_URL;
  const secret = process.env.CONSULTATION_SHEET_SECRET;
  if (!url || !secret || !/^https:\/\/script\.google\.com\//.test(url)) {
    throw new ConsultationConfigurationError("Consultation sheet configuration is incomplete");
  }
  return { url, secret };
}

async function readScriptJson(response: Response): Promise<Record<string, unknown>> {
  if (!response.ok) throw new ConsultationUpstreamError(`Sheet responded ${response.status}`);
  try {
    return (await response.json()) as Record<string, unknown>;
  } catch {
    // Apps Script answers with an HTML page when the deployment is not public.
    throw new ConsultationUpstreamError("Sheet response was not JSON");
  }
}

// Local development only: an in-memory stand-in for the sheet. Kept on globalThis because
// each route handler is bundled separately and would otherwise get its own copy.
const devStore = globalThis as typeof globalThis & { __consultationDevBookings?: NewBooking[] };
const devBookings = (devStore.__consultationDevBookings ??= []);

export async function getBookingCounts(from: string, to: string): Promise<Record<string, number>> {
  if (isDevMode()) {
    const counts: Record<string, number> = {};
    for (const booking of devBookings) {
      if (booking.date >= from && booking.date <= to) {
        counts[booking.date] = (counts[booking.date] ?? 0) + 1;
      }
    }
    return counts;
  }

  const { url, secret } = readConfig();
  const query = new URLSearchParams({ action: "availability", from, to, token: secret });
  const response = await fetch(`${url}?${query}`, {
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  const data = await readScriptJson(response);
  if (data.ok !== true || typeof data.counts !== "object" || data.counts === null) {
    throw new ConsultationUpstreamError(`Sheet availability failed: ${String(data.code)}`);
  }
  return data.counts as Record<string, number>;
}

export async function appendBooking(booking: NewBooking): Promise<AppendResult> {
  if (isDevMode()) {
    const booked = devBookings.filter((item) => item.date === booking.date).length;
    if (booked >= DAILY_CAPACITY) return { ok: false, code: "FULL" };
    devBookings.push(booking);
    console.info("[consultation] dev mode booking", { date: booking.date, lang: booking.lang });
    return { ok: true, row: devBookings.length };
  }

  const { url, secret } = readConfig();
  // text/plain avoids a CORS preflight-style rejection by Apps Script; the body is still JSON.
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ ...booking, token: secret }),
    cache: "no-store",
    redirect: "follow",
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  const data = await readScriptJson(response);
  if (data.ok === true && typeof data.row === "number") return { ok: true, row: data.row };
  if (data.code === "FULL") return { ok: false, code: "FULL" };
  throw new ConsultationUpstreamError(`Sheet booking failed: ${String(data.code)}`);
}
