import { LEADS_WHATSAPP_DISPLAY_NUMBER } from "@/lib/leads/config";
import type { FormOption } from "@/lib/leads/types";
import type { QualificationFormCopy } from "@/components/site/landing/QualificationForm";

type Translate = (key: string) => string;

// Stable, language-independent identifiers — these never change when the
// visitor switches language, so they stay usable for a future backend, CRM,
// or analytics/filtering. Order matches the adr.form.*.N i18n keys.
const MATTER_VALUES = [
  "unpaid-commercial-invoice",
  "commercial-debt",
  "private-financial-obligation",
  "failed-investment",
  "suspected-investment-fraud",
  "partner-fund-misuse",
  "asset-tracing",
  "judgment-enforcement",
  "settlement-enforcement",
  "other-recovery-matter",
  "not-sure",
] as const;

const AMOUNT_VALUES = [
  "under-50000-aed",
  "50000-200000-aed",
  "200000-1000000-aed",
  "over-1000000-aed",
  "not-sure",
  "prefer-not-to-state",
] as const;

const URGENCY_VALUES = [
  "immediate",
  "within-days",
  "within-weeks",
  "no-immediate-deadline",
  "not-sure",
] as const;

const DOCUMENT_VALUES = [
  "contract-agreement",
  "invoices",
  "payment-receipts",
  "bank-transfer-records",
  "messages-emails",
  "company-details",
  "formal-notices",
  "judgment-settlement",
  "asset-information",
  "other-documents",
  "no-documents",
  "not-sure",
] as const;

function buildOptions(t: Translate, prefix: string, values: readonly string[]): FormOption[] {
  return values.map((value, index) => ({ value, label: t(`${prefix}.${index + 1}`) }));
}

export function getAssetDebtRecoveryFormConfig(t: Translate, lang: "fa" | "en") {
  const formatNumber = (n: number) => (lang === "fa" ? n.toLocaleString("fa-IR") : String(n));

  const copy: QualificationFormCopy = {
    progressLabel: t("adr.form.progressLabel"),
    stepLabels: [t("adr.form.step1Label"), t("adr.form.step2Label")],
    fields: {
      fullName: { label: t("adr.form.field.fullName.label") },
      whatsappNumber: {
        label: t("adr.form.field.whatsapp.label"),
        placeholder: t("adr.form.field.whatsapp.placeholder"),
      },
      email: { label: t("adr.form.field.email.label") },
      matterType: { label: t("adr.form.field.matterType.label") },
      approximateAmount: { label: t("adr.form.field.amount.label") },
      counterpartyType: { label: t("adr.form.field.counterpartyType.label") },
      counterpartyLocation: {
        label: t("adr.form.field.counterpartyLocation.label"),
        placeholder: t("adr.form.field.counterpartyLocation.placeholder"),
      },
      urgency: { label: t("adr.form.field.urgency.label") },
      availableDocuments: { label: t("adr.form.field.documents.label") },
      lastContact: {
        label: t("adr.form.field.lastContact.label"),
        placeholder: t("adr.form.field.lastContact.placeholder"),
      },
      assetTransferOrEvidenceRisk: { label: t("adr.form.field.risk.label") },
      summary: {
        label: t("adr.form.field.summary.label"),
        placeholder: t("adr.form.field.summary.placeholder"),
        helperText: t("adr.form.field.summary.helperText"),
        counterSuffix: t("adr.form.field.summary.counterSuffix"),
      },
    },
    counterpartyTypeLabels: {
      person: t("adr.form.counterparty.person"),
      company: t("adr.form.counterparty.company"),
      unknown: t("adr.form.counterparty.unknown"),
    },
    riskLabels: {
      yes: t("adr.form.risk.yes"),
      no: t("adr.form.risk.no"),
      unknown: t("adr.form.risk.unknown"),
    },
    buttons: {
      continue: t("adr.form.button.continue"),
      back: t("adr.form.button.back"),
      submit: t("adr.form.button.submit"),
      editForm: t("adr.form.button.editForm"),
      tryAgain: t("adr.form.button.tryAgain"),
    },
    errors: {
      required: t("adr.form.error.required"),
      invalidEmail: t("adr.form.error.invalidEmail"),
      invalidPhone: t("adr.form.error.invalidPhone"),
      tooShort: t("adr.form.error.tooShort"),
      tooLong: t("adr.form.error.tooLong"),
    },
    privacyNotice: t("adr.form.privacyNotice"),
    success: {
      title: t("adr.form.success.title"),
      body: t("adr.form.success.body"),
      fallbackPrompt: t("adr.form.success.fallbackPrompt"),
    },
    error: {
      title: t("adr.form.state.error.title"),
      body: t("adr.form.state.error.body"),
    },
    destinationNumberLabel: `${t("adr.form.destinationPrefix")}: ${LEADS_WHATSAPP_DISPLAY_NUMBER}`,
    formatNumber,
  };

  return {
    copy,
    matterOptions: buildOptions(t, "adr.form.matter", MATTER_VALUES),
    amountOptions: buildOptions(t, "adr.form.amount", AMOUNT_VALUES),
    urgencyOptions: buildOptions(t, "adr.form.urgency", URGENCY_VALUES),
    documentOptions: buildOptions(t, "adr.form.document", DOCUMENT_VALUES),
  };
}
