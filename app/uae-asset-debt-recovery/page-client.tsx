"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Banknote,
  CheckCircle2,
  Clock,
  FileSearch,
  FileText,
  Landmark,
  MapPin,
  MessageCircle,
  Scale,
  ShieldCheck,
  TrendingDown,
  UserX,
  Users,
  Wallet,
} from "lucide-react";
import office from "@/assets/office-interior.jpg";
import { useI18n } from "@/lib/i18n";
import { LandingTheme } from "@/components/site/landing/LandingTheme";
import { SectionIntro } from "@/components/site/landing/SectionIntro";
import { ScenarioGrid, type ScenarioItem } from "@/components/site/landing/ScenarioGrid";
import { ProcessSteps, type ProcessStep } from "@/components/site/landing/ProcessSteps";
import { DocumentChecklist, type DocumentItem } from "@/components/site/landing/DocumentChecklist";
import { TrustBand, type TrustItem } from "@/components/site/landing/TrustBand";
import { FaqAccordion, type FaqItem } from "@/components/site/landing/FaqAccordion";
import { QualificationForm } from "@/components/site/landing/QualificationForm";
import { whatsAppSubmissionAdapter } from "@/lib/leads/whatsapp";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import { getAssetDebtRecoveryFormConfig } from "@/lib/landing-pages/asset-debt-recovery";

