"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import {
  ArrowUpRight,
  Banknote,
  Building2,
  CheckCircle2,
  Clock,
  FilePenLine,
  FileSearch,
  FolderOpen,
  Handshake,
  HelpCircle,
  Landmark,
  MessageCircle,
  Scale,
  Target,
  Users,
} from "lucide-react";
import importerExporterImage from "@/assets/1-Importer-Exporter .webp";
import affectedInvestorImage from "@/assets/2-Affected-Investor.webp";
import partnerDisputeImage from "@/assets/3-Partner-in-Dispute.webp";
import mediumLargeBusinessImage from "@/assets/4-Medium-Large-Business-Owner.webp";
import crossBorderMatterImage from "@/assets/5-Iran-UAE-Cross-Border.webp";
import commercialDisputesImage from "@/assets/Path1-Iran-UAE-Commercial-Disputes.webp";
import assetRecoveryImage from "@/assets/Path2-Asset-Recovery.webp";
import { LEADS_WHATSAPP_NUMBER } from "@/lib/leads/config";
import heroOfficeWide from "@/assets/rahil-hero-office-wide.webp";
import heroMobile from "@/assets/hero-mobile.webp";
import office from "@/assets/office-interior.jpg";
import processPortrait from "@/assets/rahil-process-portrait.webp";
import timeSensitiveReviewImage from "@/assets/Time-Sensitive-Review .webp";
import { Reveal } from "@/components/site/Reveal";
import { ScrollProgress } from "@/components/site/Parallax";
import { ConfidentialCaseIntakeWizard } from "@/components/site/ConfidentialCaseIntakeWizard";
import { useI18n } from "@/lib/i18n";

function whatsappHref(message: string) {
  return `https://wa.me/${LEADS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Home() {
  const { dir } = useI18n();
  return (
    <div className="overflow-visible" dir={dir}>
      <ScrollProgress />
      <Hero />
      <PainCards />
      <ServiceAxes />
      <FastAction />
      <Process />
      <Trust />
      <ServiceCards />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

function CardImage({
  image,
  alt,
  className = "mb-7 aspect-[4/3]",
}: {
  image: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-charcoal/60 shadow-luxe ${className}`}>
      <img
        src={image.src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
        width={image.width}
        height={image.height}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/35 via-onyx/5 to-gold/10" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
    </div>
  );
}

