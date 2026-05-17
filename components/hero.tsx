import Image from "next/image";
import { destinationCategories, destinations } from "@/src/data/destinations";
import { defaultWhatsappMessage } from "@/src/data/contact";
import { WhatsAppButton } from "./whatsapp-button";
const HERO_ALT =
  "Cordillera montañosa al amanecer, con un viajero contemplando el valle — paisaje de aventura";

export function Hero() {
  const destCount = destinations.length;
  const catCount = destinationCategories.length;

  return (
    <section
      id="hero"
      className="relative min-h-[min(100dvh,920px)] overflow-hidden sm:min-h-[92vh]"
      aria-label="Presentación"
    >
      <Image
        src="/hero/hero.jpg"
        alt={HERO_ALT}
        fill
        priority
        fetchPriority="high"
        className="relative z-0 object-cover object-[center_45%] sm:object-[center_40%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-navy-deep/85 via-navy-deep/45 to-navy-deep/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent"
        aria-hidden
      />
      <div className="grain pointer-events-none absolute inset-0 z-10 opacity-30" aria-hidden />

      <div className="container-page relative z-40 flex min-h-[min(100dvh,920px)] max-w-full flex-col justify-end pb-10 pt-24 sm:min-h-[92vh] sm:justify-center sm:pb-16 sm:pt-32 lg:pb-20">
        <p className="animate-in mb-4 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/20 bg-navy-deep/50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/95 backdrop-blur-md sm:px-4 sm:text-xs sm:tracking-widest">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
          Córdoba, Argentina
        </p>

        <h1 className="animate-in-delay-1 hero-text-shadow max-w-[14ch] font-display text-[2rem] font-semibold leading-[1.08] text-white sm:max-w-3xl sm:text-5xl lg:text-6xl text-balance">
          La aventura de conocer un nuevo destino
        </h1>

        <p className="animate-in-delay-2 hero-text-shadow mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/90 sm:mt-5 sm:max-w-xl sm:text-lg">
          Viajes nacionales, internacionales y salidas regionales. Consultá fechas y disponibilidad
          con nuestro equipo por WhatsApp.
        </p>

        <div className="animate-in-delay-3 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
          <WhatsAppButton
            message={defaultWhatsappMessage}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
          <a
            href="#viajes"
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/50 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:w-auto"
          >
            Ver destinos
          </a>
        </div>

        <dl className="animate-in-delay-3 mt-10 grid grid-cols-3 gap-2 border-t border-white/15 pt-7 sm:mt-12 sm:max-w-md sm:gap-4 sm:pt-8">
          <div>
            <dt className="hero-text-shadow text-xl font-bold tabular-nums text-amber sm:text-2xl">
              {destCount}
            </dt>
            <dd className="mt-0.5 text-[11px] font-medium text-white/80 sm:text-xs">Destinos</dd>
          </div>
          <div>
            <dt className="hero-text-shadow text-xl font-bold tabular-nums text-amber sm:text-2xl">
              {catCount}
            </dt>
            <dd className="mt-0.5 text-[11px] font-medium text-white/80 sm:text-xs">Categorías</dd>
          </div>
          <div>
            <dt className="hero-text-shadow text-xl font-bold text-amber sm:text-2xl">WA</dt>
            <dd className="mt-0.5 text-[11px] font-medium leading-snug text-white/80 sm:text-xs">
              Consultá directo
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
