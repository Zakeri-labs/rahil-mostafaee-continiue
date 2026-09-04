import AboutPage from "@/app/about/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("en", "about");

export default function Page() {
  return <AboutPage />;
}
