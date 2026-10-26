import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceLanding } from "@/components/site/landing/service/ServiceLanding";
import heroImage from "@/assets/uae-asset-debt-recovery-hero.webp";
import { assetDebtRecoveryContent } from "@/lib/landing-pages/asset-debt-recovery-content";
import { getServiceLandingSchemas } from "@/lib/seo/service-landing-schema";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("fa", "assetRecovery");

const content = assetDebtRecoveryContent.fa;

export default function Page() {
  const schemas = getServiceLandingSchemas({
    locale: "fa",
    route: "assetRecovery",
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
