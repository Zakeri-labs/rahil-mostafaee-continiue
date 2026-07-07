import type { Metadata } from "next";
import ServicesPage from "./page-client";

export const metadata: Metadata = {
  title: "Commercial Dispute and Asset Recovery Legal Services in the UAE",
  description:
    "Legal services for Iran-UAE commercial disputes, asset recovery, debt recovery, partner disputes, and financial claims involving the UAE.",
  openGraph: {
    title: "Commercial Dispute and Asset Recovery Legal Services in the UAE",
    description:
      "Legal services for Iran-UAE commercial disputes, asset recovery, debt recovery, partner disputes, and financial claims involving the UAE.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
