import type { Metadata } from "next";
import InsightsPage from "./page-client";

export const metadata: Metadata = {
  title: "UAE Commercial Dispute and Asset Recovery Insights",
  description:
    "Practical educational insights for corporate and commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial matters.",
  openGraph: {
    title: "UAE Commercial Dispute and Asset Recovery Insights",
    description:
      "Practical educational insights for corporate and commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial matters.",
    locale: "en_AE",
  },
};

export default function Page() {
  return <InsightsPage />;
}
