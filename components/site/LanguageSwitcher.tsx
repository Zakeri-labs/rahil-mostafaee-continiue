"use client";

import { ChevronDown, Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export function LanguageSwitcher({ compact = false, className }: LanguageSwitcherProps) {
  const { lang, setLang } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={lang === "fa" ? "انتخاب زبان" : "Select language"}
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-gold/20 text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
            compact
              ? "h-8 min-w-16 px-2.5 text-[10px] tracking-[0.18em]"
              : "h-9 min-w-28 px-3 text-xs tracking-[0.14em]",
            className,
          )}
        >
          <Languages className={compact ? "size-3.5" : "size-4"} aria-hidden="true" />
          <span className={lang === "fa" ? "font-fa" : ""}>
            {compact ? (lang === "fa" ? "فا" : "EN") : lang === "fa" ? "فارسی" : "English"}
          </span>
          <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-36 border-gold/20 bg-charcoal text-ivory shadow-luxe"
      >
        <DropdownMenuRadioGroup value={lang} onValueChange={(value) => setLang(value as Lang)}>
          <DropdownMenuRadioItem value="en" className="cursor-pointer focus:bg-gold/10">
            English
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fa" className="cursor-pointer font-fa focus:bg-gold/10">
            فارسی
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
