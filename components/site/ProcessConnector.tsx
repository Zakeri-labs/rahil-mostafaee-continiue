import { ChevronRight } from "lucide-react";

type ProcessConnectorProps = {
  direction: "right";
  showOnMobile: boolean;
};

export function ProcessConnector({ direction, showOnMobile }: ProcessConnectorProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 ${
        showOnMobile
          ? "right-1/2 flex h-10 w-px translate-x-1/2 flex-col xl:-right-8 xl:h-8 xl:w-8 xl:translate-x-0 xl:flex-row"
          : "hidden xl:-right-8 xl:flex xl:h-8 xl:w-8"
      } items-center justify-center`}
    >
      <span className="absolute left-1/2 top-1/2 hidden h-px w-12 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent xl:block" />
      {showOnMobile && (
        <span className="absolute left-1/2 top-1/2 h-10 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/45 to-transparent xl:hidden" />
      )}
      <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gold/45 bg-[linear-gradient(135deg,oklch(0.87_0.07_86),oklch(0.68_0.1_76))] text-white shadow-[0_0_14px_oklch(0.78_0.12_80_/_0.22),0_6px_14px_oklch(0_0_0_/_0.28)] xl:h-8 xl:w-8">
        <ChevronRight
          className={`h-3.5 w-3.5 xl:h-4 xl:w-4 ${direction === "right" ? "" : "rotate-180"}`}
          strokeWidth={2.25}
        />
      </span>
    </div>
  );
}
