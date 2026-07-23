import type { Metadata } from "next";
import CommercialDisputesPage from "@/app/iran-uae-commercial-disputes/page-client";
import { getSiteUrl } from "@/lib/seo/site-url";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildLegalServiceSchema,
} from "@/lib/seo/json-ld";

const pageTitle = "Complex Corporate and Commercial Disputes in the UAE";
const pageDescription =
  "Confidential initial review for complex corporate and commercial disputes, contractual claims, shareholder conflicts, and high-value receivables in the UAE.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${getSiteUrl()}/corporate-commercial-disputes` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    locale: "en_AE",
  },
};

const commercialFaqs = [
  {
    question: "Can a commercial dispute be reviewed without a written contract?",
    answer:
      "A written contract can make the review more straightforward, but correspondence, invoices, purchase orders, and other records may also support an initial assessment.",
  },
  {
    question: "What if the contract does not specify governing law or a court?",
    answer:
      "The applicable law and competent forum need to be assessed based on the contract, where obligations were performed, and other relevant factors.",
  },
  {
    question: "Is negotiation or a formal notice possible before litigation?",
    answer:
      "Depending on the matter, negotiation or a formal notice may be among the routes considered before more formal action.",
  },
  {
    question: "Does submitting the form mean accepting representation?",
    answer:
      "No. Sending information does not constitute acceptance of representation or create a professional-client relationship. The matter is reviewed first.",
  },
];

export default function Page() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/corporate-commercial-disputes`;

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
      <JsonLd data={buildFaqPageSchema(`${pageUrl}#faq`, commercialFaqs)} />
      <JsonLd
        data={buildBreadcrumbListSchema([
          { name: "Home", url: siteUrl },
          { name: "Corporate Commercial Disputes", url: pageUrl },
        ])}
      />
      <CommercialDisputesPage />
    </>
  );
}
