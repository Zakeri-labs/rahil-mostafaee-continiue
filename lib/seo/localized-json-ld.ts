import type { Locale } from "@/lib/i18n/config";
import { getStructuredDataLanguage } from "@/lib/seo/localized";

export type LocalizedSchemaValue<T> = Readonly<Record<Locale, T>>;
export type LocalizedSchemaText = LocalizedSchemaValue<string>;
export type LocalizedSchemaUrl = LocalizedSchemaValue<string>;

type LocalizedPersonSchemaInput = {
  locale: Locale;
  id: string;
  name: LocalizedSchemaText;
  jobTitle: LocalizedSchemaText;
  description?: LocalizedSchemaText;
  url: LocalizedSchemaUrl;
  organizationId: string;
  organizationName: LocalizedSchemaText;
  knowsAbout: LocalizedSchemaValue<readonly string[]>;
};

type LocalizedLegalServiceSchemaInput = {
  locale: Locale;
  id: LocalizedSchemaUrl;
  name: LocalizedSchemaText;
  description: LocalizedSchemaText;
  url: LocalizedSchemaUrl;
  areaServed: LocalizedSchemaText;
  audienceType: LocalizedSchemaText;
  providerId: string;
};

export type LocalizedFaqEntry = {
  question: LocalizedSchemaText;
  answer: LocalizedSchemaText;
};

export type LocalizedBreadcrumbItem = {
  name: LocalizedSchemaText;
  url: LocalizedSchemaUrl;
};

export function getLocalizedSchemaValue<T>(value: LocalizedSchemaValue<T>, locale: Locale): T {
  return value[locale];
}

/** Future-only localized Person schema builder. */
export function buildLocalizedPersonSchema(input: LocalizedPersonSchemaInput) {
  const { locale } = input;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": input.id,
        name: getLocalizedSchemaValue(input.name, locale),
        jobTitle: getLocalizedSchemaValue(input.jobTitle, locale),
        ...(input.description
          ? { description: getLocalizedSchemaValue(input.description, locale) }
          : {}),
        url: getLocalizedSchemaValue(input.url, locale),
        worksFor: {
          "@id": input.organizationId,
        },
        knowsAbout: getLocalizedSchemaValue(input.knowsAbout, locale),
        inLanguage: getStructuredDataLanguage(locale),
      },
      {
        "@type": "Organization",
        "@id": input.organizationId,
        name: getLocalizedSchemaValue(input.organizationName, locale),
      },
    ],
  };
}

/** Future-only localized LegalService schema builder. */
export function buildLocalizedLegalServiceSchema(input: LocalizedLegalServiceSchemaInput) {
  const { locale } = input;
  const name = getLocalizedSchemaValue(input.name, locale);

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": getLocalizedSchemaValue(input.id, locale),
    name,
    description: getLocalizedSchemaValue(input.description, locale),
    url: getLocalizedSchemaValue(input.url, locale),
    areaServed: getLocalizedSchemaValue(input.areaServed, locale),
    audience: {
      "@type": "Audience",
      audienceType: getLocalizedSchemaValue(input.audienceType, locale),
    },
    provider: {
      "@id": input.providerId,
    },
    serviceType: name,
    inLanguage: getStructuredDataLanguage(locale),
  };
}

/** Future-only localized FAQPage schema builder. */
export function buildLocalizedFaqPageSchema(
  locale: Locale,
  id: LocalizedSchemaUrl,
  entries: readonly LocalizedFaqEntry[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": getLocalizedSchemaValue(id, locale),
    inLanguage: getStructuredDataLanguage(locale),
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: getLocalizedSchemaValue(entry.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: getLocalizedSchemaValue(entry.answer, locale),
      },
    })),
  };
}

/** Future-only localized BreadcrumbList schema builder. */
export function buildLocalizedBreadcrumbListSchema(
  locale: Locale,
  items: readonly LocalizedBreadcrumbItem[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: getLocalizedSchemaValue(item.name, locale),
      item: getLocalizedSchemaValue(item.url, locale),
    })),
  };
}
