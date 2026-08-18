"use client";

import Link from "next/link";
import { Fragment } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  FileSearch,
  FileText,
  Languages,
  Scale,
} from "lucide-react";
import aboutImage from "@/assets/About-1.webp";
import focusedPracticeImage from "@/assets/focused-practice.jpg";
import { ProfessionalRegistrationSection } from "@/components/credentials/ProfessionalRegistrationSection";
import { Reveal } from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

function AboutPage() {
  const { t, dir } = useI18n();
  return (
    <div dir={dir}>
      <Hero />
      <ProfessionalRegistrationSection />
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
    <section className="relative border-b border-gold/10 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-28">
          <div className="aspect-[9/16] overflow-hidden frame-gold bg-charcoal">
            <img
              src={aboutImage.src}
              alt={t("about.profile.imageAlt")}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
              {t("about.profile.kicker")}
            </span>
          </div>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-ivory break-words lg:text-6xl">
            {t("about.profile.h1")}
          </h1>

          <div className="max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            <p className="text-ivory">{t("about.profile.p1")}</p>
            <p>{t("about.profile.p2a")}</p>
            <p>
              {t("about.profile.p3a")}
              <strong className="font-medium text-ivory">{t("about.profile.p3strong")}</strong>
              {t("about.profile.p3b")}
            </p>
            <p>{t("about.profile.p4")}</p>
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
  const { t, lang } = useI18n();
  return (
    <section className="relative overflow-hidden border-t border-gold/10 py-14 sm:py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden border border-gold/35 bg-[#080f0b] p-2 shadow-luxe sm:p-3">
          <div className="pointer-events-none absolute inset-2 border border-gold/10" />

          <div className="grid min-w-0 gap-8 lg:min-h-[620px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-0">
            <div className="relative aspect-[3/4] min-w-0 overflow-hidden lg:aspect-auto lg:min-h-[620px]">
              <div className="absolute inset-0 overflow-hidden rounded-[35%] border border-gold/55 bg-[#080f0b] shadow-[18px_0_0_-17px_rgba(211,166,72,0.35)] sm:rounded-[50%]">
                <img
                  src={focusedPracticeImage.src}
                  alt={t("about.position.imageAlt")}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080f0b]/95" />
              </div>
            </div>

            <div className="relative flex min-w-0 items-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20 xl:px-24">
              <div className="relative z-10 min-w-0 max-w-3xl space-y-6 sm:space-y-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <span className="h-px w-12 bg-gold" />
                  <span className="h-2 w-2 rotate-45 border border-gold" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold sm:text-[10px] sm:tracking-[0.4em]">
                    {t("about.position.kicker")}
                  </span>
                </div>
                <h2 className="break-words font-display text-[clamp(2rem,8vw,3rem)] leading-[1.08] tracking-tight text-ivory sm:text-4xl lg:text-5xl xl:text-6xl">
                  {lang === "fa" ? (
                    <>
                      <span className="text-gold">{t("about.position.fa.focus")}</span>{" "}
                      {t("about.position.fa.middle")}،{" "}
                      <span className="text-gold">{t("about.position.fa.not")}</span>{" "}
                      {t("about.position.fa.services")}{" "}
                      <span className="text-gold">{t("about.position.fa.scattered")}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-gold">{t("about.position.en.focus")}</span>{" "}
                      {t("about.position.en.practice")}{" "}
                      <span className="text-gold">{t("about.position.en.not")}</span>{" "}
                      <span className="text-gold">{t("about.position.en.scattered")}</span>{" "}
                      {t("about.position.en.services")}
                    </>
                  )}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-ivory/75 sm:text-lg sm:leading-relaxed lg:text-xl">
                  {t("about.position.body")}
                </p>
              </div>

              <div className="absolute bottom-10 right-6 top-10 hidden flex-col items-center justify-between lg:flex xl:right-10">
                <span className="h-24 w-px bg-gradient-to-b from-transparent via-gold to-gold/40" />
                <span className="flex h-11 w-11 rotate-45 items-center justify-center border border-gold/70 bg-[#080f0b]">
                  <Scale className="h-5 w-5 -rotate-45 text-gold" strokeWidth={1.2} />
                </span>
                <span className="h-24 w-px bg-gradient-to-t from-transparent via-gold to-gold/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyFocus() {
  const { t, lang } = useI18n();
  const zones = [
    {
      key: "1",
      number: "01",
      title: t("about.why.1.t"),
      body: t("about.why.1.b"),
      placement: "lg:col-start-1 lg:row-start-2 lg:justify-self-start",
      alignment: "text-left lg:text-left",
      connector: "-right-[24%] top-1/2 h-px w-[24%]",
    },
    {
      key: "2",
      number: "02",
      title: t("about.why.2.t"),
      body: t("about.why.2.b"),
      placement: "lg:col-start-3 lg:row-start-2 lg:justify-self-end",
      alignment: "text-left lg:text-right",
      connector: "-left-[24%] top-1/2 h-px w-[24%]",
    },
    {
      key: "3",
      number: "03",
      title: t("about.why.3.t"),
      body: t("about.why.3.b"),
      placement: "lg:col-start-2 lg:row-start-1 lg:justify-self-center lg:self-end",
      alignment: "text-left lg:text-center",
      connector: "-bottom-[26%] left-1/2 h-[26%] w-px",
    },
    {
      key: "4",
      number: "04",
      title: t("about.why.4.t"),
      body: t("about.why.4.b"),
      placement: "lg:col-start-2 lg:row-start-3 lg:justify-self-center lg:self-start",
      alignment: "text-left lg:text-center",
      connector: "-top-[26%] left-1/2 h-[26%] w-px",
    },
  ] as const;

  const microLabels = [
    { key: "evidence", label: t("about.why.matrix.node.evidence"), position: "-left-16 top-4" },
    { key: "assets", label: t("about.why.matrix.node.assets"), position: "-right-12 top-4" },
    {
      key: "counterparty",
      label: t("about.why.matrix.node.counterparty"),
      position: "-left-24 bottom-4",
    },
    {
      key: "jurisdiction",
      label: t("about.why.matrix.node.jurisdiction"),
      position: "-right-24 bottom-4",
    },
    {
      key: "timing",
      label: t("about.why.matrix.node.timing"),
      position: "bottom-[-2.25rem] left-1/2 -translate-x-1/2",
    },
  ];

  return (
    <section id="why-it-matters" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 bg-gold sm:w-16" />
            <span className="text-[9px] tracking-[0.3em] uppercase text-gold sm:text-[10px] sm:tracking-[0.4em]">
              {t("about.why.kicker")}
            </span>
            <span className="h-px w-10 bg-gold sm:w-16" />
          </div>
          <h2 className="mt-7 break-words font-display text-[clamp(2.35rem,5vw,4.8rem)] leading-[0.98] tracking-tight text-ivory">
            {t("about.why.h2")}
          </h2>
          <div className="mt-7 flex items-center justify-center gap-3 text-[9px] tracking-[0.35em] uppercase text-emerald-200/60 sm:text-[10px] sm:tracking-[0.45em]">
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>{t("about.why.matrix.label")}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </div>
        </header>

        <div className="group/matrix relative mx-auto mt-14 min-h-[72rem] max-w-[92rem] overflow-hidden border border-gold/20 bg-[#06100b]/70 px-5 py-8 shadow-luxe sm:mt-20 sm:min-h-[68rem] sm:px-8 sm:py-10 lg:mt-24 lg:min-h-[760px] lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 border border-gold/10 sm:inset-6"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-24 w-24 border-l border-t border-gold/55"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 border-b border-r border-gold/55"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-12 w-12 border-b border-l border-gold/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-12 w-12 border-r border-t border-gold/25"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block lg:inset-x-16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[min(70vw,42rem)] w-[min(70vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/10 lg:block"
          />

          <div
            className="absolute left-6 top-[calc(50%_+_12rem)] z-10 hidden -translate-y-1/2 items-center gap-3 lg:flex"
            dir="ltr"
          >
            <span className="h-px w-10 bg-gold/55" />
            <span className="h-2 w-2 rotate-45 border-l border-t border-gold/80" />
            <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-gold/75">
              {t("about.why.matrix.axis.commercial")}
            </span>
          </div>
          <div
            className="absolute right-6 top-[calc(50%_+_12rem)] z-10 hidden -translate-y-1/2 items-center gap-3 lg:flex"
            dir="ltr"
          >
            <span className="font-mono text-[9px] tracking-[0.28em] uppercase text-gold/75">
              {t("about.why.matrix.axis.pathway")}
            </span>
            <span className="h-2 w-2 rotate-45 border-r border-t border-gold/80" />
            <span className="h-px w-10 bg-gold/55" />
          </div>
          <div
            className="absolute left-1/2 top-5 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
            dir="ltr"
          >
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/75">
              {t("about.why.matrix.axis.urgency")}
            </span>
            <span className="h-8 w-px bg-gradient-to-b from-gold/65 to-transparent" />
            <span className="h-2 w-2 rotate-45 border-l border-t border-gold/80" />
          </div>
          <div
            className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
            dir="ltr"
          >
            <span className="h-2 w-2 rotate-45 border-r border-b border-gold/80" />
            <span className="h-8 w-px bg-gradient-to-t from-gold/65 to-transparent" />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold/75">
              {t("about.why.matrix.axis.confidentiality")}
            </span>
          </div>

          <div className="relative z-20 grid min-h-[66rem] grid-cols-1 gap-4 lg:min-h-[680px] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,25rem)_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)_minmax(13rem,18rem)_minmax(0,1fr)] lg:gap-0">
            <div className="relative z-30 flex min-h-[15rem] items-center justify-center lg:hidden">
              <span
                aria-hidden="true"
                className="absolute inset-x-12 top-5 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
              />
              <div className="relative flex h-48 w-48 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-gold/20" />
                <span className="absolute inset-3 rounded-full border border-gold/45" />
                <span className="absolute inset-8 rounded-full border border-dashed border-emerald-200/25" />
                <span className="absolute inset-12 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(45,104,75,0.6),rgba(5,16,11,0.96)_72%)] shadow-[0_0_0_1px_rgba(211,166,72,0.42),0_0_45px_rgba(211,166,72,0.12)]" />
                <span className="relative z-10 max-w-[6rem] text-center font-mono text-[10px] leading-5 tracking-[0.2em] uppercase text-ivory">
                  {t("about.why.matrix.center")}
                </span>
              </div>
              <span
                aria-hidden="true"
                className="absolute inset-x-12 bottom-5 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
              />
            </div>

            {zones.map((zone, index) => (
              <Fragment key={zone.key}>
                <Reveal
                  delay={index * 90}
                  className={`relative z-20 flex min-w-0 max-w-[24rem] flex-col justify-center py-8 ${zone.placement} ${zone.alignment}`}
                >
                  <article className="group/zone relative px-5 sm:px-7 lg:px-4">
                    <span className="pointer-events-none absolute -inset-y-2 -left-2 border-l border-gold/10 transition-colors duration-500 group-hover/zone:border-gold/45 lg:-inset-y-5" />
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute hidden bg-gold/15 transition-colors duration-500 group-hover/zone:bg-gold/85 lg:block ${zone.connector}`}
                    />
                    <div className="font-display text-[4.5rem] leading-none text-gold/85 transition-colors duration-500 group-hover/zone:text-gold sm:text-[5.2rem]">
                      {lang === "fa" ? (index + 1).toLocaleString("fa-IR") : zone.number}
                    </div>
                    <div className="mt-3 h-px w-12 bg-gold/55 transition-all duration-500 group-hover/zone:w-20" />
                    <h3 className="mt-5 max-w-[20rem] break-words font-display text-2xl leading-[1.05] text-ivory sm:text-3xl">
                      {zone.title}
                    </h3>
                    <p className="mt-4 max-w-[22rem] text-sm leading-7 text-ivory/60 sm:text-[15px]">
                      {zone.body}
                    </p>
                  </article>
                </Reveal>
              </Fragment>
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex sm:h-64 sm:w-64">
            <span className="absolute inset-0 rounded-full border border-gold/20" />
            <span className="absolute inset-3 rounded-full border border-gold/45 transition-transform duration-700 group-hover/matrix:scale-105" />
            <span className="absolute inset-8 rounded-full border border-dashed border-emerald-200/25" />
            <span className="absolute inset-12 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(45,104,75,0.6),rgba(5,16,11,0.96)_72%)] shadow-[0_0_0_1px_rgba(211,166,72,0.42),0_0_45px_rgba(211,166,72,0.12)]" />
            <span className="relative z-10 max-w-[7rem] text-center font-mono text-[11px] leading-5 tracking-[0.2em] uppercase text-ivory">
              {t("about.why.matrix.center")}
            </span>
            {microLabels.map((item) => (
              <span
                key={item.key}
                className={`absolute hidden whitespace-nowrap font-mono text-[8px] tracking-[0.22em] uppercase text-gold/65 sm:block ${item.position}`}
              >
                {item.label}
              </span>
            ))}
          </div>
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
    <section className="relative bg-onyx py-32 border-t border-gold/10 overflow-hidden">
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
