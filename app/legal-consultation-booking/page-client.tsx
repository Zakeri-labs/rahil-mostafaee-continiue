"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Lock,
  MessageCircle,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/booking-hero-scales.webp";
import { useI18n } from "@/lib/i18n";
import {
  ConsultationCalendar,
  monthOf,
  shiftMonth,
  type MonthKey,
} from "@/components/site/booking/ConsultationCalendar";
import { ConsultationForm } from "@/components/site/booking/ConsultationForm";
import { FaqAccordion } from "@/components/site/landing/FaqAccordion";
import {
  addDays,
  DAILY_CAPACITY,
  getBookingRange,
  getDayStatus,
  isFreeConsultationDay,
  parseDate,
} from "@/lib/consultation/rules";
import type { AvailabilityResponse } from "@/lib/consultation/schema";
import { LEADS_WHATSAPP_DISPLAY_NUMBER, LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import { cn } from "@/lib/utils";

type Step = "calendar" | "form" | "done";
type Notice = "FULL" | "DATE_UNAVAILABLE" | null;

const PHONE_HREF = `tel:+${LEADS_WHATSAPP_NUMBER}`;

function ConsultationBookingPage() {
  const { dir } = useI18n();
  return (
    <div dir={dir}>
      <Hero />
      <BookingSection />
      <Faq />
    </div>
  );
}

function Hero() {
  const { t, dir } = useI18n();
  // The photo sits on the side opposite the text and fades into the page towards it.
  const fadeTowardsText = dir === "rtl" ? "to right" : "to left";

  return (
    <section className="relative overflow-hidden pt-12 lg:pt-24">
      <div className="absolute inset-y-0 end-0 w-full lg:w-[56%]" aria-hidden>
        <img
          src={heroImage.src}
          alt=""
          className="h-full w-full object-cover opacity-40 lg:opacity-100"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${fadeTowardsText}, transparent 35%, var(--color-background) 100%)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
        <div className="max-w-[33rem] space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gold">{t("cb.kicker")}</span>
            <span className="h-px w-14 bg-gold" />
          </div>
          <h1 className="font-display text-[2.1rem] leading-[1.45] text-ivory min-[430px]:text-[2.4rem] lg:text-[3.25rem] lg:leading-[1.45]">
            {t("cb.h1")}
          </h1>
          <p className="text-lg text-gold lg:text-[1.35rem]">{t("cb.tagline")}</p>
          <p className="text-base leading-8 text-ivory/90">{t("cb.intro")}</p>
          <p className="text-base leading-8 text-ivory/90">
            {t("cb.urgent.question")}{" "}
            <a
              href={`https://wa.me/${LEADS_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold underline-offset-4 hover:underline"
            >
              {t("cb.urgent.link")}
            </a>{" "}
            {t("cb.urgent.note")}
          </p>
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  const { lang } = useI18n();
  const [range, setRange] = useState<{ first: string; last: string } | null>(null);
  const [month, setMonth] = useState<MonthKey | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("calendar");
  const [notice, setNotice] = useState<Notice>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const autoSelected = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Dates depend on the visitor's clock, so the calendar is built after hydration.
  useEffect(() => {
    const bookingRange = getBookingRange();
    setRange(bookingRange);
    setMonth(monthOf(bookingRange.first));
  }, []);

  useEffect(() => {
    if (!range || !month) return;
    const monthStart = `${month}-01`;
    const monthEnd = `${shiftMonth(month, 1)}-01`;
    const from = monthStart < range.first ? range.first : monthStart;
    const to = monthEnd <= range.last ? monthEnd : range.last;
    if (from > to) return;

    const controller = new AbortController();
    setLoading(true);
    setLoadError(false);
    fetch(`/api/consultation/availability?${new URLSearchParams({ from, to })}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status));
        const data = (await response.json()) as AvailabilityResponse;
        setCounts((current) => ({ ...current, ...data.counts }));

        // Open on the nearest free Tuesday that still has room, as a helpful default.
        if (!autoSelected.current) {
          autoSelected.current = true;
          for (let date = from; date <= to; date = addDays(date, 1)) {
            if (
              isFreeConsultationDay(date) &&
              getDayStatus(date, data.counts[date] ?? 0) === "open"
            ) {
              setSelected((current) => current ?? date);
              break;
            }
          }
        }
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error("[consultation] availability", error);
          setLoadError(true);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [range, month, reloadKey]);

  const scrollToPanel = () => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() =>
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  };

  const onSelect = (date: string) => {
    setSelected(date);
    setStep("calendar");
    setNotice(getDayStatus(date, counts[date] ?? 0) === "full" ? "FULL" : null);
    scrollToPanel();
  };

  const onDateUnavailable = (code: "FULL" | "DATE_UNAVAILABLE") => {
    if (selected && code === "FULL") {
      setCounts((current) => ({ ...current, [selected]: DAILY_CAPACITY }));
    }
    setNotice(code);
    setStep("calendar");
    setReloadKey((key) => key + 1);
  };

  return (
    <section id="booking" className="scroll-mt-28 pb-20 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8 lg:px-10">
        <div ref={panelRef} className="order-2 scroll-mt-28 lg:order-1 lg:sticky lg:top-32">
          <SidePanel
            step={step}
            selected={selected}
            booked={selected ? (counts[selected] ?? 0) : 0}
            notice={notice}
            lang={lang}
            onContinue={() => setStep("form")}
            onChangeDay={() => setStep("calendar")}
            onBooked={() => {
              if (selected) {
                setCounts((current) => ({ ...current, [selected]: (current[selected] ?? 0) + 1 }));
              }
              setStep("done");
              scrollToPanel();
            }}
            onDateUnavailable={onDateUnavailable}
          />
        </div>

        <div className="order-1 rounded-xl border border-gold/20 bg-card/40 p-3 shadow-luxe sm:p-5 lg:order-2">
          {range && month ? (
            <ConsultationCalendar
              month={month}
              minMonth={monthOf(range.first)}
              maxMonth={monthOf(range.last)}
              counts={counts}
              loading={loading}
              error={loadError}
              selected={selected}
              onMonthChange={setMonth}
              onSelect={onSelect}
              onRetry={() => setReloadKey((key) => key + 1)}
            />
          ) : (
            <div className="aspect-square animate-pulse rounded-lg bg-charcoal/50" />
          )}
        </div>
      </div>
    </section>
  );
}

