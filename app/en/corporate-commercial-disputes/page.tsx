import CommercialDisputesPage from "@/app/iran-uae-commercial-disputes/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";

export const metadata = getPageMetadata("en", "commercialDisputes");

export default function Page() {
  return (
    <>
      <ServiceStructuredData locale="en" route="commercialDisputes" />
      <CommercialDisputesPage />
    </>
  );
}
