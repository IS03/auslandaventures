import Image from "next/image";
import Link from "next/link";
import { contact } from "@/src/data/contact";
import { destinationBySlug, hrefForDestination } from "@/src/data/destinations";
import { instagramShowcaseSlugs } from "@/src/data/home-sections";

export function InstagramShowcase() {
  const tiles = instagramShowcaseSlugs
    .map((slug) => destinationBySlug(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d && d.hasPhoto));

  return (
    <div className="mt-10 sm:mt-12">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white ring-1 ring-navy/8">
        {/* Barra estilo perfil */}
        <div className="flex flex-wrap items-center gap-4 border-b border-navy/8 px-5 py-4 sm:px-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy ring-2 ring-sky/25">
            <Image
              src="/brand/logo-cuadrado.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-lg font-semibold text-navy">
              @{contact.instagram.handle}
            </p>
            <p className="text-xs text-navy-deep/55 sm:text-sm">
              Destinos, fechas y novedades en Instagram
            </p>
          </div>
          <Link
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky sm:text-sm"
          >
            Seguir
          </Link>
        </div>

        {/* Grilla visual */}
        <ul className="grid list-none grid-cols-3 gap-0.5 bg-navy/8 sm:gap-1">
          {tiles.map((dest) => (
            <li key={dest.slug} className="group relative aspect-square overflow-hidden bg-navy/5">
              <Link
                href={hrefForDestination(dest.slug)}
                className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                <Image
                  src={dest.image}
                  alt={`Viaje a ${dest.title}`}
                  fill
                  sizes="(max-width: 640px) 33vw, 200px"
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent px-2 pb-2 pt-8 text-[10px] font-bold text-white sm:text-xs">
                  {dest.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
