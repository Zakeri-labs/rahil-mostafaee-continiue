import Home from "@/app/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("en", "home");

export default function Page() {
  return <Home />;
}
