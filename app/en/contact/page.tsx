import ContactPage from "@/app/contact/page-client";
import { getPageMetadata } from "@/lib/seo/page-metadata";

export const metadata = getPageMetadata("en", "contact");

export default function Page() {
  return <ContactPage />;
}
