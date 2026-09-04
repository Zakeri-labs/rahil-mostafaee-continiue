import AboutPage from "@/app/about/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("fa", "about");

export default function Page() {
  return <AboutPage />;
}
