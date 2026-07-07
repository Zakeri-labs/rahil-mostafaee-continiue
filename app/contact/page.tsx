import type { Metadata } from "next";
import ContactPage from "./page-client";

export const metadata: Metadata = {
  title: "Confidential Commercial Dispute and Asset Recovery Case Review in the UAE",
  description:
    "Submit a confidential matter review for UAE commercial disputes, debt recovery, asset recovery, partner disputes, and Iran-UAE financial claims.",
  openGraph: {
    title: "بررسی پرونده تجاری و مالی در امارات | اختلافات تجاری و بازیابی دارایی",
    description:
      "ارسال محرمانه پرونده برای بررسی اختلاف تجاری، وصول مطالبات، بازیابی دارایی، اختلاف شریک یا پرونده مالی ایران و امارات.",
  },
};

export default function Page() {
  return <ContactPage />;
}
