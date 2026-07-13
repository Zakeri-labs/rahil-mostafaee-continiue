import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SplashLoader } from "@/components/site/SplashLoader";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";

const previewImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/69bde703-9d13-4c09-8970-6aa38ca5aa8f/id-preview-dd3066eb--968f7a0d-6eab-41ef-8230-5310d790e022.lovable.app-1778573785780.png";

const directionScript = `
  (function () {
    try {
      var lang = window.localStorage.getItem("lang") || "fa";
      var dir = lang === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      if (document.body) {
        document.body.lang = lang;
        document.body.dir = dir;
      }
    } catch (_) {}
  })();
`;

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
  title: {
    default: "Rahil Mostafaee",
    template: "%s",
  },
  icons: {
    icon: "/assets/logo-mark.png",
    shortcut: "/assets/logo-mark.png",
    apple: "/assets/logo-mark.png",
  },
  description:
    "Discreet, cross-border legal representation for high-value Iranian clients in Dubai. Residency, corporate, real estate, DIFC wills, international coordination.",
  authors: [{ name: "Rahil Mostafaee Legal" }],
  openGraph: {
    title: "Rahil Mostafaee",
    description:
      "Discreet, cross-border legal representation for high-value Iranian clients in Dubai. Residency, corporate, real estate, DIFC wills, international coordination.",
    type: "website",
    images: [previewImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahil Mostafaee",
    description:
      "Discreet, cross-border legal representation for high-value Iranian clients in Dubai. Residency, corporate, real estate, DIFC wills, international coordination.",
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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={peyda.variable} lang="fa" dir="rtl">
        <script dangerouslySetInnerHTML={{ __html: directionScript }} />
        <Providers>
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
