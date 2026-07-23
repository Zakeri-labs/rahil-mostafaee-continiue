import type { Metadata } from "next";
import InternationalPage from "./page-client";

export const metadata: Metadata = {
  title: "Cross-Border Commercial Disputes and Corporate Matters",
  description:
    "Cross-border legal assessment for multi-jurisdiction contracts, payments, corporate disputes, asset location, governing law and enforcement strategy.",
  openGraph: {
    title: "Cross-Border Commercial Disputes and Corporate Matters",
    description:
      "Cross-border legal assessment for multi-jurisdiction contracts, payments, corporate disputes, asset location, governing law and enforcement strategy.",
    locale: "en_AE",
  },
};

export default function Page() {
  return <InternationalPage />;
}
