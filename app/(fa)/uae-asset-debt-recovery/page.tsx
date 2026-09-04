import AssetDebtRecoveryPage from "@/app/uae-asset-debt-recovery/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";
import { ServiceStructuredData } from "@/components/seo/ServiceStructuredData";

export const metadata = getPageMetadata("fa", "assetRecovery");

export default function Page() {
  return (
    <>
      <ServiceStructuredData locale="fa" route="assetRecovery" />
      <AssetDebtRecoveryPage />
    </>
  );
}
