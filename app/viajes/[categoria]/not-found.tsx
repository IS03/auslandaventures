import Link from "next/link";

export default function CategoryNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sage px-6 text-center">
      <h1 className="font-display text-3xl text-navy">Categoría no encontrada</h1>
      <p className="mt-3 max-w-md text-navy-deep/70">
        No encontramos esa categoría de viajes. Volvé al inicio para explorar el catálogo.
      </p>
      <Link
        href="/#viajes"
        className="mt-8 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-deep"
      >
        Ver viajes
      </Link>
    </div>
  );
}
