"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { defaultWhatsappMessage } from "@/src/data/contact";
import { WhatsAppButton } from "./whatsapp-button";

const navLinks = [
  { href: "#destacados", label: "Destacados" },
  { href: "#viajes", label: "Viajes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#contacto", label: "Contacto" },
] as const;

/** En la home usa ancla local; en subpáginas vuelve al inicio y a la sección. */
function resolveNavHref(pathname: string, href: string): string {
  if (href.startsWith("/")) return href;
  return pathname === "/" ? href : `/${href}`;
}

const navLinkClass = (overLightBg: boolean) =>
  `site-nav-link rounded-lg px-1 py-0.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    overLightBg ? "focus-visible:outline-sky" : "focus-visible:outline-white"
  }`;

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [overLightBg, setOverLightBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  useLayoutEffect(() => {
    setPortalReady(true);
  }, []);

  useLayoutEffect(() => {
    const hero = document.getElementById("hero");
    const header = headerRef.current;
    if (!hero || !header) {
      setOverLightBg(pathname !== "/");
      return;
    }

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
  }, [pathname]);

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

  const closeMenu = () => setMenuOpen(false);
  const useLightChrome = overLightBg || menuOpen;

  const mobileMenu =
    portalReady &&
    createPortal(
      <div
        className={`mobile-nav-overlay fixed inset-0 z-40 bg-sage lg:hidden ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <nav
          className="flex h-full min-h-[100dvh] w-full flex-col justify-start px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(6.5rem,calc(5.25rem+env(safe-area-inset-top)))] sm:px-8"
          aria-label="Menú móvil"
        >
          <ul className="flex w-full list-none flex-col">
            {navLinks.map((link, index) => (
              <li key={link.href} className="mobile-nav-item w-full">
                <Link
                  href={resolveNavHref(pathname, link.href)}
                  className="mobile-nav-link block py-5 font-display text-3xl font-semibold leading-tight text-navy transition-colors hover:text-sky focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky active:text-sky sm:py-6"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="mobile-nav-divider" aria-hidden />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        ref={headerRef}
        data-over-light={useLightChrome ? "true" : "false"}
        className={`site-header fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          useLightChrome
            ? "border-b border-navy/10 bg-sage/95 py-3 shadow-sm lg:backdrop-blur-lg"
            : "border-b border-transparent bg-transparent py-3"
        }`}
      >
        <div className="container-page flex items-center justify-between gap-3">
          <Link
            href="/"
            className="relative z-[51] shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            aria-label="Ausland Aventuras — inicio"
            onClick={closeMenu}
          >
            <span
              className="relative block h-9 shrink-0 aspect-[4211/1899] sm:h-10"
              aria-hidden
            >
              <Image
                src="/brand/logo-horizontal.png"
                alt=""
                fill
                sizes="(max-width: 640px) 80px, 89px"
                className={`object-contain object-left transition-opacity duration-300 ${
                  useLightChrome ? "opacity-100" : "opacity-0"
                }`}
                priority
              />
              <Image
                src="/brand/logo-blanco.png"
                alt=""
                fill
                sizes="(max-width: 640px) 80px, 89px"
                className={`object-contain object-left transition-opacity duration-300 ${
                  useLightChrome ? "opacity-0" : "opacity-100"
                }`}
                priority
              />
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={resolveNavHref(pathname, link.href)}
                className={navLinkClass(overLightBg)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton
              message={defaultWhatsappMessage}
              variant={overLightBg ? "primary" : "outline"}
              size="sm"
            >
              Consultar
            </WhatsAppButton>
          </div>

          <button
            type="button"
            className={`mobile-nav-menu-btn relative z-[51] h-11 w-11 rounded-xl lg:hidden ${
              useLightChrome ? "bg-navy/8 text-navy" : "bg-white/12 text-white"
            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="mobile-nav-bar mobile-nav-bar-top" aria-hidden />
            <span className="mobile-nav-bar mobile-nav-bar-mid" aria-hidden />
            <span className="mobile-nav-bar mobile-nav-bar-bot" aria-hidden />
          </button>
        </div>
      </header>

      <div id="mobile-nav">{mobileMenu}</div>
    </>
  );
}
