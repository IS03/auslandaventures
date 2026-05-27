"use client";

import { defaultWhatsappMessage, whatsappUrl } from "@/src/data/contact";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Cuánto hay que desplazar la página antes de mostrar el botón (px). */
const SCROLL_REVEAL_PX = 48;

export function WhatsAppFab() {
  const [revealed, setRevealed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const doneRef = useRef(false);

  useLayoutEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const tryReveal = () => {
      if (doneRef.current) return;
      if (window.scrollY < SCROLL_REVEAL_PX) return;
      doneRef.current = true;
      setRevealed(true);
    };

    tryReveal();
    window.addEventListener("scroll", tryReveal, { passive: true });
    return () => window.removeEventListener("scroll", tryReveal);
  }, []);

  const hiddenClasses = reduceMotion
    ? "pointer-events-none opacity-0"
    : "pointer-events-none translate-y-16 scale-95 opacity-0";

  const visibleClasses = "translate-y-0 scale-100 opacity-100";

  return (
    <a
      href={whatsappUrl(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-[transform,opacity,box-shadow] ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] motion-reduce:transition-opacity motion-reduce:duration-200 ${
        reduceMotion ? "duration-300" : "duration-[520ms]"
      } ${revealed ? `${visibleClasses} hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/45 active:scale-95` : hiddenClasses}`}
      style={{
        right: "max(1rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
      }}
      aria-label="Consultar por WhatsApp"
      {...(!revealed ? { "aria-hidden": true as const, tabIndex: -1 as const } : {})}
    >
      <span
        className={`flex items-center justify-center ${revealed && !reduceMotion ? "whatsapp-fab-bob" : ""}`}
        aria-hidden
      >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      </span>
    </a>
  );
}
