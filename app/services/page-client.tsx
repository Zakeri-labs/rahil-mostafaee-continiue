"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Banknote,
  Briefcase,
  Building2,
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

function whatsappHref(message: string) {
  return `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ServicesPage() {
  const { t, dir, lang } = useI18n();
  const waHref = whatsappHref(t("svc.whatsapp.msg"));

  return (
    <div dir={dir}>
      <Hero waHref={waHref} />
      <AxesOverview />
      <ServicePillars />
      <WhoWeHelp />
      <DocumentsNeeded />
      <Process lang={lang} />
      <FAQ />
      <FinalCTA waHref={waHref} />
    </div>
  );
}

function Hero({ waHref }: { waHref: string }) {
  const { t } = useI18n();
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
            {t("svc.kicker")}
          </span>
        </div>
        <h1 className="font-display text-6xl lg:text-9xl text-ivory tracking-tight leading-[0.95] break-words">
          {t("svc.h1")}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{t("svc.intro")}</p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("svc.hero.primary")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("svc.hero.secondary")}
            </span>
          </a>
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

function AxesOverview() {
  const { t } = useI18n();
  const axes = [
    { icon: Scale, title: t("svc.axes.1.t"), body: t("svc.axes.1.b") },
    { icon: FileSearch, title: t("svc.axes.2.t"), body: t("svc.axes.2.b") },
  ];

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionIntro kicker={t("svc.axes.kicker")} title={t("svc.axes.h2")} centered />
        <div className="grid lg:grid-cols-2 gap-px bg-gold/10 hairline">
          {axes.map((axis) => (
            <article
              key={axis.title}
              className="bg-onyx p-8 lg:p-10 hover:bg-charcoal transition-colors"
            >
              <axis.icon className="w-8 h-8 text-gold mb-8" strokeWidth={1.2} />
              <h3 className="font-display text-3xl lg:text-4xl text-ivory leading-tight mb-5 break-words">
                {axis.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{axis.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePillars() {
  const { t } = useI18n();
  const cards = [
    { icon: Briefcase, key: "1" },
    { icon: FileSearch, key: "2" },
    { icon: Banknote, key: "3" },
    { icon: Users, key: "4" },
    { icon: Building2, key: "5" },
  ] as const;

  return (
    <section className="border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-32 space-y-16">
        <SectionIntro kicker={t("svc.pillars.kicker")} title={t("svc.pillars.h2")} />
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              key={card.key}
              href="/contact"
              className="group flex h-full flex-col bg-card hairline p-7 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <card.icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.2} />
              <h3 className="font-display text-2xl text-ivory leading-tight mb-4 break-words">
                {t(`svc.card.${card.key}.t`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {t(`svc.card.${card.key}.b`)}
              </p>
              <div className="mt-auto space-y-3">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
                  {t("svc.typical")}
                </div>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2
                        className="w-4 h-4 text-gold mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>{t(`svc.card.${card.key}.m${n}`)}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 pt-4 text-[10px] tracking-[0.25em] uppercase text-gold lg:text-xs lg:tracking-[0.18em]">
                  {t("svc.card.link")}{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`svc.who.${n}`));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro kicker={t("svc.who.kicker")} title={t("svc.who.h2")} />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
              <div className="flex items-start gap-3 text-ivory">
                <ShieldCheck className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentsNeeded() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`svc.docs.${n}`));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionIntro
            kicker={t("svc.docs.kicker")}
            title={t("svc.docs.h2")}
            body={t("svc.docs.body")}
          />
        </div>
        <div className="lg:col-span-7 space-y-px bg-gold/10 hairline">
          {items.map((item, i) => (
            <div key={item} className="bg-onyx p-6 grid grid-cols-[auto_1fr] gap-5">
              <span className="font-mono text-xs tracking-[0.3em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-ivory">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ lang }: { lang: "en" | "fa" }) {
  const { t } = useI18n();
  const steps = [1, 2, 3, 4, 5].map((n) => t(`svc.process.${n}`));
  const num = (n: number) =>
    lang === "fa" ? n.toLocaleString("fa-IR") : String(n).padStart(2, "0");

  return (
    <section className="relative border-t border-gold/10 py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionIntro kicker={t("svc.process.kicker")} title={t("svc.process.h2")} centered />
        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {steps.map((step, i) => (
            <li key={step} className="bg-onyx p-8 group hover:bg-charcoal transition-colors">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs tracking-[0.3em] text-gold">{num(i + 1)}</span>
                <FileText className="w-5 h-5 text-gold" strokeWidth={1.2} />
              </div>
              <div className="font-display text-2xl text-ivory leading-tight break-words">
                {step}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useI18n();
  const faqs = [1, 2, 3, 4, 5].map((n) => ({
    q: t(`svc.faq.${n}.q`),
    a: t(`svc.faq.${n}.a`),
  }));

  return (
    <section className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
        <SectionIntro kicker={t("svc.faq.kicker")} title={t("svc.faq.h2")} centered />
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

function FinalCTA({ waHref }: { waHref: string }) {
  const { t } = useI18n();
  return (
    <section className="py-32" id="contact-cta">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
        <AlertTriangle className="w-8 h-8 text-gold mx-auto" strokeWidth={1.2} />
        <h2 className="font-display text-2xl lg:text-4xl text-ivory tracking-tight break-words">
          {t("svc.cta.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {t("svc.cta.body")}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("svc.cta.primary")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 glass-strong text-ivory hover:border-gold/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("svc.cta.secondary")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
