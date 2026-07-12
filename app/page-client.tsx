"use client";

import { useRef } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import {
  ArrowUpRight,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileSearch,
  HelpCircle,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import importerExporterImage from "@/assets/1-Importer-Exporter .png";
import affectedInvestorImage from "@/assets/2-Affected-Investor.png";
import partnerDisputeImage from "@/assets/3-Partner-in-Dispute.png";
import mediumLargeBusinessImage from "@/assets/4-Medium-Large-Business-Owner.png";
import crossBorderMatterImage from "@/assets/5-Iran-UAE-Cross-Border.png";
import commercialDisputesImage from "@/assets/Path1-Iran-UAE-Commercial-Disputes.png";
import assetRecoveryImage from "@/assets/Path2-Asset-Recovery.png";
import processImage1 from "@/assets/Process-1.png";
import processImage2 from "@/assets/Process-2.png";
import processImage3 from "@/assets/Process-3.png";
import processImage4 from "@/assets/Process-4.png";
import processImage5 from "@/assets/Process-5.png";
import hero from "@/assets/hero-skyline.jpg";
import rahilCutoutMobile from "@/assets/rahil-cutout-mobile.png";
import office from "@/assets/office-interior.jpg";
import portrait from "@/assets/rahil-ai-1.jpg";
import timeSensitiveReviewImage from "@/assets/Time-Sensitive-Review .png";
import { ProcessConnector } from "@/components/site/ProcessConnector";
import { Reveal } from "@/components/site/Reveal";
import { Parallax, ScrollProgress } from "@/components/site/Parallax";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "971500000000";

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Home() {
  const { dir } = useI18n();
  return (
    <div className="overflow-visible lg:overflow-hidden" dir={dir}>
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
      ? "text-[2.25rem] leading-[1.3] min-[430px]:text-[2.45rem] md:text-[2.8rem] lg:text-[4.25rem] lg:leading-[1.18]"
      : "text-[2.7rem] leading-[1.04] min-[430px]:text-[3.15rem] md:text-[3.35rem] lg:text-[6.125rem] lg:leading-[0.95]";
  const copyColumnClassName = lang === "fa" ? "lg:max-w-[39rem] lg:justify-self-start" : "";

  return (
    <section className="relative -mt-24 overflow-visible pt-0 lg:flex lg:min-h-screen lg:items-center lg:overflow-hidden lg:pt-32">
      <div className="absolute inset-0 -z-10 lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-charcoal/60 to-onyx" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial-gold)", opacity: 0.2 }}
        />
      </div>

      <div className="absolute inset-0 hidden lg:block">
        <Parallax speed={60} className="absolute inset-0">
          <img
            src={hero.src}
            alt="Dubai skyline"
            className="w-full h-full object-cover opacity-[0.42] ken-burns scale-110"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/50 to-onyx" />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/60 to-transparent" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(oklch(0.78 0.12 80) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
        </Parallax>
      </div>

      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex">
        <span className="h-24 w-px bg-gradient-to-b from-transparent to-gold/60" />
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold/80 [writing-mode:vertical-rl] rotate-180">
          {t("home.hero.est")}
        </span>
        <span className="h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      <div className="sticky top-0 z-0 h-svh overflow-hidden sm:hidden" data-hero-mobile-image>
        <img
          src={rahilCutoutMobile.src}
          alt="Rahil Mostafaee"
          className="h-full w-full scale-[1.04] object-cover"
          style={{ objectPosition: "center 12%" }}
          width={595}
          height={1192}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-onyx/10 via-onyx/20 to-onyx/92" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-onyx/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-onyx/80 to-transparent" />
      </div>

      <div className="relative z-[2] -mt-[42svh] grid w-full gap-5 px-6 pb-8 sm:mt-0 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] sm:items-start sm:gap-6 md:gap-8 lg:mx-auto lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-20 lg:pb-24 lg:pt-12">
        <div
          className="relative -mx-6 hidden h-[43svh] min-h-[318px] max-h-[430px] overflow-hidden sm:mx-0 sm:block sm:h-auto sm:min-h-0 sm:max-h-none sm:self-start lg:hidden"
          data-hero-tablet-image
        >
          <div className="absolute inset-0 sm:relative sm:aspect-[4/5]">
            <img
              src={rahilCutoutMobile.src}
              alt="Rahil Mostafaee"
              className="h-full w-full scale-[1.02] object-cover sm:scale-100"
              style={{ objectPosition: "center 12%" }}
              width={595}
              height={1192}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-onyx/20 via-transparent to-onyx/88" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-onyx/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-onyx/80 to-transparent" />
          </div>
        </div>

        <div
          className={`min-w-0 border-y border-gold/15 bg-onyx/10 px-4 py-5 shadow-luxe backdrop-blur-2xl sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none sm:self-center lg:col-span-7 lg:space-y-10 ${copyColumnClassName}`}
          data-hero-copy
        >
          <div className="reveal mb-3 flex items-center gap-2 lg:mb-0 lg:gap-3">
            <span className="h-px w-8 bg-gold lg:w-12" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold leading-tight lg:text-xs lg:tracking-[0.28em]">
              {t("home.hero.kicker")}
            </span>
          </div>

          <h1
            className={`reveal reveal-delay-1 font-display tracking-tight text-ivory break-words lg:text-balance ${headlineClassName}`}
            data-hero-headline
          >
            <HeroHeadlineText lang={lang} title={t("home.hero.h1")} />
          </h1>

          <p className="reveal reveal-delay-2 mt-4 text-[13px] text-muted-foreground leading-relaxed sm:max-w-xl lg:mt-0 lg:text-lg">
            {t("home.hero.lede")}
          </p>

          <div className="mt-5 space-y-2 lg:flex lg:flex-wrap lg:items-center lg:gap-4 lg:space-y-0">
            <Link
              href="/contact"
              className="reveal reveal-delay-3 group inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3.5 text-onyx shadow-glow transition-all duration-300 hover:bg-gold-soft lg:w-auto lg:gap-3 lg:px-8 lg:py-4"
            >
              <span className="text-xs tracking-[0.22em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("home.hero.cta.primary")}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:w-4 lg:h-4" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-4 group inline-flex w-full items-center justify-center gap-2 glass-strong border border-gold/20 px-4 py-3 text-ivory backdrop-blur-md transition-all hover:border-gold/40 lg:w-auto lg:gap-3 lg:border-0 lg:px-8 lg:py-4"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] lg:w-4 lg:h-4" />
              <span className="text-xs tracking-[0.22em] uppercase font-medium lg:text-sm lg:tracking-[0.18em]">
                {t("home.hero.cta.secondary")}
              </span>
            </a>
          </div>

          <div
            className="reveal reveal-delay-4 -mx-6 mt-6 grid grid-cols-3 gap-px border-t border-gold/25 bg-gold/15 sm:mx-0 lg:mt-12 lg:max-w-3xl lg:border-t-0 lg:bg-gold/10"
            data-hero-stats
          >
            {[
              { v: t("home.hero.stat.1.v"), l: t("home.hero.stat.1.l") },
              { v: t("home.hero.stat.2.v"), l: t("home.hero.stat.2.l") },
              { v: t("home.hero.stat.3.v"), l: t("home.hero.stat.3.l") },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-onyx/95 px-2 py-4 text-center backdrop-blur lg:bg-onyx/80 lg:px-6 lg:py-6 lg:text-start"
              >
                <div className="font-display text-xl text-gold leading-none lg:text-3xl">{s.v}</div>
                <div className="stat-label mt-1.5 text-[9px] tracking-[0.14em] uppercase text-muted-foreground leading-tight lg:mt-1 lg:text-xs lg:tracking-[0.22em]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block" data-hero-portrait-column>
          <div className="relative">
            <div
              className="absolute -inset-16 rounded-full bg-gold/10 blur-3xl opacity-70 drift"
              aria-hidden
            />

            <div className="reveal reveal-delay-3 absolute -top-4 -right-4 z-20 glass-strong px-4 py-3 border-l-2 border-gold">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                </span>
                <div>
                  <div className="text-[9px] tracking-[0.35em] uppercase text-gold leading-none lg:text-xs lg:tracking-[0.24em]">
                    {t("home.hero.available")}
                  </div>
                  <div className="text-[11px] text-ivory mt-1 leading-none">
                    {t("home.hero.location")}
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <span className="pointer-events-none absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold z-10" />
              <span className="pointer-events-none absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold z-10" />
              <span className="pointer-events-none absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold z-10" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold z-10" />

              <div className="relative overflow-hidden aspect-[4/5] tilt-hover gold-sweep">
                <img
                  src={portrait.src}
                  alt="Rahil Mostafaee"
                  className="w-full h-full object-cover slow-pan"
                  width={900}
                  height={1125}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-gold" />
                    <span className="text-[9px] tracking-[0.45em] uppercase text-gold lg:text-xs lg:tracking-[0.28em]">
                      {t("home.hero.founder")}
                    </span>
                  </div>
                  <div className="font-display text-3xl text-ivory leading-tight">
                    {t("home.hero.name.first")}
                    <br />
                    <span className="italic gradient-gold-text">{t("home.hero.name.last")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-4 mt-6 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground lg:text-xs lg:tracking-[0.22em]">
              <span>{t("home.hero.signature")}</span>
              <span className="font-mono text-gold">— RM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground lg:text-xs lg:tracking-[0.28em]">
          {t("home.hero.scroll")}
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function HeroHeadlineText({ lang, title }: { lang: "en" | "fa"; title: string }) {
  const highlight = lang === "fa" ? "راحیل مصطفایی" : "& Asset Recovery";
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
}: {
  kicker: string;
  title: string;
  body?: string;
  centered?: boolean;
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
    <section className="relative py-24 lg:py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("home.pain.kicker")} title={t("home.pain.h2")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <article className="h-full bg-onyx p-4 text-center group hover:bg-charcoal transition-colors duration-500 sm:p-5 lg:p-5">
                <CardImage image={card.image} alt={card.title} className="mb-6 aspect-square" />
                <h3 className="font-display text-2xl text-ivory leading-tight mb-4 mx-auto">
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
      icon: Scale,
      title: t("home.axes.1.t"),
      bullets: [1, 2, 3, 4].map((n) => t(`home.axes.1.b${n}`)),
      image: commercialDisputesImage,
    },
    {
      icon: FileSearch,
      title: t("home.axes.2.t"),
      bullets: [1, 2, 3, 4].map((n) => t(`home.axes.2.b${n}`)),
      image: assetRecoveryImage,
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
              <article className="h-full glass-strong p-8 lg:p-10 shadow-luxe">
                <CardImage image={axis.image} alt={axis.title} className="mb-7 aspect-video" />
                <axis.icon className="w-8 h-8 text-gold mb-8" strokeWidth={1.2} />
                <h3 className="font-display text-3xl lg:text-4xl text-ivory leading-tight mb-8">
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
              </article>
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
  const { t } = useI18n();
  const processRailRef = useRef<HTMLOListElement>(null);
  const processCards = [
    {
      title: t("home.process.s1"),
      image: processImage1,
    },
    {
      title: t("home.process.s2"),
      image: processImage2,
    },
    {
      title: t("home.process.s3"),
      image: processImage3,
    },
    {
      title: t("home.process.s4"),
      image: processImage4,
    },
    {
      title: t("home.process.s5"),
      image: processImage5,
    },
  ];
  const scrollProcessRail = (direction: "left" | "right") => {
    const rail = processRailRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden">
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
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-14 lg:space-y-16">
        <SectionIntro kicker={t("home.process.kicker")} title={t("home.process.h2")} centered />

        <ol
          ref={processRailRef}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 py-2 pb-3 [scrollbar-width:none] md:gap-6 xl:mx-0 xl:grid xl:grid-cols-[repeat(5,max-content)] xl:justify-center xl:gap-8 xl:overflow-visible xl:px-0 xl:py-0 xl:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {processCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              className="relative shrink-0 basis-[calc((100%_-_1rem)/2)] snap-center first:snap-start last:snap-end sm:basis-[calc((100%_-_1rem)/2)] md:basis-[calc((100%_-_2rem)/3)] xl:basis-auto xl:snap-none"
            >
              <li className="group relative mx-auto flex h-[300px] w-full items-center justify-center overflow-hidden rounded-none shadow-luxe transition-transform duration-500 md:h-[320px] md:hover:-translate-y-1 xl:h-[340px] xl:w-[213px]">
                <img
                  src={card.image.src}
                  alt={card.title}
                  className="block h-full w-full object-contain scale-[0.94] transition-transform duration-500 ease-out md:group-hover:scale-[0.97]"
                  loading="lazy"
                  width={card.image.width}
                  height={card.image.height}
                />
                <div className="pointer-events-none absolute inset-0 scale-[0.94] transition-transform duration-500 ease-out md:group-hover:scale-[0.97]">
                  <div
                    className={`absolute inset-x-0 bottom-0 flex h-[38%] items-end justify-center px-4 pb-6 text-center ${
                      i < 3
                        ? "bg-gradient-to-t from-onyx/82 via-onyx/34 to-transparent text-ivory"
                        : "bg-gradient-to-t from-ivory/72 via-ivory/24 to-transparent text-onyx"
                    }`}
                  >
                    <h3 className="mx-auto max-w-[10.5rem] translate-y-0 font-display text-[1.12rem] leading-[1.1] text-balance transition-transform duration-500 ease-out md:group-hover:-translate-y-1 sm:text-[1.18rem] lg:text-[1.24rem]">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </li>
              {i < processCards.length - 1 && (
                <ProcessConnector direction="right" showOnMobile={false} />
              )}
            </Reveal>
          ))}
        </ol>
        <div className="-mt-2 flex justify-center xl:hidden">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-onyx/70 p-1.5 text-gold/85 shadow-luxe backdrop-blur">
            <button
              type="button"
              aria-label="Scroll process cards left"
              onClick={() => scrollProcessRail("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/15 bg-gold/10 transition-colors hover:bg-gold/20 active:bg-gold/25"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label="Scroll process cards right"
              onClick={() => scrollProcessRail("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/15 bg-gold/10 transition-colors hover:bg-gold/20 active:bg-gold/25"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5].map((n) => t(`home.trust.item.${n}`));

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
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="h-full bg-onyx/80 backdrop-blur-md p-7 text-center">
                <ShieldCheck className="w-6 h-6 text-gold mx-auto mb-5" strokeWidth={1.2} />
                <div className="text-sm text-ivory leading-relaxed">{item}</div>
              </div>
            </Reveal>
          ))}
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
            <Reveal key={service.title} delay={i * 80}>
              <Link
                href="/services"
                className="group block h-full bg-card hairline p-7 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
              >
                <service.icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.2} />
                <h3 className="font-display text-2xl text-ivory leading-tight mb-6">
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
  const { t } = useI18n();
  const waHref = whatsappHref(t("home.cta.whatsappMsg"));

  return (
    <section className="relative py-32 lg:py-40 border-t border-gold/10">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
        <Reveal className="space-y-8">
          <h2 className="font-display text-2xl lg:text-5xl text-ivory tracking-tight leading-[1.02]">
            {t("home.cta.h2")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t("home.cta.body")}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all duration-300 shadow-glow"
            >
              <span className="text-xs tracking-[0.22em] uppercase font-medium lg:text-sm lg:tracking-[0.16em]">
                {t("home.cta.primary")}
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
              <span className="text-xs tracking-[0.22em] uppercase font-medium lg:text-sm lg:tracking-[0.16em]">
                {t("home.cta.secondary")}
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Home;
