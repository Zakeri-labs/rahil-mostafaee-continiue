import type { ReactNode } from "react";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <div className={cn("space-y-px bg-gold/10 hairline", className)}>
      {items.map((item) => (
        <details
          key={item.id}
          id={item.id}
          className="group bg-onyx p-6 lg:p-7 open:bg-charcoal/60 transition-colors"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-start">
            <span className="font-display text-xl lg:text-2xl text-ivory leading-tight break-words">
              {item.question}
            </span>
            <HelpCircle className="w-5 h-5 text-gold shrink-0" strokeWidth={1.3} />
          </summary>
          <p className="mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
