"use client";

import { FlyerLightbox } from "./flyer-lightbox";

type FlyerLightboxTriggerProps = {
  images: string[];
  title: string;
};

export function FlyerLightboxTrigger({ images, title }: FlyerLightboxTriggerProps) {
  return (
    <FlyerLightbox images={images} title={title}>
      {(openFlyer) => (
        <button
          type="button"
          onClick={openFlyer}
          className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
        >
          Ver flyer{images.length > 1 ? ` (${images.length})` : ""}
        </button>
      )}
    </FlyerLightbox>
  );
}