type SidePanelProps = {
  step: Step;
  selected: string | null;
  booked: number;
  notice: Notice;
  lang: "fa" | "en";
  onContinue: () => void;
  onChangeDay: () => void;
  onBooked: () => void;
  onDateUnavailable: (code: "FULL" | "DATE_UNAVAILABLE") => void;
};

function SidePanel({
  step,
  selected,
  booked,
  notice,
  lang,
  onContinue,
  onChangeDay,
  onBooked,
  onDateUnavailable,
}: SidePanelProps) {
  const { t, dir } = useI18n();
  const ForwardArrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const numberLocale = lang === "fa" ? "fa-IR" : "en-GB";

  const formatDate = (date: string) => {
    const options = { timeZone: "UTC" } as const;
    const value = parseDate(date);
    const weekdayName = new Intl.DateTimeFormat(numberLocale, {
      ...options,
      weekday: "long",
    }).format(value);
    const dayMonthYear = new Intl.DateTimeFormat(`${numberLocale}-u-ca-gregory`, {
      ...options,
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(value);
    return `${weekdayName}${lang === "fa" ? "، " : ", "}${dayMonthYear}`;
  };

  const remaining = Math.max(DAILY_CAPACITY - booked, 0);
  const free = selected ? isFreeConsultationDay(selected) : false;
  const isFull = notice !== null;

  const badge = (label: string, tone: "gold" | "muted" | "danger") => (
    <span
      className={cn(
        "inline-flex rounded-md px-3 py-1 text-xs font-medium",
        tone === "gold" && "bg-gold text-onyx",
        tone === "muted" && "border border-gold/30 text-gold",
        tone === "danger" && "bg-destructive/90 text-white",
      )}
    >
      {label}
    </span>
  );

  const selectedDay = selected ? (
    <div className="space-y-3">
      <div className="text-xl font-medium text-ivory lg:text-2xl">{formatDate(selected)}</div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {isFull
          ? badge(t("cb.badge.fullDay"), "danger")
          : badge(free ? t("cb.badge.freeDay") : t("cb.badge.paidDay"), free ? "gold" : "muted")}
        {!isFull && (
          <span className="text-xs text-muted-foreground">
            {t("cb.remaining").replace("{n}", remaining.toLocaleString(numberLocale))}
          </span>
        )}
      </div>
    </div>
  ) : (
    <p className="leading-7 text-muted-foreground">{t("cb.panel.empty")}</p>
  );

  const privacy = (
    <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
      <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.6} />
      {t("cb.form.privacy")}
    </p>
  );

  if (step === "done" && selected) {
    const waText = encodeURIComponent(`${t("cb.success.title")} – ${formatDate(selected)}`);
    return (
      <div
        role="status"
        className="rounded-xl border border-gold/40 bg-card/40 p-6 shadow-luxe sm:p-7"
      >
        <CheckCircle2 className="h-10 w-10 text-gold" strokeWidth={1.3} />
        <h2 className="mt-5 text-2xl font-bold text-ivory">{t("cb.success.title")}</h2>
        <p className="mt-3 leading-7 text-muted-foreground">{t("cb.success.body")}</p>
        <div className="mt-6 rounded-lg border border-gold/15 bg-onyx/40 p-5">
          <div className="text-xl font-medium text-ivory">{formatDate(selected)}</div>
          {free && <div className="mt-3">{badge(t("cb.badge.freeDay"), "gold")}</div>}
        </div>
        <div className="mt-6">
          <a
            href={`https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#25D366]/60 px-4 py-3 text-sm text-[#25D366] transition-colors hover:bg-[#25D366]/10"
          >
            <MessageCircle className="h-4 w-4" />
            {t("cb.success.whatsapp")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gold/20 bg-card/40 p-4 shadow-luxe sm:p-5">
      <div className="rounded-lg border border-gold/15 bg-onyx/40 p-5">
        <div className="flex items-center justify-between gap-4 border-b border-gold/40 pb-4">
          <h2 className="text-lg font-bold text-gold lg:text-xl">{t("cb.panel.title")}</h2>
          <CalendarDays className="h-7 w-7 text-gold" strokeWidth={1.3} />
        </div>
        <div className="pt-5">{selectedDay}</div>
        {step === "form" && selected && (
          <button
            type="button"
            onClick={onChangeDay}
            className="mt-4 text-xs text-gold underline-offset-4 hover:underline"
          >
            {t("cb.change")}
          </button>
        )}
      </div>

      {isFull && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <div className="font-medium text-ivory">
              {notice === "FULL" ? t("cb.full.title") : t("cb.err.DATE_UNAVAILABLE")}
            </div>
            {notice === "FULL" && (
              <div className="mt-1 text-sm text-muted-foreground">{t("cb.full.body")}</div>
            )}
          </div>
        </div>
      )}

      {step === "form" && selected ? (
        <div className="mt-6 space-y-5 px-1">
          <h3 className="text-lg font-medium text-ivory">{t("cb.form.title")}</h3>
          <ConsultationForm
            date={selected}
            onBooked={onBooked}
            onDateUnavailable={onDateUnavailable}
          />
        </div>
      ) : (
        <div className="mt-6 space-y-5 px-1">
          <button
            type="button"
            onClick={onContinue}
            disabled={!selected || isFull}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-gold px-6 py-4 font-bold text-onyx shadow-glow transition-all hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            <span>{t("cb.continue")}</span>
            <ForwardArrow className="h-5 w-5" />
          </button>
          {privacy}
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span>{t("cb.call")}:</span>
            <span dir="ltr">{LEADS_WHATSAPP_DISPLAY_NUMBER}</span>
          </a>
        </div>
      )}
    </div>
  );
}

function Faq() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4].map((index) => ({
    id: `faq-${index}`,
    question: t(`cb.faq.${index}.q`),
    answer: t(`cb.faq.${index}.a`),
  }));

  return (
    <section id="faq" className="border-t border-gold/10 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-10 px-6 lg:px-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gold">{t("cb.faq.kicker")}</span>
            <span className="h-px w-14 bg-gold" />
          </div>
          <h2 className="font-display text-2xl text-ivory tracking-tight lg:text-4xl">
            {t("cb.faq.title")}
          </h2>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}

export default ConsultationBookingPage;
