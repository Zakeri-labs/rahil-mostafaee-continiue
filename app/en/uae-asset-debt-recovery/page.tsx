import AssetDebtRecoveryPage from "@/app/uae-asset-debt-recovery/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";

export const metadata = getPageMetadata("en", "assetRecovery");

export default function Page() {
  return (
    <>
      <ServiceStructuredData locale="en" route="assetRecovery" />
      <AssetDebtRecoveryPage />
    </>
  );
}
