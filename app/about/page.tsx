import type { Metadata } from "next";
import AboutPage from "./page-client";

export const metadata: Metadata = {
  title: "About the Corporate and Commercial Legal Practice",
  description:
    "Learn about Rahil Mostafaei’s legal practice, professional registration and approach to complex commercial disputes and asset recovery in the UAE.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the Corporate and Commercial Legal Practice",
    description:
      "Learn about Rahil Mostafaei’s legal practice, professional registration and approach to complex commercial disputes and asset recovery in the UAE.",
    url: "/about",
    type: "website",
    siteName: "Rahil Mostafaei",
    locale: "en_AE",
    images: ["/social/rahil-mostafaei-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About the Corporate and Commercial Legal Practice",
    description:
      "Learn about Rahil Mostafaei’s legal practice, professional registration and approach to complex commercial disputes and asset recovery in the UAE.",
    images: ["/social/rahil-mostafaei-social.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
