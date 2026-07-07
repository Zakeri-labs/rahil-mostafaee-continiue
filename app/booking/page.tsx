import type { Metadata } from "next";
import { Suspense } from "react";
import BookingPage from "./page-client";

export const metadata: Metadata = {
  title: "Book a Consultation — Rahil Mostafaee",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingPage />
    </Suspense>
  );
}
