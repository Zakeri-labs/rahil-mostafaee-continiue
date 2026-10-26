import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceLanding } from "@/components/site/landing/service/ServiceLanding";
import heroImage from "@/assets/commercial-disputes-hero.webp";
import { commercialDisputesContent } from "@/lib/landing-pages/commercial-disputes-content";
import { getServiceLandingSchemas } from "@/lib/seo/service-landing-schema";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("fa", "commercialDisputes");

const content = commercialDisputesContent.fa;

export default function Page() {
  const schemas = getServiceLandingSchemas({
    locale: "fa",
    route: "commercialDisputes",
    content,
    imageUrl: heroImage.src,
  });

  return (
    <>
      {schemas.map((schema) => (
        <JsonLd key={schema["@type"]} data={schema} />
      ))}
      <ServiceLanding content={content} locale="fa" heroImage={heroImage} />
    </>
  );
}
