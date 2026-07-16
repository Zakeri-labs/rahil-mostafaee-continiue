import { ChevronRight } from "lucide-react";

type ProcessConnectorProps = {
  direction: "left" | "right";
  showOnMobile: boolean;
};

export function ProcessConnector({ direction, showOnMobile }: ProcessConnectorProps) {
  const desktopPosition = direction === "right" ? "xl:-right-8" : "xl:-left-8";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 ${
        showOnMobile
          ? `right-1/2 flex h-10 w-px translate-x-1/2 flex-col ${desktopPosition} xl:h-8 xl:w-8 xl:translate-x-0 xl:flex-row`
          : `hidden ${desktopPosition} xl:flex xl:h-8 xl:w-8`
      } items-center justify-center`}
    >
      <span className="relative z-10 flex h-8 w-8 items-center justify-center bg-transparent text-gold xl:h-9 xl:w-9">
        <ChevronRight
          className={`h-6 w-6 xl:h-7 xl:w-7 ${direction === "right" ? "" : "rotate-180"}`}
          strokeWidth={1.7}
        />
      </span>
    </div>
  );
}
