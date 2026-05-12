import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe2, Crown, Building2, Scale, ShieldCheck, Lock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Rahil Mostafaee Legal" },
      { name: "description", content: "Cross-border, residency, corporate, real estate, wealth protection and crisis representation for Iranian clients in Dubai." },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Globe2,
    label: "01 — Cross-Border & International",
    title: "Multi-jurisdictional strategy and protection.",
    items: [
      "International legal disputes & enforcement",
      "Asset protection across jurisdictions",
      "Multi-jurisdiction legal strategy",
      "International notice advisory",
      "Travel restriction strategy",
      "Reputation-sensitive defense",
    ],
  },
  {
    icon: Crown,
    label: "02 — UAE Residency & Immigration",
    title: "Residency, mobility and visa structuring.",
    items: [
      "Golden Visa legal support",
      "Residency reinstatement",
      "Visa cancellation & entry restriction defense",
      "Deportation defense",
      "UAE compliance advisory",
      "Long-term residency planning",
    ],
  },
  {
    icon: Building2,
    label: "03 — Business & Corporate",
    title: "Corporate counsel for cross-border operators.",
    items: [
      "UAE company formation & free zone setup",
      "Shareholder & partnership disputes",
      "Commercial contracts & litigation",
      "Corporate restructuring",
      "Sanctions-risk legal advisory",
      "Cross-border trade & supply",
    ],
  },
  {
    icon: Scale,
    label: "04 — Real Estate & Investment",
    title: "Property and high-value transaction advisory.",
    items: [
      "Dubai property legal advisory",
      "Investor protection",
      "Real estate disputes",
      "Property fraud prevention",
      "High-value transaction review",
      "Asset transfer protection",
    ],
  },
  {
    icon: ShieldCheck,
    label: "05 — Family & Wealth Protection",
    title: "Wills, succession and family office counsel.",
    items: [
      "DIFC wills & guardianship",
      "Inheritance protection",
      "Wealth structuring",
      "Family office legal advisory",
      "Succession planning",
      "Multi-generational asset planning",
    ],
  },
  {
    icon: Lock,
    label: "06 — Crisis & Sensitive Matters",
    title: "Discreet response when speed matters.",
    items: [
      "Emergency legal response",
      "Travel ban resolution",
      "Financial freeze remediation",
      "Regulatory investigations",
      "High-profile confidential representation",
      "Privileged crisis coordination",
    ],
  },
];

function ServicesPage() {
  return (
    <div>
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Practice Areas</span>
          </div>
          <h1 className="font-display text-6xl lg:text-9xl text-ivory tracking-tight leading-[0.95]">
            High-stakes counsel<br /><span className="italic gradient-gold-text">across six disciplines.</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Selected representation in the matters that most affect Iranian
            investors, founders and families operating between Dubai and the world.
          </p>
        </div>
      </section>

      <section className="border-t border-gold/10">
        {groups.map((g, i) => (
          <div key={g.label} className={`border-b border-gold/10 ${i % 2 === 0 ? "bg-onyx" : "bg-charcoal/40"}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 self-start">
                <g.icon className="w-8 h-8 text-gold" strokeWidth={1.2} />
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">{g.label}</div>
                <h2 className="font-display text-4xl lg:text-5xl text-ivory leading-[1.05] tracking-tight">{g.title}</h2>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10 hairline">
                {g.items.map((it) => (
                  <div key={it} className="bg-onyx p-6 hover:bg-charcoal transition-colors">
                    <div className="text-sm text-ivory">{it}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">
            Need representation today?
          </h2>
          <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Book Confidential Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
