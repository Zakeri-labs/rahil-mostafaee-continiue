import type { Metadata } from "next";
import Home from "./page-client";

export const metadata: Metadata = {
  title: "Corporate and Commercial Legal Consultant in Dubai",
  description:
    "Strategic legal assessment for complex commercial disputes, major claims, shareholder conflicts and asset recovery for businesses and investors in the UAE.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
    description:
      "Strategic legal assessment for corporations, business groups, shareholders and institutional investors handling complex commercial disputes, major claims and asset recovery matters in the UAE.",
    url: "/",
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return <Home />;
}
