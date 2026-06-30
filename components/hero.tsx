import Image from "next/image";
import { destinationCategories, destinations } from "@/src/data/destinations";
import { HighlightedTitle } from "./highlighted-title";
import { HeroStats } from "./hero-stats";

const HERO_ALT =
  "Cordillera montañosa al amanecer, con un viajero contemplando el valle — paisaje de aventura";

export function Hero() {
  const destCount = destinations.length;
  const catCount = destinationCategories.length;

  return (
    <div className="hero-transition-group">
      <div className="hero-transition-group__backdrop">
        <div className="hero-transition-group__image">
          <Image
            src="/hero/hero.jpg"
            alt={HERO_ALT}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[center_45%] sm:object-[center_40%]"
          />
        </div>
        <div className="hero-transition-group__tint" />
        <div className="hero-transition-group__vignette" />
        <div className="hero-transition-group__dissolve" />
        <div className="grain absolute inset-0 opacity-30" />
      </div>

      <section
        id="hero"
        className="relative z-10 min-h-[100svh] overflow-hidden"
        aria-label="Presentación"
      >
        <div className="container-page relative flex min-h-[100svh] max-w-full flex-col pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,calc(4.25rem+env(safe-area-inset-top)))] sm:pb-8 sm:pt-[max(6.5rem,calc(5rem+env(safe-area-inset-top)))]">
          <div className="flex min-h-0 flex-1 flex-col max-sm:justify-between sm:flex-none">
            <div className="flex flex-col justify-start pt-[clamp(0.75rem,10vh,4rem)] sm:pt-[clamp(1rem,12vh,5rem)] lg:pt-[clamp(1.25rem,14vh,6rem)]">
              <p className="animate-in mb-4 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/20 bg-navy-deep/50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/95 backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-widest">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
                Córdoba, Argentina
              </p>

              <h1 className="animate-in-delay-1 hero-text-shadow max-w-[18ch] font-display text-[2rem] font-semibold leading-[1.08] text-white sm:max-w-3xl sm:text-5xl lg:text-6xl text-balance">
                <HighlightedTitle
                  as="span"
                  text="Agencia de viajes en Córdoba"
                  highlight="Córdoba"
                  light
                />
              </h1>

              <p className="animate-in-delay-2 hero-text-shadow mt-3 max-w-xl font-display text-lg font-semibold leading-snug text-white/95 sm:mt-4 sm:text-2xl lg:text-3xl text-balance">
                La aventura de conocer un nuevo destino
              </p>

              <p className="animate-in-delay-3 hero-text-shadow mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/90 sm:mt-5 sm:max-w-xl sm:text-lg">
                Viajes nacionales, internacionales y salidas regionales. Explorá el catálogo y
                encontrá tu próxima salida.
              </p>

              <a
                href="#destacados"
                className="animate-in-delay-3 hero-text-shadow group mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white/80 underline decoration-white/25 underline-offset-[5px] transition hover:text-white hover:decoration-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-9"
              >
                Ver destacados
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 5v14M12 19l-5-5M12 19l5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <HeroStats destCount={destCount} catCount={catCount} />
          </div>
        </div>
      </section>
    </div>
  );
}
