import type { Metadata } from "next";
import ServicesPage from "./page-client";

export const metadata: Metadata = {
  title: "Corporate and Commercial Legal Services in the UAE",
  description:
    "Legal services for complex corporate and commercial disputes, asset recovery, major debt and receivables recovery, shareholder conflicts and cross-border matters in the UAE.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Corporate and Commercial Legal Services in the UAE",
    description:
      "Legal services for complex corporate and commercial disputes, asset recovery, major debt and receivables recovery, shareholder conflicts and cross-border matters in the UAE.",
    url: "/services",
    type: "website",
    siteName: "Rahil Mostafaei",
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate and Commercial Legal Services in the UAE",
    description:
      "Legal services for complex corporate and commercial disputes, asset recovery, major debt and receivables recovery, shareholder conflicts and cross-border matters in the UAE.",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return <ServicesPage />;
}
