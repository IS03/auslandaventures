import { SectionHeading } from "./section-heading";

const pillars = [
  {
    title: "Coordinación en ruta",
    description:
      "Acompañamiento antes y durante el viaje para que no tengas que resolver todo solo.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Asistencia al viajero",
    description:
      "Los planes publicados suelen incluir asistencia médica. Consultá el detalle de cada salida.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Desde Córdoba",
    description: "Nacionales, internacionales y salidas regionales pensadas para viajar desde tu ciudad.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
      />
    ),
  },
  {
    title: "Consultá por WhatsApp",
    description: "Escribinos con el destino que te interesa y te respondemos con fechas y opciones.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
];

export function WhyAusland() {
  return (
    <section
      id="nosotros"
      className="section-padding section-surface-warm"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Confianza"
          title="Por qué elegir Ausland Aventuras"
          subtitle="Una forma simple de descubrir viajes y resolver tu consulta directo con nosotros."
          align="center"
        />

        <ul className="mt-10 grid list-none gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {pillars.map((pillar) => (
            <li key={pillar.title}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-navy/8 transition duration-300 hover:-translate-y-0.5 hover:ring-sky/35 sm:p-8">
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky/10 transition group-hover:bg-amber/15"
                  aria-hidden
                />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    {pillar.icon}
                  </svg>
                </div>
                <h3 className="relative mt-4 font-display text-xl font-semibold text-navy">
                  {pillar.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy-deep/70">
                  {pillar.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <a
            href="/nosotros"
            className="text-sm font-semibold text-navy transition hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            Conocé más sobre Ausland Aventuras →
          </a>
        </p>
      </div>
    </section>
  );
}
