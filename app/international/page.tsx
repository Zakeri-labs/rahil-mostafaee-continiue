import type { Metadata } from "next";
import InternationalPage from "./page-client";

export const metadata: Metadata = {
  title: "Cross-Border Commercial Disputes and Corporate Matters",
  description:
    "Cross-border legal assessment for multi-jurisdiction contracts, payments, corporate disputes, asset location, governing law and enforcement strategy.",
  alternates: { canonical: "/international" },
  openGraph: {
    title: "Cross-Border Commercial Disputes and Corporate Matters",
    description:
      "Cross-border legal assessment for multi-jurisdiction contracts, payments, corporate disputes, asset location, governing law and enforcement strategy.",
    url: "/international",
    type: "website",
    siteName: "Rahil Mostafaei",
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Commercial Disputes and Corporate Matters",
    description:
      "Cross-border legal assessment for multi-jurisdiction contracts, payments, corporate disputes, asset location, governing law and enforcement strategy.",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return <InternationalPage />;
}
