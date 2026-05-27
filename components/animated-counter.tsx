"use client";

import { useEffect, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  duration = 1400,
  delay = 450,
  className,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let startTimeout: ReturnType<typeof setTimeout>;

    const run = () => {
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setDisplay(Math.round(easeOutCubic(progress) * value));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    };

    startTimeout = setTimeout(run, delay);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(raf);
    };
  }, [value, duration, delay]);

  return (
    <span className={className} aria-hidden="true">
      {display}
    </span>
  );
}
