"use client";

import { agencyMission, agencyVision } from "@/src/data/home-sections";

const cards = [
  {
    ...agencyMission,
    accent: "bg-sky/10 group-hover:bg-sky/18",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
  {
    ...agencyVision,
    accent: "bg-amber/12 group-hover:bg-amber/20",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.036 12.322a1 1 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
] as const;

export function MissionVisionCards() {
  return (
    <ul className="mt-10 grid list-none gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
      {cards.map((card, index) => (
        <li key={card.title}>
          <article
            data-card={index + 1}
            className="why-ausland-card mission-vision-card group relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-navy/8 transition-[transform,box-shadow] duration-300 ease-out hover:ring-sky/35 sm:p-8"
          >
            <div
              className={`why-ausland-card__accent absolute -right-8 -top-8 h-28 w-28 rounded-full transition ${card.accent}`}
              aria-hidden
            />
            <div className="why-ausland-card__icon relative flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white shadow-md shadow-navy/15">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                {card.icon}
              </svg>
            </div>
            <p className="relative mt-5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-sky">
              {index === 0 ? "Lo que hacemos" : "Hacia dónde vamos"}
            </p>
            <h3 className="relative mt-1.5 font-display text-xl font-semibold text-navy sm:text-[1.35rem]">
              {card.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-navy-deep/70">{card.description}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
