"use client";

import { HighlightedTitle } from "@/components/highlighted-title";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type CategoryHeroHeadingProps = {
  heading: string;
};

export function CategoryHeroHeading({ heading }: CategoryHeroHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.35,
    rootMargin: "0px 0px -4% 0px",
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal mt-2 max-w-2xl ${isVisible ? "is-visible" : ""}`}
    >
      <h1 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
        <HighlightedTitle
          as="span"
          text={heading}
          highlight="Córdoba"
          light
          drawUnderline
        />
      </h1>
    </div>
  );
}
