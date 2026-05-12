import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Dubai & UAE Legal Intelligence" },
      { name: "description", content: "Briefings on UAE residency, DIFC wills, property law, sanctions and cross-border strategy for high-net-worth Iranian clients." },
    ],
  }),
  component: InsightsPage,
});

const posts = [
  {
    cat: "Residency",
    date: "Mar 2025",
    title: "Golden Visa Pathways for Iranian Investors in 2025",
    excerpt: "An overview of the qualifying investment routes, residency renewals, and the structural choices that determine long-term mobility.",
  },
  {
    cat: "Wills",
    date: "Feb 2025",
    title: "Why Every UAE Resident Should Hold a DIFC Will",
    excerpt: "A practical look at probate certainty, guardianship, and how DIFC wills protect families with mixed-jurisdiction assets.",
  },
  {
    cat: "Property",
    date: "Feb 2025",
    title: "Five Mistakes to Avoid in Dubai Off-Plan Investment",
    excerpt: "Escrow protections, RERA registration, contractual clauses and the warning signs every investor should review before signing.",
  },
  {
    cat: "Corporate",
    date: "Jan 2025",
    title: "Free Zone vs Mainland: A Strategic Decision Framework",
    excerpt: "How to choose the right structure for cross-border operators — capital flows, banking relationships and shareholder posture.",
  },
  {
    cat: "International",
    date: "Jan 2025",
    title: "When to Engage International Counsel — and How",
    excerpt: "A note on coordination, privilege and the protocols that hold across jurisdictions when matters become sensitive.",
  },
  {
    cat: "Wealth",
    date: "Dec 2024",
    title: "The Family Office Legal Stack: A Quiet Architecture",
    excerpt: "Structuring trusts, holdcos and succession layers around the way modern wealth actually moves.",
  },
];

function InsightsPage() {
  return (
    <div>
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">Insights</span>
          </div>
          <h1 className="font-display text-6xl lg:text-9xl text-ivory tracking-tight leading-[0.95]">
            Legal intelligence,<br /><span className="italic gradient-gold-text">briefly stated.</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Periodic briefings on UAE residency, DIFC wills, real estate, corporate
            structure and cross-border strategy.
          </p>
        </div>
      </section>

      <section className="border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 hairline">
          {posts.map((p) => (
            <article key={p.title} className="group bg-onyx p-10 hover:bg-charcoal transition-colors duration-500 cursor-pointer">
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{p.cat}</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{p.date}</span>
              </div>
              <h2 className="font-display text-2xl text-ivory leading-tight mb-4 group-hover:text-gold transition-colors">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{p.excerpt}</p>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold">
                Read briefing <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center space-y-8">
          <h2 className="font-display text-4xl lg:text-5xl text-ivory tracking-tight">Private briefings, by request.</h2>
          <p className="text-muted-foreground">A short monthly note for clients on regulatory and structural shifts in the UAE.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">
            <span className="text-xs tracking-[0.3em] uppercase">Request Access</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
