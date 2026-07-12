import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DocumentItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
};

type DocumentChecklistProps = {
  items: DocumentItem[];
  columns?: 1 | 2;
  density?: "default" | "compact";
  className?: string;
};

export function DocumentChecklist({
  items,
  columns = 1,
  density = "default",
  className,
}: DocumentChecklistProps) {
  return (
    <div
      className={cn(
        "gap-px bg-gold/10 hairline",
        columns === 2 ? "grid md:grid-cols-2" : "space-y-px",
        className,
      )}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          className={cn(
            "bg-onyx grid grid-cols-[auto_1fr] gap-5",
            density === "compact" ? "p-4" : "p-6",
          )}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <div className="text-ivory">{item.title}</div>
            {item.description && (
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
