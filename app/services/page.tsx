import type { Metadata } from "next";
import ServicesPage from "./page-client";

export const metadata: Metadata = {
  title: "Corporate and Commercial Legal Services in the UAE",
  description:
    "Legal services for complex corporate and commercial disputes, asset recovery, major debt and receivables recovery, shareholder conflicts and cross-border matters in the UAE.",
  openGraph: {
    title: "Corporate and Commercial Legal Services in the UAE",
    description:
      "Legal services for complex corporate and commercial disputes, asset recovery, major debt and receivables recovery, shareholder conflicts and cross-border matters in the UAE.",
    locale: "en_AE",
  },
};

export default function Page() {
  return <ServicesPage />;
}
