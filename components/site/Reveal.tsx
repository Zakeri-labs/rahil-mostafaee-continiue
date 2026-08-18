"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "article";
  reverseOnScrollUp?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  reverseOnScrollUp = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const scrollDirection = useRef<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    if (!reverseOnScrollUp) {
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
    }

    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY !== lastScrollY.current) {
        scrollDirection.current = currentScrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && scrollDirection.current === "down") {
            setShown(true);
          } else if (!e.isIntersecting && scrollDirection.current === "up") {
            setShown(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [reverseOnScrollUp]);

  const transitionDelay = reverseOnScrollUp && !shown ? 0 : delay;
  const style: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 1s cubic-bezier(0.2,0.7,0.2,1) ${transitionDelay}ms, transform 1.1s cubic-bezier(0.2,0.7,0.2,1) ${transitionDelay}ms`,
    willChange: "opacity, transform",
  };

  const Tag = as as "div";
  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
