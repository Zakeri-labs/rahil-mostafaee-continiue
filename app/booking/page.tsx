import type { Metadata } from "next";
import { Suspense } from "react";
import BookingPage from "./page-client";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a confidential consultation with Rahil Mostafaei to discuss commercial disputes, asset recovery, shareholder conflicts, and cross-border matters in the UAE.",
  alternates: { canonical: "/booking" },
  openGraph: {
    url: "/booking",
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingPage />
    </Suspense>
  );
}
