"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Loader2, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { BookingResponse } from "@/lib/consultation/schema";
import { cn } from "@/lib/utils";

type FieldName = "name" | "phone" | "topic";

type ConsultationFormProps = {
  date: string;
  onBooked: () => void;
  /** The day filled up or closed while the visitor was typing. */
  onDateUnavailable: (code: "FULL" | "DATE_UNAVAILABLE") => void;
};

const FIELD_ERROR_KEYS = new Set([
  "NAME_REQUIRED",
  "NAME_TOO_LONG",
  "PHONE_INVALID",
  "TOPIC_REQUIRED",
  "TOPIC_TOO_LONG",
]);

function validate(values: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  const name = values.name.trim();
  const phone = values.phone.trim();
  const topic = values.topic.trim();
  const digits = phone.replace(/\D/g, "").length;

  if (name.length < 2) errors.name = "NAME_REQUIRED";
  else if (name.length > 120) errors.name = "NAME_TOO_LONG";
  if (!/^\+?[\d\s()-]+$/.test(phone) || digits < 8 || digits > 15) errors.phone = "PHONE_INVALID";
  if (topic.length < 3) errors.topic = "TOPIC_REQUIRED";
  else if (topic.length > 1000) errors.topic = "TOPIC_TOO_LONG";
  return errors;
}

/** Persian and Arabic-Indic digits typed on mobile keyboards become ASCII. */
function normalizeDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660));
}

export function ConsultationForm({ date, onBooked, onDateUnavailable }: ConsultationFormProps) {
  const { t, lang, dir } = useI18n();
  const ForwardArrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const startedAt = useRef(new Date().toISOString());
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    phone: "",
    topic: "",
  });
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitError(null);
    const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalid) {
      document.getElementById(`cb-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/consultation/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          name: values.name.trim(),
          phone: normalizeDigits(values.phone.trim()),
          topic: values.topic.trim(),
          locale: lang,
          website,
          formStartedAt: startedAt.current,
        }),
      });
      const result = (await response.json().catch(() => null)) as BookingResponse | null;

      if (result?.success) {
        onBooked();
        return;
      }
      if (result?.code === "FULL" || result?.code === "DATE_UNAVAILABLE") {
        onDateUnavailable(result.code);
        return;
      }
      if (result?.code === "VALIDATION_ERROR" && result.fieldErrors) {
        const serverErrors: Partial<Record<FieldName, string>> = {};
        for (const field of ["name", "phone", "topic"] as const) {
          const code = result.fieldErrors[field];
          if (code) serverErrors[field] = FIELD_ERROR_KEYS.has(code) ? code : "generic";
        }
        if (Object.keys(serverErrors).length > 0) {
          setErrors(serverErrors);
          return;
        }
      }
      setSubmitError(t("cb.err.generic"));
    } catch {
      setSubmitError(t("cb.err.generic"));
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (field: FieldName) =>
    cn(
      "w-full rounded-md border bg-onyx/60 px-4 py-3.5 text-ivory placeholder:text-muted-foreground/50 transition-colors",
      "focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40",
      errors[field] ? "border-destructive" : "border-gold/20",
    );

  const errorText = (field: FieldName) =>
    errors[field] ? (
      <p id={`cb-${field}-error`} role="alert" className="text-sm text-destructive">
        {t(`cb.err.${errors[field]}`)}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-6">
      <div className="space-y-2">
        <label htmlFor="cb-name" className="block text-sm text-ivory">
          {t("cb.form.name")} <span className="text-gold">*</span>
        </label>
        <input
          id="cb-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          placeholder={t("cb.form.name.ph")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cb-name-error" : undefined}
          className={fieldClass("name")}
        />
        {errorText("name")}
      </div>

      <div className="space-y-2">
        <label htmlFor="cb-phone" className="block text-sm text-ivory">
          {t("cb.form.phone")} <span className="text-gold">*</span>
        </label>
        <input
          id="cb-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir="ltr"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          placeholder={t("cb.form.phone.ph")}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "cb-phone-error cb-phone-hint" : "cb-phone-hint"}
          className={cn(fieldClass("phone"), "text-left")}
        />
        <p id="cb-phone-hint" className="text-xs text-muted-foreground">
          {t("cb.form.phone.hint")}
        </p>
        {errorText("phone")}
      </div>

      <div className="space-y-2">
        <label htmlFor="cb-topic" className="block text-sm text-ivory">
          {t("cb.form.topic")} <span className="text-gold">*</span>
        </label>
        <textarea
          id="cb-topic"
          name="topic"
          rows={4}
          maxLength={1000}
          value={values.topic}
          onChange={(event) => update("topic", event.target.value)}
          placeholder={t("cb.form.topic.ph")}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "cb-topic-error" : undefined}
          className={cn(fieldClass("topic"), "resize-y leading-relaxed")}
        />
        {errorText("topic")}
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0 [clip:rect(0,0,0,0)]"
      >
        <label htmlFor="cb-website">Website</label>
        <input
          id="cb-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {submitError && (
        <p
          role="alert"
          className="rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-ivory"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-gold px-8 py-4 font-bold text-onyx shadow-glow transition-all hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ForwardArrow className="h-5 w-5" />
        )}
        <span>{submitting ? t("cb.form.submitting") : t("cb.form.submit")}</span>
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.5} />
        {t("cb.form.privacy")}
      </p>
    </form>
  );
}
