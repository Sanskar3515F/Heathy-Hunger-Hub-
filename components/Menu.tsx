"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { menuItems, menuCategoriesMeta, type MenuCategory } from "@/data/business";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

const HEALTHY_CATEGORIES: MenuCategory[] = ["oats", "breads", "sprouts", "shakes", "chia_seeds"];
const SNACKS_CATEGORIES: MenuCategory[] = ["sandwiches", "burgers", "fries", "maggi", "chaat", "chips", "potato", "momos"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | null>(null);

  const handleCategoryChange = (category: MenuCategory | null) => {
    setActiveCategory(category);
    setTimeout(() => {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const renderCategoryCard = (catKey: MenuCategory, index: number) => {
    const meta = menuCategoriesMeta[catKey];
    return (
      <motion.article
        key={catKey}
        layout
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, delay: index * 0.05 }}
        onClick={() => handleCategoryChange(catKey)}
        className="group cursor-pointer overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={meta.image}
            alt={meta.name}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 text-center">
          <h3 className="font-display text-xl font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-amber)]">
            {meta.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-charcoal)]/65">
            {meta.description}
          </p>
        </div>
      </motion.article>
    );
  };

  return (
    <section id="menu" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-amber)]">
            Our Menu
          </p>
          <h2 className="text-balance mt-2 font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            {activeCategory ? menuCategoriesMeta[activeCategory].name : "Explore Our Menu"}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--color-charcoal)]/70">
            {activeCategory 
              ? menuCategoriesMeta[activeCategory].description 
              : "Browse fresh, filling picks from Healthy & Hunger Hub."}
          </p>
        </Reveal>

        {activeCategory && (
          <Reveal delay={0.1}>
            <button
              onClick={() => handleCategoryChange(null)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[var(--color-charcoal)] shadow-[var(--shadow-soft)] transition-colors hover:bg-[var(--color-cream-alt)]"
            >
              &larr; Back to Categories
            </button>
          </Reveal>
        )}

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {!activeCategory ? (
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Healthy Options Section */}
                <Reveal delay={0.1}>
                  <h3 className="mb-6 mt-4 font-display text-2xl font-semibold text-[var(--color-forest)]">
                    Healthy Options
                  </h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {HEALTHY_CATEGORIES.map((cat, i) => renderCategoryCard(cat, i))}
                </div>

                {/* Snacks Items Section */}
                <Reveal delay={0.2}>
                  <h3 className="mb-6 mt-16 font-display text-2xl font-semibold text-[var(--color-amber-deep)]">
                    Snacks Items
                  </h3>
                </Reveal>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {SNACKS_CATEGORIES.map((cat, i) => renderCategoryCard(cat, i))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="items"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {menuItems
                  .filter((item) => item.category === activeCategory)
                  .map((item, i) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="group overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute left-3 top-3 flex gap-2">
                          {item.bestseller && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-[var(--color-charcoal)] shadow">
                              <Star className="h-3 w-3 fill-[var(--color-gold)] text-[var(--color-gold)]" aria-hidden />
                              Bestseller*
                            </span>
                          )}
                        </div>
                        {item.veg !== null && (
                          <span
                            className={cn(
                              "absolute right-3 top-3 grid h-6 w-6 place-items-center rounded border-2 bg-white",
                              item.veg ? "border-green-600" : "border-red-600"
                            )}
                            aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
                          >
                            <span className={cn("h-2.5 w-2.5 rounded-full", item.veg ? "bg-green-600" : "bg-red-600")} />
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-lg font-semibold leading-snug text-[var(--color-charcoal)]">
                            {item.name}
                          </h3>
                          {item.price && item.price !== "Add price" && (
                            <span className="whitespace-nowrap font-display text-lg font-bold text-[var(--color-amber)]">
                              {item.price}
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-sm text-[var(--color-charcoal)]/65">{item.description}</p>
                      </div>
                    </motion.article>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
