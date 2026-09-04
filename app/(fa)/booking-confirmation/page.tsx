import { getBookingMetadata } from "@/lib/seo/page-metadata";
import { Suspense } from "react";
import ConfirmationPage from "@/app/booking-confirmation/page-client";

export const metadata = {
  ...getBookingMetadata("confirmation"),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ConfirmationPage />
    </Suspense>
  );
}
