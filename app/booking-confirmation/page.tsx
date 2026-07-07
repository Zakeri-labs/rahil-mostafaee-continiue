import type { Metadata } from "next";
import { Suspense } from "react";
import ConfirmationPage from "./page-client";

export const metadata: Metadata = {
  title: "Booking Confirmation — Rahil Mostafaee",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ConfirmationPage />
    </Suspense>
  );
}
