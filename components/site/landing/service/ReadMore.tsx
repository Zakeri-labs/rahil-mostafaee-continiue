"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ReadMoreProps = {
  children: ReactNode;
  openLabel: string;
  closeLabel: string;
};

/**
 * The full text is always in the server HTML (indexable); this island only toggles
 * the visual clamp, so the page keeps working without JavaScript.
 */
export function ReadMore({ children, openLabel, closeLabel }: ReadMoreProps) {
  const [open, setOpen] = useState(false);
  const bodyId = useId();

  return (
    <div>
      <div
        id={bodyId}
        // Clamped text must not be reachable by keyboard or screen reader.
        inert={!open}
        className={cn(
          "relative space-y-4",
          !open &&
            "max-h-32 overflow-hidden after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-14 after:bg-gradient-to-b after:from-transparent after:to-background",
        )}
      >
        {children}
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((value) => !value)}
        className="mt-6 min-h-12 cursor-pointer border border-gold/40 px-6 py-3 text-sm text-gold transition-colors hover:bg-gold hover:text-onyx"
      >
        {open ? closeLabel : openLabel}
      </button>
    </div>
  );
}
