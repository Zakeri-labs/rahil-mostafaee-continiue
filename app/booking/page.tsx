import type { Metadata } from "next";
import { Suspense } from "react";
import BookingPage from "./page-client";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a confidential consultation with Rahil Mostafaei to discuss commercial disputes, asset recovery, shareholder conflicts, and cross-border matters in the UAE.",
  alternates: { canonical: "/booking" },
  openGraph: { locale: "en_AE" },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingPage />
    </Suspense>
  );
}
