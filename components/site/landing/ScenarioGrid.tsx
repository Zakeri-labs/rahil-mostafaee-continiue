import type { ComponentType, ReactNode, SVGProps } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ScenarioItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
  label?: ReactNode;
};

type ScenarioGridProps = {
  items: ScenarioItem[];
  columns?: 2 | 3 | 5;
  className?: string;
};

const COLS: Record<NonNullable<ScenarioGridProps["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  5: "md:grid-cols-2 lg:grid-cols-5",
};

export function ScenarioGrid({ items, columns = 5, className }: ScenarioGridProps) {
  return (
    <div className={cn("grid gap-px bg-gold/10 hairline", COLS[columns], className)}>
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            {Icon && <Icon className="w-6 h-6 text-gold mb-8" strokeWidth={1.2} />}
            <h3 className="font-display text-2xl text-ivory leading-tight mb-4 break-words">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            )}
            {item.href && (
              <div className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-gold lg:text-xs lg:tracking-[0.18em]">
                {item.label}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            )}
          </>
        );

        if (item.href) {
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group block bg-onyx p-7 hover:border-gold/40 hover:-translate-y-1 transition-all duration-500"
            >
              {content}
            </Link>
          );
        }

        return (
          <article key={item.id} className="bg-onyx p-7 hover:bg-charcoal transition-colors">
            {content}
          </article>
        );
      })}
    </div>
  );
}
