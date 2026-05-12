import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";

type Phase = "intro" | "reveal" | "fade" | "done";

export function SplashLoader() {
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("splash-shown") === "1") {
      setPhase("done");
      return;
    }
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("reveal"), 1500);
    const t2 = setTimeout(() => setPhase("fade"), 2900);
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("splash-shown", "1");
      document.body.style.overflow = "";
    }, 3700);
    return () => {
      [t1, t2, t3].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const opening = phase === "reveal" || phase === "fade";
  const fading = phase === "fade";

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.8s ease 0.1s",
      }}
    >
      {/* Two curtain panels that split open to reveal the site */}
      <div
        className="absolute inset-y-0 left-0 w-1/2"
        style={{
          background: "var(--gradient-onyx)",
          transform: opening ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 1.4s cubic-bezier(0.77, 0, 0.175, 1)",
          boxShadow: "inset -1px 0 0 oklch(0.78 0.12 80 / 0.4)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{
          background: "var(--gradient-onyx)",
          transform: opening ? "translateX(100%)" : "translateX(0)",
          transition: "transform 1.4s cubic-bezier(0.77, 0, 0.175, 1)",
          boxShadow: "inset 1px 0 0 oklch(0.78 0.12 80 / 0.4)",
        }}
      />

      {/* Gold seam line that flashes as the curtains part */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2"
        style={{
          width: opening ? "2px" : "1px",
          background:
            "linear-gradient(180deg, transparent, oklch(0.85 0.14 80 / 0.95), transparent)",
          opacity: opening ? 0 : 0.6,
          transition: "opacity 0.7s ease, width 0.4s ease",
          filter: "blur(0.5px)",
        }}
      />
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2"
        style={{
          width: "60px",
          background:
            "radial-gradient(ellipse at center, oklch(0.85 0.14 80 / 0.5), transparent 70%)",
          opacity: opening ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Soft gold radial behind logo (intro only) */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--gradient-radial-gold)",
          opacity: opening ? 0 : 0.9,
          transition: "opacity 0.8s ease",
        }}
      />

      {/* Logo + wordmark — morphs from center to nav position */}
      <div
        className="absolute will-change-transform"
        style={{
          top: opening ? "30px" : "50%",
          left: opening ? "44px" : "50%",
          transform: opening
            ? "translate(0, 0)"
            : "translate(-50%, -50%)",
          transition:
            "top 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s, left 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s, transform 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s",
        }}
      >
        <div
          className="flex items-center gap-4"
          style={{
            transform: opening ? "scale(1)" : "scale(3.6)",
            transformOrigin: "left center",
            transition: "transform 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s",
          }}
        >
          <div className="relative">
            <span
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: "oklch(0.78 0.12 80 / 0.45)",
                opacity: opening ? 0 : 1,
                transition: "opacity 0.7s ease",
              }}
            />
            <img
              src={logo}
              alt=""
              className="relative h-9 w-9 object-contain"
              style={{
                animation: opening
                  ? "none"
                  : "splash-pulse 2.4s ease-in-out infinite",
              }}
            />
          </div>
          <div
            className="leading-tight overflow-hidden"
            style={{
              opacity: opening ? 0 : 1,
              transform: opening ? "translateX(-8px)" : "translateX(0)",
              transition: "opacity 0.5s ease, transform 0.7s ease",
            }}
          >
            <div className="font-display text-lg tracking-wide text-ivory whitespace-nowrap">
              <span
                style={{
                  display: "inline-block",
                  animation: "splash-letter 1s cubic-bezier(0.2,0.7,0.2,1) both",
                }}
              >
                Rahil
              </span>{" "}
              <span
                className="text-gold"
                style={{
                  display: "inline-block",
                  animation:
                    "splash-letter 1s cubic-bezier(0.2,0.7,0.2,1) 0.18s both",
                }}
              >
                Mostafaee
              </span>
            </div>
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap"
              style={{
                animation: "splash-letter 1s ease 0.45s both",
              }}
            >
              Legal Counsel · Dubai
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shimmer line */}
      {phase === "intro" && (
        <div className="absolute bottom-12 inset-x-0 flex justify-center">
          <div
            className="h-px w-40"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.12 80 / 0.7), transparent)",
              animation: "splash-line 1.6s ease-in-out infinite",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes splash-pulse {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 14px oklch(0.78 0.12 80 / 0.6)); }
          50%     { transform: scale(1.08); filter: drop-shadow(0 0 28px oklch(0.78 0.12 80 / 0.9)); }
        }
        @keyframes splash-letter {
          0%   { opacity: 0; transform: translateY(14px); letter-spacing: 0.3em; }
          100% { opacity: 1; transform: translateY(0); letter-spacing: normal; }
        }
        @keyframes splash-line {
          0%,100% { opacity: 0.3; transform: scaleX(0.6); }
          50%     { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
