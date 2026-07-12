import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

export type ProcessStep = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  lang: "en" | "fa";
  columns?: 3 | 4 | 5;
  className?: string;
};

const COLS: Record<NonNullable<ProcessStepsProps["columns"]>, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  5: "md:grid-cols-2 lg:grid-cols-5",
};

export function ProcessSteps({ steps, lang, columns = 5, className }: ProcessStepsProps) {
  const numeral = (n: number) =>
    lang === "fa" ? n.toLocaleString("fa-IR") : String(n).padStart(2, "0");

  return (
    <ol className={cn("grid gap-px bg-gold/10 hairline", COLS[columns], className)}>
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <li key={step.id} className="bg-onyx p-8 group hover:bg-charcoal transition-colors">
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs tracking-[0.3em] text-gold">{numeral(i + 1)}</span>
              {Icon && <Icon className="w-5 h-5 text-gold" strokeWidth={1.2} />}
            </div>
            <div className="font-display text-2xl text-ivory leading-tight break-words">
              {step.title}
            </div>
            {step.description && (
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
