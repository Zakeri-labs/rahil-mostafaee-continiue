"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import {
  caseIntakeFormSchema,
  SUMMARY_MAX_LENGTH,
  type CaseIntakeFormValues,
} from "@/lib/case-intake/schema";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

type Step = 1 | 2 | 3 | 4 | 5;
type Status = "idle" | "submitting" | "success";
type FieldErrors = Record<string, string>;

const stepFields: Record<Step, Array<keyof CaseIntakeFormValues>> = {
  1: ["urgency"],
  2: ["matterType"],
  3: ["estimatedValue", "counterpartyLocation"],
  4: ["summary", "availableDocuments"],
  5: ["fullName", "phone", "email", "preferredLanguage", "consent"],
};

function pushDataLayer(event: string, data: Record<string, string | number>) {
  if (typeof window === "undefined" || !Array.isArray(window.dataLayer)) return;
  window.dataLayer.push({ event, ...data });
}

function whatsappHref(message: string) {
  return `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ChoiceCard({
  id,
  name,
  value,
  title,
  description,
  checked,
  type = "radio",
  onChange,
}: {
  id: string;
  name: string;
  value: string;
  title: string;
  description?: string;
  checked: boolean;
  type?: "radio" | "checkbox";
  onChange: () => void;
}) {
  return (
    <label className="group relative block cursor-pointer">
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span
        className={cn(
          "flex min-h-[76px] items-start gap-3 border border-gold/15 bg-onyx/25 px-4 py-4 transition-[border-color,background-color,box-shadow] duration-200",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-gold/70 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-onyx",
          checked
            ? "border-gold/70 bg-gold/10 shadow-[inset_3px_0_0_var(--color-gold)]"
            : "group-hover:border-gold/35",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/35 text-onyx transition-colors",
            type === "checkbox" && "rounded-sm",
            checked ? "border-gold bg-gold" : "bg-transparent",
          )}
        >
          {checked ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-medium leading-6 text-ivory">{title}</span>
          {description ? (
            <span className="mt-1 block text-xs leading-5 text-muted-foreground">
              {description}
            </span>
          ) : null}
        </span>
      </span>
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-xs leading-5 text-red-300">
      {message}
    </p>
  );
}

function TrustItem({ icon: Icon, children }: { icon: typeof ShieldCheck; children: string }) {
  return (
    <li className="flex items-center gap-3 border border-gold/15 bg-onyx/30 px-4 py-3 text-sm text-ivory">
      <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
      <span>{children}</span>
    </li>
  );
}

export function ConfidentialCaseIntakeWizard() {
  const { t, lang, dir } = useI18n();
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState<CaseIntakeFormValues>({
    urgency: "" as CaseIntakeFormValues["urgency"],
    matterType: "" as CaseIntakeFormValues["matterType"],
    estimatedValue: "" as CaseIntakeFormValues["estimatedValue"],
    counterpartyLocation: "" as CaseIntakeFormValues["counterpartyLocation"],
    summary: "",
    availableDocuments: [],
    fullName: "",
    phone: "",
    email: "",
    preferredLanguage: "" as CaseIntakeFormValues["preferredLanguage"],
    consent: false,
  });
  const [metadata, setMetadata] = useState({
    pagePath: "/",
    referrer: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmTerm: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const startedAtRef = useRef(new Date().toISOString());
  const startedRef = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setMetadata({
      pagePath: window.location.pathname,
      referrer: document.referrer,
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? "",
    });
    pushDataLayer("case_intake_view", { locale: lang });
  }, [lang]);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const copyError = (code: string) => {
    const keyByCode: Record<string, string> = {
      required: "home.intake.error.required",
      invalidPhone: "home.intake.error.invalidPhone",
      invalidEmail: "home.intake.error.invalidEmail",
      summaryTooShort: "home.intake.error.summaryTooShort",
      summaryTooLong: "home.intake.error.summaryTooLong",
      nameTooShort: "home.intake.error.nameTooShort",
      nameTooLong: "home.intake.error.nameTooLong",
      consentRequired: "home.intake.error.consentRequired",
      noDocumentsExclusive: "home.intake.error.noDocumentsExclusive",
      tooManyDocuments: "home.intake.error.required",
      duplicateDocuments: "home.intake.error.required",
    };
    return t(keyByCode[code] ?? "home.intake.error.required");
  };

  const updateField = <K extends keyof CaseIntakeFormValues>(
    field: K,
    value: CaseIntakeFormValues[K],
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    setSubmitError("");
  };

  const validateStep = (currentStep: Step) => {
    const nextErrors: FieldErrors = {};
    for (const field of stepFields[currentStep]) {
      const result = caseIntakeFormSchema.shape[field].safeParse(form[field]);
      if (!result.success)
        nextErrors[field] = copyError(result.error.issues[0]?.message ?? "required");
    }
    if (
      currentStep === 4 &&
      form.availableDocuments.includes("no_documents") &&
      form.availableDocuments.length > 1
    ) {
      nextErrors.availableDocuments = copyError("noDocumentsExclusive");
    }
    setErrors((current) => {
      const next = { ...current };
      for (const field of stepFields[currentStep]) delete next[field];
      return { ...next, ...nextErrors };
    });
    return Object.keys(nextErrors).length === 0;
  };

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    pushDataLayer("case_intake_start", { locale: lang });
  };

  const continueStep = () => {
    markStarted();
    if (!validateStep(step)) return;
    if (step === 5) return;
    const event: Record<string, string | number> = { step, locale: lang };
    if (step >= 1) event.urgency = form.urgency;
    if (step >= 2) event.matterType = form.matterType;
    pushDataLayer("case_intake_step_complete", event);
    setStep((step + 1) as Step);
  };

  const goBack = () => {
    setErrors({});
    setSubmitError("");
    if (step > 1) setStep((step - 1) as Step);
  };

  const toggleDocument = (value: CaseIntakeFormValues["availableDocuments"][number]) => {
    if (value === "no_documents") {
      updateField("availableDocuments", form.availableDocuments.includes(value) ? [] : [value]);
      return;
    }
    updateField(
      "availableDocuments",
      form.availableDocuments.includes(value)
        ? form.availableDocuments.filter((document) => document !== value)
        : [...form.availableDocuments.filter((document) => document !== "no_documents"), value],
    );
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep(5)) return;
    const complete = caseIntakeFormSchema.safeParse(form);
    if (!complete.success) return;
    setStatus("submitting");
    setSubmitError("");
    pushDataLayer("case_intake_submit", {
      locale: lang,
      urgency: form.urgency,
      matterType: form.matterType,
    });

    try {
      const response = await fetch("/api/case-intake", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...complete.data,
          ...metadata,
          formStartedAt: startedAtRef.current,
          submittedAt: new Date().toISOString(),
          locale: lang,
          honeypot,
        }),
      });
      const result = (await response.json()) as { success?: boolean; code?: string };
      if (!response.ok || !result.success) throw new Error(result.code ?? "submission_failed");
      setStatus("success");
      pushDataLayer("case_intake_success", {
        locale: lang,
        urgency: form.urgency,
        matterType: form.matterType,
      });
    } catch (error) {
      setStatus("idle");
      setSubmitError(t("home.intake.error.submit"));
      pushDataLayer("case_intake_error", {
        locale: lang,
        code: error instanceof Error ? error.message : "unexpected_error",
      });
    }
  };

  const progress = (step / 5) * 100;
  const backIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const continueIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const BackIcon = backIcon;
  const ContinueIcon = continueIcon;
  const critical = form.urgency === "critical";

  return (
    <section
      id="case-review"
      className="relative border-t border-gold/10 py-20 pb-36 lg:py-28 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] tracking-[0.28em] uppercase text-gold lg:text-xs">
            {t("home.intake.eyebrow")}
          </p>
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ivory lg:text-5xl">
            {t("home.intake.title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground lg:text-base">
            {t("home.intake.description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(17rem,3fr)] lg:items-start lg:gap-8">
          <div className="order-last min-w-0 lg:order-first">
            {status === "success" ? (
              <SuccessState
                critical={critical}
                whatsappUrl={whatsappHref(t("home.cta.whatsappMsg"))}
                onWhatsAppClick={() =>
                  pushDataLayer("case_intake_whatsapp_click", { locale: lang, context: "success" })
                }
              />
            ) : (
              <div className="border border-gold/20 bg-charcoal/35 p-5 shadow-luxe sm:p-8 lg:p-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-gold">
                      {t("home.intake.progress")}{" "}
                      {lang === "fa" ? ` ${toPersianNumber(step)}` : ` ${step}`}{" "}
                      {t("home.intake.of")} {lang === "fa" ? "۵" : "5"}
                    </p>
                    <div
                      className="mt-3 h-1.5 w-40 overflow-hidden rounded-full bg-onyx/80 sm:w-56"
                      role="progressbar"
                      aria-label={t("home.intake.progressAria")}
                      aria-valuemin={1}
                      aria-valuemax={5}
                      aria-valuenow={step}
                    >
                      <div
                        className="h-full bg-gold transition-[width] duration-200"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {t(`home.intake.step.${step}.title`)}
                  </span>
                </div>

                <form onSubmit={submit} noValidate aria-busy={status === "submitting"}>
                  <div aria-live="polite" className="mb-5 min-h-6 text-sm text-red-300">
                    {submitError}
                  </div>
                  <h3
                    ref={headingRef}
                    tabIndex={-1}
                    className="font-display text-2xl leading-tight text-ivory outline-none lg:text-3xl"
                  >
                    {t(`home.intake.step.${step}.title`)}
                  </h3>
                  <div className="mt-7 min-h-[24rem]">
                    {step === 1 ? (
                      <ChoiceFieldset
                        legend={t("home.intake.step1.question")}
                        name="urgency"
                        value={form.urgency}
                        error={errors.urgency}
                        options={[
                          [
                            "critical",
                            t("home.intake.urgency.critical.title"),
                            t("home.intake.urgency.critical.description"),
                          ],
                          [
                            "high",
                            t("home.intake.urgency.high.title"),
                            t("home.intake.urgency.high.description"),
                          ],
                          [
                            "medium",
                            t("home.intake.urgency.medium.title"),
                            t("home.intake.urgency.medium.description"),
                          ],
                          [
                            "initial_review",
                            t("home.intake.urgency.initial_review.title"),
                            t("home.intake.urgency.initial_review.description"),
                          ],
                          [
                            "unsure",
                            t("home.intake.urgency.unsure.title"),
                            t("home.intake.urgency.unsure.description"),
                          ],
                        ]}
                        onChange={(value) =>
                          updateField("urgency", value as CaseIntakeFormValues["urgency"])
                        }
                      />
                    ) : null}

                    {step === 2 ? (
                      <ChoiceFieldset
                        legend={t("home.intake.step2.question")}
                        name="matterType"
                        value={form.matterType}
                        error={errors.matterType}
                        options={[
                          [
                            "commercial_dispute",
                            t("home.intake.matter.commercial_dispute.title"),
                            t("home.intake.matter.commercial_dispute.description"),
                          ],
                          [
                            "debt_recovery",
                            t("home.intake.matter.debt_recovery.title"),
                            t("home.intake.matter.debt_recovery.description"),
                          ],
                          [
                            "asset_or_fraud_recovery",
                            t("home.intake.matter.asset_or_fraud_recovery.title"),
                            t("home.intake.matter.asset_or_fraud_recovery.description"),
                          ],
                          [
                            "partner_shareholder_dispute",
                            t("home.intake.matter.partner_shareholder_dispute.title"),
                            t("home.intake.matter.partner_shareholder_dispute.description"),
                          ],
                          [
                            "iran_uae_cross_border",
                            t("home.intake.matter.iran_uae_cross_border.title"),
                            t("home.intake.matter.iran_uae_cross_border.description"),
                          ],
                          ["other", t("home.intake.matter.other.title"), undefined],
                        ]}
                        onChange={(value) =>
                          updateField("matterType", value as CaseIntakeFormValues["matterType"])
                        }
                      />
                    ) : null}

                    {step === 3 ? (
                      <div className="space-y-9">
                        <ChoiceFieldset
                          legend={t("home.intake.step3.valueQuestion")}
                          name="estimatedValue"
                          value={form.estimatedValue}
                          error={errors.estimatedValue}
                          options={[
                            ["under_100k_aed", t("home.intake.value.under_100k_aed")],
                            ["100k_to_500k_aed", t("home.intake.value.100k_to_500k_aed")],
                            ["500k_to_2m_aed", t("home.intake.value.500k_to_2m_aed")],
                            ["over_2m_aed", t("home.intake.value.over_2m_aed")],
                            ["unknown_amount", t("home.intake.value.unknown_amount")],
                            ["non_financial", t("home.intake.value.non_financial")],
                          ]}
                          onChange={(value) =>
                            updateField(
                              "estimatedValue",
                              value as CaseIntakeFormValues["estimatedValue"],
                            )
                          }
                        />
                        <ChoiceFieldset
                          legend={t("home.intake.step3.locationQuestion")}
                          name="counterpartyLocation"
                          value={form.counterpartyLocation}
                          error={errors.counterpartyLocation}
                          options={[
                            ["dubai", t("home.intake.location.dubai")],
                            ["other_uae", t("home.intake.location.other_uae")],
                            ["iran", t("home.intake.location.iran")],
                            ["other_country", t("home.intake.location.other_country")],
                            ["unknown_location", t("home.intake.location.unknown_location")],
                          ]}
                          onChange={(value) =>
                            updateField(
                              "counterpartyLocation",
                              value as CaseIntakeFormValues["counterpartyLocation"],
                            )
                          }
                        />
                      </div>
                    ) : null}

                    {step === 4 ? (
                      <div className="space-y-8">
                        <div>
                          <label
                            htmlFor="case-summary"
                            className="block text-base font-medium text-ivory"
                          >
                            {t("home.intake.step4.summaryHeading")}
                          </label>
                          <p
                            id="case-summary-help"
                            className="mt-2 text-sm leading-6 text-muted-foreground"
                          >
                            {t("home.intake.step4.summaryHelper")}
                          </p>
                          <textarea
                            id="case-summary"
                            value={form.summary}
                            onChange={(event) => updateField("summary", event.target.value)}
                            aria-invalid={Boolean(errors.summary)}
                            aria-describedby={`case-summary-help${errors.summary ? " case-summary-error" : ""}`}
                            maxLength={SUMMARY_MAX_LENGTH}
                            className="mt-4 min-h-40 w-full resize-y border border-gold/20 bg-onyx/35 px-4 py-3 text-base leading-7 text-ivory outline-none transition-colors placeholder:text-muted-foreground focus:border-gold/60 focus:ring-1 focus:ring-gold/50"
                            placeholder={t("home.intake.step4.summaryPlaceholder")}
                          />
                          <div className="mt-2 flex justify-between gap-4 text-xs text-muted-foreground">
                            <FieldError id="case-summary-error" message={errors.summary} />
                            <span className="ms-auto" aria-live="polite">
                              {form.summary.length}/{SUMMARY_MAX_LENGTH}
                            </span>
                          </div>
                        </div>
                        <fieldset
                          aria-describedby={
                            errors.availableDocuments ? "documents-error" : undefined
                          }
                        >
                          <legend className="text-base font-medium text-ivory">
                            {t("home.intake.step4.documentsQuestion")}
                          </legend>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {[
                              ["contract", t("home.intake.document.contract")],
                              ["invoice", t("home.intake.document.invoice")],
                              ["payment_proof", t("home.intake.document.payment_proof")],
                              ["communications", t("home.intake.document.communications")],
                              [
                                "counterparty_information",
                                t("home.intake.document.counterparty_information"),
                              ],
                              ["no_documents", t("home.intake.document.no_documents")],
                            ].map(([value, title]) => (
                              <ChoiceCard
                                key={value}
                                id={`document-${value}`}
                                name="availableDocuments"
                                value={value}
                                title={title}
                                type="checkbox"
                                checked={form.availableDocuments.includes(
                                  value as CaseIntakeFormValues["availableDocuments"][number],
                                )}
                                onChange={() =>
                                  toggleDocument(
                                    value as CaseIntakeFormValues["availableDocuments"][number],
                                  )
                                }
                              />
                            ))}
                          </div>
                          <FieldError id="documents-error" message={errors.availableDocuments} />
                        </fieldset>
                      </div>
                    ) : null}

                    {step === 5 ? (
                      <div className="space-y-6">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <TextField
                            id="full-name"
                            label={t("home.intake.field.fullName")}
                            value={form.fullName}
                            error={errors.fullName}
                            onChange={(value) => updateField("fullName", value)}
                          />
                          <TextField
                            id="phone"
                            type="tel"
                            dir="ltr"
                            label={t("home.intake.field.phone")}
                            value={form.phone}
                            error={errors.phone}
                            onChange={(value) => updateField("phone", value)}
                          />
                          <TextField
                            id="email"
                            type="email"
                            dir="ltr"
                            label={t("home.intake.field.email")}
                            value={form.email}
                            error={errors.email}
                            onChange={(value) => updateField("email", value)}
                          />
                        </div>
                        <ChoiceFieldset
                          legend={t("home.intake.field.preferredLanguage")}
                          name="preferredLanguage"
                          value={form.preferredLanguage}
                          error={errors.preferredLanguage}
                          options={[
                            ["fa", t("home.intake.language.fa")],
                            ["en", t("home.intake.language.en")],
                            ["ar", t("home.intake.language.ar")],
                          ]}
                          onChange={(value) =>
                            updateField(
                              "preferredLanguage",
                              value as CaseIntakeFormValues["preferredLanguage"],
                            )
                          }
                        />
                        <div>
                          <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
                            <input
                              type="checkbox"
                              checked={form.consent}
                              onChange={(event) => updateField("consent", event.target.checked)}
                              aria-invalid={Boolean(errors.consent)}
                              aria-describedby={errors.consent ? "consent-error" : undefined}
                              className="mt-1 h-4 w-4 accent-[var(--color-gold)]"
                            />
                            <span>{t("home.intake.consent")}</span>
                          </label>
                          <FieldError id="consent-error" message={errors.consent} />
                        </div>
                        <p className="text-xs leading-5 text-muted-foreground">
                          {t("home.intake.submitHelper")}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                    className="absolute left-[-9999px] h-px w-px opacity-0"
                    name="website"
                  />
                  <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gold/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={step === 1 || status === "submitting"}
                      className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold/20 px-5 text-sm text-muted-foreground transition-colors hover:border-gold/50 hover:text-ivory disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <BackIcon className="h-4 w-4" />
                      {t("home.intake.back")}
                    </button>
                    {step === 5 ? (
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-sm font-medium text-onyx shadow-glow transition-colors hover:bg-gold-soft disabled:cursor-wait disabled:opacity-70"
                      >
                        {status === "submitting" ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : null}
                        {status === "submitting"
                          ? t("home.intake.submitting")
                          : t("home.intake.submit")}
                        {status !== "submitting" ? <ContinueIcon className="h-4 w-4" /> : null}
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={continueStep}
                        className="inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 text-sm font-medium text-onyx shadow-glow transition-colors hover:bg-gold-soft"
                      >
                        {t("home.intake.continue")}
                        <ContinueIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

          <aside className="order-first lg:order-last">
            <div className="border border-gold/15 bg-charcoal/20 p-5 lg:sticky lg:top-32 lg:p-6">
              <div className="flex items-center gap-3 border-b border-gold/10 pb-5">
                <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-ivory">{t("home.intake.trustTitle")}</h3>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <TrustItem icon={ShieldCheck}>{t("home.intake.trust.1")}</TrustItem>
                <TrustItem icon={Clock3}>{t("home.intake.trust.2")}</TrustItem>
                <TrustItem icon={ShieldCheck}>{t("home.intake.trust.3")}</TrustItem>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ChoiceFieldset({
  legend,
  name,
  value,
  error,
  options,
  onChange,
}: {
  legend: string;
  name: string;
  value: string;
  error?: string;
  options: Array<[string, string, string?]>;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined}>
      <legend className="text-base font-medium leading-7 text-ivory">{legend}</legend>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map(([optionValue, title, description]) => (
          <ChoiceCard
            key={optionValue}
            id={`${name}-${optionValue}`}
            name={name}
            value={optionValue}
            title={title}
            description={description}
            checked={value === optionValue}
            onChange={() => onChange(optionValue)}
          />
        ))}
      </div>
      <FieldError id={`${name}-error`} message={error} />
    </fieldset>
  );
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  dir,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: "text" | "tel" | "email";
  dir?: "ltr" | "rtl";
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ivory">
        {label}
      </label>
      <input
        id={id}
        type={type}
        dir={dir}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-12 w-full border border-gold/20 bg-onyx/35 px-4 text-base text-ivory outline-none transition-colors placeholder:text-muted-foreground focus:border-gold/60 focus:ring-1 focus:ring-gold/50"
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function SuccessState({
  critical,
  whatsappUrl,
  onWhatsAppClick,
}: {
  critical: boolean;
  whatsappUrl: string;
  onWhatsAppClick: () => void;
}) {
  const { t } = useI18n();
  return (
    <div
      role="status"
      aria-live="polite"
      className="border border-gold/30 bg-charcoal/35 p-8 text-center shadow-luxe sm:p-12"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold">
        <Check className="h-7 w-7" />
      </div>
      <h3 className="mt-6 font-display text-3xl leading-tight text-ivory">
        {t("home.intake.success.title")}
      </h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
        {t("home.intake.success.description")}
      </p>
      <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-muted-foreground">
        {t("home.intake.success.disclaimer")}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-gold/25 px-6 text-sm text-ivory transition-colors hover:border-gold/60"
        >
          {t("home.intake.success.home")}
          <ChevronLeft className="h-4 w-4 rtl:hidden" />
          <ChevronRight className="hidden h-4 w-4 rtl:block" />
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsAppClick}
          className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 bg-[#25D366] px-6 text-sm font-medium text-onyx transition-colors hover:bg-[#55dd86]",
            critical && "ring-2 ring-[#25D366]/40 ring-offset-2 ring-offset-onyx",
          )}
        >
          <MessageCircle className="h-4 w-4" />
          {t("home.intake.success.whatsapp")}
        </a>
      </div>
    </div>
  );
}

function toPersianNumber(value: number) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}
