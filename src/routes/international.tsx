import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe2, Lock } from "lucide-react";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: "International Legal Coordination — Rahil Mostafaee" },
      { name: "description", content: "Sensitive cross-border advisory, international notice strategy, mobility protection and reputation-sensitive defense." },
    ],
  }),
  component: InternationalPage,
});

function InternationalPage() {
  return (
    <div>
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">International Desk</span>
            </div>
            <h1 className="font-display text-6xl lg:text-9xl text-ivory leading-[0.95] tracking-tight">
              Sensitive matters,<br /><span className="italic gradient-gold-text">handled at altitude.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 text-muted-foreground leading-relaxed">
            For clients exposed to multi-jurisdictional risk, we operate as a
            single point of coordination — calm, privileged and decisive.
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-gold/10 hairline">
          {[
            { icon: Globe2, t: "International Coordination", b: "Multi-jurisdiction representation across UAE, EU, UK, and liaison desks beyond." },
            { icon: ShieldCheck, t: "Mobility Protection", b: "Travel restriction strategy, entry advisory, and proactive mobility planning." },
            { icon: Lock, t: "Reputation Defense", b: "Discreet response to inquiries with executive-level confidentiality." },
          ].map((c) => (
            <div key={c.t} className="bg-onyx p-10 space-y-6">
              <c.icon className="w-7 h-7 text-gold" strokeWidth={1.2} />
              <h3 className="font-display text-2xl text-ivory">{c.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-12">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">A typical engagement.</h2>
          <ol className="space-y-px bg-gold/10 hairline">
            {[
              ["01", "Confidential Intake", "Privileged conversation with the principal. Scope and exposure assessed."],
              ["02", "Jurisdictional Mapping", "Coordinate with international counsel; map active and dormant risk."],
              ["03", "Strategy Memorandum", "Written, privileged plan with prioritised actions and contingencies."],
              ["04", "Execution & Coordination", "Counsel, regulators and stakeholders engaged through a single channel."],
              ["05", "Containment & Closure", "Matter resolved, containment confirmed, ongoing watch protocols installed."],
            ].map(([n, t, b]) => (
              <li key={n} className="bg-onyx p-8 grid sm:grid-cols-12 gap-6">
                <div className="sm:col-span-2 font-mono text-gold">{n}</div>
                <div className="sm:col-span-3 font-display text-xl text-ivory">{t}</div>
                <div className="sm:col-span-7 text-sm text-muted-foreground leading-relaxed">{b}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">
            Speak privately.
          </h2>
          <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Initiate Confidential Engagement</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
