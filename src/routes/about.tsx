import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import founder from "@/assets/founder-silhouette.jpg";
import office from "@/assets/office-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rahil Mostafaee, Strategic Legal Counsel" },
      { name: "description", content: "An Iranian advocate in Dubai advising investors, entrepreneurs and high-net-worth families on cross-border legal strategy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold">The Firm</span>
            </div>
            <h1 className="font-display text-6xl lg:text-8xl text-ivory leading-[0.95] tracking-tight">
              A boutique built for<br /><span className="italic gradient-gold-text">consequential matters.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Rahil Mostafaee Legal is a private advisory practice serving a select
              roster of Iranian investors, founders and families in the United Arab
              Emirates and abroad. The firm exists for one reason: to provide
              discreet, structured and decisively executed legal counsel where the
              stakes are personal.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={founder} alt="Rahil Mostafaee" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-px bg-gold/10 hairline">
          {[
            { t: "Discretion", b: "All engagements operate under absolute confidentiality. Names, matters and outcomes remain privileged — always." },
            { t: "Selectivity", b: "Representation is by referral and review. We work with a small number of clients to deliver an outsized standard of attention." },
            { t: "Coordination", b: "An international network of trusted co-counsel, family offices and advisors — coordinated through one channel." },
          ].map((x) => (
            <div key={x.t} className="bg-onyx p-10 space-y-4">
              <div className="font-display text-3xl text-gold">{x.t}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 border-t border-gold/10 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={office} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-onyx/85" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 space-y-10">
          <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Manifesto</div>
          <p className="font-display text-3xl lg:text-5xl text-ivory leading-[1.15] tracking-tight">
            “We do not measure a representation by what was filed, but by what was
            <span className="italic gradient-gold-text"> protected</span>. The best legal work is the one the
            client never has to see — quiet, structured, and decisively final.”
          </p>
          <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">— Rahil Mostafaee</div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center space-y-10">
          <h2 className="font-display text-4xl lg:text-6xl text-ivory tracking-tight">
            Begin a conversation.
          </h2>
          <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-onyx hover:bg-gold-soft transition-all shadow-glow">
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Request Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
