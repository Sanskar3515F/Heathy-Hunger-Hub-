import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { hasPhone, telLink } from "@/lib/contact";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="bg-[var(--color-cream-alt)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-amber)]">Find Us</p>
          <h2 className="text-balance mt-2 font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            Come say hi in Rasayani
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-[var(--color-forest)] p-8 text-white shadow-[var(--shadow-soft)]">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-white/80">{business.address.full}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-6 w-6 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div>
                    <p className="font-semibold">Hours</p>
                    {business.hours.verified ? (
                      <div className="mt-1 space-y-1">
                        {business.hours.schedule.map((h) => (
                          <p key={h.day} className="text-white/80 text-sm">
                            <span className="font-semibold text-white">{h.day}:</span> {h.time}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white/80">Not yet confirmed — check Google listing</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-6 w-6 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div>
                    <p className="font-semibold">Phone</p>
                    {hasPhone ? (
                      <a href={telLink} className="text-white/80 underline underline-offset-2">
                        {business.contact.phone}
                      </a>
                    ) : (
                      <p className="text-white/60">{business.contact.phoneDisplay}</p>
                    )}
                  </div>
                </div>
              </div>

              <a
                href={business.google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-[var(--color-forest)] transition-transform hover:scale-[1.03]"
              >
                <Navigation className="h-5 w-5" aria-hidden />
                Get Directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="h-full min-h-[340px] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
              <iframe
                title="Healthy & Hunger Hub location on Google Maps"
                src={business.google.mapsEmbedUrl}
                className="h-full min-h-[340px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
