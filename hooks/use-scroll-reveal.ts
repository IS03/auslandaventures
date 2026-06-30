"use client";

import { useEffect, useRef, useState } from "react";

type UseScrollRevealOptions = {
  /** Fracción del elemento visible para disparar (0–1). */
  threshold?: number;
  /** Margen del root (ej. activar un poco antes de entrar). */
  rootMargin?: string;
  /** Solo animar la primera vez. */
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -6% 0px",
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
