import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { createStripeClient, type StripeEnv } from "@/lib/stripe.server";
import { z } from "zod";

const ServicesInput = z.object({}).default({});
export const listServices = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => ServicesInput.parse(d ?? {}))
  .handler(async () => {
    const { data, error } = await supabaseAdmin
      .from("services")
      .select("*")
      .eq("active", true)
      .order("sort", { ascending: true });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

const SlotsInput = z.object({
  serviceId: z.string().uuid(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
export const getDaySlots = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => SlotsInput.parse(d))
  .handler(async ({ data }) => {
    const [{ data: svc }, { data: rules }] = await Promise.all([
      supabaseAdmin.from("services").select("duration_minutes").eq("id", data.serviceId).single(),
      supabaseAdmin.from("availability_rules").select("*").eq("active", true),
    ]);
    if (!svc) throw new Error("Service not found");
    const duration: number = svc.duration_minutes;

    // Build the day in Dubai time (UTC+4, no DST)
    const dayStartUTC = new Date(`${data.date}T00:00:00.000Z`);
    // Dubai is UTC+4 → midnight Dubai = previous day 20:00 UTC
    const dubaiOffsetMin = 4 * 60;
    const dayStartDubai = new Date(dayStartUTC.getTime() - dubaiOffsetMin * 60_000);
    const dayEndDubai = new Date(dayStartDubai.getTime() + 24 * 60 * 60_000);

    const dow = (dayStartUTC.getUTCDay()); // 0=Sun..6=Sat — matches our seed data

    const dayRules = (rules ?? []).filter((r) => r.day_of_week === dow);
    if (dayRules.length === 0) return [];

    // Fetch busy slots in this window
    const { data: busy, error: busyErr } = await supabaseAdmin.rpc("get_busy_slots", {
      _from: dayStartDubai.toISOString(),
      _to: dayEndDubai.toISOString(),
    });
    if (busyErr) throw new Error(busyErr.message);
    const busySlots = (busy ?? []) as { start_at: string; end_at: string }[];

    const slots: { start: string; end: string }[] = [];
    const stepMin = 30;
    const now = Date.now();

    for (const rule of dayRules) {
      for (let m = rule.start_minute; m + duration <= rule.end_minute; m += stepMin) {
        const start = new Date(dayStartDubai.getTime() + m * 60_000);
        const end = new Date(start.getTime() + duration * 60_000);
        if (start.getTime() < now + 60 * 60_000) continue; // 1h notice
        const overlap = busySlots.some(
          (b) => new Date(b.start_at).getTime() < end.getTime() && new Date(b.end_at).getTime() > start.getTime()
        );
        if (!overlap) slots.push({ start: start.toISOString(), end: end.toISOString() });
      }
    }
    return slots;
  });

const CreateBookingInput = z.object({
  serviceId: z.string().uuid(),
  startAt: z.string().datetime(),
  guestName: z.string().min(1).max(120).optional(),
  guestEmail: z.string().email().max(200).optional(),
  guestPhone: z.string().min(4).max(40).optional(),
  notes: z.string().max(2000).optional(),
  userId: z.string().uuid().optional(),
  language: z.enum(["en", "fa"]).default("en"),
  returnUrl: z.string().url(),
  environment: z.enum(["sandbox", "live"]),
});

async function resolveOrCreateCustomer(
  stripe: ReturnType<typeof createStripeClient>,
  options: { email?: string; userId?: string; name?: string }
): Promise<string> {
  if (options.userId && !/^[a-zA-Z0-9_-]+$/.test(options.userId)) throw new Error("Invalid userId");
  if (options.userId) {
    const found = await stripe.customers.search({ query: `metadata['userId']:'${options.userId}'`, limit: 1 });
    if (found.data.length) return found.data[0].id;
  }
  if (options.email) {
    const existing = await stripe.customers.list({ email: options.email, limit: 1 });
    if (existing.data.length) {
      const c = existing.data[0];
      if (options.userId && c.metadata?.userId !== options.userId) {
        await stripe.customers.update(c.id, { metadata: { ...c.metadata, userId: options.userId } });
      }
      return c.id;
    }
  }
  const created = await stripe.customers.create({
    ...(options.email && { email: options.email }),
    ...(options.name && { name: options.name }),
    ...(options.userId && { metadata: { userId: options.userId } }),
  });
  return created.id;
}

export const createBookingCheckout = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => CreateBookingInput.parse(d))
  .handler(async ({ data }) => {
    // Load service
    const { data: svc, error: svcErr } = await supabaseAdmin
      .from("services")
      .select("*")
      .eq("id", data.serviceId)
      .single();
    if (svcErr || !svc) throw new Error("Service not found");

    const start = new Date(data.startAt);
    const end = new Date(start.getTime() + svc.duration_minutes * 60_000);

    // Check overlap server-side
    const { data: busy } = await supabaseAdmin.rpc("get_busy_slots", {
      _from: start.toISOString(),
      _to: end.toISOString(),
    });
    if ((busy ?? []).length > 0) throw new Error("This time slot is no longer available.");

    // Resolve email/name
    let email = data.guestEmail;
    let name = data.guestName;
    if (data.userId) {
      const { data: u } = await supabaseAdmin.auth.admin.getUserById(data.userId);
      email = email || u.user?.email || undefined;
      name = name || (u.user?.user_metadata?.full_name as string) || undefined;
    }

    // Create booking row (pending/unpaid)
    const { data: booking, error: bErr } = await supabaseAdmin
      .from("bookings")
      .insert({
        user_id: data.userId ?? null,
        service_id: svc.id,
        start_at: start.toISOString(),
        end_at: end.toISOString(),
        guest_name: name ?? null,
        guest_email: email ?? null,
        guest_phone: data.guestPhone ?? null,
        notes: data.notes ?? null,
        amount_aed: svc.price_aed,
        language: data.language,
      })
      .select()
      .single();
    if (bErr || !booking) throw new Error(bErr?.message ?? "Could not create booking");

    // Create Stripe checkout session
    const stripe = createStripeClient(data.environment as StripeEnv);
    const prices = await stripe.prices.list({ lookup_keys: [svc.price_id] });
    if (!prices.data.length) throw new Error("Price not found");
    const stripePrice = prices.data[0];

    const customerId = email || data.userId
      ? await resolveOrCreateCustomer(stripe, { email, userId: data.userId, name })
      : undefined;

    const returnUrl = `${data.returnUrl}?booking=${booking.id}&session_id={CHECKOUT_SESSION_ID}`;

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      mode: "payment",
      ui_mode: "embedded_page",
      return_url: returnUrl,
      ...(customerId && { customer: customerId }),
      metadata: { bookingId: booking.id, ...(data.userId && { userId: data.userId }) },
    });

    await supabaseAdmin
      .from("bookings")
      .update({ stripe_session_id: session.id })
      .eq("id", booking.id);

    return { clientSecret: session.client_secret, bookingId: booking.id };
  });

const ConfirmInput = z.object({ bookingId: z.string().uuid(), sessionId: z.string().min(1), environment: z.enum(["sandbox", "live"]) });
export const confirmBooking = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => ConfirmInput.parse(d))
  .handler(async ({ data }) => {
    const stripe = createStripeClient(data.environment as StripeEnv);
    const session = await stripe.checkout.sessions.retrieve(data.sessionId);
    const paid = session.payment_status === "paid";
    if (paid) {
      await supabaseAdmin
        .from("bookings")
        .update({ payment_status: "paid", status: "confirmed" })
        .eq("id", data.bookingId);
    }
    return { paid, status: session.payment_status };
  });
