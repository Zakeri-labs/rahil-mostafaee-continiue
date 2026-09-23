type LegalServiceInput = {
  id: string;
  name: string;
  description: string;
  url: string;
  siteUrl: string;
};

export function buildPersonSchema(siteUrl: string) {
  const rootUrl = `${siteUrl.replace(/\/+$/, "")}/`;
  const personId = `${rootUrl}#person`;
  const organizationId = `${rootUrl}#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Rahil Mostafaei",
        jobTitle: "Legal Consultant",
        url: siteUrl,
        worksFor: {
          "@id": organizationId,
        },
        knowsAbout: [
          "Commercial disputes",
          "Corporate disputes",
          "Contractual disputes",
          "Asset recovery",
          "Cross-border commercial matters",
        ],
        inLanguage: "en-AE",
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Lutfi & Company Advocates & Legal Consultants",
      },
    ],
  };
}

export function buildLegalServiceSchema({
  id,
  name,
  description,
  url,
  siteUrl,
}: LegalServiceInput) {
  const personId = `${siteUrl.replace(/\/+$/, "")}/#person`;

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
      audienceType:
        "Corporations, business groups, shareholders, board members, senior executives, and institutional investors",
    },
    provider: {
      "@id": personId,
    },
    serviceType: name,
    inLanguage: "en-AE",
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
