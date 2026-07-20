"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";
import { business } from "@/data/business";
import { waLink, telLink, hasPhone, hasWhatsapp } from "@/lib/contact";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--color-cream)] pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      {/* Ambient background shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-[var(--color-gold)]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[var(--color-forest)]/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-forest)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-forest)]"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Fresh • Tasty • Made for Every Craving
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance mt-6 font-display text-4xl font-semibold leading-[1.08] text-[var(--color-charcoal)] sm:text-5xl lg:text-6xl"
          >
            Healthy Choices.{" "}
            <span className="italic text-[var(--color-forest)]">Hungry</span>{" "}
            Cravings.{" "}
            <span className="relative whitespace-nowrap text-[var(--color-amber)]">
              One Hub.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-lg text-[var(--color-charcoal)]/75"
          >
            Two cravings, one address in Rasayani. Whether you&apos;re after something
            light and fresh or something indulgent and filling, Healthy &amp;
            Hunger Hub has a plate for the mood you&apos;re in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-forest)] px-7 py-3.5 text-base font-bold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore Menu
            </a>
            <a
              href={business.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-charcoal)]/15 bg-white px-7 py-3.5 text-base font-bold text-[var(--color-charcoal)] transition-colors hover:border-[var(--color-amber)] hover:text-[var(--color-amber)]"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-4 text-sm font-semibold"
          >
            <a
              href={hasPhone ? telLink : "#contact"}
              className="inline-flex items-center gap-1.5 text-[var(--color-charcoal)]/70 hover:text-[var(--color-forest)]"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Now
            </a>
            <a
              href={hasWhatsapp ? waLink() : "#contact"}
              className="inline-flex items-center gap-1.5 text-[var(--color-charcoal)]/70 hover:text-[var(--color-forest)]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)]">
            <Image
              src="/images/hero/hero.png"
              alt="Placeholder — replace with a real hero photo of Healthy & Hunger Hub's signature dish"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-[var(--shadow-soft)] sm:block">
            <p className="font-display text-2xl font-bold text-[var(--color-forest)]">100%</p>
            <p className="text-xs font-semibold text-[var(--color-charcoal)]/60">Made fresh to order*</p>
          </div>
          <div className="absolute -top-6 -right-6 hidden rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow-soft)] sm:flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] border-2 border-green-600 bg-white" title="100% Pure Veg">
              <span className="block h-4 w-4 rounded-full bg-green-600"></span>
            </span>
            <div>
              <p className="font-display text-lg font-bold text-[var(--color-forest)] leading-tight">Pure Veg</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
