import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";

export function SplashLoader() {
  const [phase, setPhase] = useState<"intro" | "shrink" | "done">("intro");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("splash-shown") === "1") {
      setPhase("done");
      return;
    }
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("shrink"), 1400);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("splash-shown", "1");
      document.body.style.overflow = "";
    }, 2700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const shrinking = phase === "shrink";

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{
        background: shrinking
          ? "radial-gradient(ellipse at top, oklch(0.09 0.005 60 / 0.6), oklch(0.09 0.005 60 / 0.2) 60%, transparent)"
          : "var(--gradient-onyx)",
        opacity: shrinking ? 0 : 1,
        transition: "opacity 1.1s cubic-bezier(0.4,0,0.2,1) 0.2s, background 1.2s ease",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "var(--gradient-radial-gold)",
          opacity: shrinking ? 0 : 0.9,
          transition: "opacity 1s ease",
        }}
      />

      <div
        className="absolute will-change-transform"
        style={{
          top: shrinking ? "30px" : "50%",
          left: shrinking ? "44px" : "50%",
          transform: shrinking
            ? "translate(0, 0) scale(1)"
            : "translate(-50%, -50%) scale(1)",
          transition:
            "top 1.2s cubic-bezier(0.7,0,0.2,1), left 1.2s cubic-bezier(0.7,0,0.2,1), transform 1.2s cubic-bezier(0.7,0,0.2,1)",
        }}
      >
        <div
          className="flex items-center gap-4"
          style={{
            transform: shrinking ? "scale(1)" : "scale(3.6)",
            transformOrigin: "left center",
            transition: "transform 1.2s cubic-bezier(0.7,0,0.2,1)",
          }}
        >
          <div className="relative">
            <span
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: "oklch(0.78 0.12 80 / 0.45)",
                opacity: shrinking ? 0 : 1,
                transition: "opacity 0.9s ease",
              }}
            />
            <img
              src={logo}
              alt=""
              className="relative h-9 w-9 object-contain"
              style={{
                animation: shrinking
                  ? "none"
                  : "splash-pulse 2.4s ease-in-out infinite",
              }}
            />
          </div>
          <div
            className="leading-tight overflow-hidden"
            style={{
              opacity: shrinking ? 0 : 1,
              transform: shrinking ? "translateX(-8px)" : "translateX(0)",
              transition: "opacity 0.6s ease, transform 0.8s ease",
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
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
              style={{
                animation: "splash-letter 1s ease 0.45s both",
              }}
            >
              Legal Counsel · Dubai
            </div>
          </div>
        </div>
      </div>

      {!shrinking && (
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
