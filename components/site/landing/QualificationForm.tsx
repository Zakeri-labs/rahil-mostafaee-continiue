"use client";

import { useState } from "react";
import { useForm, type Path, type SubmitHandler, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  leadFormSchema,
  step1Fields,
  SUMMARY_MAX_LENGTH,
  type LeadFormValues,
} from "@/lib/leads/schema";
import type {
  CounterpartyType,
  FormOption,
  LeadPageType,
  LeadSubmissionAdapter,
  LeadSubmissionResult,
  RiskAnswer,
} from "@/lib/leads/types";

export type QualificationFormCopy = {
  progressLabel: string;
  stepLabels: [string, string];
  fields: {
    fullName: { label: string; placeholder?: string };
    whatsappNumber: { label: string; placeholder?: string };
    email: { label: string; placeholder?: string };
    matterType: { label: string; placeholder?: string };
    approximateAmount: { label: string; placeholder?: string };
    counterpartyType: { label: string };
    counterpartyLocation: { label: string; placeholder?: string };
    urgency: { label: string; placeholder?: string };
    availableDocuments: { label: string };
    lastContact: { label: string; placeholder?: string };
    assetTransferOrEvidenceRisk: { label: string };
    summary: { label: string; placeholder?: string; helperText?: string; counterSuffix: string };
  };
  counterpartyTypeLabels: Record<CounterpartyType, string>;
  riskLabels: Record<RiskAnswer, string>;
  buttons: { continue: string; back: string; submit: string; editForm: string; tryAgain: string };
  errors: {
    required: string;
    invalidEmail: string;
    invalidPhone: string;
    tooShort: string;
    tooLong: string;
  };
  privacyNotice: string;
  success: { title: string; body: string; fallbackPrompt: string };
  error: { title: string; body: string };
  destinationNumberLabel: string;
  formatNumber?: (value: number) => string;
};

type QualificationFormProps = {
  pageType: LeadPageType;
  language: "fa" | "en";
  copy: QualificationFormCopy;
  matterOptions: FormOption[];
  amountOptions: FormOption[];
  urgencyOptions: FormOption[];
  documentOptions: FormOption[];
  counterpartyLocationOptions?: FormOption[];
  submissionAdapter: LeadSubmissionAdapter;
  className?: string;
};

function resolveErrorMessage(code: string | undefined, copy: QualificationFormCopy) {
  if (!code) return undefined;
  switch (code) {
    case "invalidEmail":
      return copy.errors.invalidEmail;
    case "invalidPhone":
      return copy.errors.invalidPhone;
    case "tooShort":
      return copy.errors.tooShort;
    case "tooLong":
      return copy.errors.tooLong;
    default:
      return copy.errors.required;
  }
}

