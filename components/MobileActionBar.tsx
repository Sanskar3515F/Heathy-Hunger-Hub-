"use client";

import { Phone, MessageCircle, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { hasPhone, hasWhatsapp, telLink, waLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-px bg-black/10 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.2)] lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <a
        href={hasPhone ? telLink : "#contact"}
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-1 bg-[var(--color-forest)] py-3 text-white",
          !hasPhone && "opacity-70"
        )}
      >
        <Phone className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold">Call</span>
      </a>
      <a
        href={hasWhatsapp ? waLink() : "#contact"}
        target={hasWhatsapp ? "_blank" : undefined}
        rel={hasWhatsapp ? "noopener noreferrer" : undefined}
        className={cn(
          "flex flex-1 flex-col items-center justify-center gap-1 bg-[var(--color-amber)] py-3 text-white",
          !hasWhatsapp && "opacity-70"
        )}
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold">WhatsApp</span>
      </a>
      <a
        href={business.google.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 bg-[var(--color-charcoal)] py-3 text-white"
      >
        <Navigation className="h-5 w-5" aria-hidden />
        <span className="text-xs font-bold">Directions</span>
      </a>
    </div>
  );
}
