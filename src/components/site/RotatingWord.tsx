import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  interval?: number;
};

export function RotatingWord({ words, className = "", interval = 2400 }: Props) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    if (words.length <= 1) return;
    const t = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setI((v) => (v + 1) % words.length);
        setPhase("in");
      }, 380);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <span
        key={i}
        className="inline-block transition-all duration-[380ms] ease-out"
        style={{
          opacity: phase === "in" ? 1 : 0,
          transform: phase === "in" ? "translateY(0) rotateX(0)" : "translateY(-0.4em) rotateX(60deg)",
          filter: phase === "in" ? "blur(0)" : "blur(6px)",
        }}
      >
        {words[i]}
      </span>
    </span>
  );
}