function Hero() {
  const { t, lang } = useI18n();
  const waHref = whatsappHref(t("home.hero.whatsappMsg"));
  const headlineClassName =
    lang === "fa"
      ? "text-[2.15rem] leading-[1.48] min-[430px]:text-[2.45rem] min-[430px]:leading-[1.45] md:text-[3.2rem] lg:text-[3.65rem] lg:leading-[1.22]"
      : "text-[2.55rem] leading-[1.12] min-[430px]:text-[2.95rem] min-[430px]:leading-[1.1] md:text-[3.9rem] lg:text-[4.65rem] lg:leading-[0.96]";

  const features = [
    { title: t("home.hero.feature.1.t"), description: t("home.hero.feature.1.b") },
    { title: t("home.hero.feature.2.t"), description: t("home.hero.feature.2.b") },
    { title: t("home.hero.feature.3.t"), description: t("home.hero.feature.3.b") },
  ];

  return (
    <section className="relative -mt-24 min-h-[70rem] overflow-visible bg-onyx sm:min-h-[68rem] md:min-h-[60rem] lg:min-h-[max(100svh,50rem)]">
      <div className="absolute inset-x-0 bottom-0 top-24 overflow-hidden md:inset-x-6 md:top-28 lg:inset-0 lg:translate-y-24 2xl:translate-y-5">
        <picture className={`block h-full w-full ${lang === "fa" ? "scale-x-[-1]" : ""}`}>
          <source media="(max-width: 1023px)" srcSet={heroMobile.src} />
          <img
            src={heroOfficeWide.src}
            alt="Rahil Mostafaei in her Dubai legal office"
            className="h-full w-full object-cover object-[60%_top] lg:object-contain lg:object-center"
            width={heroOfficeWide.width}
            height={heroOfficeWide.height}
          />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-onyx/5 via-transparent to-onyx/20 md:from-onyx/10 md:via-transparent md:to-onyx/35" />
        <div
          className={`pointer-events-none absolute inset-0 ${lang === "fa" ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-onyx/20 via-onyx/5 via-40% to-transparent md:via-30% lg:from-onyx/55 lg:via-onyx/30 lg:to-transparent`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 w-px bg-gold/30 ${lang === "fa" ? "right-0" : "left-0"}`}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(oklch(0.9 0.08 80) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-60% to-onyx/70 md:hidden" />

      <div
        className={`absolute top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 2xl:flex ${lang === "fa" ? "right-5" : "left-5"}`}
      >
        <span className="h-24 w-px bg-gradient-to-b from-transparent to-gold/60" />
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold/80 [writing-mode:vertical-rl] rotate-180">
          {t("home.hero.est")}
        </span>
        <span className="h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-[70rem] max-w-[100rem] items-start px-6 pb-56 pt-[8.5rem] sm:min-h-[68rem] sm:pb-24 sm:pt-44 md:min-h-[60rem] md:px-10 md:pt-44 lg:min-h-[max(100svh,50rem)] lg:items-center lg:px-20 lg:pb-28 lg:pt-40 ${lang === "fa" ? "justify-start" : ""}`}
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <div
          className={`w-full min-w-0 max-w-[17rem] sm:max-w-[54%] md:max-w-[52%] lg:max-w-[45rem] xl:max-w-[48rem] ${lang === "fa" ? "lg:max-w-[42rem]" : ""}`}
          data-hero-copy
          dir={lang === "fa" ? "rtl" : "ltr"}
        >
          <div className="reveal mb-7 flex items-center gap-3 lg:mb-9">
            <span className="h-px w-10 shrink-0 bg-gold lg:w-14" />
            <span className="max-w-xl text-[10px] leading-relaxed tracking-[0.26em] uppercase text-gold lg:text-[11px] lg:tracking-[0.24em]">
              {t("home.hero.kicker")}
            </span>
          </div>

          <h1
            className={`reveal reveal-delay-1 font-display tracking-tight text-ivory break-words lg:text-balance ${headlineClassName}`}
            data-hero-headline
          >
            <HeroHeadlineText lang={lang} title={t("home.hero.h1")} />
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-[13px] leading-relaxed text-ivory/70 sm:text-[15px] lg:mt-9 lg:text-base lg:leading-7">
            {t("home.hero.lede")}
          </p>

          <div className="reveal reveal-delay-2 mt-7 max-w-60 lg:mt-9 xl:hidden">
            <div
              className={`bg-onyx/70 px-3 py-2.5 shadow-luxe backdrop-blur-xl ${lang === "fa" ? "border-r-2 border-gold" : "border-l-2 border-gold"}`}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <div>
                  <div className="text-[9px] leading-none tracking-[0.24em] uppercase text-gold">
                    {t("home.hero.available")}
                  </div>
                  <div className="mt-1 text-[10px] leading-none text-ivory">
                    {t("home.hero.location")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:mt-9 lg:w-[calc(min(100vw,100rem)-10rem)] lg:justify-between lg:gap-6"
            dir={lang === "fa" ? "rtl" : "ltr"}
          >
            <Link
              href="/contact"
              className={`reveal reveal-delay-3 group inline-flex w-full items-center justify-center gap-2 bg-gold px-5 py-3.5 text-onyx shadow-glow transition-all duration-300 hover:bg-gold-soft sm:w-auto lg:h-[52px] lg:gap-3 lg:px-7 lg:py-4 ${lang === "fa" ? "lg:ml-auto" : ""}`}
            >
              <span className="text-xs font-medium tracking-[0.18em] uppercase lg:text-[13px] lg:tracking-[0.15em]">
                {t("home.hero.cta.primary")}
              </span>
              <ArrowUpRight
                className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:h-4 lg:w-4 ${lang === "fa" ? "scale-x-[-1]" : ""}`}
              />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`hero-whatsapp-float group inline-flex w-full items-center justify-center gap-3 border border-[#12604e]/55 bg-onyx/75 px-5 py-3.5 text-ivory opacity-100 backdrop-blur-xl transition-colors duration-300 hover:border-[#12604e]/85 hover:bg-onyx/90 sm:w-auto lg:h-[52px] lg:px-7 lg:py-4 ${lang === "fa" ? "lg:absolute lg:left-20 lg:bottom-32 lg:z-30 2xl:left-14" : ""}`}
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366] lg:h-4 lg:w-4" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase lg:text-[13px] lg:tracking-[0.15em]">
                {t("home.hero.cta.secondary")}
              </span>
              <ArrowUpRight
                className={`h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:h-4 lg:w-4 ${lang === "fa" ? "scale-x-[-1]" : ""}`}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`reveal reveal-delay-3 absolute top-[20%] z-20 hidden bg-onyx/65 px-4 py-3 shadow-luxe backdrop-blur-xl xl:block ${lang === "fa" ? "left-8 border-r-2 border-gold text-right 2xl:left-14" : "right-8 border-l-2 border-gold 2xl:right-14"}`}
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <div>
            <div className="text-[10px] leading-none tracking-[0.24em] uppercase text-gold">
              {t("home.hero.available")}
            </div>
            <div className="mt-1.5 text-[11px] leading-none text-ivory">
              {t("home.hero.location")}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 z-40 translate-y-1/2"
        dir={lang === "fa" ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-[100rem] px-6 md:px-10 lg:px-20">
          <div
            className={`reveal reveal-delay-4 grid gap-px bg-gold/20 sm:grid-cols-3 lg:max-w-3xl ${lang === "fa" ? "lg:ml-auto lg:mr-0" : "lg:ml-0 lg:mr-auto"}`}
            data-hero-stats
            dir={lang === "fa" ? "rtl" : "ltr"}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-onyx/90 px-4 py-3.5 backdrop-blur-xl sm:px-3 sm:py-4 lg:bg-onyx/75 lg:px-5 lg:py-5"
                dir={lang === "fa" ? "rtl" : "ltr"}
              >
                <div className="font-display text-sm leading-tight text-gold sm:min-h-[2.5em] sm:text-[13px] lg:text-[17px]">
                  {feature.title}
                </div>
                <div className="stat-label mt-1.5 text-[8px] leading-relaxed tracking-[0.1em] uppercase text-ivory/55 lg:text-[9px] lg:tracking-[0.12em]">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-[calc(100%+4.5rem)] left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground lg:text-xs lg:tracking-[0.28em]">
          {t("home.hero.scroll")}
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function HeroHeadlineText({ lang, title }: { lang: "en" | "fa"; title: string }) {
  const highlight = lang === "fa" ? "راحیل مصطفایی" : "Commercial and Corporate";
  const [before, after] = title.split(highlight);

  if (!after) return <>{title}</>;

  return (
    <>
      <span>{before}</span>
      <span className="italic gradient-gold-text">{highlight}</span>
      <span>{after}</span>
    </>
  );
}

function SectionIntro({
  kicker,
  title,
  body,
  centered = false,
  divider = false,
}: {
  kicker: string;
  title: string;
  body?: string;
  centered?: boolean;
  divider?: boolean;
}) {
  return (
    <Reveal className={`space-y-6 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-12 bg-gold" />
        <span className="text-[10px] tracking-[0.35em] uppercase text-gold">{kicker}</span>
        {centered && <span className="h-px w-12 bg-gold" />}
      </div>
      <h2 className="font-display text-2xl lg:text-4xl text-ivory leading-[1.05] tracking-tight">
        {title}
      </h2>
      {divider && (
        <div dir="ltr" className="flex items-center justify-center gap-3 pt-1" aria-hidden="true">
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-gold/70" />
          <span className="h-3 w-3 rotate-45 border border-gold/80" />
          <span className="h-px w-24 bg-gradient-to-l from-transparent via-gold/70 to-gold/70" />
        </div>
      )}
      {body && <p className="text-muted-foreground text-lg leading-relaxed">{body}</p>}
    </Reveal>
  );
}

function PainCards() {
  const { t } = useI18n();
  const cards = [
    {
      title: t("home.pain.1.t"),
      body: t("home.pain.1.b"),
      image: importerExporterImage,
    },
    {
      title: t("home.pain.2.t"),
      body: t("home.pain.2.b"),
      image: affectedInvestorImage,
    },
    {
      title: t("home.pain.3.t"),
      body: t("home.pain.3.b"),
      image: partnerDisputeImage,
    },
    {
      title: t("home.pain.4.t"),
      body: t("home.pain.4.b"),
      image: mediumLargeBusinessImage,
    },
    {
      title: t("home.pain.5.t"),
      body: t("home.pain.5.b"),
      image: crossBorderMatterImage,
    },
  ];

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("home.pain.kicker")} title={t("home.pain.h2")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className={i === cards.length - 1 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <article className="h-full bg-onyx p-4 text-center group hover:bg-charcoal transition-colors duration-500 sm:p-5 lg:p-5">
                <CardImage image={card.image} alt={card.title} className="mb-6 aspect-square" />
                <h3 className="font-display text-xl lg:text-3xl text-ivory leading-tight mb-4 mx-auto">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mx-auto">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAxes() {
  const { t } = useI18n();
  const axes = [
    {
      title: t("home.axes.1.t"),
      bullets: [1, 2, 3, 4].map((n) => t(`home.axes.1.b${n}`)),
      image: commercialDisputesImage,
      href: "/corporate-commercial-disputes",
      linkLabel: t("home.axes.1.link"),
    },
    {
      title: t("home.axes.2.t"),
      bullets: [1, 2, 3, 4].map((n) => t(`home.axes.2.b${n}`)),
      image: assetRecoveryImage,
      href: "/uae-asset-debt-recovery",
      linkLabel: t("home.axes.2.link"),
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("home.axes.kicker")} title={t("home.axes.h2")} centered />
        <div className="grid lg:grid-cols-2 gap-6">
          {axes.map((axis, i) => (
            <Reveal key={axis.title} delay={i * 120}>
              <Link
                href={axis.href}
                className="group flex h-full flex-col glass-strong p-8 lg:p-10 shadow-luxe transition-all duration-500 hover:border-gold/40 hover:-translate-y-1"
              >
                <CardImage image={axis.image} alt={axis.title} className="mb-7 aspect-video" />
                <h3 className="font-display text-xl lg:text-3xl text-ivory leading-tight mb-8">
                  {axis.title}
                </h3>
                <ul className="space-y-4">
                  {axis.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" strokeWidth={1.6} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold lg:text-xs lg:tracking-[0.18em]">
                  <span>{axis.linkLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FastAction() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal className="relative overflow-hidden aspect-[4/5] frame-gold">
            <img
              src={timeSensitiveReviewImage.src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/55 via-onyx/15 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7">
              <Clock className="w-7 h-7 text-gold mb-4" strokeWidth={1.2} />
              <div className="text-[10px] tracking-[0.35em] uppercase text-gold">
                {t("home.fast.kicker")}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <div className="max-w-2xl">
            <SectionIntro
              kicker={t("home.fast.kicker")}
              title={t("home.fast.h2")}
              body={t("home.fast.body")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t, dir } = useI18n();
  const processCards = [
    {
      title: t("home.process.s1"),
      icon: FilePenLine,
    },
    {
      title: t("home.process.s2"),
      icon: FolderOpen,
    },
    {
      title: t("home.process.s3"),
      icon: Landmark,
    },
    {
      title: t("home.process.s4"),
      icon: Handshake,
    },
    {
      title: t("home.process.s5"),
      icon: Target,
    },
  ];
  const formatProcessNumber = (number: number) =>
    dir === "rtl"
      ? number.toLocaleString("fa-IR", { minimumIntegerDigits: 2, useGrouping: false })
      : String(number).padStart(2, "0");

  return (
    <section id="process" className="relative border-t border-gold/10">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, oklch(0.78 0.12 80 / 0.08), transparent 22%), linear-gradient(135deg, oklch(0.07 0.004 70), oklch(0.12 0.006 80) 45%, oklch(0.06 0.003 60))",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 0 18%, oklch(0.78 0.12 80 / 0.45) 18.4%, transparent 19.2% 56%, oklch(0.78 0.12 80 / 0.34) 56.3%, transparent 57%), linear-gradient(23deg, transparent 0 34%, oklch(0.78 0.12 80 / 0.28) 34.3%, transparent 35.1% 82%, oklch(0.95 0.02 80 / 0.24) 82.3%, transparent 83%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-12 lg:mb-16">
          <SectionIntro
            kicker={t("home.process.kicker")}
            title={t("home.process.h2")}
            centered
            divider
          />
        </div>
        <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-stretch">
            <Reveal className="relative h-[min(78svh,42rem)] min-h-[32rem] overflow-hidden rounded-[2rem] border border-gold/35 bg-[#0b0c0c] shadow-luxe sm:h-[min(78svh,48rem)] lg:h-full lg:min-h-0">
              <img
                src={processPortrait.src}
                alt="Rahil Mostafaei in her legal office"
                className="absolute inset-0 h-full w-full object-contain"
                width={processPortrait.width}
                height={processPortrait.height}
              />
            </Reveal>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className={`absolute bottom-8 top-8 w-px bg-gradient-to-b from-transparent via-gold/65 to-transparent ${
                dir === "rtl" ? "right-4" : "left-4"
              }`}
            />
            <div className={`${dir === "rtl" ? "pr-10" : "pl-10"}`} role="list">
              {processCards.map((card, i) => (
                <Reveal
                  key={card.title}
                  delay={i * 90}
                  reverseOnScrollUp
                  className="relative flex min-h-[clamp(6rem,8svh,7.5rem)] items-center"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-onyx text-gold shadow-[0_0_0_6px_rgba(11,12,12,0.85)] ${
                      dir === "rtl" ? "-right-10" : "-left-10"
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_16px_rgba(214,170,70,0.8)]" />
                  </span>
                  <article className="group relative flex w-full flex-row items-center gap-2.5 overflow-hidden rounded-[1.15rem] border border-gold/35 bg-[linear-gradient(120deg,rgba(22,23,23,0.96),rgba(10,11,11,0.9))] p-2.5 shadow-luxe transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-glow sm:gap-3 sm:p-3">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(216,174,75,0.05)_48%,transparent_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-onyx text-gold shadow-[inset_0_0_0_6px_rgba(214,170,70,0.04)] sm:h-10 sm:w-10 lg:h-12 lg:w-12">
                      <card.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.25} />
                    </div>
                    <div className="relative flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                      <div className="shrink-0 border-x border-gold/20 px-1.5 text-gold sm:px-2.5">
                        <span
                          className={`block text-xl leading-none sm:text-2xl ${
                            dir === "rtl" ? "font-fa font-light tracking-[0.08em]" : "font-display"
                          }`}
                        >
                          {formatProcessNumber(i + 1)}
                        </span>
                      </div>
                      <h3 className="max-w-xl font-display text-base leading-tight text-ivory text-balance sm:text-xl lg:text-[1.45rem]">
                        {card.title}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useI18n();
  const items = [
    { icon: Building2, label: t("home.trust.item.1") },
    { icon: Scale, label: t("home.trust.item.2") },
    { icon: FileSearch, label: t("home.trust.item.3") },
    { icon: MessageCircle, label: t("home.trust.item.4") },
    { icon: Banknote, label: t("home.trust.item.5") },
  ];

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-45">
        <img src={office.src} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-onyx/88" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro
          kicker={t("home.trust.kicker")}
          title={t("home.trust.h2")}
          body={t("home.trust.body")}
          centered
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.label}
                delay={i * 80}
                className={i === items.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <div className="h-full bg-onyx/80 backdrop-blur-md p-7 text-center">
                  <Icon className="w-6 h-6 text-gold mx-auto mb-5" strokeWidth={1.2} />
                  <div className="text-sm text-ivory leading-relaxed">{item.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCards() {
  const { t } = useI18n();
  const services = [
    { icon: Scale, title: t("home.serviceCards.1") },
    { icon: FileSearch, title: t("home.serviceCards.2") },
    { icon: Banknote, title: t("home.serviceCards.3") },
    { icon: Users, title: t("home.serviceCards.4") },
    { icon: Building2, title: t("home.serviceCards.5") },
  ];

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("home.serviceCards.kicker")} title={t("home.serviceCards.h2")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 80}
              className={i === services.length - 1 ? "md:col-span-2 lg:col-span-1" : undefined}
            >
              <Link
                href="/services"
                className="group block h-full bg-card hairline p-7 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
              >
                <service.icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.2} />
                <h3 className="font-display text-xl lg:text-3xl text-ivory leading-tight mb-6">
                  {service.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold lg:text-xs lg:tracking-[0.18em]">
                  {t("home.serviceCards.link")}{" "}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useI18n();
  const faqs = [1, 2, 3, 4, 5].map((n) => ({
    q: t(`home.faq.${n}.q`),
    a: t(`home.faq.${n}.a`),
  }));

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
        <SectionIntro kicker={t("home.faq.kicker")} title={t("home.faq.h2")} centered />
        <div className="space-y-px bg-gold/10 hairline">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 70}>
              <details className="group bg-onyx p-6 lg:p-7 open:bg-charcoal/60 transition-colors">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-start">
                  <span className="font-display text-xl lg:text-2xl text-ivory leading-tight">
                    {faq.q}
                  </span>
                  <HelpCircle className="w-5 h-5 text-gold shrink-0" strokeWidth={1.3} />
                </summary>
                <p className="mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return <ConfidentialCaseIntakeWizard />;
}

export default Home;
