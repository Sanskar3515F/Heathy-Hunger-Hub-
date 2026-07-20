import { MapPin, Star, Clock, UtensilsCrossed, ShoppingBag, Bike } from "lucide-react";
import { business } from "@/data/business";
import Reveal from "./Reveal";

function ServicePill({
  label,
  status,
  icon: Icon,
}: {
  label: string;
  status: boolean | null;
  icon: React.ElementType;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
        status === true
          ? "bg-[var(--color-forest)]/10 text-[var(--color-forest)]"
          : "bg-black/5 text-[var(--color-charcoal)]/45"
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden />
      {label}
      {status === null && <span className="text-xs font-normal">(confirm)</span>}
    </div>
  );
}

export default function InfoBar() {
  return (
    <section className="border-y border-black/5 bg-white/70">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-6 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal)]/80">
            <Star className="h-5 w-5 text-[var(--color-gold)]" fill="currentColor" aria-hidden />
            {business.rating.verified && business.rating.value ? (
              <span>
                {business.rating.value.toFixed(1)} · {business.rating.count} reviews
              </span>
            ) : (
              <span className="text-[var(--color-charcoal)]/50">Rating: see Google listing</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal)]/80">
            <MapPin className="h-5 w-5 text-[var(--color-amber)]" aria-hidden />
            <span>Rasayani, Mohopada</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-charcoal)]/80">
            <Clock className="h-5 w-5 text-[var(--color-forest)]" aria-hidden />
            {business.hours.verified ? (
              <span>{business.hours.schedule[0].time}</span>
            ) : (
              <a href={business.google.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2">
                Check hours on Google
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <ServicePill label="Dine-in" status={business.services.dineIn} icon={UtensilsCrossed} />
            <ServicePill label="Takeaway" status={business.services.takeaway} icon={ShoppingBag} />
            <ServicePill label="Delivery" status={business.services.delivery} icon={Bike} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
