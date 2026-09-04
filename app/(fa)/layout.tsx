import "../globals.css";
import { siteFont } from "@/app/site-font";
import { getSiteMetadata, currentViewport } from "@/app/site-metadata";
import { SiteAnalytics } from "@/components/site/SiteAnalytics";
import { SiteShell } from "@/components/site/SiteShell";
import { getPersonSchema } from "@/lib/seo/site-schemas";
import { getLocaleLayoutConfig } from "@/lib/i18n/layout";

const layoutConfig = getLocaleLayoutConfig("fa");

export const metadata = getSiteMetadata(layoutConfig.locale);
export const viewport = currentViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={layoutConfig.lang} dir={layoutConfig.dir} suppressHydrationWarning>
      <body
        className={siteFont.variable}
        lang={layoutConfig.lang}
        dir={layoutConfig.dir}
        suppressHydrationWarning
      >
        <SiteAnalytics />
        <SiteShell
          locale={layoutConfig.locale}
          structuredData={getPersonSchema(layoutConfig.locale)}
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
