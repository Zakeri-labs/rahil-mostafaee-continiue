import ConsultationBookingPage from "@/app/legal-consultation-booking/page-client";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("fa", "consultationBooking");

export default function Page() {
  return (
    <>
      <ServiceStructuredData locale="fa" route="consultationBooking" />
      <ConsultationBookingPage />
    </>
  );
}
