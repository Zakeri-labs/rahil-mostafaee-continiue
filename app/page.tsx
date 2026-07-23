import type { Metadata } from "next";
import Home from "./page-client";

export const metadata: Metadata = {
  title: "Corporate and Commercial Legal Consultant in Dubai",
  description:
    "Strategic legal assessment for corporations, business groups, shareholders and institutional investors handling complex commercial disputes, major claims and asset recovery matters in the UAE.",
  openGraph: {
    title: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
    description:
      "Strategic legal assessment for corporations, business groups, shareholders and institutional investors handling complex commercial disputes, major claims and asset recovery matters in the UAE.",
    locale: "en_AE",
  },
};

export default function Page() {
  return <Home />;
}
