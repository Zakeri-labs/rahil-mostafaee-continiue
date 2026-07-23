import type { Metadata } from "next";
import { Suspense } from "react";
import BookingPage from "./page-client";

export const metadata: Metadata = {
  title: "Book a Consultation — Rahil Mostafaei",
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
