import type { Metadata } from "next";
import ContactPage from "./page-client";

export const metadata: Metadata = {
  title: "Confidential Commercial Dispute and Asset Recovery Case Review in the UAE",
  description:
    "Submit a confidential matter review for UAE commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial claims.",
  openGraph: {
    title: "Confidential Corporate and Commercial Case Review in the UAE",
    description:
      "Submit a confidential matter review for UAE commercial disputes, major receivables, asset recovery, shareholder conflicts and cross-border financial claims.",
    locale: "en_AE",
  },
};

export default function Page() {
  return <ContactPage />;
}
