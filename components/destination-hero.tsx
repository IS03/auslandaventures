"use client";

import Image from "next/image";
import type { Destination } from "@/src/data/destinations";
import {
  categoryPlaceholderImage,
  destinationImageFallback,
} from "@/src/data/destinations";
import type { PlanCurrency } from "@/src/data/plan-types";
import { PriceBadge } from "./price-badge";

type DestinationHeroProps = {
  destination: Destination;
  priceFrom: number | null;
  priceCurrency: PlanCurrency;
};

export function DestinationHero({
  destination,
  priceFrom,
  priceCurrency,
}: DestinationHeroProps) {
  const { title, category, type, description, hasPhoto, image } = destination;
  const bannerSrc = hasPhoto ? image : categoryPlaceholderImage[category];
  const bannerClass = hasPhoto
    ? "object-cover object-[center_22%]"
    : "object-cover object-center";

  return (
    <section
      id="hero"
      className="relative min-h-[min(48vh,26rem)] overflow-hidden bg-navy-deep text-white"
    >
      <Image
        src={bannerSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={bannerClass}
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-transparent to-navy-deep/30"
        aria-hidden
      />

      {!hasPhoto && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-[8%] opacity-[0.07]"
          aria-hidden
        >
          <Image
            src={destinationImageFallback}
            alt=""
            width={280}
            height={80}
            className="brightness-0 invert"
          />
        </div>
      )}

      <div className="container-page relative flex min-h-[min(48vh,26rem)] flex-col justify-end pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-light">
              {category} · {type}
            </p>
            <h1 className="mt-2 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              {description}
            </p>
          </div>

          <PriceBadge
            amount={priceFrom}
            currency={priceCurrency}
            variant="hero"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
