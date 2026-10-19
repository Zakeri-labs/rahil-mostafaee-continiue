import ConsultationBookingPage from "@/app/legal-consultation-booking/page-client";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("en", "consultationBooking");

export default function Page() {
  return (
    <>
      <ServiceStructuredData locale="en" route="consultationBooking" />
      <ConsultationBookingPage />
    </>
  );
}
