import type { Metadata } from "next";
import CommercialDisputesPage from "./page-client";

export const metadata: Metadata = {
  title: "وکیل اختلافات تجاری ایران–امارات | راحیل مصطفایی",
  description:
    "بررسی محرمانه اختلافات قراردادی و تجاری میان ایران و امارات، از جمله اختلاف خریدار، فروشنده، تأمین‌کننده، نمایندگی و اجرای تعهدات. ارسال پیام به معنی پذیرش نمایندگی نیست.",
  openGraph: {
    title: "وکیل اختلافات تجاری ایران–امارات | راحیل مصطفایی",
    description:
      "بررسی محرمانه اختلافات قراردادی و تجاری میان ایران و امارات، از جمله اختلاف خریدار، فروشنده، تأمین‌کننده، نمایندگی و اجرای تعهدات. ارسال پیام به معنی پذیرش نمایندگی نیست.",
  },
};

export default function Page() {
  return <CommercialDisputesPage />;
}
