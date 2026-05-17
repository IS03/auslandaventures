"use client";

type TripSearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  travelType: string;
  onTravelTypeChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
};

const travelTypes = ["Todos", "Bus", "Aéreo", "Full Day"];

export function TripSearch({
  query,
  onQueryChange,
  travelType,
  onTravelTypeChange,
  resultCount,
  totalCount,
}: TripSearchProps) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-card ring-1 ring-navy/8 sm:p-6">
      <p className="mb-4 text-sm font-semibold text-navy">Buscá tu próximo destino</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-xs font-bold uppercase tracking-wide text-navy/55">Destino</span>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-sky"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Ej: Salta, Cataratas, playa…"
              aria-label="Buscar destino"
              className="w-full rounded-2xl border border-navy/12 bg-sand/60 py-3.5 pl-11 pr-4 text-sm text-navy-deep transition placeholder:text-navy-deep/40 focus:border-sky focus:bg-white focus:ring-2 focus:ring-sky/20"
            />
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wide text-navy/55">
            Tipo de viaje
          </span>
          <select
            value={travelType}
            onChange={(e) => onTravelTypeChange(e.target.value)}
            aria-label="Filtrar por tipo de viaje"
            className="w-full cursor-pointer appearance-none rounded-2xl border border-navy/12 bg-sand/60 py-3.5 px-4 text-sm text-navy-deep transition focus:border-sky focus:bg-white focus:ring-2 focus:ring-sky/20"
          >
            {travelTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <div className="flex flex-col justify-end gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wide text-navy/55">Resultados</span>
          <p
            className="rounded-2xl border border-navy/8 bg-sand/40 px-4 py-3.5 text-sm text-navy-deep/75"
            aria-live="polite"
          >
            <strong className="font-bold text-navy tabular-nums">{resultCount}</strong>
            <span className="text-navy-deep/50"> / </span>
            <span className="tabular-nums">{totalCount}</span> destinos
          </p>
        </div>
      </div>
    </div>
  );
}
