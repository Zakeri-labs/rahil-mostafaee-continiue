import type { Metadata } from "next";
import AboutPage from "./page-client";

export const metadata: Metadata = {
  title: "About the Corporate and Commercial Legal Practice",
  description:
    "Focused legal assessment for corporations, business groups, shareholders and institutional investors dealing with UAE commercial disputes, major claims and asset recovery matters.",
  openGraph: {
    title: "About the Corporate and Commercial Legal Practice",
    description:
      "Focused legal assessment for corporations, business groups, shareholders and institutional investors dealing with UAE commercial disputes, major claims and asset recovery matters.",
    locale: "en_AE",
  },
};

export default function Page() {
  return <AboutPage />;
}
