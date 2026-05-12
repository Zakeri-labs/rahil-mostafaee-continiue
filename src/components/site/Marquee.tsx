import { useI18n } from "@/lib/i18n";

const KEYS = [
  "marquee.1",
  "marquee.2",
  "marquee.3",
  "marquee.4",
  "marquee.5",
  "marquee.6",
  "marquee.7",
  "marquee.8",
  "marquee.9",
  "marquee.10",
] as const;

export function Marquee() {
  const { t } = useI18n();
  const items = KEYS.map((k) => t(k));
  return (
    <div className="relative overflow-hidden border-y border-gold/10 bg-onyx/60 py-6">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((label, i) => (
          <span
            key={i}
            className="text-xs tracking-[0.35em] uppercase text-muted-foreground inline-flex items-center gap-16"
          >
            {label}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}
