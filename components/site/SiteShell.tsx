import type { ReactNode } from "react";
import { Providers } from "@/app/providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { Footer } from "@/components/site/Footer";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { Nav } from "@/components/site/Nav";
import { SplashLoader } from "@/components/site/SplashLoader";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import type { Locale } from "@/lib/i18n/config";

type SiteShellProps = {
  children: ReactNode;
  locale: Locale;
  structuredData: object;
};

/**
 * Shared application chrome. Every application route must supply its layout's
 * locale so client components cannot fall back to a browser preference.
 */
export function SiteShell({ children, locale, structuredData }: SiteShellProps) {
  return (
    <Providers locale={locale}>
      <JsonLd data={structuredData} />
      <SplashLoader />
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <WhatsAppFab />
        <MobileBottomNav />
      </div>
    </Providers>
  );
}
