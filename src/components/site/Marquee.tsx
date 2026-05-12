const items = [
  "DIFC Wills",
  "Cross-Border Litigation",
  "Golden Visa Strategy",
  "Asset Protection",
  "Sanctions Advisory",
  "Corporate Structuring",
  "International Coordination",
  "Family Office Counsel",
  "Real Estate Disputes",
  "Reputation-Sensitive Defense",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/10 bg-onyx/60 py-6">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="text-xs tracking-[0.35em] uppercase text-muted-foreground inline-flex items-center gap-16"
          >
            {t}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}
