"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#owner", label: "Owner" },
  { href: "#location", label: "Location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-4 rounded-full px-4 transition-all duration-300 sm:px-6 lg:grid-cols-[1fr_auto_1fr]",
          scrolled
            ? "bg-white/90 shadow-[var(--shadow-soft)] backdrop-blur-md py-2"
            : "bg-white/40 backdrop-blur-sm py-3"
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-base sm:text-lg font-semibold text-[var(--color-forest)]">
          <Image src="/images/logo/logo.png" alt="" width={40} height={40} className="h-9 w-9 sm:h-10 sm:w-10 shrink-0" aria-hidden />
          <span className="leading-tight">
            Healthy<span className="text-[var(--color-amber)]"> &amp; </span>Hunger Hub
          </span>
          <span className="hidden xl:inline-flex items-center gap-1 rounded-full border border-green-600/30 bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">
            <span className="flex h-2.5 w-2.5 items-center justify-center rounded-[1px] border border-green-600 bg-white">
              <span className="h-1 w-1 rounded-full bg-green-600"></span>
            </span>
            Pure Veg
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--color-charcoal)]/80 transition-colors hover:text-[var(--color-amber)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Order / Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-forest)] text-white lg:hidden shrink-0"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-4 mt-2 rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] lg:hidden"
          >
            {/* Pure Veg Banner in Mobile Drawer */}
            <div className="mb-4 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-2.5 border border-green-200">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] border-2 border-green-600 bg-white">
                <span className="h-3 w-3 rounded-full bg-green-600"></span>
              </span>
              <div>
                <p className="text-xs font-bold text-green-800 uppercase tracking-wide">100% Pure Veg Restaurant</p>
                <p className="text-[11px] text-green-700/80">Fresh &amp; Hygienic Preparation</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-cream-alt)] hover:text-[var(--color-amber)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[var(--color-amber)] px-5 py-3 text-base font-bold text-white shadow-[var(--shadow-warm)]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Order / Contact
            </a>
            <p className="mt-3 text-center text-xs text-[var(--color-charcoal)]/50">{business.address.full}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
