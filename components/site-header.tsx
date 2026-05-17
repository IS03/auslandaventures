"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { defaultWhatsappMessage } from "@/src/data/contact";
import { WhatsAppButton } from "./whatsapp-button";

const navLinks = [
  { href: "#viajes", label: "Viajes" },
  { href: "#destacados", label: "Destacados" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#contacto", label: "Contacto" },
];

const navLinkClass = (overLightBg: boolean) =>
  `site-nav-link rounded-lg px-1 py-0.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    overLightBg ? "focus-visible:outline-sky" : "focus-visible:outline-white"
  }`;

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [overLightBg, setOverLightBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const hero = document.getElementById("hero");
    const header = headerRef.current;
    if (!hero || !header) return;

    const update = () => {
      const headerHeight = header.offsetHeight;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setOverLightBg(heroBottom <= headerHeight);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(hero);
    resizeObserver.observe(header);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      data-over-light={overLightBg || menuOpen ? "true" : "false"}
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overLightBg || menuOpen
          ? "border-b border-navy/10 bg-sand/95 py-2.5 shadow-sm backdrop-blur-lg"
          : "bg-gradient-to-b from-navy-deep/60 to-transparent py-3.5 sm:py-4"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-3">
        <Link
          href="/"
          className="relative z-10 shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
        >
          <Image
            src={overLightBg || menuOpen ? "/brand/logo-horizontal.png" : "/brand/logo-blanco.png"}
            alt="Ausland Aventuras — inicio"
            width={150}
            height={44}
            className="h-9 w-auto sm:h-10"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass(overLightBg)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            message={defaultWhatsappMessage}
            variant={overLightBg || menuOpen ? "primary" : "outline"}
            size="sm"
          >
            Consultar
          </WhatsAppButton>
        </div>

        <button
          type="button"
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${
            overLightBg || menuOpen
              ? "bg-navy/8 text-navy"
              : "bg-white/12 text-white backdrop-blur-sm"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-navy/10 bg-sand lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-semibold text-navy transition hover:bg-sky/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton
              message={defaultWhatsappMessage}
              className="mt-3 w-full"
              size="md"
            >
              Consultar por WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      )}
    </header>
  );
}
