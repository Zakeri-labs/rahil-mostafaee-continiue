import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SplashLoader } from "@/components/site/SplashLoader";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPersonSchema } from "@/lib/seo/json-ld";
import { getSiteUrl } from "@/lib/seo/site-url";

const previewImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/69bde703-9d13-4c09-8970-6aa38ca5aa8f/id-preview-dd3066eb--968f7a0d-6eab-41ef-8230-5310d790e022.lovable.app-1778573785780.png";

const directionScript = `
  (function () {
    try {
      var lang = "en";
      var dir = "ltr";
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      if (document.body) {
        document.body.lang = lang;
        document.body.dir = dir;
      }
    } catch (_) {}
  })();
`;

const isProduction = process.env.VERCEL_ENV === "production";

const peyda = localFont({
  src: [
    {
      path: "./fonts/peyda/PEYDA-THIN.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-EXTRALIGHT.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-LIGHT.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-REGULAR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-MEDIUM.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-SEMIBOLD.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-BOLD.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-EXTRABOLD.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-BLACK.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rahilmostafaee.com"),
  title: {
    default: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
    template: "%s | Rahil Mostafaei",
  },
  description:
    "Rahil Mostafaei is a Legal Consultant registered with the Government of Dubai Legal Affairs Department, focusing on complex commercial disputes, major claims, shareholder conflicts and asset recovery matters in the UAE.",
  authors: [{ name: "Rahil Mostafaei" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
    description:
      "Rahil Mostafaei is a Legal Consultant registered with the Government of Dubai Legal Affairs Department, focusing on complex commercial disputes, major claims, shareholder conflicts and asset recovery matters in the UAE.",
    type: "website",
    locale: "en_AE",
    siteName: "Rahil Mostafaei",
    images: [previewImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahil Mostafaei | Corporate and Commercial Legal Consultant in Dubai",
    description:
      "Rahil Mostafaei is a Legal Consultant registered with the Government of Dubai Legal Affairs Department, focusing on complex commercial disputes, major claims, shareholder conflicts and asset recovery matters in the UAE.",
    images: [previewImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0d0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={peyda.variable} lang="en" dir="ltr" suppressHydrationWarning>
        {isProduction ? <GoogleTagManager gtmId="GTM-WSNZJ7MH" /> : null}
        <script dangerouslySetInnerHTML={{ __html: directionScript }} />
        <Providers>
          <JsonLd data={buildPersonSchema(getSiteUrl())} />
          <SplashLoader />
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
            <WhatsAppFab />
            <MobileBottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
