"use client";

import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { useI18n } from "@/lib/i18n";

type Phase = "intro" | "hold" | "iris" | "settle" | "done";

export function SplashLoader() {
  const { t, lang, dir } = useI18n();
  const [phase, setPhase] = useState<Phase>("intro");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getSplashShown = () => {
      try {
        return window.sessionStorage.getItem("splash-shown") === "1";
      } catch {
        return false;
      }
    };

    const setSplashShown = () => {
      try {
        window.sessionStorage.setItem("splash-shown", "1");
      } catch {
        // Storage can be blocked in private or restricted browser contexts.
      }
    };

    if (getSplashShown()) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("hold"), 700); // ring formed, logo + name in
    const t2 = setTimeout(() => setPhase("iris"), 1900); // iris opens, logo flies to corner
    const t3 = setTimeout(() => setPhase("settle"), 3100); // overlay fully transparent
    const t4 = setTimeout(() => {
      setPhase("done");
      setSplashShown();
      document.body.style.overflow = "";
    }, 3700);
    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted || phase === "done") return null;

  const ringIn = phase !== "intro";
  const opening = phase === "iris" || phase === "settle";
  const settling = phase === "settle";

  // Iris radius — small while text is shown, then expands huge to reveal the site
  const irisRadius = opening ? "150%" : "0%";

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{
        opacity: settling ? 0 : 1,
        transition: "opacity 0.6s ease 0.2s",
      }}
    >
      {/* Onyx mask with circular iris-out reveal centered at the logo */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--gradient-onyx)",
          WebkitMaskImage: `radial-gradient(circle at 50% 50%, transparent ${irisRadius}, #000 calc(${irisRadius} + 1px))`,
          maskImage: `radial-gradient(circle at 50% 50%, transparent ${irisRadius}, #000 calc(${irisRadius} + 1px))`,
          transition:
            "-webkit-mask-image 1.4s cubic-bezier(0.77,0,0.175,1), mask-image 1.4s cubic-bezier(0.77,0,0.175,1)",
        }}
      />

      {/* Soft radial gold (intro only) */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--gradient-radial-gold)",
          opacity: opening ? 0 : 0.85,
          transition: "opacity 0.7s ease",
        }}
      />

      {/* Expanding gold ring at the iris boundary */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: opening ? "180vmax" : "0px",
          height: opening ? "180vmax" : "0px",
          border: "1px solid oklch(0.85 0.14 80 / 0.65)",
          boxShadow: opening
            ? "0 0 80px oklch(0.85 0.14 80 / 0.15), inset 0 0 80px oklch(0.85 0.14 80 / 0.1)"
            : "0 0 40px oklch(0.85 0.14 80 / 0.5)",
          opacity: opening ? 0 : 1,
          transition:
            "width 1.4s cubic-bezier(0.77,0,0.175,1), height 1.4s cubic-bezier(0.77,0,0.175,1), opacity 1.4s ease",
        }}
      />

      {/* Decorative gold seal ring around logo (intro only) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: ringIn ? "260px" : "0px",
          height: ringIn ? "260px" : "0px",
          border: "1px solid oklch(0.78 0.12 80 / 0.45)",
          opacity: opening ? 0 : 1,
          transition:
            "width 0.9s cubic-bezier(0.2,0.7,0.2,1), height 0.9s cubic-bezier(0.2,0.7,0.2,1), opacity 0.5s ease",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: ringIn ? "320px" : "0px",
          height: ringIn ? "320px" : "0px",
          border: "1px dashed oklch(0.78 0.12 80 / 0.25)",
          opacity: opening ? 0 : 1,
          animation: ringIn && !opening ? "splash-spin 18s linear infinite" : "none",
          transition:
            "width 1s cubic-bezier(0.2,0.7,0.2,1) 0.1s, height 1s cubic-bezier(0.2,0.7,0.2,1) 0.1s, opacity 0.5s ease",
        }}
      />

      {/* Logo + wordmark — morphs from center to nav position */}
      <div
        className="splash-mark absolute will-change-transform"
        data-opening={opening ? "true" : "false"}
      >
        <div className="splash-mark-inner flex items-center gap-4" dir={dir}>
          {/* transform applied via CSS so it can adapt to breakpoint */}
          <div className="splash-logo relative">
            <span
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background: "oklch(0.78 0.12 80 / 0.55)",
                opacity: opening ? 0 : 1,
                transition: "opacity 0.7s ease",
              }}
            />
            <img
              src={logo.src}
              alt=""
              className="relative h-9 w-9 object-contain"
              style={{
                animation: opening ? "none" : "splash-pulse 2.4s ease-in-out infinite",
              }}
            />
          </div>
          <div
            className="splash-text leading-tight overflow-hidden text-center lg:text-start"
            style={{
              opacity: opening ? 0 : 1,
              transform: opening ? "translateX(-8px)" : "translateX(0)",
              transition: "opacity 0.5s ease, transform 0.7s ease",
            }}
          >
            <div
              className={`splash-name font-display text-lg tracking-wide text-ivory whitespace-nowrap ${lang === "fa" ? "font-fa" : ""}`}
              style={lang === "fa" ? { fontFamily: "var(--font-fa-display)" } : undefined}
            >
              <span
                style={{
                  display: "inline-block",
                  animation: "splash-letter 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.15s both",
                }}
              >
                {t("splash.name.first")}
              </span>{" "}
              <span
                className="text-gold"
                style={{
                  display: "inline-block",
                  animation: "splash-letter 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.32s both",
                }}
              >
                {t("splash.name.last")}
              </span>
            </div>
            <div
              className={`splash-tag text-[10px] tracking-[0.35em] uppercase text-muted-foreground whitespace-nowrap ${lang === "fa" ? "font-fa" : ""}`}
              style={{
                animation: "splash-letter 0.9s ease 0.55s both",
              }}
            >
              {t("splash.tag")}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom shimmer line — only during intro/hold */}
      {(phase === "intro" || phase === "hold") && (
        <div className="absolute bottom-16 inset-x-0 flex justify-center">
          <div
            className="h-px w-48"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.12 80 / 0.8), transparent)",
              animation: "splash-line 1.6s ease-in-out infinite",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes splash-pulse {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 14px oklch(0.78 0.12 80 / 0.6)); }
          50%     { transform: scale(1.08); filter: drop-shadow(0 0 28px oklch(0.78 0.12 80 / 0.95)); }
        }
        @keyframes splash-letter {
          0%   { opacity: 0; transform: translateY(14px); letter-spacing: 0.3em; filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); letter-spacing: normal; filter: blur(0); }
        }
        @keyframes splash-line {
          0%,100% { opacity: 0.3; transform: scaleX(0.6); }
          50%     { opacity: 1; transform: scaleX(1); }
        }
        @keyframes splash-spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        /* Splash mark — desktop default morphs from center to top-left nav */
        .splash-mark {
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          transition: top 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s,
                      left 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s,
                      transform 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s;
        }
        .splash-mark-inner {
          transform: scale(3.2);
          transform-origin: left center;
          transition: transform 1.3s cubic-bezier(0.77,0,0.175,1) 0.1s;
        }
        .splash-mark[data-opening="true"] {
          top: 30px; left: 44px; transform: translate(0,0);
        }
        .splash-mark[data-opening="true"] .splash-mark-inner {
          transform: scale(1);
        }
        @media (max-width: 1023px) {
          .splash-mark-inner {
            flex-direction: column;
            gap: 1.25rem;
            transform: scale(1);
            transform-origin: center center;
          }
          .splash-logo img { height: 8.5rem; width: 8.5rem; }
          .splash-name { font-size: 2.5rem; letter-spacing: 0.01em; }
          .splash-tag { font-size: 11px; letter-spacing: 0.4em; margin-top: 0.5rem; }
          .splash-mark[data-opening="true"] {
            top: 50%; left: 50%; transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.6s ease;
          }
          .splash-mark[data-opening="true"] .splash-mark-inner { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
