import type { Locale } from "@/lib/i18n/config";
import { pageSeoCopy } from "@/lib/i18n/dictionaries/seo";
import type { LocalizedRouteId } from "@/lib/i18n/routes";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import { richToPlain } from "@/lib/landing-pages/rich-text";
import type { ServiceLandingContent } from "@/lib/landing-pages/service-landing-types";
import { getLocalizedCanonicalUrl, getStructuredDataLanguage } from "@/lib/seo/localized";
import { getSiteUrl } from "@/lib/seo/site-url";

const REGISTRATION_NUMBER = "L-07168";

type ServiceLandingSchemaInput = {
  locale: Locale;
  route: Extract<LocalizedRouteId, "commercialDisputes" | "assetRecovery" | "commercialContracts">;
  content: ServiceLandingContent;
  /** Root-relative or absolute URL of the hero image (used for the page's primary image). */
  imageUrl: string;
};

/**
 * LegalService, BreadcrumbList and FAQPage for a service landing page. The FAQ and
 * breadcrumb are built from the content that renders on the page, so structured data
 * can never drift from the visible text.
 */
export function getServiceLandingSchemas({
  locale,
  route,
  content,
  imageUrl,
}: ServiceLandingSchemaInput) {
  const siteUrl = getSiteUrl();
  const rootUrl = `${siteUrl.replace(/\/+$/, "")}/`;
  const pageUrl = getLocalizedCanonicalUrl(siteUrl, route, locale);
  const inLanguage = getStructuredDataLanguage(locale);
  const image = new URL(imageUrl, rootUrl).toString();
  const offers = content.sections.find((section) => section.type === "cards");

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${pageUrl}#legalservice`,
    name: content.hero.h1,
    description: pageSeoCopy[route][locale].description,
    url: pageUrl,
    image,
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    inLanguage,
    serviceType: content.schema.serviceType,
    provider: {
      "@id": `${rootUrl}#person`,
      identifier: {
        "@type": "PropertyValue",
        name: "Government of Dubai Legal Affairs Department registration",
        value: REGISTRATION_NUMBER,
      },
    },
    areaServed: { "@type": "Country", name: content.schema.areaServed },
    availableLanguage: [
      { "@type": "Language", name: "Persian", alternateName: "fa" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Business Bay",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    telephone: `+${LEADS_WHATSAPP_NUMBER}`,
    audience: { "@type": "BusinessAudience", audienceType: content.schema.audienceType },
    ...(offers?.type === "cards"
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: content.hero.h1,
            itemListElement: offers.items.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item.title },
            })),
          },
        }
      : {}),
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageSeoCopy[route][locale].title,
    description: pageSeoCopy[route][locale].description,
    inLanguage,
    about: { "@id": `${pageUrl}#legalservice` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: image },
  };

  const breadcrumbUrls = [
    getLocalizedCanonicalUrl(siteUrl, "home", locale),
    getLocalizedCanonicalUrl(siteUrl, "services", locale),
    pageUrl,
  ];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: content.hero.breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: breadcrumbUrls[index],
    })),
  };

  const faqSection = content.sections.find((section) => section.type === "faq");
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage,
    mainEntity: (faqSection?.type === "faq" ? faqSection.items : []).map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: richToPlain(entry.answer) },
    })),
  };

  return [webPage, legalService, breadcrumb, faq] as const;
}
