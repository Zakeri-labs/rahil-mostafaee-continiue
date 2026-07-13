type LegalServiceInput = {
  id: string;
  name: string;
  description: string;
  url: string;
  siteUrl: string;
};

export function buildLegalServiceSchema({
  id,
  name,
  description,
  url,
  siteUrl,
}: LegalServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": id,
    name,
    description,
    url,
    areaServed: "United Arab Emirates",
    audience: {
      "@type": "Audience",
      audienceType: "Iranian and Persian-speaking clients with UAE-related matters",
    },
    provider: {
      "@type": "Person",
      name: "Rahil Mostafaei",
      url: siteUrl,
    },
    serviceType: name,
    inLanguage: ["fa", "en"],
  };
}

type FaqEntry = { question: string; answer: string };

export function buildFaqPageSchema(id: string, entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
