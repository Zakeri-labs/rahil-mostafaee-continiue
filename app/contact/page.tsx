import type { Metadata } from "next";
import ContactPage from "./page-client";

export const metadata: Metadata = {
  title: "Confidential Commercial Dispute and Asset Recovery Case Review in the UAE",
  description:
    "Submit a confidential matter review for UAE commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial claims.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Confidential Corporate and Commercial Case Review in the UAE",
    description:
      "Submit a confidential matter review for UAE commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial claims.",
    url: "/contact",
    type: "website",
    siteName: "Rahil Mostafaei",
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return <ContactPage />;
}
