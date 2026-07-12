import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LandingThemeVariant = "default" | "marble";

type LandingThemeProps = {
  variant?: LandingThemeVariant;
  as?: "div" | "section";
  className?: string;
  children: ReactNode;
};

const MARBLE_VARS = {
  "--lp-gold": "var(--gold)",
  "--lp-green": "oklch(0.32 0.05 150)",
  "--lp-green-soft": "oklch(0.45 0.05 150)",
  "--lp-cream": "oklch(0.92 0.02 90)",
  "--lp-marble-overlay":
    "radial-gradient(ellipse at top, oklch(0.32 0.05 150 / 0.16), transparent 65%)",
} as CSSProperties;

export function LandingTheme({
  variant = "default",
  as = "div",
  className,
  children,
}: LandingThemeProps) {
  const style = variant === "marble" ? MARBLE_VARS : undefined;
  const props = { "data-landing-theme": variant, className: cn(className), style };

  if (as === "section") {
    return <section {...props}>{children}</section>;
  }

  return <div {...props}>{children}</div>;
}
