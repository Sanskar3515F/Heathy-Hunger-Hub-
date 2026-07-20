import Image from "next/image";
import { MapPin, UtensilsCrossed } from "lucide-react";
import { business } from "@/data/business";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-soft)]">
            <Image
              src="/images/store/storefront.png"
              alt="Placeholder — replace with a real storefront or interior photo"
              fill
              sizes="(max-width: 1024px) 90vw, 540px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-amber)]">
            About the Hub
          </p>
          <h2 className="text-balance mt-2 font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            Rooted in Rasayani, built for two kinds of appetite
          </h2>

          <div className="mt-5 space-y-4 text-[var(--color-charcoal)]/75">
            <p>
              Healthy &amp; Hunger Hub sits on {business.address.line1} in{" "}
              {business.address.area}, {business.address.state}. It is a local
              food spot made for people who want both sides of taste in one
              place: lighter healthy choices and satisfying hungry cravings.
            </p>
            <p className="rounded-2xl bg-[var(--color-cream-alt)] p-4 text-sm text-[var(--color-charcoal)]/70">
              From quick bites to fresh, filling options, the Hub is built to
              keep food simple, tasty, and easy to enjoy for customers around
              Rasayani and Navin Posari.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-soft)]">
              <MapPin className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
              <span className="text-sm font-semibold">{business.address.area}</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-soft)]">
              <UtensilsCrossed className="h-5 w-5 text-[var(--color-amber)]" aria-hidden />
              <span className="text-sm font-semibold">{business.category}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