function whatsappHref(message: string) {
  return `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function AssetDebtRecoveryPage() {
  const { t, lang } = useI18n();
  const waHref = whatsappHref(t("adr.hero.whatsappMsg"));

  return (
    <LandingTheme variant="marble">
      <Hero waHref={waHref} />
      <Scenarios />
      <Factors />
      <RisksOfDelay />
      <MatterAndAssetVisibility />
      <Process lang={lang} />
      <Documents />
      <Trust />
      <CaseReview lang={lang} />
      <Faq />
      <FinalCta waHref={waHref} />
    </LandingTheme>
  );
}

function Hero({ waHref }: { waHref: string }) {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden py-10 sm:py-20 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--lp-marble-overlay, none)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 space-y-6 lg:space-y-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold">
            {t("adr.hero.kicker")}
          </span>
          <span className="h-px w-12 bg-gold" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-ivory leading-[1.1] lg:leading-[1] tracking-tight break-words">
          {t("adr.hero.h1")}
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
          {t("adr.hero.intro")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#case-review"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
          >
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("adr.hero.primary")}
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
              {t("adr.hero.secondary")}
            </span>
          </a>
        </div>
        <p className="mx-auto max-w-xl pt-2 text-xs text-muted-foreground leading-relaxed">
          {t("adr.hero.scopeNote")}
        </p>
      </div>
    </section>
  );
}

function Scenarios() {
  const { t } = useI18n();
  const items: ScenarioItem[] = [
    {
      id: "unpaid-invoice",
      icon: Banknote,
      title: t("adr.scenario.1.t"),
      description: t("adr.scenario.1.b"),
    },
    {
      id: "unpaid-loan",
      icon: Wallet,
      title: t("adr.scenario.2.t"),
      description: t("adr.scenario.2.b"),
    },
    {
      id: "failed-investment",
      icon: TrendingDown,
      title: t("adr.scenario.3.t"),
      description: t("adr.scenario.3.b"),
    },
    {
      id: "suspected-fraud",
      icon: AlertTriangle,
      title: t("adr.scenario.4.t"),
      description: t("adr.scenario.4.b"),
    },
    {
      id: "fund-misuse",
      icon: Users,
      title: t("adr.scenario.5.t"),
      description: t("adr.scenario.5.b"),
    },
    {
      id: "unresponsive",
      icon: UserX,
      title: t("adr.scenario.6.t"),
      description: t("adr.scenario.6.b"),
    },
  ];

  return (
    <section id="scenarios" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro
          kicker={t("adr.scenarios.kicker")}
          title={t("adr.scenarios.h2")}
          description={t("adr.scenarios.body")}
          align="center"
        />
        <ScenarioGrid items={items} columns={3} />
      </div>
    </section>
  );
}

function Factors() {
  const { t } = useI18n();
  const items: ScenarioItem[] = [
    {
      id: "evidence",
      icon: FileSearch,
      title: t("adr.factor.1.t"),
      description: t("adr.factor.1.b"),
    },
    {
      id: "counterparty",
      icon: MapPin,
      title: t("adr.factor.2.t"),
      description: t("adr.factor.2.b"),
    },
    {
      id: "asset-visibility",
      icon: Landmark,
      title: t("adr.factor.3.t"),
      description: t("adr.factor.3.b"),
    },
    { id: "route", icon: Scale, title: t("adr.factor.4.t"), description: t("adr.factor.4.b") },
  ];

  return (
    <section id="factors" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro
          kicker={t("adr.factors.kicker")}
          title={t("adr.factors.h2")}
          description={t("adr.factors.body")}
          align="center"
        />
        <ScenarioGrid items={items} columns={2} />
      </div>
    </section>
  );
}

function RisksOfDelay() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((n) => t(`adr.delay.item.${n}`));

  return (
    <section id="risks-of-delay" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro
            kicker={t("adr.delay.kicker")}
            title={t("adr.delay.h2")}
            description={t("adr.delay.body")}
          />
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
          {items.map((item) => (
            <div key={item} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
              <div className="flex items-start gap-3 text-ivory">
                <Clock className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatterAndAssetVisibility() {
  const { t } = useI18n();
  const matterItems = [1, 2, 3, 4, 5, 6, 7].map((n) => t(`adr.matterAsset.matter.${n}`));
  const assetItems = [1, 2, 3, 4, 5].map((n) => t(`adr.matterAsset.asset.${n}`));

  return (
    <section id="matter-asset" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro
          kicker={t("adr.matterAsset.kicker")}
          title={t("adr.matterAsset.h2")}
          description={t("adr.matterAsset.body")}
          align="center"
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
              {t("adr.matterAsset.matterLabel")}
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
              {matterItems.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-onyx p-5 text-ivory">
                  <FileText className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
              {t("adr.matterAsset.assetLabel")}
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
              {assetItems.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-onyx p-5 text-ivory">
                  <Landmark className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process({ lang }: { lang: "en" | "fa" }) {
  const { t } = useI18n();
  const icons = [FileSearch, Banknote, Landmark, Scale, CheckCircle2];
  const steps: ProcessStep[] = [1, 2, 3, 4, 5].map((n, index) => ({
    id: `step-${n}`,
    title: t(`adr.process.step.${n}.t`),
    description: t(`adr.process.step.${n}.b`),
    icon: icons[index],
  }));

  return (
    <section id="process" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("adr.process.kicker")} title={t("adr.process.h2")} align="center" />
        <ProcessSteps steps={steps} lang={lang} columns={5} />
      </div>
    </section>
  );
}

function Documents() {
  const { t } = useI18n();
  const items: DocumentItem[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
    id: `doc-${n}`,
    title: t(`adr.docs.item.${n}`),
  }));

  return (
    <section id="documents" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionIntro
            kicker={t("adr.docs.kicker")}
            title={t("adr.docs.h2")}
            description={t("adr.docs.body")}
          />
        </div>
        <div className="lg:col-span-7">
          <DocumentChecklist items={items} columns={1} />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useI18n();
  const items: TrustItem[] = [1, 2, 3, 4, 5].map((n) => ({
    id: `trust-${n}`,
    title: t(`adr.trust.item.${n}`),
    icon: ShieldCheck,
  }));

  return (
    <div id="trust">
      <TrustBand
        kicker={t("adr.trust.kicker")}
        title={t("adr.trust.h2")}
        description={t("adr.trust.body")}
        items={items}
        image={{ src: office.src, alt: t("adr.trust.imageAlt") }}
        disclaimer={t("adr.trust.disclaimer")}
        columns={5}
      />
    </div>
  );
}

function CaseReview({ lang }: { lang: "en" | "fa" }) {
  const { t } = useI18n();
  const formConfig = getAssetDebtRecoveryFormConfig(t, lang);

  return (
    <section id="case-review" className="scroll-mt-28 border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-12">
        <SectionIntro
          kicker={t("adr.form.kicker")}
          title={t("adr.form.h2")}
          description={t("adr.form.body")}
          align="center"
        />
        <QualificationForm
          pageType="asset-debt-recovery"
          language={lang}
          copy={formConfig.copy}
          matterOptions={formConfig.matterOptions}
          amountOptions={formConfig.amountOptions}
          urgencyOptions={formConfig.urgencyOptions}
          documentOptions={formConfig.documentOptions}
          submissionAdapter={whatsAppSubmissionAdapter}
        />
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useI18n();
  const items: FaqItem[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
    id: `adr-faq-${n}`,
    question: t(`adr.faq.${n}.q`),
    answer: t(`adr.faq.${n}.a`),
  }));

  return (
    <section id="faq" className="border-t border-gold/10 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
        <SectionIntro kicker={t("adr.faq.kicker")} title={t("adr.faq.h2")} align="center" />
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}

function FinalCta({ waHref }: { waHref: string }) {
  const { t } = useI18n();
  const related = [
    { href: "/corporate-commercial-disputes", label: t("adr.related.commercialDisputes") },
    { href: "/services", label: t("adr.related.services") },
    { href: "/international", label: t("adr.related.international") },
    { href: "/about", label: t("adr.related.about") },
    { href: "/contact", label: t("adr.related.contact") },
  ];

  return (
    <section
      id="related"
      className="relative overflow-hidden border-t border-gold/10 py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial-gold)", opacity: 0.3 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--lp-marble-overlay, none)" }}
      />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 space-y-12 text-center">
        <div className="space-y-6">
          <SectionIntro
            kicker={t("adr.final.kicker")}
            title={t("adr.final.h2")}
            description={t("adr.final.body")}
            align="center"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#case-review"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow"
            >
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("adr.final.primary")}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 glass-strong text-ivory hover:border-gold/40 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-xs tracking-[0.24em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("adr.final.secondary")}
              </span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold">
            {t("adr.related.kicker")}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-gold/10 hairline">
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-center gap-2 bg-onyx p-5 text-sm text-ivory hover:bg-charcoal hover:border-gold/40 transition-all"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto flex max-w-3xl items-start gap-4 text-start">
          <FileText className="w-5 h-5 text-gold shrink-0 mt-1" strokeWidth={1.3} />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("adr.final.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AssetDebtRecoveryPage;
