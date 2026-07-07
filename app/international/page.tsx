import type { Metadata } from "next";
import InternationalPage from "./page-client";

export const metadata: Metadata = {
  title: "Iran-UAE Commercial and Financial Disputes",
  description:
    "Cross-border legal coordination for Iran-UAE commercial disputes, financial claims, partner disputes, and asset recovery matters.",
  openGraph: {
    title: "Iran-UAE Commercial and Financial Disputes",
    description:
      "Cross-border legal coordination for Iran-UAE commercial disputes, financial claims, partner disputes, and asset recovery matters.",
  },
};

export default function Page() {
  return <InternationalPage />;
}
