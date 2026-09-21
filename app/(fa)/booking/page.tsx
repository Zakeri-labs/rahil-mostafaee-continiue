import { getBookingMetadata } from "@/lib/seo/page-metadata";
import { Suspense } from "react";
import BookingPage from "@/app/booking/page-client";

export const metadata = {
  ...getBookingMetadata("booking"),
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookingPage />
    </Suspense>
  );
}
