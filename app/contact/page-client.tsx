"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LEADS_WHATSAPP_DISPLAY_NUMBER, LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import { contactFormSchema, contactMatterValues, contactUrgencyValues } from "@/lib/contact/schema";
import { CaseReviewCredential } from "@/components/credentials/CaseReviewCredential";

type SubmissionStatus = "idle" | "submitting";
type FieldErrors = Record<string, string>;

function whatsappHref(message: string) {
  return `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ContactPage() {
  const { t, dir, lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const waHref = whatsappHref(t("contact.whatsapp.msg"));
  const h1ClassName =
    lang === "fa"
      ? "text-[2.15rem] leading-[1.48] min-[430px]:text-[2.45rem] min-[430px]:leading-[1.45] md:text-[3.2rem] lg:text-[3.65rem] lg:leading-[1.22]"
      : "text-[2.55rem] leading-[1.12] min-[430px]:text-[2.95rem] min-[430px]:leading-[1.1] md:text-[3.9rem] lg:text-[4.65rem] lg:leading-[0.96]";

  return (
    <div dir={dir}>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                {t("contact.kicker")}
              </span>
            </div>
            <h1
              className={`font-display text-ivory tracking-tight break-words lg:text-balance ${h1ClassName}`}
            >
              {t("contact.h1")}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {t("contact.intro")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#intake-form"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
              >
                <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                  {t("contact.hero.primary")}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                  {t("contact.hero.secondary")}
                </span>
              </a>
            </div>

            <DisclaimerBlock />

            <div className="space-y-6 pt-6">
              {[
                { icon: MapPin, l: t("contact.info.office"), v: t("contact.info.officeVal") },
                { icon: Phone, l: t("contact.info.direct"), v: LEADS_WHATSAPP_DISPLAY_NUMBER },
                { icon: Mail, l: t("contact.info.email"), v: "office@rahilmostafaee.com" },
                { icon: Clock, l: t("contact.info.hours"), v: t("contact.info.hoursVal") },
              ].map((c) => (
                <div key={c.l} className="flex items-start gap-5 group">
                  <div className="hairline p-3 group-hover:border-gold/60 transition-colors">
                    <c.icon className="w-4 h-4 text-gold" strokeWidth={1.2} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      {c.l}
                    </div>
                    <div className="text-ivory mt-1">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6" id="intake-form">
            <IntakeForm submitted={submitted} setSubmitted={setSubmitted} />
          </div>
        </div>
      </section>

      <ReviewHelp />
      <UrgentAction />
      <WhatsAppCTA waHref={waHref} />
      <FinalDisclaimer />
    </div>
  );
}

function useContactSubmission(setSubmitted: (value: boolean) => void) {
  const { t, lang } = useI18n();
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const startedAtRef = useRef(new Date().toISOString());

  const errorMessage = (code: string) => {
    const keyByCode: Record<string, string> = {
      required: "contact.form.error.required",
      nameTooShort: "contact.form.error.nameTooShort",
      nameTooLong: "contact.form.error.nameTooLong",
      invalidEmail: "contact.form.error.invalidEmail",
      emailTooLong: "contact.form.error.emailTooLong",
      invalidPhone: "contact.form.error.invalidPhone",
      phoneTooLong: "contact.form.error.phoneTooLong",
      contactMethodRequired: "contact.form.error.contactMethodRequired",
      languageTooLong: "contact.form.error.languageTooLong",
      amountTooLong: "contact.form.error.amountTooLong",
      locationTooLong: "contact.form.error.locationTooLong",
      documentsTooLong: "contact.form.error.documentsTooLong",
      briefTooShort: "contact.form.error.briefTooShort",
      briefTooLong: "contact.form.error.briefTooLong",
    };
    return t(keyByCode[code] ?? "contact.form.error.required");
  };

  const clearError = (field: string) => {
    setErrors((current) => {
      if (!current[field] && !current.contact) return current;
      const next = { ...current };
      delete next[field];
      if (field === "email" || field === "phone") delete next.contact;
      return next;
    });
    setSubmitError("");
  };

  const getLocalizedErrors = (fieldErrors: Record<string, string>) =>
    Object.fromEntries(
      Object.entries(fieldErrors).map(([field, code]) => [field, errorMessage(code)]),
    );

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const formData = new FormData(event.currentTarget);
    const value = (name: string) => String(formData.get(name) ?? "");
    const formValues = {
      name: value("name"),
      lang: value("lang"),
      email: value("email"),
      phone: value("phone"),
      matter: value("matter"),
      urgency: value("urgency"),
      amount: value("amount"),
      counterparty_location: value("counterparty_location"),
      documents: value("documents"),
      brief: value("brief"),
    };
    const parsed = contactFormSchema.safeParse(formValues);

    if (!parsed.success) {
      const nextErrors = parsed.error.issues.reduce<Record<string, string>>(
        (fieldErrors, issue) => {
          const field = issue.path[0];
          if (typeof field === "string" && !fieldErrors[field]) {
            fieldErrors[field] = errorMessage(issue.message);
          }
          return fieldErrors;
        },
        {},
      );
      if (!formValues.email.trim() && !formValues.phone.trim()) {
        nextErrors.contact = t("contact.form.error.contactMethodRequired");
      }
      setErrors(nextErrors);
      setSubmitError(t("contact.form.error.checkFields"));
      return;
    }

    setStatus("submitting");
    setErrors({});
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          locale: lang,
          formStartedAt: startedAtRef.current,
          submittedAt: new Date().toISOString(),
          honeypot: value("website"),
        }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok || !result.success) {
        if (result.fieldErrors) setErrors(getLocalizedErrors(result.fieldErrors));
        setSubmitError(t("contact.form.error.submit"));
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(t("contact.form.error.submit"));
    } finally {
      setStatus("idle");
    }
  };

  const matterOptions = contactMatterValues.map((value, index) => ({
    value,
    label: t(`contact.matter.${index + 1}`),
  }));
  const urgencyOptions = contactUrgencyValues.map((value, index) => ({
    value,
    label: t(`contact.urg.${index + 1}`),
  }));

  return {
    t,
    status,
    errors,
    submitError,
    clearError,
    submit,
    matterOptions,
    urgencyOptions,
  };
}

function DisclaimerBlock() {
  const { t } = useI18n();
  return (
    <div className="glass-strong p-6 lg:p-7 space-y-4">
      <ShieldCheck className="w-6 h-6 text-gold" strokeWidth={1.2} />
      <h2 className="font-display text-2xl text-ivory leading-tight break-words">
        {t("contact.before.title")}
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed">{t("contact.before.body")}</p>
    </div>
  );
}

function IntakeForm({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
}) {
  const { t, status, errors, submitError, clearError, submit, matterOptions, urgencyOptions } =
    useContactSubmission(setSubmitted);
  return (
    <div className="glass-strong p-10 lg:p-12 shadow-luxe scroll-mt-28">
      {submitted ? (
        <div className="text-center space-y-6 py-16">
          <div className="font-display text-4xl text-ivory">{t("contact.success.title")}</div>
          <p className="text-muted-foreground max-w-sm mx-auto">{t("contact.success.body")}</p>
        </div>
      ) : (
        <>
          <CaseReviewCredential />
          <form
            onSubmit={submit}
            noValidate
            aria-busy={status === "submitting"}
            className="space-y-6"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
              {t("contact.form.kicker")}
            </div>
            {submitError ? (
              <div role="alert" aria-live="polite" className="text-sm text-red-300">
                {submitError}
              </div>
            ) : null}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label={t("contact.form.name")}
                name="name"
                required
                error={errors.name}
                onChange={() => clearError("name")}
              />
              <Field
                label={t("contact.form.lang")}
                name="lang"
                placeholder={t("contact.form.langPh")}
                error={errors.lang}
                onChange={() => clearError("lang")}
              />
            </div>
            <div
              role="group"
              aria-describedby={errors.contact ? "contact-method-error" : undefined}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label={t("contact.form.email")}
                  name="email"
                  type="email"
                  error={errors.email}
                  onChange={() => clearError("email")}
                />
                <Field
                  label={t("contact.form.phone")}
                  name="phone"
                  type="tel"
                  error={errors.phone}
                  onChange={() => clearError("phone")}
                />
              </div>
              <FieldError id="contact-method-error" message={errors.contact} />
            </div>
            <Select
              label={t("contact.form.matter")}
              name="matter"
              options={matterOptions}
              placeholder={t("contact.form.selectMatter")}
              required
              error={errors.matter}
              onChange={() => clearError("matter")}
            />
            <Select
              label={t("contact.form.urgency")}
              name="urgency"
              options={urgencyOptions}
              placeholder={t("contact.form.selectUrgency")}
              required
              error={errors.urgency}
              onChange={() => clearError("urgency")}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label={t("contact.form.amount")}
                name="amount"
                error={errors.amount}
                onChange={() => clearError("amount")}
              />
              <Field
                label={t("contact.form.counterparty")}
                name="counterparty_location"
                error={errors.counterparty_location}
                onChange={() => clearError("counterparty_location")}
              />
            </div>
            <Field
              label={t("contact.form.documents")}
              name="documents"
              error={errors.documents}
              onChange={() => clearError("documents")}
            />
            <div>
              <label
                htmlFor="brief"
                className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
              >
                {t("contact.form.brief")}
                <RequiredMark />
              </label>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {t("contact.form.guidance")}
              </p>
              <textarea
                id="brief"
                name="brief"
                rows={5}
                required
                maxLength={2000}
                aria-invalid={Boolean(errors.brief)}
                aria-describedby={errors.brief ? "brief-error" : undefined}
                onChange={() => clearError("brief")}
                className="mt-3 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50 resize-none"
                placeholder={t("contact.form.briefPh")}
              />
              <FieldError id="brief-error" message={errors.brief} />
            </div>
            <input
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              name="website"
              className="absolute left-[-9999px] h-px w-px opacity-0"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting" ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {status === "submitting" ? t("contact.form.submitting") : t("contact.form.submit")}
              </span>
              {status !== "submitting" ? (
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              ) : null}
            </button>
            <p className="text-[10px] tracking-wider text-muted-foreground text-center">
              {t("contact.form.disclaimer")}
            </p>
          </form>
        </>
      )}
    </div>
  );
}

function ReviewHelp() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`contact.include.${n}`));

  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("contact.include.kicker")}
            </span>
          </div>
          <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
            {t("contact.include.h2")}
          </h2>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
              <div className="flex items-start gap-3 text-ivory">
                <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UrgentAction() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 glass-strong p-8 lg:p-12">
        <AlertTriangle className="w-7 h-7 text-gold mb-8" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
          {t("contact.urgent.h2")}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">
          {t("contact.urgent.body")}
        </p>
      </div>
    </section>
  );
}

function WhatsAppCTA({ waHref }: { waHref: string }) {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-5">
          <MessageCircle className="w-7 h-7 text-[#25D366]" />
          <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
            {t("contact.whatsapp.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {t("contact.whatsapp.body")}
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-end">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("contact.whatsapp.cta")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalDisclaimer() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 flex items-start gap-5">
        <FileText className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1.3} />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t("contact.final.disclaimer")}
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange?: () => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
      >
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={onChange}
        className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50"
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  placeholder,
  required = false,
  error,
  onChange,
}: {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  required?: boolean;
  error?: string;
  onChange?: () => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
      >
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={onChange}
        className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory"
      >
        <option value="" disabled className="bg-onyx">
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-onyx">
            {o.label}
          </option>
        ))}
      </select>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="ms-1 text-gold">
      *
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-red-300" aria-live="polite">
      {message}
    </p>
  );
}

export default ContactPage;
