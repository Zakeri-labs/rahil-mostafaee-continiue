import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe2, Lock, Scale, Building2, Crown, Phone, Sparkles } from "lucide-react";
import hero from "@/assets/hero-skyline.jpg";
import office from "@/assets/office-interior.jpg";
import portrait from "@/assets/rahil-ai-1.jpg";
import officePortrait from "@/assets/rahil-ai-2.jpg";
import profilePortrait from "@/assets/rahil-ai-3.jpg";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";

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

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Marquee />
      <Pillars />
      <Practice />
      <International />
      <Atelier />
      <Platform />
      <Founder />
      <Trust />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden -mt-24 pt-24">
      <div className="absolute inset-0">
        <img src={hero} alt="Dubai skyline" className="w-full h-full object-cover opacity-50 ken-burns" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/40 to-onyx" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/70 to-transparent" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-10">
            <div className="reveal flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">
                Dubai · DIFC · International
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-balance">
              <span className="text-ivory">Strategic </span>
              <span className="gradient-gold-text italic">Legal</span>
              <br />
              <span className="text-ivory">Protection.</span>
              <br />
              <span className="text-muted-foreground font-light">Without compromise.</span>
            </h1>

            <p className="reveal reveal-delay-2 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Cross-border representation for Iranian investors, entrepreneurs and
              high-net-worth families navigating UAE and international legal systems.
              Discreet, powerful, and built around a single principle — protect what matters.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-onyx hover:bg-gold-soft transition-all duration-300 shadow-glow"
              >
                <span className="text-xs tracking-[0.3em] uppercase font-medium">
                  Book Confidential Consultation
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 glass-strong text-ivory hover:border-gold/40 transition-all"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 pulse-gold" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                <span className="text-xs tracking-[0.3em] uppercase font-medium">
                  Emergency Legal Line
                </span>
              </Link>
            </div>

            <div className="reveal reveal-delay-4 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gold/10 mt-16 max-w-3xl">
              {[
                { v: "12+", l: "Years Practice" },
                { v: "300+", l: "HNW Mandates" },
                { v: "24h", l: "Response SLA" },
                { v: "3", l: "Languages" },
              ].map((s) => (
                <div key={s.l} className="bg-onyx/80 px-6 py-6">
                  <div className="font-display text-3xl text-gold">{s.v}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative drift">
              <div className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl opacity-70" aria-hidden />
              <div className="reveal reveal-delay-2 relative frame-gold overflow-hidden aspect-[4/5] tilt-hover gold-sweep">
                <img
                  src={portrait}
                  alt="Rahil Mostafaee, Strategic Legal Counsel"
                  className="w-full h-full object-cover slow-pan"
                  width={900}
                  height={1125}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Founder</div>
                  <div className="font-display text-2xl text-ivory mt-1">Rahil Mostafaee</div>
                </div>
              </div>
              <div className="reveal reveal-delay-4 absolute -bottom-6 -left-6 glass-strong p-4 hidden xl:block">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Available</div>
                <div className="text-sm text-ivory mt-1">DIFC · Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Atelier() {
  const photos = [
    { src: officePortrait, label: "In Chambers", caption: "Private counsel, DIFC" },
    { src: portrait, label: "The Founder", caption: "Strategic Legal Counsel" },
    { src: profilePortrait, label: "Off the Record", caption: "Personal · Private" },
  ];
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Portrait</span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl text-ivory leading-[1.05] tracking-tight">
              Presence, <span className="italic gradient-gold-text">poise, precision.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A practice defined by discipline and discretion — and a personal
            standard that mirrors the matters entrusted to it.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {photos.map((p, i) => (
            <Reveal key={p.label} delay={i * 140} y={32}>
              <figure className="group relative frame-gold overflow-hidden aspect-[3/4] tilt-hover">
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
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
  const pillars = [
    { icon: ShieldCheck, title: "Discretion", body: "Every matter handled under absolute confidentiality protocols." },
    { icon: Globe2, title: "International", body: "Coordinated counsel across UAE, EU, UK and Iran jurisdictions." },
    { icon: Crown, title: "Elite Access", body: "Trusted advisor to investors, family offices and executives." },
    { icon: Lock, title: "Protection-First", body: "Strategy designed to insulate assets, mobility and reputation." },
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
  const practices = [
    {
      kicker: "01",
      icon: Globe2,
      title: "Cross-Border & International",
      body: "Multi-jurisdiction strategy, asset protection, international coordination, travel restriction advisory and reputation-sensitive matters.",
      tags: ["Asset Protection", "International Coordination", "Compliance Defense"],
    },
    {
      kicker: "02",
      icon: Crown,
      title: "UAE Residency & Golden Visa",
      body: "End-to-end Golden Visa structuring, residency reinstatement, entry restriction defense and high-stakes immigration advisory.",
      tags: ["Golden Visa", "Residency", "Immigration"],
    },
    {
      kicker: "03",
      icon: Building2,
      title: "Corporate & Commercial",
      body: "Free zone formation, shareholder agreements, commercial litigation and corporate restructuring for cross-border operators.",
      tags: ["Formation", "Litigation", "Restructuring"],
    },
    {
      kicker: "04",
      icon: Scale,
      title: "Real Estate & Investment",
      body: "Dubai property advisory, investor protection, fraud prevention and high-value transaction review across the emirate.",
      tags: ["Property", "Transactions", "Disputes"],
    },
    {
      kicker: "05",
      icon: ShieldCheck,
      title: "Family & Wealth Protection",
      body: "DIFC wills, succession planning, family office counsel and structured wealth protection for multi-generational families.",
      tags: ["DIFC Wills", "Succession", "Family Office"],
    },
    {
      kicker: "06",
      icon: Lock,
      title: "Crisis & Sensitive Matters",
      body: "Emergency response, financial freeze remediation, regulatory investigations and confidential representation at the highest level.",
      tags: ["Emergency", "Investigations", "Confidential"],
    },
  ];

  return (
    <section className="relative py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Practice Areas</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl text-ivory leading-[1] tracking-tight">
              High-stakes counsel,<br /><span className="italic gradient-gold-text">precisely engineered.</span>
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
            View Full Practice <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => (
            <article
              key={p.title}
              className="group relative p-8 lg:p-10 bg-card hairline hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-10">
                <p.icon className="w-6 h-6 text-gold" strokeWidth={1.2} />
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{p.kicker}</span>
              </div>
              <h3 className="font-display text-2xl text-ivory mb-4 leading-tight">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{p.body}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] tracking-widest uppercase px-2.5 py-1 border border-gold/20 text-muted-foreground">
                    {t}
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
  return (
    <section className="relative py-32 border-t border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">International Desk</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory leading-[1.05] tracking-tight">
            Sensitive matters, <span className="italic gradient-gold-text">handled at altitude.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For clients facing international legal exposure — travel restrictions,
            cross-border investigations, financial freezes or reputation-sensitive
            inquiries — we coordinate calm, decisive response across jurisdictions.
            All work conducted under privileged communication and executive-level discretion.
          </p>
          <Link to="/international" className="group inline-flex items-center gap-3 px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">
            <span className="text-xs tracking-[0.3em] uppercase">International Coordination</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {[
            { t: "International Notice Advisory", n: "01" },
            { t: "Travel Restriction Strategy", n: "02" },
            { t: "Cross-Border Coordination", n: "03" },
            { t: "Reputation-Sensitive Defense", n: "04" },
            { t: "Asset Freeze Response", n: "05" },
            { t: "Urgent International Counsel", n: "06" },
          ].map((s, i) => (
            <div
              key={s.t}
              className={`glass p-6 lg:p-8 ${i % 2 === 1 ? "translate-y-8" : ""}`}
            >
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
  return (
    <section className="relative py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-3 mx-auto">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Client Platform</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory tracking-tight">
            A private platform <span className="italic gradient-gold-text">for serious matters.</span>
          </h2>
          <p className="text-muted-foreground">
            A modern, end-to-end legal experience — secure portal, encrypted document
            exchange, scheduled video advisory, and integrated billing. Built like a
            private bank, not a law firm.
          </p>
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
                  {["Overview", "Active Matters", "Documents", "Schedule", "Invoices", "Secure Chat"].map((m, i) => (
                    <div key={m} className={`px-3 py-2.5 text-sm ${i === 1 ? "bg-gold/10 text-gold border-l-2 border-gold" : "text-muted-foreground"}`}>
                      {m}
                    </div>
                  ))}
                </div>
                <div className="col-span-12 lg:col-span-9 bg-onyx p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Active Matter</div>
                      <div className="font-display text-2xl text-ivory mt-1">Cross-Border Asset Restructuring</div>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 bg-gold/10 text-gold border border-gold/30">In Progress</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { l: "Stage", v: "Structuring" },
                      { l: "Lead Counsel", v: "R. Mostafaee" },
                      { l: "Next Review", v: "12 Mar" },
                    ].map((x) => (
                      <div key={x.l} className="hairline p-4">
                        <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{x.l}</div>
                        <div className="text-ivory mt-2">{x.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      ["Initial Strategy Memo", "Reviewed", "100%"],
                      ["Jurisdictional Mapping", "Drafting", "60%"],
                      ["Trustee Onboarding", "Pending", "20%"],
                    ].map(([t, s, w]) => (
                      <div key={t} className="hairline p-4">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="text-ivory">{t}</span>
                          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{s}</span>
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
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Encrypted</div>
                <div className="text-sm text-ivory">End-to-end</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="relative py-32 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden frame-gold tilt-hover">
            <img src={officePortrait} alt="Rahil Mostafaee" className="w-full h-full object-cover slow-pan" loading="lazy" width={1200} height={1500} />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-strong p-6 max-w-xs hidden md:block">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Languages</div>
            <div className="font-display text-xl text-ivory">فارسی · English · العربية</div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Counsel</span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory leading-[1.05] tracking-tight">
            Rahil Mostafaee
          </h2>
          <div className="text-gold tracking-[0.3em] uppercase text-xs">Founder · Strategic Legal Counsel</div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            An Iranian advocate based in Dubai advising investors, entrepreneurs and
            high-net-worth families on cross-border legal strategy. Known for a calm,
            structured approach to complex matters — and an obsession with protecting
            client interests across borders, generations and jurisdictions.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {[
              { t: "Practice Philosophy", b: "Protection over performance. Strategy over volume. Relationships over transactions." },
              { t: "Client Posture", b: "Selective representation. Long-term advisory relationships. Absolute discretion." },
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
  const items = [
    { v: "DIFC", l: "Wills & Probate Registered" },
    { v: "UAE", l: "Federal & Emirate Practice" },
    { v: "EU · UK", l: "Coordinated Counsel" },
    { v: "IR", l: "Domestic Liaison Network" },
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
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Authority</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl text-ivory tracking-tight">
            Trusted across <span className="italic gradient-gold-text">four jurisdictions.</span>
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
  return (
    <section className="relative py-40 border-t border-gold/10">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-12">
        <h2 className="font-display text-5xl lg:text-8xl text-ivory tracking-tight leading-[0.95]">
          When the matter is <span className="italic gradient-gold-text">consequential,</span><br />
          the counsel must be <span className="italic gradient-gold-text">considered.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Schedule a confidential consultation. All initial conversations are
          held under strict privilege and reviewed personally.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all duration-300 shadow-glow"
          >
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+971000000000"
            className="group inline-flex items-center gap-3 px-10 py-5 glass-strong text-ivory hover:border-gold/40 transition-all"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Direct Line</span>
          </a>
        </div>
      </div>
    </section>
  );
}
