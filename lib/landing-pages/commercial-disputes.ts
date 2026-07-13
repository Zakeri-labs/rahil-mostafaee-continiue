import { LEADS_WHATSAPP_DISPLAY_NUMBER } from "@/lib/leads/config";
import type { FormOption } from "@/lib/leads/types";
import type { QualificationFormCopy } from "@/components/site/landing/QualificationForm";

type Translate = (key: string) => string;

// Stable, language-independent identifiers — these never change when the
// visitor switches language, so they stay usable for a future backend, CRM,
// or analytics/filtering. Order matches the existing cd.form.*.N i18n keys.
const MATTER_VALUES = [
  "breach-of-contract",
  "buyer-seller-dispute",
  "supplier-dispute",
  "agency-distribution-dispute",
  "shipping-delivery-dispute",
  "unpaid-commercial-claim",
  "jurisdiction-governing-law",
  "other-commercial-dispute",
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
  "contract",
  "invoices-payment-records",
  "purchase-order",
  "shipping-delivery-documents",
  "messages-emails",
  "formal-notices",
  "other-documents",
  "no-documents",
  "not-sure",
] as const;

function buildOptions(t: Translate, prefix: string, values: readonly string[]): FormOption[] {
  return values.map((value, index) => ({ value, label: t(`${prefix}.${index + 1}`) }));
}

export function getCommercialDisputesFormConfig(t: Translate, lang: "fa" | "en") {
  const formatNumber = (n: number) => (lang === "fa" ? n.toLocaleString("fa-IR") : String(n));

  const copy: QualificationFormCopy = {
    progressLabel: t("cd.form.progressLabel"),
    stepLabels: [t("cd.form.step1Label"), t("cd.form.step2Label")],
    fields: {
      fullName: { label: t("cd.form.field.fullName.label") },
      whatsappNumber: {
        label: t("cd.form.field.whatsapp.label"),
        placeholder: t("cd.form.field.whatsapp.placeholder"),
      },
      email: { label: t("cd.form.field.email.label") },
      matterType: { label: t("cd.form.field.matterType.label") },
      approximateAmount: { label: t("cd.form.field.amount.label") },
      counterpartyType: { label: t("cd.form.field.counterpartyType.label") },
      counterpartyLocation: {
        label: t("cd.form.field.counterpartyLocation.label"),
        placeholder: t("cd.form.field.counterpartyLocation.placeholder"),
      },
      urgency: { label: t("cd.form.field.urgency.label") },
      availableDocuments: { label: t("cd.form.field.documents.label") },
      lastContact: {
        label: t("cd.form.field.lastContact.label"),
        placeholder: t("cd.form.field.lastContact.placeholder"),
      },
      assetTransferOrEvidenceRisk: { label: t("cd.form.field.risk.label") },
      summary: {
        label: t("cd.form.field.summary.label"),
        placeholder: t("cd.form.field.summary.placeholder"),
        helperText: t("cd.form.field.summary.helperText"),
        counterSuffix: t("cd.form.field.summary.counterSuffix"),
      },
    },
    counterpartyTypeLabels: {
      person: t("cd.form.counterparty.person"),
      company: t("cd.form.counterparty.company"),
      unknown: t("cd.form.counterparty.unknown"),
    },
    riskLabels: {
      yes: t("cd.form.risk.yes"),
      no: t("cd.form.risk.no"),
      unknown: t("cd.form.risk.unknown"),
    },
    buttons: {
      continue: t("cd.form.button.continue"),
      back: t("cd.form.button.back"),
      submit: t("cd.form.button.submit"),
      editForm: t("cd.form.button.editForm"),
      tryAgain: t("cd.form.button.tryAgain"),
    },
    errors: {
      required: t("cd.form.error.required"),
      invalidEmail: t("cd.form.error.invalidEmail"),
      invalidPhone: t("cd.form.error.invalidPhone"),
      tooShort: t("cd.form.error.tooShort"),
      tooLong: t("cd.form.error.tooLong"),
    },
    privacyNotice: t("cd.form.privacyNotice"),
    success: {
      title: t("cd.form.success.title"),
      body: t("cd.form.success.body"),
      fallbackPrompt: t("cd.form.success.fallbackPrompt"),
    },
    error: {
      title: t("cd.form.state.error.title"),
      body: t("cd.form.state.error.body"),
    },
    destinationNumberLabel: `${t("cd.form.destinationPrefix")}: ${LEADS_WHATSAPP_DISPLAY_NUMBER}`,
    formatNumber,
  };

  return {
    copy,
    matterOptions: buildOptions(t, "cd.form.matter", MATTER_VALUES),
    amountOptions: buildOptions(t, "cd.form.amount", AMOUNT_VALUES),
    urgencyOptions: buildOptions(t, "cd.form.urgency", URGENCY_VALUES),
    documentOptions: buildOptions(t, "cd.form.document", DOCUMENT_VALUES),
  };
}
