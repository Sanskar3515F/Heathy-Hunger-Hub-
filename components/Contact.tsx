import { Phone, Navigation } from "lucide-react";
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
                "flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-[#25D366] p-6 text-white shadow-lg transition-transform",
                hasWhatsapp ? "hover:scale-[1.03] hover:bg-[#20bd5a]" : "cursor-not-allowed opacity-60"
              )}
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.852 0-3.666-.498-5.253-1.442l-.376-.224-3.905 1.024 1.042-3.807-.246-.391a9.92 9.92 0 0 1-1.522-5.35c0-5.485 4.463-9.948 9.954-9.948 2.659 0 5.16 1.036 7.038 2.917A9.878 9.878 0 0 1 21.996 12c0 5.486-4.463 9.943-9.945 9.943m0-18.067c-4.475 0-8.118 3.642-8.118 8.124 0 1.583.454 3.125 1.314 4.464l.206.319-.646 2.36 2.416-.633.298.177a8.077 8.077 0 0 0 4.53 1.368c4.474 0 8.117-3.643 8.117-8.124 0-2.167-.844-4.204-2.378-5.738-1.533-1.534-3.57-2.377-5.733-2.377" />
              </svg>
              <span className="font-bold">WhatsApp Us</span>
              <span className="text-sm text-white/90">
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
