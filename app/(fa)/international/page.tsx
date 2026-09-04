import InternationalPage from "@/app/international/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("fa", "international");

export default function Page() {
  return <InternationalPage />;
}
