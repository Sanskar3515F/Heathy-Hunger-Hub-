import Image from "next/image";
import { HandPlatter, Smile, Sparkles } from "lucide-react";
import { business } from "@/data/business";
import Reveal from "./Reveal";

export default function Owner() {
  return (
    <section id="owner" className="bg-[var(--color-cream-alt)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)]">
            <Image
              src={business.owner.photo}
              alt={`${business.owner.name}, ${business.owner.role}`}
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-amber)]">
            About the Owner
          </p>
          <h2 className="text-balance mt-2 font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            The person behind Healthy & Hunger Hub - Sandesh Mundhe
          </h2>

          <div className="mt-5 space-y-4 text-[var(--color-charcoal)]/75">
            <p>{business.owner.message}</p>
            <p>
              His focus is to keep the experience simple, welcoming, and
              reliable for people around {business.address.area}, whether they
              visit for a quick snack or a healthier choice.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
              <HandPlatter className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
              <p className="mt-3 text-sm font-bold text-[var(--color-charcoal)]">
                Hands-on Owner
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
              <Smile className="h-5 w-5 text-[var(--color-amber)]" aria-hidden />
              <p className="mt-3 text-sm font-bold text-[var(--color-charcoal)]">
                Friendly Approach
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)]">
              <Sparkles className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
              <p className="mt-3 text-sm font-bold text-[var(--color-charcoal)]">
                Growing Vision
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
