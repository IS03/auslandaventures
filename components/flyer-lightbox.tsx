"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type FlyerLightboxProps = {
  images: string[];
  title: string;
  children: (openFlyer: () => void) => React.ReactNode;
};

export function FlyerLightbox({ images, title, children }: FlyerLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const [portalReady, setPortalReady] = useState(false);

  useLayoutEffect(() => {
    setPortalReady(true);
  }, []);

  const current = images[index] ?? images[0];
  const hasMultiple = images.length > 1;

  const closeFlyer = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const openFlyer = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setIndex(0);
    document.body.style.overflow = "hidden";
    dialog.showModal();
  }, []);

  const handleClose = useCallback(() => {
    setIndex(0);
    document.body.style.overflow = "";
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
  }, [portalReady, hasMultiple, images.length, closeFlyer]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeFlyer();
  };

  const dialog = (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="flyer-dialog fixed inset-0 z-[9999] m-0 hidden h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 open:flex open:flex-col"
      aria-labelledby={titleId}
      aria-modal="true"
    >
      <div
        className="flyer-lightbox-backdrop flex h-full min-h-[100svh] w-full flex-col items-center justify-end sm:justify-center"
        onClick={handleBackdropClick}
      >
        <div
          className="w-full max-w-[min(100vw,26rem)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-0 sm:px-4 sm:pb-[max(1rem,env(safe-area-inset-bottom))] sm:pt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p id={titleId} className="sr-only">
            Flyer del viaje a {title}
            {hasMultiple ? `, variante ${index + 1} de ${images.length}` : ""}
          </p>

          {/* Altura estable en móvil (svh): cabecera + imagen con scroll + barra variantes en flujo, sin tapar el flyer */}
          <div className="flex max-h-[min(92svh,56rem)] flex-col overflow-hidden rounded-t-[1.25rem] bg-navy-deep shadow-2xl ring-1 ring-white/20 sm:max-h-[min(88dvh,56rem)] sm:rounded-3xl">
            <div className="flex shrink-0 items-center gap-2 border-b border-white/10 bg-navy-deep px-3 py-2.5 pt-[max(0.5rem,env(safe-area-inset-top))] sm:gap-3 sm:px-4 sm:py-3 sm:pt-3">
              <span className="min-w-0 flex-1 truncate text-left text-sm font-semibold leading-snug text-white sm:text-base">
                {title}
              </span>
              <button
                type="button"
                onClick={closeFlyer}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition active:scale-95 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:h-10 sm:w-10"
                aria-label="Cerrar flyer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className="scrollbar-hide min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-y-contain"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {current && (
                <Image
                  src={current}
                  alt={`Flyer del viaje a ${title}${hasMultiple ? `, variante ${index + 1}` : ""}`}
                  width={1080}
                  height={1920}
                  className="h-auto w-full select-none"
                  draggable={false}
                  sizes="(max-width: 640px) 100vw, 416px"
                />
              )}
            </div>

            {hasMultiple && (
              <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/10 bg-navy-deep px-3 py-3 sm:px-4">
                <button
                  type="button"
                  onClick={goPrev}
                  className="min-h-11 min-w-[4.5rem] rounded-full border border-white/15 bg-white/10 px-3 text-xs font-bold text-white transition active:scale-[0.98] hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber sm:min-h-0 sm:px-4 sm:text-sm"
                >
                  Anterior
                </button>
                <div className="flex max-w-[40%] flex-wrap justify-center gap-1.5" aria-label="Variantes del flyer">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Variante ${i + 1} de ${images.length}`}
                      aria-current={i === index ? true : undefined}
                      onClick={() => setIndex(i)}
                      className={`h-2.5 w-2.5 shrink-0 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                        i === index ? "scale-110 bg-amber" : "bg-white/35 hover:bg-white/55"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="min-h-11 min-w-[4.5rem] rounded-full border border-white/15 bg-white/10 px-3 text-xs font-bold text-white transition active:scale-[0.98] hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber sm:min-h-0 sm:px-4 sm:text-sm"
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>

          {hasMultiple && (
            <p className="mt-2 px-1 text-center text-[11px] font-medium leading-snug text-white/70 sm:mt-2.5 sm:text-xs">
              <span className="hidden sm:inline">Flechas del teclado para cambiar variante · </span>
              Deslizá el flyer para verlo entero · tocá el fondo oscuro para cerrar
            </p>
          )}

          {!hasMultiple && (
            <p className="mt-2 px-1 text-center text-[11px] font-medium text-white/70 sm:text-xs">
              Tocá el fondo oscuro para cerrar
            </p>
          )}
        </div>
      </div>
    </dialog>
  );

  return (
    <>
      {children(openFlyer)}
      {portalReady ? createPortal(dialog, document.body) : null}
    </>
  );
}
