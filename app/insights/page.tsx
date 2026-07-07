import type { Metadata } from "next";
import InsightsPage from "./page-client";

export const metadata: Metadata = {
  title: "UAE Commercial Dispute and Asset Recovery Insights",
  description:
    "Practical educational insights for commercial disputes, debt recovery, asset recovery, partner disputes, and Iran-UAE financial claims.",
  openGraph: {
    title: "UAE Commercial Dispute and Asset Recovery Insights",
    description:
      "Practical educational insights for commercial disputes, debt recovery, asset recovery, partner disputes, and Iran-UAE financial claims.",
  },
};

export default function Page() {
  return <InsightsPage />;
}
