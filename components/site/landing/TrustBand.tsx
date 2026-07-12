import type { ComponentType, ReactNode, SVGProps } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionIntro } from "@/components/site/landing/SectionIntro";

export type TrustItem = {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type TrustBandProps = {
  kicker?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  items: TrustItem[];
  image?: { src: string; alt: string };
  disclaimer?: ReactNode;
  columns?: 2 | 3 | 5;
  className?: string;
};

const COLS: Record<NonNullable<TrustBandProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

export function TrustBand({
  kicker,
  title,
  description,
  items,
  image,
  disclaimer,
  columns = 5,
  className,
}: TrustBandProps) {
  return (
    <section
      className={cn("relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden", className)}
    >
      {image && (
        <div className="absolute inset-0 opacity-45">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-onyx/88" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 space-y-14">
        <SectionIntro kicker={kicker} title={title} description={description} align="center" />
        <div className={cn("grid gap-px bg-gold/10 hairline", COLS[columns])}>
          {items.map((item) => {
            const Icon = item.icon ?? ShieldCheck;
            return (
              <div
                key={item.id}
                className={cn(
                  "h-full p-7 text-center",
                  image ? "bg-onyx/80 backdrop-blur-md" : "bg-onyx",
                )}
              >
                <Icon className="w-6 h-6 text-gold mx-auto mb-5" strokeWidth={1.2} />
                <div className="text-sm text-ivory leading-relaxed">{item.title}</div>
                {item.description && (
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {disclaimer && (
          <p className="mx-auto max-w-2xl text-center text-xs text-muted-foreground leading-relaxed">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
