"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MissionVisionCards } from "./mission-vision-cards";
import { SectionHeading } from "./section-heading";

export function AboutIntro() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -6% 0px",
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal container-page ${isVisible ? "is-visible" : ""}`}
    >
      <SectionHeading
        eyebrow="Sobre nosotros"
        title="Ausland Aventuras"
        subtitle="Conocenos y descubrí por qué viajeros de Córdoba nos eligen para su próxima salida."
        align="center"
      />
      <MissionVisionCards />
    </div>
  );
}
