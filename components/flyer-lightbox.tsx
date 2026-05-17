"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type FlyerLightboxProps = {
  images: string[];
  title: string;
  children: (openFlyer: () => void) => React.ReactNode;
};

export function FlyerLightbox({ images, title, children }: FlyerLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [index, setIndex] = useState(0);

  const current = images[index] ?? images[0];
  const hasMultiple = images.length > 1;

  const openFlyer = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setIndex(0);
    dialog.showModal();
  }, []);

  const closeFlyer = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleClose = useCallback(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!dialog.open) return;
      if (e.key === "Escape") {
        closeFlyer();
        return;
      }
      if (hasMultiple && e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
      if (hasMultiple && e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasMultiple, images.length, closeFlyer]);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) closeFlyer();
  };

  return (
    <>
      {children(openFlyer)}

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={handleDialogClick}
        className="flyer-dialog fixed inset-0 z-[100] m-0 hidden max-h-none max-w-none items-center justify-center border-0 bg-transparent p-4 open:flex sm:p-6"
        aria-labelledby={titleId}
      >
        <div
          className="relative flex max-h-[min(92vh,900px)] w-full max-w-[min(100%,26rem)] flex-col"
          onClick={(e) => e.stopPropagation()}
          role="document"
        >
          <div className="mb-3 flex shrink-0 items-center justify-between gap-3 px-1">
            <div className="min-w-0">
              <p id={titleId} className="truncate font-display text-lg font-semibold text-white">
                {title}
              </p>
              {hasMultiple && (
                <p className="text-xs font-medium text-white/70">
                  Variante {index + 1} de {images.length}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={closeFlyer}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Cerrar flyer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-2xl bg-navy-deep/40 shadow-2xl ring-1 ring-white/15">
            {current && (
              <Image
                src={current}
                alt={`Flyer del viaje a ${title}${hasMultiple ? `, variante ${index + 1}` : ""}`}
                width={1080}
                height={1920}
                className="h-auto w-full"
                sizes="(max-width: 480px) 100vw, 416px"
              />
            )}
          </div>

          {hasMultiple && (
            <div className="mt-3 flex items-center justify-between gap-2 px-1">
              <button
                type="button"
                onClick={goPrev}
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Anterior
              </button>
              <div className="flex gap-1.5" aria-hidden>
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full transition ${
                      i === index ? "bg-amber" : "bg-white/35"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Siguiente
              </button>
            </div>
          )}

          <p className="mt-3 hidden text-center text-[11px] text-white/55 sm:block">
            Flechas del teclado para cambiar variante · Escape para cerrar
          </p>
        </div>
      </dialog>
    </>
  );
}
