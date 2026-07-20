import Image from "next/image";
import { MapPin, Clock, Phone, AtSign } from "lucide-react";
import { business } from "@/data/business";
import { hasPhone, telLink } from "@/lib/contact";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#owner", label: "Owner" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hasSocial = business.social.instagram || business.social.facebook;

  return (
    <footer className="bg-[var(--color-charcoal)] pb-28 pt-16 text-white/80 lg:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-semibold text-white">
              <Image src="/images/logo/logo.png" alt="" width={36} height={36} aria-hidden />
              Healthy &amp; Hunger Hub
            </a>
            <p className="mt-3 text-sm">Healthy Choices. Hungry Cravings. One Hub.</p>
            {hasSocial && (
              <div className="mt-4 flex gap-3">
                {business.social.instagram && (
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                    <AtSign className="h-4 w-4" />
                  </a>
                )}
                {business.social.facebook && (
                  <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                    <AtSign className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <p className="font-semibold text-white">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                <a href={business.google.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {business.address.full}
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                {hasPhone ? (
                  <a href={telLink} className="hover:text-white">
                    {business.contact.phone}
                  </a>
                ) : (
                  <span>{business.contact.phoneDisplay}</span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white">Hours</p>
            <ul className="mt-3 space-y-2 text-sm">
              {business.hours.schedule.map((h) => (
                <li key={h.day} className="flex gap-2">
                  <Clock className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
                  <span>
                    {h.day}: {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Healthy &amp; Hunger Hub. All rights reserved.</p>
          <a href={business.google.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            View on Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
