import type { Locale } from "@/lib/i18n/config";
import { pageSeoCopy, siteNames } from "@/lib/i18n/dictionaries/seo";
import type { LocalizedRouteId } from "@/lib/i18n/routes";
import { translate } from "@/lib/i18n/translate";
import { getLocalizedCanonicalUrl } from "@/lib/seo/localized";
import {
  buildLocalizedBreadcrumbListSchema,
  buildLocalizedFaqPageSchema,
  buildLocalizedLegalServiceSchema,
  buildLocalizedPersonSchema,
} from "@/lib/seo/localized-json-ld";
import { getSiteUrl } from "@/lib/seo/site-url";

export type ServiceSchemaRoute = "commercialDisputes" | "assetRecovery";

function pairedUrls(siteUrl: string, route: LocalizedRouteId, fragment = "") {
  return {
    fa: `${getLocalizedCanonicalUrl(siteUrl, route, "fa")}${fragment}`,
    en: `${getLocalizedCanonicalUrl(siteUrl, route, "en")}${fragment}`,
  };
}

function translated(key: string) {
  return { fa: translate("fa", key), en: translate("en", key) };
}

export function getPersonSchema(locale: Locale) {
  const siteUrl = getSiteUrl();
  const topics = ["nav.services.commercial", "nav.services.asset", "nav.international"];
  return buildLocalizedPersonSchema({
    locale,
    id: pairedUrls(siteUrl, "home", "#person"),
    name: siteNames,
    jobTitle: { fa: "مشاور حقوقی", en: "Legal Consultant" },
    description: {
      fa: pageSeoCopy.about.fa.description,
      en: pageSeoCopy.about.en.description,
    },
    url: pairedUrls(siteUrl, "home"),
    organizationName: {
      fa: "لطفی و شرکا، وکلا و مشاوران حقوقی",
      en: "Lutfi & Company Advocates & Legal Consultants",
    },
    knowsAbout: {
      fa: topics.map((key) => translate("fa", key)),
      en: topics.map((key) => translate("en", key)),
    },
  });
}

export function getServiceSchemas(locale: Locale, route: ServiceSchemaRoute) {
  const siteUrl = getSiteUrl();
  const copy = pageSeoCopy[route];
  const name = { fa: copy.fa.title, en: copy.en.title };
  const description = { fa: copy.fa.description, en: copy.en.description };
  const prefix = route === "commercialDisputes" ? "cd" : "adr";
  const count = route === "commercialDisputes" ? 8 : 9;
  // Match the visible FAQ's existing translated content, not a second copy of it.
  const faqs = Array.from({ length: count }, (_, index) => ({
    question: translated(`${prefix}.faq.${index + 1}.q`),
    answer: translated(`${prefix}.faq.${index + 1}.a`),
  }));

  return [
    buildLocalizedLegalServiceSchema({
      locale,
      id: pairedUrls(siteUrl, route, "#legalservice"),
      name,
      description,
      url: pairedUrls(siteUrl, route),
      areaServed: { fa: "امارات متحده عربی", en: "United Arab Emirates" },
      audienceType: {
        fa: "شرکت‌ها، گروه‌های تجاری، سهام‌داران، اعضای هیئت‌مدیره، مدیران ارشد و سرمایه‌گذاران نهادی",
        en: "Corporations, business groups, shareholders, board members, senior executives, and institutional investors",
      },
      providerName: siteNames,
      providerUrl: pairedUrls(siteUrl, "home"),
    }),
    buildLocalizedFaqPageSchema(locale, pairedUrls(siteUrl, route, "#faq"), faqs),
    buildLocalizedBreadcrumbListSchema(locale, [
      { name: translated("nav.home"), url: pairedUrls(siteUrl, "home") },
      { name, url: pairedUrls(siteUrl, route) },
    ]),
  ];
}
