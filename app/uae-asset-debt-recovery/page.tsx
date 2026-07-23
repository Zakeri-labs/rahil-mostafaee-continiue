import type { Metadata } from "next";
import AssetDebtRecoveryPage from "./page-client";
import { getSiteUrl } from "@/lib/seo/site-url";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildLegalServiceSchema,
} from "@/lib/seo/json-ld";

const pageTitle = "UAE Debt and Asset Recovery for Corporate Matters";
const pageDescription =
  "Structured review of major receivables, disputed investments, asset tracing, and enforcement options for companies and corporate stakeholders in the UAE.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${getSiteUrl()}/uae-asset-debt-recovery` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    locale: "en_AE",
  },
};

const recoveryFaqs = [
  {
    question: "Is having a payment receipt enough for a review?",
    answer:
      "A payment receipt can be a useful starting point, but correspondence, counterparty details, and other records may also be needed for an initial assessment.",
  },
  {
    question: "What if there is no written contract?",
    answer:
      "The absence of a written contract makes the review more complex, but invoices, receipts, correspondence, or payment records can still be assessed.",
  },
  {
    question: "Is asset recovery or debt collection guaranteed?",
    answer:
      "No legal outcome is guaranteed. The initial review identifies possible routes based on the evidence, counterparty, and available asset information.",
  },
  {
    question: "Is negotiation possible before formal action?",
    answer:
      "Depending on the matter, negotiation or a formal notice may be among the routes considered before more formal action.",
  },
];

export default function Page() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/uae-asset-debt-recovery`;

  return (
    <>
      <JsonLd
        data={buildLegalServiceSchema({
          id: `${pageUrl}#legalservice`,
          name: pageTitle,
          description: pageDescription,
          url: pageUrl,
          siteUrl,
        })}
      />
      <JsonLd data={buildFaqPageSchema(`${pageUrl}#faq`, recoveryFaqs)} />
      <JsonLd
        data={buildBreadcrumbListSchema([
          { name: "Home", url: siteUrl },
          { name: "Asset and Debt Recovery", url: pageUrl },
        ])}
      />
      <AssetDebtRecoveryPage />
    </>
  );
}
