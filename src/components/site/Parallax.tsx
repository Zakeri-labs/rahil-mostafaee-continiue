import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type Props = {
  children: ReactNode;
  speed?: number; // px shift per 100px scrolled; positive = moves up as you scroll
  className?: string;
  style?: CSSProperties;
};

export function Parallax({ children, speed = 12, className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (below) to 1 (above), 0 when centered
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      setY(-progress * speed);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-px z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
        style={{ width: `${w}%`, transition: "width 120ms linear" }}
      />
    </div>
  );
}
