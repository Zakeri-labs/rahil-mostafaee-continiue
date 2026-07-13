import type { Metadata } from "next";
import Home from "./page-client";

export const metadata: Metadata = {
  title: "Rahil Mostafaei",
  description:
    "Legal support for Iran-UAE commercial disputes, debt recovery, asset recovery, partner disputes, and financial claims involving the UAE.",
  openGraph: {
    title: "Rahil Mostafaei",
    description:
      "Legal support for Iran-UAE commercial disputes, debt recovery, asset recovery, partner disputes, and financial claims involving the UAE.",
  },
};

export default function Page() {
  return <Home />;
}
