"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  interval?: number;
};

export function RotatingWord({ words, className = "", interval = 2400 }: Props) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (words.length <= 1) return;
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((v) => (v + 1) % words.length);
        setShow(true);
      }, 420);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  // Reserve width of the longest word so the headline never reflows.
  return (
    <span className="relative inline-grid align-baseline whitespace-nowrap">
      {/* Sizer: invisible, holds the largest word's width to lock layout */}
      <span
        aria-hidden
        className={`invisible col-start-1 row-start-1 italic text-4xl lg:text-7xl ${className}`}
      >
        {words.reduce((a, b) => (b.length > a.length ? b : a), "")}
      </span>
      {/* Animated visible word */}
      <span
        className={`col-start-1 row-start-1 inline-block text-center italic gradient-gold-text text-4xl lg:text-7xl ${className}`}
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0) scale(1)" : "translateY(-0.2em) scale(0.96)",
          filter: show ? "blur(0px)" : "blur(8px)",
          transition:
            "opacity 380ms cubic-bezier(0.2,0.7,0.2,1), transform 420ms cubic-bezier(0.2,0.7,0.2,1), filter 380ms ease-out",
          willChange: "opacity, transform, filter",
        }}
      >
        {words[i]}
      </span>
    </span>
  );
}
