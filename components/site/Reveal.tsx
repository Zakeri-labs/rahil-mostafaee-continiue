"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "article";
};

export function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 1s cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 1.1s cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  const Tag = as as "div";
  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
