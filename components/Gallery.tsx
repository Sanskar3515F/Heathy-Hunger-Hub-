"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/business";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));

  useEffect(() => {
    if (activeIndex !== null) closeButtonRef.current?.focus();
  }, [activeIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (activeIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <section id="gallery" className="bg-[var(--color-cream-alt)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-amber)]">Gallery</p>
          <h2 className="text-balance mt-2 font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            A look inside the Hub
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-charcoal)]/70">
            Placeholder tiles below — drop authorized copies of the real food,
            storefront, and interior photos into{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5 text-sm">public/images/gallery/</code>{" "}
            using the same filenames to replace them instantly.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05} className={cn(img.size === "tall" && "row-span-2")}>
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]",
                  img.size === "tall" ? "aspect-[3/4] h-full" : img.size === "wide" ? "aspect-[16/10]" : "aspect-square"
                )}
                aria-label={`View larger image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-square w-full max-w-lg overflow-hidden rounded-2xl sm:aspect-[4/3]"
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
