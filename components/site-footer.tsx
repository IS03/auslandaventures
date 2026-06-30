import Image from "next/image";
import { FooterWhatsAppLink } from "@/components/footer-whatsapp-link";
import { contact } from "@/src/data/contact";

const footerLink =
  "rounded-md text-white/80 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-light";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="footer-surface scroll-mt-24 text-white">
      <div className="container-page py-16 max-lg:pb-24 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Image
              src="/brand/logo-tipografico-blanco.png"
              alt="Ausland Aventuras"
              width={200}
              height={52}
              loading="lazy"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              La aventura de conocer un nuevo destino. Agencia de viajes desde Córdoba, Argentina.{" "}
              <a href="/nosotros" className={`font-semibold text-white/90 hover:text-amber ${footerLink}`}>
                Sobre nosotros
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-light">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <FooterWhatsAppLink
                  className={`font-semibold text-white hover:text-amber ${footerLink}`}
                />
              </li>
              <li>
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLink}
                >
                  @{contact.instagram.handle}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={footerLink}>
                  {contact.email}
                </a>
              </li>
              <li className="text-white/65">{contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-9 text-xs leading-relaxed text-white/50 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <p>© {year} Ausland Aventuras. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces legales e información" className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="/viajes/nacionales" className={footerLink}>
              Nacionales
            </a>
            <a href="/viajes/internacionales" className={footerLink}>
              Internacionales
            </a>
            <a href="/viajes/regionales" className={footerLink}>
              Regionales
            </a>
            <a href="/politicas" className={footerLink}>
              Términos y condiciones
            </a>
          </nav>
          <p className="max-w-md">
            Los precios publicados son orientativos y pueden variar. Consultá condiciones al reservar.
          </p>
        </div>
      </div>
    </footer>
  );
}
