import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listServices, getDaySlots, createBookingCheckout } from "@/lib/booking.functions";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/use-auth";
import { getStripeEnvironment } from "@/lib/stripe";
import { StripeEmbeddedCheckoutMount } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title: "Book a Consultation — Rahil Mostafaee" }] }),
  component: BookingPage,
});

type Service = Awaited<ReturnType<typeof listServices>>[number];

function todayStr() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function BookingPage() {
  const { t, lang, dir } = useI18n();
  const { user } = useAuth();
  const fetchServices = useServerFn(listServices);
  const fetchSlots = useServerFn(getDaySlots);
  const createCheckout = useServerFn(createBookingCheckout);

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetchServices({ data: {} }),
  });

  const [serviceId, setServiceId] = useState<string | null>(null);
  const [date, setDate] = useState(todayStr());
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user]);

  const { data: slots = [], isFetching: slotsLoading } = useQuery({
    queryKey: ["slots", serviceId, date],
    queryFn: () => fetchSlots({ data: { serviceId: serviceId!, date } }),
    enabled: !!serviceId,
  });

  const selectedService: Service | undefined = useMemo(
    () => services.find((s) => s.id === serviceId),
    [services, serviceId]
  );

  const onPay = async () => {
    if (!serviceId || !slot) return;
    setLoading(true);
    setError(null);
    try {
      const res = await createCheckout({
        data: {
          serviceId,
          startAt: slot,
          guestName: name || undefined,
          guestEmail: email || undefined,
          guestPhone: phone || undefined,
          notes: notes || undefined,
          userId: user?.id,
          language: lang,
          returnUrl: `${window.location.origin}/booking-confirmation`,
          environment: getStripeEnvironment(),
        },
      });
      setClientSecret(res.clientSecret);
    } catch (e: any) {
      setError(e?.message ?? "Could not start checkout");
    } finally {
      setLoading(false);
    }
  };

  const fmtTime = (iso: string) =>
    new Date(iso).toLocaleTimeString(lang === "fa" ? "fa-IR" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Dubai",
    });

  if (clientSecret) {
    return (
      <>
        <PaymentTestModeBanner />
        <div className="max-w-3xl mx-auto px-6 py-16" dir={dir}>
          <h2 className="font-display text-3xl text-ivory mb-6">{t("book.step.pay")}</h2>
          <StripeEmbeddedCheckoutMount clientSecret={clientSecret} />
        </div>
      </>
    );
  }

  return (
    <>
      <PaymentTestModeBanner />
      <div className="max-w-5xl mx-auto px-6 py-16" dir={dir}>
        <div className="text-center mb-14 reveal">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
            Rahil Mostafaee · Dubai
          </div>
          <h1 className="font-display text-5xl text-ivory">{t("book.title")}</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t("book.subtitle")}</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
            01 — {t("book.step.service")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => {
              const active = serviceId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => { setServiceId(s.id); setSlot(null); }}
                  className={`text-left p-6 rounded-xl border transition-all ${
                    active ? "border-gold bg-gold/5 shadow-glow" : "border-border bg-card/40 hover:border-gold/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-display text-xl text-ivory">
                        {lang === "fa" ? s.name_fa : s.name_en}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {s.duration_minutes} {t("book.duration")}
                        {s.is_emergency && (
                          <span className="ml-2 text-gold">· {t("book.emergency")}</span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {lang === "fa" ? s.description_fa : s.description_en}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-gold font-display text-2xl">
                        {s.price_aed.toLocaleString()}
                      </div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                        {t("book.aed")}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {serviceId && (
          <section className="mb-12">
            <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
              02 — {t("book.step.time")}
            </h2>
            <input
              type="date"
              value={date}
              min={todayStr()}
              onChange={(e) => { setDate(e.target.value); setSlot(null); }}
              className="bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory mb-5"
            />
            {slotsLoading ? (
              <div className="text-muted-foreground text-sm">…</div>
            ) : slots.length === 0 ? (
              <div className="text-sm text-muted-foreground">{t("book.no_slots")}</div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {slots.map((sl) => (
                  <button
                    key={sl.start}
                    onClick={() => setSlot(sl.start)}
                    className={`py-2 text-sm border rounded transition-all ${
                      slot === sl.start
                        ? "border-gold bg-gold text-onyx"
                        : "border-border text-ivory hover:border-gold/40"
                    }`}
                  >
                    {fmtTime(sl.start)}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {serviceId && slot && (
          <section className="mb-12 grid md:grid-cols-[1fr_320px] gap-8">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
                03 — {t("book.step.details")}
              </h2>
              <div className="space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("book.full_name")}
                  className="w-full bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("book.email")}
                  className="w-full bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("book.phone")}
                  className="w-full bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
                />
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t("book.notes")}
                  className="w-full bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
                />
                {error && <div className="text-sm text-destructive">{error}</div>}
              </div>
            </div>
            <aside className="border border-gold/20 rounded-xl p-6 h-fit bg-card/40">
              <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                {t("book.summary")}
              </div>
              <div className="font-display text-xl text-ivory">
                {selectedService && (lang === "fa" ? selectedService.name_fa : selectedService.name_en)}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {selectedService?.duration_minutes} {t("book.duration")}
              </div>
              <div className="mt-4 text-sm text-ivory">
                {new Date(slot).toLocaleString(lang === "fa" ? "fa-IR" : "en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Asia/Dubai",
                })} · GST
              </div>
              <div className="gold-divider my-5" />
              <div className="flex items-end justify-between">
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {t("book.aed")}
                </div>
                <div className="font-display text-3xl text-gold">
                  {selectedService?.price_aed.toLocaleString()}
                </div>
              </div>
              <button
                disabled={loading || !name || !email || !phone}
                onClick={onPay}
                className="mt-6 w-full py-3 text-xs tracking-[0.3em] uppercase bg-gold text-onyx hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? t("book.processing") : t("book.confirm_pay")}
              </button>
              {!user && (
                <p className="mt-3 text-[11px] text-muted-foreground text-center">
                  {t("book.guest")}
                </p>
              )}
            </aside>
          </section>
        )}
      </div>
    </>
  );
}
