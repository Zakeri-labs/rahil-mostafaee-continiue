import type { Metadata } from "next";
import { Suspense } from "react";
import BookingPage from "./page-client";

export const metadata: Metadata = {
  title: "Book a Consultation — Rahil Mostafaei",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingPage />
    </Suspense>
  );
}
