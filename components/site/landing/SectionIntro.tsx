import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

type HeadingLevel = "h1" | "h2" | "h3";

type SectionIntroProps = {
  kicker?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  maxWidth?: "default" | "narrow" | "wide";
  id?: string;
  reveal?: boolean;
  as?: HeadingLevel;
  className?: string;
};

const MAX_WIDTH: Record<NonNullable<SectionIntroProps["maxWidth"]>, string> = {
  default: "max-w-3xl",
  narrow: "max-w-2xl",
  wide: "max-w-5xl",
};

function Heading({
  as,
  className,
  children,
}: {
  as: HeadingLevel;
  className: string;
  children: ReactNode;
}) {
  if (as === "h1") return <h1 className={className}>{children}</h1>;
  if (as === "h3") return <h3 className={className}>{children}</h3>;
  return <h2 className={className}>{children}</h2>;
}

export function SectionIntro({
  kicker,
  title,
  description,
  align = "start",
  maxWidth = "default",
  id,
  reveal = true,
  as = "h2",
  className,
}: SectionIntroProps) {
  const centered = align === "center";
  const classes = cn(
    "space-y-6",
    MAX_WIDTH[maxWidth],
    centered && "mx-auto text-center",
    className,
  );

  const content = (
    <>
      {kicker && (
        <div className={cn("flex items-center gap-3", centered && "justify-center")}>
          <span className="h-px w-12 bg-gold" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold">{kicker}</span>
          {centered && <span className="h-px w-12 bg-gold" />}
        </div>
      )}
      <Heading
        as={as}
        className="font-display text-2xl lg:text-4xl text-ivory leading-[1.05] tracking-tight break-words"
      >
        {title}
      </Heading>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </>
  );

  const body = reveal ? (
    <Reveal className={classes}>{content}</Reveal>
  ) : (
    <div className={classes}>{content}</div>
  );

  if (!id) return body;
  return <div id={id}>{body}</div>;
}
