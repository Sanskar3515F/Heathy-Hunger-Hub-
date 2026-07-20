import { Phone, MessageCircle, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { hasPhone, hasWhatsapp, telLink, waLink } from "@/lib/contact";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-forest)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
            Hungry yet? Reach out and let&apos;s sort it.
          </h2>
          <p className="mt-4 text-white/75">
            Call, message on WhatsApp, or get directions — whichever&apos;s
            easiest for you right now.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={hasPhone ? telLink : undefined}
              aria-disabled={!hasPhone}
              className={cn(
                "flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-white/10 p-6 text-white transition-transform",
                hasPhone ? "hover:scale-[1.03] hover:bg-white/15" : "cursor-not-allowed opacity-50"
              )}
            >
              <Phone className="h-7 w-7" aria-hidden />
              <span className="font-bold">Call Now</span>
              <span className="text-sm text-white/70">
                {hasPhone ? business.contact.phone : "Add phone number"}
              </span>
            </a>

            <a
              href={hasWhatsapp ? waLink() : undefined}
              target={hasWhatsapp ? "_blank" : undefined}
              rel={hasWhatsapp ? "noopener noreferrer" : undefined}
              aria-disabled={!hasWhatsapp}
              className={cn(
                "flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-[var(--color-amber)] p-6 text-white transition-transform",
                hasWhatsapp ? "hover:scale-[1.03]" : "cursor-not-allowed opacity-60"
              )}
            >
              <MessageCircle className="h-7 w-7" aria-hidden />
              <span className="font-bold">WhatsApp Us</span>
              <span className="text-sm text-white/80">
                {hasWhatsapp ? "Chat instantly" : "Add WhatsApp number"}
              </span>
            </a>

            <a
              href={business.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-white/10 p-6 text-white transition-transform hover:scale-[1.03] hover:bg-white/15"
            >
              <Navigation className="h-7 w-7" aria-hidden />
              <span className="font-bold">Get Directions</span>
              <span className="text-sm text-white/70">Open in Google Maps</span>
            </a>

            {business.social.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-gradient-to-br from-[#f9417b] via-[#c0306f] to-[#833ab4] p-6 text-white transition-transform hover:scale-[1.03]"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <span className="font-bold">Instagram</span>
                <span className="text-sm text-white/80">Follow us</span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
