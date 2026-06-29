"use client";

import { trackWhatsAppClick } from "@/lib/analytics";
import { contact, defaultWhatsappMessage, whatsappUrl } from "@/src/data/contact";

type FooterWhatsAppLinkProps = {
  className: string;
};

export function FooterWhatsAppLink({ className }: FooterWhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsAppClick("footer")}
    >
      WhatsApp {contact.whatsapp.primary.display}
    </a>
  );
}
