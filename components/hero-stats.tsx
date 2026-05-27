"use client";

import { AnimatedCounter } from "./animated-counter";

type HeroStatsProps = {
  destCount: number;
  catCount: number;
};

export function HeroStats({ destCount, catCount }: HeroStatsProps) {
  return (
    <div className="animate-in-delay-3 mt-0 w-full max-sm:mb-28 sm:mt-12 lg:mt-14">
      <div className="w-full border-t border-white/15 sm:w-[40%]" aria-hidden />
      <dl className="grid grid-cols-2 gap-6 pt-8 sm:max-w-xs sm:gap-8 sm:pt-7">
        <div>
          <dt className="hero-text-shadow text-xl font-bold tabular-nums text-amber sm:text-2xl">
            <AnimatedCounter value={destCount} className="inline-block" />
            <span className="sr-only">{destCount}</span>
          </dt>
          <dd className="mt-0.5 text-[11px] font-medium text-white/80 sm:text-xs">Destinos</dd>
        </div>
        <div>
          <dt className="hero-text-shadow text-xl font-bold tabular-nums text-amber sm:text-2xl">
            <AnimatedCounter value={catCount} className="inline-block" />
            <span className="sr-only">{catCount}</span>
          </dt>
          <dd className="mt-0.5 text-[11px] font-medium text-white/80 sm:text-xs">Categorías</dd>
        </div>
      </dl>
    </div>
  );
}
