import InternationalPage from "@/app/international/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("en", "international");

export default function Page() {
  return <InternationalPage />;
}
