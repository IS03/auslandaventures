import { categoryShowcaseBlocks } from "@/src/data/destinations";
import { CategoryMosaicCard } from "./category-mosaic-card";

export function CategoryShowcase() {
  const [nacionales, internacionales, regionales] = categoryShowcaseBlocks;

  return (
    <section
      id="categorias"
      aria-label="Categorías de viajes"
      className="relative z-[2] -mt-px section-padding section-surface-a section-surface-a--flush overflow-x-hidden"
    >
      <div className="container-page max-w-full">
        <div className="grid grid-cols-1 gap-2.5 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5 lg:min-h-[min(520px,72vh)]">
          <CategoryMosaicCard
            block={nacionales}
            className="min-h-[280px] lg:col-span-5 lg:row-span-2 lg:min-h-0"
            priority
          />
          <CategoryMosaicCard
            block={internacionales}
            className="min-h-[220px] lg:col-span-7 lg:row-start-1 lg:min-h-0"
          />
          <CategoryMosaicCard
            block={regionales}
            className="min-h-[220px] lg:col-span-7 lg:row-start-2 lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}
