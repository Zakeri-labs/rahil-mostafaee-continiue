"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  Banknote,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  FileSearch,
  FileText,
  Globe2,
  HelpCircle,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import hero from "@/assets/hero-skyline.jpg";
import rahilCutout from "@/assets/rahil-cutout.png";
import office from "@/assets/office-interior.jpg";
import portrait from "@/assets/rahil-ai-1.jpg";
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
    <div className="overflow-hidden" dir={dir}>
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

function Hero() {
  const { t, lang } = useI18n();
  const waHref = whatsappHref(t("home.hero.whatsappMsg"));

  return (
    <section className="relative -mt-24 flex flex-col overflow-hidden lg:min-h-screen lg:items-center lg:pt-32">
      <div className="absolute inset-0 -z-10 lg:hidden">
        <img
          src={rahilCutout.src}
          alt="Rahil Mostafaee"
          className="w-full h-full object-cover ken-burns"
          style={{ objectPosition: "center 22%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/75 via-onyx/35 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/65 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial-gold)", opacity: 0.16 }}
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

      <div className="absolute right-8 top-32 z-10 hidden items-center gap-3 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
          N° 001
        </span>
        <span className="h-px w-10 bg-gold/40" />
      </div>

      <div className="h-[55svh] lg:hidden" aria-hidden />

      <div className="relative z-[2] w-full px-6 pb-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-20 lg:pb-24 lg:pt-12">
        <div className="lg:col-span-7 lg:space-y-10">
          <div className="reveal mb-3 flex items-center gap-2 lg:mb-0 lg:gap-3">
            <span className="h-px w-8 bg-gold lg:w-12" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gold leading-tight lg:tracking-[0.4em]">
              {t("home.hero.kicker")}
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-[3.25rem] leading-[0.98] tracking-tight text-ivory break-words lg:text-balance lg:text-[6.75rem] lg:leading-[0.95]">
            <HeroHeadlineText lang={lang} title={t("home.hero.h1")} />
          </h1>

          <p className="reveal reveal-delay-2 mt-4 text-[13px] text-muted-foreground leading-relaxed lg:mt-0 lg:max-w-xl lg:text-lg">
            {t("home.hero.lede")}
          </p>

          <div className="mt-5 space-y-2 lg:flex lg:flex-wrap lg:items-center lg:gap-4 lg:space-y-0">
            <Link
              href="/contact"
              className="reveal reveal-delay-3 group inline-flex w-full items-center justify-center gap-2 bg-gold px-4 py-3.5 text-onyx shadow-glow transition-all duration-300 hover:bg-gold-soft lg:w-auto lg:gap-3 lg:px-8 lg:py-4"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium lg:text-xs lg:tracking-[0.3em]">
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
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium lg:text-xs lg:tracking-[0.3em]">
                {t("home.hero.cta.secondary")}
              </span>
            </a>
          </div>

          <div className="reveal reveal-delay-4 -mx-6 mt-6 grid grid-cols-3 gap-px border-t border-gold/25 bg-gold/15 lg:mx-0 lg:mt-12 lg:max-w-3xl lg:border-t-0 lg:bg-gold/10">
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
                <div className="stat-label mt-1.5 text-[9px] tracking-[0.14em] uppercase text-muted-foreground leading-tight lg:mt-1 lg:text-[10px] lg:tracking-[0.3em]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
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
                  <div className="text-[9px] tracking-[0.35em] uppercase text-gold leading-none">
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
                    <span className="text-[9px] tracking-[0.45em] uppercase text-gold">
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

            <div className="reveal reveal-delay-4 mt-6 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              <span>{t("home.hero.signature")}</span>
              <span className="font-mono text-gold">— RM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground">
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
    { icon: Briefcase, title: t("home.pain.1.t"), body: t("home.pain.1.b") },
    { icon: AlertTriangle, title: t("home.pain.2.t"), body: t("home.pain.2.b") },
    { icon: Users, title: t("home.pain.3.t"), body: t("home.pain.3.b") },
    { icon: Banknote, title: t("home.pain.4.t"), body: t("home.pain.4.b") },
    { icon: Globe2, title: t("home.pain.5.t"), body: t("home.pain.5.b") },
  ];

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={t("home.pain.kicker")} title={t("home.pain.h2")} />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <article className="h-full bg-onyx p-7 lg:p-8 group hover:bg-charcoal transition-colors duration-500">
                <card.icon
                  className="w-6 h-6 text-gold mb-7 group-hover:scale-110 transition-transform"
                  strokeWidth={1.2}
                />
                <h3 className="font-display text-2xl text-ivory leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
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
    },
    {
      icon: FileSearch,
      title: t("home.axes.2.t"),
      bullets: [1, 2, 3, 4].map((n) => t(`home.axes.2.b${n}`)),
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
            <img src={office.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7">
              <Clock className="w-7 h-7 text-gold mb-4" strokeWidth={1.2} />
              <div className="text-[10px] tracking-[0.35em] uppercase text-gold">
                {t("home.fast.kicker")}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <SectionIntro
            kicker={t("home.fast.kicker")}
            title={t("home.fast.h2")}
            body={t("home.fast.body")}
          />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t, lang } = useI18n();
  const steps = [1, 2, 3, 4, 5].map((n) => t(`home.process.s${n}`));
  const num = (n: number) =>
    lang === "fa" ? n.toLocaleString("fa-IR") : String(n).padStart(2, "0");

  return (
    <section className="relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        <SectionIntro kicker={t("home.process.kicker")} title={t("home.process.h2")} centered />
        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gold/10 hairline">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i * 90}>
              <li className="h-full bg-onyx p-8 group hover:bg-charcoal transition-colors duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-[0.3em] text-gold">{num(i + 1)}</span>
                  <FileText
                    className="w-5 h-5 text-gold group-hover:scale-110 transition-transform"
                    strokeWidth={1.2}
                  />
                </div>
                <div className="font-display text-2xl text-ivory leading-tight">{step}</div>
              </li>
            </Reveal>
          ))}
        </ol>
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
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold">
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
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
              <span className="text-xs tracking-[0.22em] uppercase font-medium">
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
              <span className="text-xs tracking-[0.22em] uppercase font-medium">
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
