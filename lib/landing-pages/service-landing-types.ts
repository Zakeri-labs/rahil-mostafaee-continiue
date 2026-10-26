import type { Rich } from "@/lib/landing-pages/rich-text";

export type LandingButton = { variant: "primary" | "secondary"; href: string; label: string };

export type LabeledText = { title: string; text: Rich };

export type TextBlock = { type: "h3"; c: Rich } | { type: "p"; c: Rich };

export type MoreBlock =
  | TextBlock
  | { type: "ul"; items: readonly LabeledText[] }
  | { type: "ol"; items: readonly Rich[] };

export type ServiceLandingSection =
  | { type: "cards"; title: string; intro: Rich; items: readonly LabeledText[] }
  | {
      type: "routes";
      title: string;
      intro: readonly Rich[];
      items: readonly { title: Rich; rows: readonly { label: string; text: Rich }[] }[];
      note?: Rich;
    }
  | { type: "checklist"; title: string; intro: readonly Rich[]; items: readonly LabeledText[] }
  | { type: "prose"; title: string; blocks: readonly TextBlock[] }
  | {
      type: "process";
      title: string;
      intro: Rich;
      steps: readonly LabeledText[];
      note?: Rich;
      docsTitle: Rich;
      docs: readonly LabeledText[];
    }
  | { type: "band"; label: string; text: Rich; micro?: Rich; buttons: readonly LandingButton[] }
  | {
      type: "reasons";
      title: string;
      intro: readonly Rich[];
      items: readonly LabeledText[];
      note: Rich;
    }
  | {
      type: "boundary";
      title: string;
      intro: Rich;
      listLabel: string;
      items: readonly { text: Rich; link: Rich }[];
    }
  | { type: "trust"; imageAlt: string; title: string; intro: Rich; items: readonly LabeledText[] }
  | { type: "resources"; title: string; items: readonly Rich[] }
  | { type: "faq"; title: string; items: readonly { question: string; answer: Rich }[] }
  | {
      type: "final";
      title: string;
      text: Rich;
      buttons: readonly LandingButton[];
      disclaimer: Rich;
    }
  | { type: "more"; title: string; blocks: readonly MoreBlock[]; open: string; close: string };

export type ServiceLandingContent = {
  hero: {
    breadcrumbLabel: string;
    breadcrumb: readonly { name: string; href?: string }[];
    kicker: string;
    h1: string;
    subline: Rich;
    lede: Rich;
    buttons: readonly LandingButton[];
    note: Rich;
    imageAlt: string;
  };
  sections: readonly ServiceLandingSection[];
  /** Values for the LegalService schema that differ per page. */
  schema: { serviceType: string; audienceType: string; areaServed: string };
};
