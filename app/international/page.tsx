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
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return <InternationalPage />;
}
