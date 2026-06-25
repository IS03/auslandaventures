import Image from "next/image";
import Link from "next/link";
import {
  categoryShowcaseBlocks,
  hrefForCategoryPage,
  type DestinationCategory,
} from "@/src/data/destinations";

const displayTitle: Record<DestinationCategory, string> = {
  Nacionales: "Nacionales",
  Internacionales: "Internacionales",
  "Regionales / Full Day": "Regionales",
};

type CategoryBlock = (typeof categoryShowcaseBlocks)[number];

export function CategoryMosaicCard({
  block,
  className,
  priority = false,
}: {
  block: CategoryBlock;
  className?: string;
  priority?: boolean;
}) {
  const title = displayTitle[block.category];
  const href = hrefForCategoryPage(block.category);

  return (
    <Link
      href={href}
      className={`group relative isolate overflow-hidden rounded-2xl ring-1 ring-navy/10 transition-transform duration-300 hover:-translate-y-0.5 hover:ring-sky/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky sm:rounded-3xl ${className ?? ""}`}
    >
      <Image
        src={block.image}
        alt={`Viajes ${title.toLowerCase()} desde Córdoba`}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/45 to-navy-deep/15"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 lg:p-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-[2rem]">
          {title}
        </h2>
        <span
          className="mt-2 inline-block h-1 w-12 rounded-full bg-sky shadow-sm shadow-sky/40 sm:w-14"
          aria-hidden
        />
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/85">
          Destinos
        </p>
      </div>
    </Link>
  );
}
