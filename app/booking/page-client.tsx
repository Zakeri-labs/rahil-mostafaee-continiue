"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, Clock, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getStripeEnvironment } from "@/lib/stripe/client";
import { createCheckout, fetchServices, fetchSlots } from "@/lib/booking/api-client";
import type { BookingService } from "@/lib/booking/catalog";
import type { DaySlot } from "@/lib/booking/availability";
import { StripeEmbeddedCheckoutMount } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { Reveal } from "@/components/site/Reveal";

type Service = BookingService;

function todayStr() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function BookingPage() {
  const { t, lang, dir } = useI18n();
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service") ?? undefined;

  const [services, setServices] = useState<Service[]>([]);
  const [slots, setSlots] = useState<DaySlot[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
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
    fetchServices()
      .then(setServices)
      .catch((e) => setError(e instanceof Error ? e.message : "Could not load services"));
  }, []);

  useEffect(() => {
    if (!serviceId && serviceSlug && services.length) {
      const match = services.find((s) => s.slug === serviceSlug);
      if (match) setServiceId(match.id);
    }
  }, [serviceSlug, services, serviceId]);

  useEffect(() => {
    if (!serviceId) {
      setSlots([]);
      return;
    }

    setSlotsLoading(true);
    fetchSlots({ serviceId, date })
      .then(setSlots)
      .catch((e) => {
        setSlots([]);
        setError(e instanceof Error ? e.message : "Could not load time slots");
      })
      .finally(() => setSlotsLoading(false));
  }, [serviceId, date]);

  const selectedService: Service | undefined = useMemo(
    () => services.find((s) => s.id === serviceId),
    [services, serviceId],
  );

  const onPay = async () => {
    if (!serviceId || !slot) return;
    setLoading(true);
    setError(null);
    try {
      const res = await createCheckout({
        serviceId,
        startAt: slot,
        guestName: name || undefined,
        guestEmail: email || undefined,
        guestPhone: phone || undefined,
        notes: notes || undefined,
        language: lang,
        returnUrl: `${window.location.origin}/booking-confirmation`,
        environment: getStripeEnvironment(),
      });
      setClientSecret(res.clientSecret);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Could not start checkout");
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

  const formatAed = (aed: number) => aed.toLocaleString(lang === "fa" ? "fa-IR" : "en-US");

  const featuresFor = (slug: string): string[] => {
    const map: Record<string, string[]> = {
      "standard-30": [
        t("home.pkg.feat.confidential"),
        t("home.pkg.feat.followup"),
        t("home.pkg.feat.summary"),
      ],
      "strategic-60": [
        t("home.pkg.feat.deepdive"),
        t("home.pkg.feat.roadmap"),
        t("home.pkg.feat.priority"),
        t("home.pkg.feat.summary"),
      ],
      "emergency-24h": [
        t("home.pkg.feat.sameday"),
        t("home.pkg.feat.directline"),
        t("home.pkg.feat.priority"),
      ],
      international: [
        t("home.pkg.feat.multijuris"),
        t("home.pkg.feat.intake"),
        t("home.pkg.feat.roadmap"),
        t("home.pkg.feat.summary"),
      ],
    };
    return map[slug] ?? [];
  };

  if (clientSecret) {
    return (
      <>
        <PaymentTestModeBanner />
        <div className="max-w-3xl mx-auto px-6 py-16" dir={dir}>
          <h2 className="font-display text-xl text-ivory mb-6">{t("book.step.pay")}</h2>
          <StripeEmbeddedCheckoutMount clientSecret={clientSecret} />
        </div>
      </>
    );
  }

  return (
    <>
      <PaymentTestModeBanner />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16" dir={dir}>
        <div className="text-center mb-8">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold">
            {t("book.brand_tag")}
          </div>
          <p className="mt-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            01 — {t("book.step.service")}
          </p>
        </div>

        <section className="relative mb-16 border-t border-gold/10 py-12 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="relative">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
              <div className="inline-flex items-center gap-3 mx-auto">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                  {t("home.pkg.kicker")}
                </span>
                <span className="h-px w-12 bg-gold" />
              </div>
              <h1 className="font-display text-3xl lg:text-4xl text-ivory tracking-tight">
                {t("home.pkg.h2.a")}{" "}
                <span className="italic gradient-gold-text">{t("home.pkg.h2.b")}</span>
              </h1>
              <p className="text-muted-foreground">{t("home.pkg.body")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => {
                const name = lang === "fa" ? s.name_fa : s.name_en;
                const desc = lang === "fa" ? s.description_fa : s.description_en;
                const featured = s.is_emergency || i === 1;
                const active = serviceId === s.id;
                return (
                  <Reveal key={s.id} delay={i * 100}>
                    <button
                      type="button"
                      onClick={() => {
                        setServiceId(s.id);
                        setSlot(null);
                      }}
                      className={`relative h-full w-full flex flex-col p-8 text-left cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        active ? "ring-2 ring-gold shadow-glow z-1" : ""
                      } ${featured ? "glass-strong border border-gold/40 shadow-luxe" : "glass hover:border-gold/30"}`}
                    >
                      {featured && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-onyx text-[9px] tracking-[0.35em] uppercase font-medium whitespace-nowrap pointer-events-none">
                          {s.is_emergency ? t("home.pkg.urgent") : t("home.pkg.popular")}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gold mb-4">
                        {s.is_emergency ? (
                          <Zap className="w-4 h-4 shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 shrink-0" />
                        )}
                        <span className="text-[10px] tracking-[0.3em] uppercase">
                          {lang === "fa"
                            ? `${s.duration_minutes.toLocaleString("fa-IR")} ${t("home.pkg.min")}`
                            : `${s.duration_minutes} ${t("home.pkg.min")}`}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl text-ivory leading-tight min-h-14">
                        {name}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed min-h-14">
                        {desc}
                      </p>
                      <div className="my-6 gold-divider" />
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-4xl text-gold">
                          {formatAed(s.price_aed)}
                        </span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                          {t("home.pkg.aed")}
                        </span>
                      </div>
                      <ul className="mt-6 space-y-2.5 flex-1">
                        {featuresFor(s.slug).map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`mt-8 group inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 transition-all pointer-events-none ${
                          featured
                            ? "bg-gold text-onyx shadow-glow"
                            : "border border-gold/40 text-gold"
                        } ${active ? "opacity-100" : ""}`}
                      >
                        <span className="text-xs tracking-[0.3em] uppercase font-medium">
                          {active ? t("book.selected") : t("home.pkg.reserve")}
                        </span>
                        {active ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">{t("book.subtitle")}</p>
            </div>
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
              onChange={(e) => {
                setDate(e.target.value);
                setSlot(null);
              }}
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
                {selectedService &&
                  (lang === "fa" ? selectedService.name_fa : selectedService.name_en)}
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
                })}{" "}
                · GST
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
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                {t("book.guest")}
              </p>
            </aside>
          </section>
        )}
      </div>
    </>
  );
}

export default BookingPage;
