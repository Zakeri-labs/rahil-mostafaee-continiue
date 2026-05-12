import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe2, Lock, Scale, Building2, Crown, Phone, Sparkles, Clock, Check, Zap, Instagram, CalendarCheck, CreditCard, MessageSquare, ListChecks } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listServices } from "@/lib/booking.functions";
import hero from "@/assets/hero-skyline.jpg";
import office from "@/assets/office-interior.jpg";
import portrait from "@/assets/rahil-ai-1.jpg";
import rahilCutout from "@/assets/rahil-cutout.png";
import officePortrait from "@/assets/rahil-ai-2.jpg";
import profilePortrait from "@/assets/rahil-ai-3.jpg";
import ig1 from "@/assets/ig/ig-1.jpg";
import ig2 from "@/assets/ig/ig-2.jpg";
import ig3 from "@/assets/ig/ig-3.jpg";
import ig4 from "@/assets/ig/ig-4.jpg";
import ig5 from "@/assets/ig/ig-5.jpg";
import ig6 from "@/assets/ig/ig-6.jpg";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { RotatingWord } from "@/components/site/RotatingWord";
import { Parallax, ScrollProgress } from "@/components/site/Parallax";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahil Mostafaee — Strategic Legal Protection for Iranians in Dubai" },
      { name: "description", content: "Elite cross-border legal representation for investors, entrepreneurs and high-net-worth families. Discreet. Powerful. International." },
      { property: "og:title", content: "Rahil Mostafaee — Strategic Legal Counsel" },
      { property: "og:description", content: "Where law, strategy and protection converge. Dubai · Tehran · International." },
    ],
  }),
  component: Home,
});

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function localizeNum(s: string, lang: string) {
  if (lang !== "fa") return s;
  return s.replace(/\d/g, (d) => FA_DIGITS[Number(d)]).replace("h", "س");
}

function Home() {
  const { dir } = useI18n();
  return (
    <div className="overflow-hidden" dir={dir}>
      <ScrollProgress />
      <Hero />
      <Marquee />
      <Pillars />
      {/* Atelier hidden on mobile to reduce visual load */}
      <div className="hidden lg:block">
        <Atelier />
      </div>
      <Practice />
      <Packages />
      <International />
      <Process />
      <Founder />
      <InstagramSection />
      <div className="hidden md:block">
        <Trust />
      </div>
      <CTA />
    </div>
  );
}

