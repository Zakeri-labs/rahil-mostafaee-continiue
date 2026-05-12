import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe2, Lock, Scale, Building2, Crown, Phone, Sparkles } from "lucide-react";
import hero from "@/assets/hero-skyline.jpg";
import office from "@/assets/office-interior.jpg";
import portrait from "@/assets/rahil-ai-1.jpg";
import officePortrait from "@/assets/rahil-ai-2.jpg";
import profilePortrait from "@/assets/rahil-ai-3.jpg";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
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
      <Hero />
      <Marquee />
      <Pillars />
      <Practice />
      <International />
      <Atelier />
      <Packages />
      <Platform />
      <Founder />
      <Trust />
      <CTA />
    </div>
  );
}

function Hero() {
  const { t, lang } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-24 pt-32">
      <div className="absolute inset-0">
        <img src={hero} alt="Dubai skyline" className="w-full h-full object-cover opacity-40 ken-burns" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/50 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/60 to-transparent" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "radial-gradient(oklch(0.78 0.12 80) 1px, transparent 1px)", backgroundSize: "3px 3px" }}
        />
      </div>

      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-10">
        <span className="h-24 w-px bg-gradient-to-b from-transparent to-gold/60" />
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold/80 [writing-mode:vertical-rl] rotate-180">
          {t("home.hero.est")}
        </span>
        <span className="h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      <div className="absolute right-8 top-32 hidden lg:flex items-center gap-3 z-10">
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

            <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-7xl lg:text-[6.75rem] leading-[0.95] tracking-tight text-balance">
              <span className="text-ivory">{t("home.hero.h1.a")}</span>
              <span className="gradient-gold-text italic">{t("home.hero.h1.b")}</span>
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

          <div className="lg:col-span-5 hidden lg:block">
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
                    <div className="font-display text-3xl text-ivory leading-tight">Rahil<br /><span className="italic gradient-gold-text">Mostafaee</span></div>
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

function Platform() {
  const { t } = useI18n();
  const menu = [
    t("home.platform.menu.1"),
    t("home.platform.menu.2"),
    t("home.platform.menu.3"),
    t("home.platform.menu.4"),
    t("home.platform.menu.5"),
    t("home.platform.menu.6"),
  ];
  const meta = [
    { l: t("home.platform.stage"), v: t("home.platform.stageVal") },
    { l: t("home.platform.lead"), v: t("home.platform.leadVal") },
    { l: t("home.platform.next"), v: t("home.platform.nextVal") },
  ];
  const tasks: [string, string, string][] = [
    [t("home.platform.task1"), t("home.platform.task1s"), "100%"],
    [t("home.platform.task2"), t("home.platform.task2s"), "60%"],
    [t("home.platform.task3"), t("home.platform.task3s"), "20%"],
  ];
  return (
    <section className="relative py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-3 mx-auto">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">{t("home.platform.kicker")}</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory tracking-tight">
            {t("home.platform.h2.a")} <span className="italic gradient-gold-text">{t("home.platform.h2.b")}</span>
          </h2>
          <p className="text-muted-foreground">{t("home.platform.body")}</p>
        </div>

        <div className="relative">
          <div className="glass-strong shadow-luxe p-2 rounded-2xl">
            <div className="rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gold/10 bg-onyx/80">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/60" />
                </div>
                <div className="ml-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  rahilmostafaee.com / portal / matters
                </div>
              </div>
              <div className="grid grid-cols-12 gap-px bg-gold/10">
                <div className="col-span-12 lg:col-span-3 bg-charcoal p-6 space-y-1">
                  {menu.map((m, i) => (
                    <div key={m} className={`px-3 py-2.5 text-sm ${i === 1 ? "bg-gold/10 text-gold border-l-2 border-gold" : "text-muted-foreground"}`}>
                      {m}
                    </div>
                  ))}
                </div>
                <div className="col-span-12 lg:col-span-9 bg-onyx p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{t("home.platform.activeMatter")}</div>
                      <div className="font-display text-2xl text-ivory mt-1">{t("home.platform.matterTitle")}</div>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 bg-gold/10 text-gold border border-gold/30">{t("home.platform.inProgress")}</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {meta.map((x) => (
                      <div key={x.l} className="hairline p-4">
                        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{x.l}</div>
                        <div className="text-ivory mt-2">{x.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {tasks.map(([title, status, w]) => (
                      <div key={title} className="hairline p-4">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="text-ivory">{title}</span>
                          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{status}</span>
                        </div>
                        <div className="h-px bg-charcoal overflow-hidden">
                          <div className="h-full bg-gold" style={{ width: w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 glass-strong p-5 rounded-xl shadow-luxe float hidden md:block">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{t("home.platform.encrypted")}</div>
                <div className="text-sm text-ivory">{t("home.platform.e2e")}</div>
              </div>
            </div>
          </div>
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
