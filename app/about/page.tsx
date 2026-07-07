import type { Metadata } from "next";
import AboutPage from "./page-client";

export const metadata: Metadata = {
  title: "About Our Iran-UAE Commercial Dispute and Asset Recovery Approach",
  description:
    "Focused legal support for Persian-speaking clients dealing with UAE commercial disputes, financial claims, debt recovery, and asset recovery matters.",
  openGraph: {
    title: "About Our Iran-UAE Commercial Dispute and Asset Recovery Approach",
    description:
      "Focused legal support for Persian-speaking clients dealing with UAE commercial disputes, financial claims, debt recovery, and asset recovery matters.",
  },
};

export default function Page() {
  return <AboutPage />;
}
