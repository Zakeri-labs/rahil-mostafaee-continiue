import CommercialDisputesPage from "@/app/iran-uae-commercial-disputes/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";

export const metadata = getPageMetadata("fa", "commercialDisputes");

export default function Page() {
  return (
    <>
      <ServiceStructuredData locale="fa" route="commercialDisputes" />
      <CommercialDisputesPage />
    </>
  );
}
