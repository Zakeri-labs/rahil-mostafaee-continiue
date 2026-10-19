"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight, Info, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  addDays,
  getDayStatus,
  isFreeConsultationDay,
  parseDate,
  toDateString,
  weekday,
  type DayStatus,
} from "@/lib/consultation/rules";
import { cn } from "@/lib/utils";

export type MonthKey = `${number}-${string}`;

type ConsultationCalendarProps = {
  month: MonthKey;
  minMonth: MonthKey;
  maxMonth: MonthKey;
  counts: Record<string, number>;
  loading: boolean;
  error: boolean;
  selected: string | null;
  onMonthChange: (month: MonthKey) => void;
  onSelect: (date: string) => void;
  onRetry: () => void;
};

export function monthOf(date: string): MonthKey {
  return date.slice(0, 7) as MonthKey;
}

export function shiftMonth(month: MonthKey, delta: number): MonthKey {
  const date = parseDate(`${month}-01`);
  date.setUTCMonth(date.getUTCMonth() + delta);
  return monthOf(toDateString(date));
}

/** Sunday-first weeks; days outside the month are `null` placeholders. */
function buildGrid(month: MonthKey): (string | null)[] {
  const first = `${month}-01`;
  const cells: (string | null)[] = Array.from({ length: weekday(first) }, () => null);
  for (let date = first; monthOf(date) === month; date = addDays(date, 1)) cells.push(date);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

// The calendar is Gregorian and always laid out left-to-right, in both languages.
const monthFormatter = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function ConsultationCalendar({
  month,
  minMonth,
  maxMonth,
  counts,
  loading,
  error,
  selected,
  onMonthChange,
  onSelect,
  onRetry,
}: ConsultationCalendarProps) {
  const { t, lang } = useI18n();
  const cells = useMemo(() => buildGrid(month), [month]);
  const fullDateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(`${lang === "fa" ? "fa-IR" : "en-GB"}-u-ca-gregory`, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }),
    [lang],
  );
  const listSeparator = lang === "fa" ? "، " : ", ";

  const statusLabel: Record<DayStatus, string> = {
    past: t("cb.legend.closed"),
    closed: t("cb.legend.closed"),
    outOfRange: t("cb.legend.closed"),
    full: t("cb.legend.full"),
    open: t("cb.legend.open"),
  };

  const navButton =
    "inline-flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-onyx disabled:pointer-events-none disabled:opacity-25";

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gold/15 bg-onyx/40 p-3 sm:p-4">
        <div dir="ltr" className="flex items-center justify-between gap-4 px-1 pb-5 pt-1">
          <button
            type="button"
            onClick={() => onMonthChange(shiftMonth(month, -1))}
            disabled={month <= minMonth}
            aria-label={t("cb.cal.prev")}
            className={navButton}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="text-xl font-medium text-ivory" aria-live="polite">
            {monthFormatter.format(parseDate(`${month}-01`))}
          </div>
          <button
            type="button"
            onClick={() => onMonthChange(shiftMonth(month, 1))}
            disabled={month >= maxMonth}
            aria-label={t("cb.cal.next")}
            className={navButton}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="relative">
          <div
            dir="ltr"
            role="grid"
            aria-busy={loading}
            className="grid grid-cols-7 gap-1 sm:gap-1.5"
          >
            {WEEKDAYS.map((label) => (
              <div
                key={label}
                role="columnheader"
                className="pb-2 text-center text-xs text-ivory/80 sm:text-sm"
              >
                {label}
              </div>
            ))}

            {cells.map((date, index) => {
              if (!date) {
                return (
                  <div
                    key={`blank-${index}`}
                    aria-hidden
                    className="aspect-square rounded-md border border-gold/10 bg-charcoal/40"
                  />
                );
              }

              const status = getDayStatus(date, counts[date] ?? 0);
              const free = isFreeConsultationDay(date);
              const unavailable =
                status === "past" || status === "closed" || status === "outOfRange";
              const isSelected = selected === date;
              const selectable = status === "open" || status === "full";

              return (
                <button
                  key={date}
                  type="button"
                  role="gridcell"
                  disabled={!selectable || loading}
                  aria-selected={isSelected}
                  aria-label={[
                    fullDateFormatter.format(parseDate(date)),
                    free && !unavailable ? t("cb.day.free") : null,
                    statusLabel[status],
                  ]
                    .filter(Boolean)
                    .join(listSeparator)}
                  onClick={() => onSelect(date)}
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-md border bg-charcoal/40 text-sm transition-all duration-200 sm:text-base",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                    isSelected ? "border-2 border-gold" : "border-gold/10",
                    status === "open" && !isSelected && "hover:border-gold/50",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full sm:h-9 sm:w-9",
                      status === "open" && !free && "text-ivory",
                      status === "open" && free && "bg-gold font-bold text-onyx shadow-glow",
                      status === "full" && "bg-muted-foreground/35 text-ivory/60",
                      unavailable && "text-muted-foreground/35",
                      unavailable && free && "bg-gold/15 text-gold/45",
                    )}
                  >
                    {parseDate(date).getUTCDate()}
                  </span>
                </button>
              );
            })}
          </div>

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md bg-onyx/60 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 text-sm text-gold">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("cb.cal.loading")}
              </span>
            </div>
          )}
        </div>

        <ul className="flex flex-wrap justify-between gap-x-4 gap-y-2 px-1 pt-6 text-xs text-ivory/80 sm:text-sm">
          <li className="inline-flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-full bg-gold" />
            {t("cb.legend.free")}
          </li>
          <li className="inline-flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-full bg-muted-foreground/60" />
            {t("cb.legend.full")}
          </li>
          <li className="inline-flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-full bg-muted-foreground/25" />
            {t("cb.legend.closed")}
          </li>
        </ul>
      </div>

      {error && (
        <div
          role="alert"
          className="flex flex-col items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-ivory sm:flex-row sm:items-center sm:justify-between"
        >
          <span>{t("cb.cal.error")}</span>
          <button
            type="button"
            onClick={onRetry}
            className="shrink-0 rounded-md border border-gold/40 px-4 py-2 text-xs text-gold transition-colors hover:bg-gold hover:text-onyx"
          >
            {t("cb.cal.retry")}
          </button>
        </div>
      )}

      <div className="flex items-start gap-4 rounded-lg border border-gold/15 bg-onyx/40 p-5">
        <Info className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
        <p className="text-sm leading-7 text-ivory/85">{t("cb.cal.note")}</p>
      </div>
    </div>
  );
}