export function QualificationForm({
  pageType,
  language,
  copy,
  matterOptions,
  amountOptions,
  urgencyOptions,
  documentOptions,
  counterpartyLocationOptions,
  submissionAdapter,
  className,
}: QualificationFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [result, setResult] = useState<LeadSubmissionResult | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      whatsappNumber: "",
      email: "",
      matterType: "",
      approximateAmount: "",
      counterpartyType: "unknown",
      counterpartyLocation: "",
      urgency: "",
      availableDocuments: [],
      lastContact: "",
      assetTransferOrEvidenceRisk: "unknown",
      summary: "",
    },
  });

  const formatNumber = copy.formatNumber ?? ((n: number) => String(n));
  const summaryValue = watch("summary") ?? "";

  const goToStep2 = async () => {
    const valid = await trigger(step1Fields);
    if (valid) setStep(2);
  };

  const onSubmit: SubmitHandler<LeadFormValues> = async (values) => {
    setStatus("submitting");
    const submissionResult = await submissionAdapter({
      ...values,
      sourcePage: pageType,
      language,
    });
    setResult(submissionResult);
    setStatus(submissionResult.ok ? "success" : "error");
  };

  const resetToIdle = () => {
    setStatus("idle");
    setResult(null);
  };

  if (status === "success" && result?.ok) {
    return (
      <div
        role="status"
        className={cn("glass-strong p-10 lg:p-12 shadow-luxe text-center space-y-6", className)}
      >
        <div className="font-display text-3xl lg:text-4xl text-ivory">{copy.success.title}</div>
        <p className="mx-auto max-w-md text-muted-foreground leading-relaxed">
          {copy.success.body}
        </p>
        {result.fallbackUrl && (
          <a
            href={result.fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.22em] uppercase font-medium">
              {copy.success.fallbackPrompt}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
        <p className="text-sm text-muted-foreground">{copy.destinationNumberLabel}</p>
        <button
          type="button"
          onClick={resetToIdle}
          className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-soft transition-colors"
        >
          {copy.buttons.editForm}
        </button>
      </div>
    );
  }

  if (status === "error" && result && !result.ok) {
    return (
      <div
        role="status"
        className={cn("glass-strong p-10 lg:p-12 shadow-luxe text-center space-y-6", className)}
      >
        <div className="font-display text-3xl lg:text-4xl text-ivory">{copy.error.title}</div>
        <p className="mx-auto max-w-md text-muted-foreground leading-relaxed">{copy.error.body}</p>
        {result.fallbackUrl && (
          <a
            href={result.fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.22em] uppercase font-medium">
              {copy.buttons.tryAgain}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
        <p className="text-sm text-muted-foreground">{copy.destinationNumberLabel}</p>
        <button
          type="button"
          onClick={resetToIdle}
          className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-soft transition-colors"
        >
          {copy.buttons.editForm}
        </button>
      </div>
    );
  }

  return (
    <div className={cn("glass-strong p-10 lg:p-12 shadow-luxe space-y-8", className)}>
      <ProgressSteps
        step={step}
        labels={copy.stepLabels}
        progressLabel={copy.progressLabel}
        formatNumber={formatNumber}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-busy={status === "submitting"}
        className="space-y-6"
      >
        {step === 1 && (
          <div className="space-y-6">
            <TextField
              name="fullName"
              label={copy.fields.fullName.label}
              placeholder={copy.fields.fullName.placeholder}
              register={register}
              error={resolveErrorMessage(errors.fullName?.message, copy)}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <TextField
                name="whatsappNumber"
                type="tel"
                label={copy.fields.whatsappNumber.label}
                placeholder={copy.fields.whatsappNumber.placeholder}
                register={register}
                error={resolveErrorMessage(errors.whatsappNumber?.message, copy)}
              />
              <TextField
                name="email"
                type="email"
                label={copy.fields.email.label}
                placeholder={copy.fields.email.placeholder}
                register={register}
                error={resolveErrorMessage(errors.email?.message, copy)}
              />
            </div>
            <SelectField
              name="matterType"
              label={copy.fields.matterType.label}
              options={matterOptions}
              register={register}
              error={resolveErrorMessage(errors.matterType?.message, copy)}
            />
            <SelectField
              name="approximateAmount"
              label={copy.fields.approximateAmount.label}
              options={amountOptions}
              register={register}
              error={resolveErrorMessage(errors.approximateAmount?.message, copy)}
            />
            <RadioGroupField
              name="counterpartyType"
              legend={copy.fields.counterpartyType.label}
              options={[
                { value: "person", label: copy.counterpartyTypeLabels.person },
                { value: "company", label: copy.counterpartyTypeLabels.company },
                { value: "unknown", label: copy.counterpartyTypeLabels.unknown },
              ]}
              register={register}
              error={resolveErrorMessage(errors.counterpartyType?.message, copy)}
            />
            {counterpartyLocationOptions ? (
              <SelectField
                name="counterpartyLocation"
                label={copy.fields.counterpartyLocation.label}
                options={counterpartyLocationOptions}
                register={register}
                error={resolveErrorMessage(errors.counterpartyLocation?.message, copy)}
              />
            ) : (
              <TextField
                name="counterpartyLocation"
                label={copy.fields.counterpartyLocation.label}
                placeholder={copy.fields.counterpartyLocation.placeholder}
                register={register}
                error={resolveErrorMessage(errors.counterpartyLocation?.message, copy)}
              />
            )}

            <button
              type="button"
              onClick={goToStep2}
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {copy.buttons.continue}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <SelectField
              name="urgency"
              label={copy.fields.urgency.label}
              options={urgencyOptions}
              register={register}
              error={resolveErrorMessage(errors.urgency?.message, copy)}
            />
            <CheckboxGroupField
              name="availableDocuments"
              legend={copy.fields.availableDocuments.label}
              options={documentOptions}
              register={register}
              error={resolveErrorMessage(errors.availableDocuments?.message, copy)}
            />
            <TextField
              name="lastContact"
              label={copy.fields.lastContact.label}
              placeholder={copy.fields.lastContact.placeholder}
              register={register}
              error={resolveErrorMessage(errors.lastContact?.message, copy)}
            />
            <RadioGroupField
              name="assetTransferOrEvidenceRisk"
              legend={copy.fields.assetTransferOrEvidenceRisk.label}
              options={[
                { value: "yes", label: copy.riskLabels.yes },
                { value: "no", label: copy.riskLabels.no },
                { value: "unknown", label: copy.riskLabels.unknown },
              ]}
              register={register}
              error={resolveErrorMessage(errors.assetTransferOrEvidenceRisk?.message, copy)}
            />
            <TextAreaField
              name="summary"
              label={copy.fields.summary.label}
              placeholder={copy.fields.summary.placeholder}
              helperText={copy.fields.summary.helperText}
              register={register}
              error={resolveErrorMessage(errors.summary?.message, copy)}
              counter={`${formatNumber(summaryValue.length)}/${formatNumber(SUMMARY_MAX_LENGTH)} ${copy.fields.summary.counterSuffix}`}
            />

            <p className="text-[10px] tracking-wider text-muted-foreground leading-relaxed">
              {copy.privacyNotice}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto px-8 py-5 hairline text-ivory hover:border-gold/40 transition-colors text-xs tracking-[0.2em] uppercase"
              >
                {copy.buttons.back}
              </button>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow disabled:opacity-60"
              >
                <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                  {copy.buttons.submit}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function ProgressSteps({
  step,
  labels,
  progressLabel,
  formatNumber,
}: {
  step: 1 | 2;
  labels: [string, string];
  progressLabel: string;
  formatNumber: (n: number) => string;
}) {
  return (
    <ol aria-label={progressLabel} className="flex items-center gap-3">
      {labels.map((label, index) => {
        const stepNumber = index + 1;
        const isCurrent = stepNumber === step;
        return (
          <li
            key={label}
            aria-current={isCurrent ? "step" : undefined}
            className={cn(
              "flex items-center gap-2 border px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors",
              isCurrent ? "border-gold/60 text-gold" : "border-gold/15 text-muted-foreground",
            )}
          >
            <span className="font-mono">{formatNumber(stepNumber)}</span>
            <span>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

function TextField({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
}: {
  name: Path<LeadFormValues>;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<LeadFormValues>;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-required="true"
        {...register(name)}
        className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50"
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  register,
  error,
}: {
  name: Path<LeadFormValues>;
  label: string;
  options: FormOption[];
  register: UseFormRegister<LeadFormValues>;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
      >
        {label}
      </label>
      <select
        id={name}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-required="true"
        defaultValue=""
        {...register(name)}
        className="mt-2 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory"
      >
        <option value="" disabled className="bg-onyx">
          {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-onyx">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function TextAreaField({
  name,
  label,
  placeholder,
  helperText,
  register,
  error,
  counter,
}: {
  name: Path<LeadFormValues>;
  label: string;
  placeholder?: string;
  helperText?: string;
  register: UseFormRegister<LeadFormValues>;
  error?: string;
  counter: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label
          htmlFor={name}
          className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words"
        >
          {label}
        </label>
        <span className="text-[10px] text-muted-foreground shrink-0">{counter}</span>
      </div>
      {helperText && (
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{helperText}</p>
      )}
      <textarea
        id={name}
        rows={5}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-required="true"
        maxLength={SUMMARY_MAX_LENGTH}
        {...register(name)}
        className="mt-3 w-full bg-charcoal/50 border border-gold/15 focus:border-gold/50 outline-none px-4 py-3 text-ivory placeholder:text-muted-foreground/50 resize-none"
      />
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function RadioGroupField({
  name,
  legend,
  options,
  register,
  error,
}: {
  name: "counterpartyType" | "assetTransferOrEvidenceRisk";
  legend: string;
  options: FormOption[];
  register: UseFormRegister<LeadFormValues>;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined} aria-invalid={!!error}>
      <legend className="mb-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words">
        {legend}
      </legend>
      <div className="grid sm:grid-cols-3 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 border border-gold/15 px-4 py-3 text-sm text-ivory cursor-pointer hover:border-gold/40 transition-colors"
          >
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="h-4 w-4 accent-[var(--gold)]"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function CheckboxGroupField({
  name,
  legend,
  options,
  register,
  error,
}: {
  name: "availableDocuments";
  legend: string;
  options: FormOption[];
  register: UseFormRegister<LeadFormValues>;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <fieldset aria-describedby={error ? errorId : undefined} aria-invalid={!!error}>
      <legend className="mb-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground break-words">
        {legend}
      </legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-3 border border-gold/15 px-4 py-3 text-sm text-ivory cursor-pointer hover:border-gold/40 transition-colors"
          >
            <input
              type="checkbox"
              value={option.value}
              {...register(name)}
              className="h-4 w-4 accent-[var(--gold)]"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </fieldset>
  );
}
