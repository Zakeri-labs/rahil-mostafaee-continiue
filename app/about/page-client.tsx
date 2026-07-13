"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  FileSearch,
  FileText,
  Languages,
  Scale,
  ShieldCheck,
} from "lucide-react";
import founder from "@/assets/founder-silhouette.jpg";
import office from "@/assets/office-interior.jpg";
import { useI18n } from "@/lib/i18n";

function AboutPage() {
  const { t, dir } = useI18n();
  return (
    <div dir={dir}>
      <Hero />
      <Positioning />
      <WhyFocus />
      <HowWeWork />
      <TrustPrinciples />
      <ReviewScope />
      <NoPromise />
      <LanguagesContext />
      <FinalCTA />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("about.kicker")}
            </span>
          </div>
          <h1 className="font-display text-6xl lg:text-8xl text-ivory leading-[0.95] tracking-tight break-words">
            {t("about.h1")}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {t("about.intro")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("about.hero.primary")}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("about.hero.secondary")}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] overflow-hidden frame-gold">
            <img
              src={founder.src}
              alt="Rahil Mostafaei"
              className="w-full h-full object-cover"
              loading="lazy"
            />
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

function Positioning() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 glass-strong p-8 lg:p-12">
        <Scale className="w-8 h-8 text-gold mb-8" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
          {t("about.position.h2")}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">
          {t("about.position.body")}
        </p>
      </div>
    </section>
  );
}

function WhyFocus() {
  const { t } = useI18n();
  const cards = [
    { icon: ShieldCheck, key: "1" },
    { icon: Scale, key: "2" },
    { icon: AlertTriangle, key: "3" },
    { icon: FileSearch, key: "4" },
  ] as const;

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionIntro kicker={t("about.why.kicker")} title={t("about.why.h2")} centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 hairline">
          {cards.map((card) => (
            <article key={card.key} className="bg-onyx p-8 hover:bg-charcoal transition-colors">
              <card.icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.2} />
              <h3 className="font-display text-2xl text-ivory leading-tight mb-4 break-words">
                {t(`about.why.${card.key}.t`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`about.why.${card.key}.b`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  const { t, lang } = useI18n();
  const num = (n: number) =>
    lang === "fa" ? n.toLocaleString("fa-IR") : String(n).padStart(2, "0");

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight break-words">
          {t("about.work.h2")}
        </h2>
        <ol className="space-y-px bg-gold/10 hairline">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="bg-onyx p-8 grid sm:grid-cols-12 gap-6">
              <div className="sm:col-span-2 font-mono text-gold">{num(n)}</div>
              <div className="sm:col-span-4 font-display text-xl text-ivory leading-tight break-words">
                {t(`about.work.${n}.t`)}
              </div>
              <div className="sm:col-span-6 text-sm text-muted-foreground leading-relaxed">
                {t(`about.work.${n}.b`)}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TrustPrinciples() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`about.trust.${n}`));

  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img src={office.src} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-onyx/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("about.trust.kicker")} title={t("about.trust.h2")} centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx/85 backdrop-blur-md p-7">
              <div className="flex items-start gap-3 text-ivory">
                <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewScope() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`about.review.${n}`));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro kicker={t("about.review.kicker")} title={t("about.review.h2")} />
        </div>
        <div className="lg:col-span-7 space-y-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 flex items-start gap-3">
              <FileText className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
              <span className="text-ivory">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoPromise() {
  const { t } = useI18n();
  return (
    <section className="border-t border-gold/10 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 glass-strong p-8 lg:p-12">
        <AlertTriangle className="w-7 h-7 text-gold mb-8" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.05] break-words">
          {t("about.promise.h2")}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mt-6">
          {t("about.promise.body")}
        </p>
      </div>
    </section>
  );
}

function LanguagesContext() {
  const { t } = useI18n();
  const badges = [1, 2, 3, 4, 5, 6].map((n) => t(`about.lang.badge.${n}`));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <SectionIntro
            kicker={t("about.lang.kicker")}
            title={t("about.lang.h2")}
            body={t("about.lang.body")}
          />
        </div>
        <div className="lg:col-span-5 glass-strong p-8">
          <Languages className="w-7 h-7 text-gold mb-8" strokeWidth={1.2} />
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 border border-gold/20 text-xs tracking-[0.18em] uppercase text-ivory"
              >
                {badge}
              </span>
            ))}
          </div>
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
        <FileSearch className="w-8 h-8 text-gold mx-auto" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight break-words">
          {t("about.cta.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {t("about.cta.body")}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("about.cta.primary")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 glass-strong text-ivory hover:border-gold/40 transition-all"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("about.cta.secondary")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