function Hero() {
  const { t, lang } = useI18n();
  return (
    <>
      {/* ===== MOBILE HERO — portrait fills right, content left, Bader-style ===== */}
      <section className="relative lg:hidden overflow-hidden -mt-24 pt-24 min-h-[100svh] flex flex-col">
        {/* Backdrop */}
        <div className="absolute inset-0 -z-10">
          <img src={office} alt="" className="w-full h-full object-cover opacity-20 scale-110 ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/85 to-onyx" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)", opacity: 0.3 }} />
        </div>

        {/* Portrait — absolutely positioned, bleeds full right side, large like Bader */}
        <div className="absolute right-[-30%] bottom-0 top-16 w-[115%] z-[1] pointer-events-none">
          <div className="absolute inset-8 bg-gold/10 blur-3xl drift" aria-hidden />
          <img
            src={rahilCutout}
            alt="Rahil Mostafaee"
            className="relative h-full w-full object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            style={{ objectPosition: "center bottom" }}
          />
          {/* Fade left edge into bg so text remains legible */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-onyx via-onyx/85 to-transparent" />
        </div>

        {/* Content overlay — left column */}
        <div className="relative z-[2] flex-1 flex flex-col px-6 pt-4 pb-6">
          <div className="w-[62%] flex flex-col flex-1">
            <div className="reveal flex items-center gap-2 mb-5">
              <span className="h-px w-6 bg-gold" />
              <span className="text-[9px] tracking-[0.32em] uppercase text-gold leading-tight">
                {t("home.hero.kicker")}
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 font-display text-[2.5rem] leading-[1.02] tracking-tight text-ivory">
              {t("home.hero.name.first")}
              <br />
              <span className="italic gradient-gold-text">{t("home.hero.name.last")}</span>
            </h1>

            <div className="reveal reveal-delay-2 mt-3 font-display italic text-base text-gold/90">
              <RotatingWord
                className="italic"
                words={[
                  t("home.hero.rotate.1"),
                  t("home.hero.rotate.2"),
                  t("home.hero.rotate.3"),
                  t("home.hero.rotate.4"),
                ]}
              />
            </div>

            <div className="reveal reveal-delay-2 mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="tracking-wide">{t("home.hero.location")}</span>
            </div>

            <h2 className="reveal reveal-delay-3 mt-5 font-display text-lg leading-snug text-ivory">
              {t("home.hero.h1.a")} {t("home.hero.h1.c")}
            </h2>

            <p className="reveal reveal-delay-3 mt-3 text-[12px] text-muted-foreground leading-relaxed">
              {t("home.hero.lede")}
            </p>
          </div>

          {/* CTAs — full width below */}
          <div className="relative z-10 pt-6 mt-auto space-y-2.5">
            <Link
              to="/booking"
              className="reveal reveal-delay-3 inline-flex w-full items-center justify-center gap-2 px-3 py-3.5 bg-gold text-onyx shadow-glow"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                {t("home.hero.cta.book")}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="reveal reveal-delay-4 inline-flex w-full items-center justify-center gap-2 px-3 py-3 glass-strong text-ivory backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
                {t("home.hero.cta.emergency")}
              </span>
            </Link>
          </div>
        </div>

        {/* Compact stats row */}
        <div className="relative z-[2] grid grid-cols-4 gap-px bg-gold/10 border-t border-gold/20">
          {[
            { v: "12+", l: t("home.hero.stat.years") },
            { v: "300+", l: t("home.hero.stat.mandates") },
            { v: "24h", l: t("home.hero.stat.sla") },
            { v: "3", l: t("home.hero.stat.langs") },
          ].map((s) => (
            <div key={s.l} className="bg-onyx/90 px-2 py-3 text-center">
              <div className="font-display text-base text-gold">{localizeNum(s.v, lang)}</div>
              <div className="text-[7px] tracking-[0.18em] uppercase text-muted-foreground mt-0.5 leading-tight">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DESKTOP HERO ===== */}
      <section className="relative hidden lg:flex min-h-screen items-center overflow-hidden -mt-24 pt-32">
        <Parallax speed={60} className="absolute inset-0">
          <img src={hero} alt="Dubai skyline" className="w-full h-full object-cover opacity-40 ken-burns scale-110" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/50 to-onyx" />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/60 to-transparent" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: "radial-gradient(oklch(0.78 0.12 80) 1px, transparent 1px)", backgroundSize: "3px 3px" }}
          />
        </Parallax>

        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-10">
          <span className="h-24 w-px bg-gradient-to-b from-transparent to-gold/60" />
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold/80 [writing-mode:vertical-rl] rotate-180">
            {t("home.hero.est")}
          </span>
          <span className="h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>

        <div className="absolute right-8 top-32 flex items-center gap-3 z-10">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground">N° 001</span>
          <span className="h-px w-10 bg-gold/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20 pb-20 lg:pb-24 pt-12 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="reveal flex items-center gap-3">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                  {t("home.hero.kicker")}
                </span>
              </div>

              <h1 className="reveal reveal-delay-1 font-display text-7xl lg:text-[6.75rem] leading-[0.95] tracking-tight text-balance">
                <span className="text-ivory">{t("home.hero.h1.a")}</span>
                <RotatingWord
                  className="gradient-gold-text italic"
                  words={[
                    t("home.hero.rotate.1"),
                    t("home.hero.rotate.2"),
                    t("home.hero.rotate.3"),
                    t("home.hero.rotate.4"),
                  ]}
                />
                <br />
                <span className="text-ivory">{t("home.hero.h1.c")}</span>
                <br />
                <span className="text-muted-foreground font-light">{t("home.hero.h1.d")}</span>
              </h1>

              <p className="reveal reveal-delay-2 max-w-xl text-lg text-muted-foreground leading-relaxed">
                {t("home.hero.lede")}
              </p>

              <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4">
                <Link to="/booking" className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all duration-300 shadow-glow">
                  <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("home.hero.cta.book")}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link to="/contact" className="group inline-flex items-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                  </span>
                  <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("home.hero.cta.emergency")}</span>
                </Link>
              </div>

              <div className="reveal reveal-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gold/10 mt-12 max-w-3xl">
                {[
                  { v: "12+", l: t("home.hero.stat.years") },
                  { v: "300+", l: t("home.hero.stat.mandates") },
                  { v: "24h", l: t("home.hero.stat.sla") },
                  { v: "3", l: t("home.hero.stat.langs") },
                ].map((s) => (
                  <div key={s.l} className="bg-onyx/80 px-6 py-6">
                    <div className="font-display text-3xl text-gold">{localizeNum(s.v, lang)}</div>
                    <div className="stat-label text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-16 rounded-full bg-gold/10 blur-3xl opacity-70 drift" aria-hidden />

                <div className="reveal reveal-delay-3 absolute -top-4 -right-4 z-20 glass-strong px-4 py-3 border-l-2 border-gold">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                    </span>
                    <div>
                      <div className="text-[9px] tracking-[0.35em] uppercase text-gold leading-none">{t("home.hero.available")}</div>
                      <div className="text-[11px] text-ivory mt-1 leading-none">{t("home.hero.location")}</div>
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
                      src={portrait}
                      alt="Rahil Mostafaee"
                      className="w-full h-full object-cover slow-pan"
                      width={900}
                      height={1125}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-7">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="h-px w-6 bg-gold" />
                        <span className="text-[9px] tracking-[0.45em] uppercase text-gold">{t("home.hero.founder")}</span>
                      </div>
                      <div className="font-display text-3xl text-ivory leading-tight">{t("home.hero.name.first")}<br /><span className="italic gradient-gold-text">{t("home.hero.name.last")}</span></div>
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
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
          <span className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground">{t("home.hero.scroll")}</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </section>
    </>
  );
}

function Atelier() {
  const { t } = useI18n();
  const photos = [
    { src: officePortrait, label: t("home.atelier.1.l"), caption: t("home.atelier.1.c") },
    { src: portrait, label: t("home.atelier.2.l"), caption: t("home.atelier.2.c") },
    { src: profilePortrait, label: t("home.atelier.3.l"), caption: t("home.atelier.3.c") },
  ];
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.atelier.kicker")}</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl text-ivory leading-[1.05] tracking-tight">
              {t("home.atelier.h2.a")} <span className="italic gradient-gold-text">{t("home.atelier.h2.b")}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">{t("home.atelier.body")}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {photos.map((p, i) => (
            <Reveal key={p.label} delay={i * 140} y={32}>
              <figure className="group relative frame-gold overflow-hidden aspect-[3/4] tilt-hover">
                <img src={p.src} alt={p.label} className="w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
                <figcaption className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{p.label}</div>
                  <div className="font-display text-xl text-ivory mt-1">{p.caption}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const { t } = useI18n();
  const pillars = [
    { icon: ShieldCheck, title: t("home.pillars.discretion.t"), body: t("home.pillars.discretion.b") },
    { icon: Globe2, title: t("home.pillars.intl.t"), body: t("home.pillars.intl.b") },
    { icon: Crown, title: t("home.pillars.elite.t"), body: t("home.pillars.elite.b") },
    { icon: Lock, title: t("home.pillars.protect.t"), body: t("home.pillars.protect.b") },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-px bg-gold/10 hairline">
          {pillars.map((p) => (
            <div key={p.title} className="bg-onyx p-10 group hover:bg-charcoal transition-colors duration-500">
              <p.icon className="w-7 h-7 text-gold mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <div className="font-display text-2xl text-ivory mb-3">{p.title}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practice() {
  const { t } = useI18n();
  const practices = [
    { kicker: "01", icon: Globe2, title: t("home.practice.1.t"), body: t("home.practice.1.b"), tags: [t("home.practice.1.tag1"), t("home.practice.1.tag2"), t("home.practice.1.tag3")] },
    { kicker: "02", icon: Crown, title: t("home.practice.2.t"), body: t("home.practice.2.b"), tags: [t("home.practice.2.tag1"), t("home.practice.2.tag2"), t("home.practice.2.tag3")] },
    { kicker: "03", icon: Building2, title: t("home.practice.3.t"), body: t("home.practice.3.b"), tags: [t("home.practice.3.tag1"), t("home.practice.3.tag2"), t("home.practice.3.tag3")] },
    { kicker: "04", icon: Scale, title: t("home.practice.4.t"), body: t("home.practice.4.b"), tags: [t("home.practice.4.tag1"), t("home.practice.4.tag2"), t("home.practice.4.tag3")] },
    { kicker: "05", icon: ShieldCheck, title: t("home.practice.5.t"), body: t("home.practice.5.b"), tags: [t("home.practice.5.tag1"), t("home.practice.5.tag2"), t("home.practice.5.tag3")] },
    { kicker: "06", icon: Lock, title: t("home.practice.6.t"), body: t("home.practice.6.b"), tags: [t("home.practice.6.tag1"), t("home.practice.6.tag2"), t("home.practice.6.tag3")] },
  ];

  return (
    <section className="relative py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.practice.kicker")}</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-ivory leading-[1] tracking-tight">
              {t("home.practice.h2.a")}<br /><span className="italic gradient-gold-text">{t("home.practice.h2.b")}</span>
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
            {t("home.practice.viewAll")} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => (
            <article key={p.title} className="group relative p-8 lg:p-10 bg-card hairline hover:border-gold/40 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-10">
                <p.icon className="w-6 h-6 text-gold" strokeWidth={1.2} />
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{p.kicker}</span>
              </div>
              <h3 className="font-display text-2xl text-ivory mb-4 leading-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{p.body}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tg) => (
                  <span key={tg} className="text-[10px] tracking-widest uppercase px-2.5 py-1 border border-gold/20 text-muted-foreground">
                    {tg}
                  </span>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function International() {
  const { t } = useI18n();
  const items = [
    { t: t("home.intl.s1"), n: "01" },
    { t: t("home.intl.s2"), n: "02" },
    { t: t("home.intl.s3"), n: "03" },
    { t: t("home.intl.s4"), n: "04" },
    { t: t("home.intl.s5"), n: "05" },
    { t: t("home.intl.s6"), n: "06" },
  ];
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.intl.kicker")}</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory leading-[1.05] tracking-tight">
            {t("home.intl.h2.a")} <span className="italic gradient-gold-text">{t("home.intl.h2.b")}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t("home.intl.body")}</p>
          <Link to="/international" className="group inline-flex items-center gap-3 px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">
            <span className="text-xs tracking-[0.3em] uppercase">{t("home.intl.cta")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {items.map((s, i) => (
            <div key={s.t} className={`glass p-6 lg:p-8 ${i % 2 === 1 ? "translate-y-8" : ""}`}>
              <div className="font-mono text-[10px] tracking-widest text-gold mb-6">{s.n}</div>
              <div className="font-display text-lg text-ivory leading-tight">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const { t, lang } = useI18n();
  const fetchServices = useServerFn(listServices);
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetchServices({ data: {} }),
  });

  const formatAed = (aed: number) => aed.toLocaleString(lang === "fa" ? "fa-IR" : "en-US");

  const featuresFor = (slug: string): string[] => {
    const map: Record<string, string[]> = {
      "standard-30": [t("home.pkg.feat.confidential"), t("home.pkg.feat.followup"), t("home.pkg.feat.summary")],
      "strategic-60": [t("home.pkg.feat.deepdive"), t("home.pkg.feat.roadmap"), t("home.pkg.feat.priority"), t("home.pkg.feat.summary")],
      "emergency-24h": [t("home.pkg.feat.sameday"), t("home.pkg.feat.directline"), t("home.pkg.feat.priority")],
      "international": [t("home.pkg.feat.multijuris"), t("home.pkg.feat.intake"), t("home.pkg.feat.roadmap"), t("home.pkg.feat.summary")],
    };
    return map[slug] ?? [];
  };

  return (
    <section id="packages" className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 mx-auto">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.pkg.kicker")}</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory tracking-tight">
            {t("home.pkg.h2.a")} <span className="italic gradient-gold-text">{t("home.pkg.h2.b")}</span>
          </h2>
          <p className="text-muted-foreground">{t("home.pkg.body")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const name = lang === "fa" ? s.name_fa : s.name_en;
            const desc = lang === "fa" ? s.description_fa : s.description_en;
            const featured = s.is_emergency || i === 1;
            return (
              <Reveal key={s.id} delay={i * 100}>
                <article className={`relative h-full flex flex-col p-8 transition-all duration-500 ${featured ? "glass-strong border border-gold/40 shadow-luxe" : "glass hover:border-gold/30"}`}>
                  {featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-onyx text-[9px] tracking-[0.35em] uppercase font-medium whitespace-nowrap">
                      {s.is_emergency ? t("home.pkg.urgent") : t("home.pkg.popular")}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gold mb-4">
                    {s.is_emergency ? <Zap className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                    <span className="text-[10px] tracking-[0.3em] uppercase">
                      {lang === "fa" ? `${s.duration_minutes.toLocaleString("fa-IR")} ${t("home.pkg.min")}` : `${s.duration_minutes} ${t("home.pkg.min")}`}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-ivory leading-tight min-h-[3.5rem]">{name}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed min-h-[3.5rem]">{desc}</p>
                  <div className="my-6 gold-divider" />
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-gold">{formatAed(s.price_aed)}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{t("home.pkg.aed")}</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {featuresFor(s.slug).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    search={{ service: s.slug }}
                    className={`mt-8 group inline-flex items-center justify-center gap-3 px-6 py-3.5 transition-all ${featured ? "bg-gold text-onyx hover:bg-gold-soft shadow-glow" : "border border-gold/40 text-gold hover:bg-gold hover:text-onyx"}`}
                  >
                    <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("home.pkg.reserve")}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/booking" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-gold transition-colors">
            <span>{t("home.pkg.viewAll")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t, lang } = useI18n();
  const steps = [
    { icon: ListChecks, t: t("home.process.s1.t"), b: t("home.process.s1.b") },
    { icon: CalendarCheck, t: t("home.process.s2.t"), b: t("home.process.s2.b") },
    { icon: CreditCard, t: t("home.process.s3.t"), b: t("home.process.s3.b") },
    { icon: MessageSquare, t: t("home.process.s4.t"), b: t("home.process.s4.b") },
  ];
  const num = (n: number) => (lang === "fa" ? n.toLocaleString("fa-IR") : String(n).padStart(2, "0"));
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-3 mx-auto">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.process.kicker")}</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory tracking-tight">
            {t("home.process.h2.a")} <span className="italic gradient-gold-text">{t("home.process.h2.b")}</span>
          </h2>
          <p className="text-muted-foreground">{t("home.process.body")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 hairline">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <div className="relative h-full bg-onyx p-8 lg:p-10 group hover:bg-charcoal transition-colors duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-[0.3em] text-gold">{num(i + 1)}</span>
                  <s.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                </div>
                <div className="font-display text-2xl text-ivory mb-3 leading-tight">{s.t}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.b}</div>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-px w-px h-12 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/booking" className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all duration-300 shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("home.process.cta")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const INSTAGRAM_URL = "https://instagram.com/rahil.mostafaee";

function InstagramSection() {
  const { t } = useI18n();
  const tiles = [ig1, ig2, ig3, ig4, ig5, ig6];
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.ig.kicker")}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-ivory leading-[1.05] tracking-tight">
            {t("home.ig.h2.a")} <span className="italic gradient-gold-text">{t("home.ig.h2.b")}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">{t("home.ig.body")}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-xs tracking-[0.3em] uppercase">{t("home.ig.cta")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{t("home.ig.handle")}</div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-3 gap-2 sm:gap-3">
          {tiles.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden hairline"
            >
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-onyx/40 group-hover:bg-onyx/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-6 h-6 text-ivory" strokeWidth={1.4} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const { t } = useI18n();
  return (
    <section className="relative py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden frame-gold tilt-hover">
            <img src={officePortrait} alt="Rahil Mostafaee" className="w-full h-full object-cover slow-pan" loading="lazy" width={1200} height={1500} />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-strong p-6 max-w-xs hidden md:block">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{t("home.founder.langsLabel")}</div>
            <div className="font-display text-xl text-ivory">فارسی · English · العربية</div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.founder.kicker")}</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory leading-[1.05] tracking-tight">
            Rahil Mostafaee
          </h2>
          <div className="text-gold tracking-[0.3em] uppercase text-xs">{t("home.founder.role")}</div>
          <p className="text-muted-foreground leading-relaxed text-lg">{t("home.founder.body")}</p>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {[
              { t: t("home.founder.philT"), b: t("home.founder.philB") },
              { t: t("home.founder.postT"), b: t("home.founder.postB") },
            ].map((x) => (
              <div key={x.t} className="hairline p-6">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">{x.t}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{x.b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useI18n();
  const items = [
    { v: "DIFC", l: t("home.trust.difc") },
    { v: "UAE", l: t("home.trust.uae") },
    { v: "EU · UK", l: t("home.trust.eu") },
    { v: "IR", l: t("home.trust.ir") },
  ];
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <img src={office} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-onyx/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center space-y-12">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mx-auto">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.trust.kicker")}</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory tracking-tight">
            {t("home.trust.h2.a")} <span className="italic gradient-gold-text">{t("home.trust.h2.b")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 hairline max-w-5xl mx-auto">
          {items.map((i) => (
            <div key={i.l} className="bg-onyx/80 backdrop-blur-md p-10">
              <div className="font-display text-3xl text-gold mb-3">{i.v}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{i.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useI18n();
  return (
    <section className="relative py-40 border-t border-gold/10">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-12">
        <h2 className="font-display text-5xl lg:text-8xl text-ivory tracking-tight leading-[0.95]">
          {t("home.cta.h2.a")} <span className="italic gradient-gold-text">{t("home.cta.h2.b")}</span><br />
          {t("home.cta.h2.c")} <span className="italic gradient-gold-text">{t("home.cta.h2.d")}</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("home.cta.body")}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/booking" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all duration-300 shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("home.cta.book")}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a href="tel:+971000000000" className="group inline-flex items-center gap-3 px-10 py-5 glass-strong text-ivory hover:border-gold/40 transition-all">
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-xs tracking-[0.3em] uppercase font-medium">{t("home.cta.direct")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
