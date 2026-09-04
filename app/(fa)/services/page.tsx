import ServicesPage from "@/app/services/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("fa", "services");

export default function Page() {
  return <ServicesPage />;
}
