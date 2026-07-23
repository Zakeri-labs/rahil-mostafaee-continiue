"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Banknote,
  Briefcase,
  CheckCircle2,
  FileSearch,
  FileText,
  HelpCircle,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";

function InternationalPage() {
  const { t, dir, lang } = useI18n();
  const stepNum = (n: number) =>
    lang === "fa" ? n.toLocaleString("fa-IR").padStart(2, "۰") : String(n).padStart(2, "0");

  return (
    <div dir={dir}>
      <Hero />
      <WhyDifferent />
      <Scenarios />
      <KeyQuestions />
      <Documents />
      <Process stepNum={stepNum} />
      <RelatedServices />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("intl.kicker")}
            </span>
          </div>
          <h1 className="font-display text-6xl lg:text-9xl text-ivory leading-[0.95] tracking-tight break-words">
            {t("intl.h1")}
          </h1>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <p className="text-muted-foreground leading-relaxed">{t("intl.intro")}</p>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("intl.hero.primary")}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("intl.hero.secondary")}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  kicker,
  title,
  body,
  centered = false,
}: {
  kicker: string;
  title: string;
  body?: string;
  centered?: boolean;
}) {
  return (
    <div className={`space-y-6 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-12 bg-gold" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{kicker}</span>
        {centered && <span className="h-px w-12 bg-gold" />}
      </div>
      <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
        {title}
      </h2>
      {body && <p className="text-muted-foreground text-lg leading-relaxed">{body}</p>}
    </div>
  );
}

function WhyDifferent() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 glass-strong p-8 lg:p-12">
        <Scale className="w-8 h-8 text-gold mb-8" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
          {t("intl.why.h2")}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">{t("intl.why.body")}</p>
      </div>
    </section>
  );
}

const SCENARIO_SPECIALIST_HREF: Record<string, string> = {
  "1": "/corporate-commercial-disputes",
  "2": "/uae-asset-debt-recovery",
  "4": "/uae-asset-debt-recovery",
  "5": "/corporate-commercial-disputes",
};

function Scenarios() {
  const { t } = useI18n();
  const cards = [
    { icon: Briefcase, key: "1" },
    { icon: Banknote, key: "2" },
    { icon: Users, key: "3" },
    { icon: AlertTriangle, key: "4" },
    { icon: FileSearch, key: "5" },
  ] as const;

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionIntro kicker={t("intl.scenarios.kicker")} title={t("intl.scenarios.h2")} centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {cards.map((card) => {
            const specialistHref = SCENARIO_SPECIALIST_HREF[card.key];
            return (
              <article key={card.key} className="bg-onyx p-7 hover:bg-charcoal transition-colors">
                <card.icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.2} />
                <h3 className="font-display text-2xl text-ivory leading-tight mb-4 break-words">
                  {t(`intl.scenario.${card.key}.t`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`intl.scenario.${card.key}.b`)}
                </p>
                {specialistHref && (
                  <Link
                    href={specialistHref}
                    className="group mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold"
                  >
                    <span>{t(`intl.scenario.${card.key}.link`)}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KeyQuestions() {
  const { t } = useI18n();
  const items = [1, 4, 5, 8].map((n) => t(`intl.questions.${n}`));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro kicker={t("intl.questions.kicker")} title={t("intl.questions.h2")} />
        </div>
        <div className="lg:col-span-7 space-y-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
              <span className="text-ivory">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5].map((n) => t(`intl.docs.${n}`));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionIntro kicker={t("intl.docs.kicker")} title={t("intl.docs.h2")} />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
              <div className="flex items-start gap-3 text-ivory">
                <FileText className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ stepNum }: { stepNum: (n: number) => string }) {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight break-words">
          {t("intl.process.h2")}
        </h2>
        <ol className="space-y-px bg-gold/10 hairline">
          {[1, 2, 3, 4, 5].map((n) => (
            <li key={n} className="bg-onyx p-8 grid sm:grid-cols-12 gap-6">
              <div className="sm:col-span-2 font-mono text-gold">{stepNum(n)}</div>
              <div className="sm:col-span-10 font-display text-xl text-ivory leading-tight break-words">
                {t(`intl.process.${n}`)}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const RELATED_SERVICE_HREF: Record<number, string> = {
  1: "/corporate-commercial-disputes",
  2: "/uae-asset-debt-recovery",
  3: "/uae-asset-debt-recovery",
  4: "/services",
  5: "/corporate-commercial-disputes",
};

function RelatedServices() {
  const { t } = useI18n();
  const cards = [1, 2, 3, 4, 5].map((n) => ({ n, label: t(`intl.related.${n}`) }));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionIntro kicker={t("intl.related.kicker")} title={t("intl.related.h2")} centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card) => (
            <Link
              key={card.n}
              href={RELATED_SERVICE_HREF[card.n]}
              className="group bg-card hairline p-7 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <ShieldCheck className="w-5 h-5 text-gold mb-8" strokeWidth={1.2} />
              <h3 className="font-display text-2xl text-ivory leading-tight break-words">
                {card.label}
              </h3>
              <div className="inline-flex items-center gap-2 mt-8 text-[10px] tracking-[0.25em] uppercase text-gold">
                {t("intl.related.link")}{" "}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useI18n();
  const faqs = [1, 2, 3, 4, 5].map((n) => ({
    q: t(`intl.faq.${n}.q`),
    a: t(`intl.faq.${n}.a`),
  }));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
        <SectionIntro kicker={t("intl.faq.kicker")} title={t("intl.faq.h2")} centered />
        <div className="space-y-px bg-gold/10 hairline">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-onyx p-6 lg:p-7 open:bg-charcoal/60 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-start">
                <span className="font-display text-xl lg:text-2xl text-ivory leading-tight break-words">
                  {faq.q}
                </span>
                <HelpCircle className="w-5 h-5 text-gold shrink-0" strokeWidth={1.3} />
              </summary>
              <p className="mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight break-words">
          {t("intl.cta.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {t("intl.cta.body")}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("intl.cta.primary")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href={`https://wa.me/${LEADS_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 glass-strong text-ivory hover:border-gold/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("intl.cta.secondary")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default InternationalPage;
