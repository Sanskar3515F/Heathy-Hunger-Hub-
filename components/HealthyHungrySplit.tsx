import { Leaf, Flame } from "lucide-react";
import Image from "next/image";
import { menuItems } from "@/data/business";
import Reveal from "./Reveal";

export default function HealthyHungrySplit() {
  const healthyCategories = [
    "oats",
    "breads",
    "sprouts",
    "shakes",
    "chia_seeds",
  ];

  const hungryCategories = [
    "sandwiches",
    "burgers",
    "fries",
    "maggi",
    "chaat",
    "chips",
    "potato",
    "momos",
  ];

  const healthyItems = menuItems
    .filter((i) =>
      healthyCategories.includes(i.category as any)
    )
    .slice(0, 2);

  const hungryItems = menuItems
    .filter((i) =>
      hungryCategories.includes(i.category as any)
    )
    .slice(0, 2);

  return (
    <section className="relative bg-[var(--color-cream-alt)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-charcoal)]/50">
            The Hub&apos;s signature split
          </p>

          <h2 className="mx-auto mt-2 max-w-2xl text-balance font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            One craving is light. The other isn&apos;t. Both belong here.
          </h2>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-0">

        {/* HEALTHY SIDE */}
        <Reveal className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-forest)] p-8 text-white sm:p-10 md:rounded-r-none md:pr-16">

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold">
              <Leaf className="h-4 w-4" />
              Feeling Healthy?
            </span>

            <p className="mt-4 max-w-sm text-white/85">
              Fresh, balanced plates for when you want to feel good after you eat —
              light on the stomach, big on flavour.
            </p>

            <div className="mt-8 space-y-4">
              {healthyItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-3"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-white/70">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* HUNGRY SIDE */}
        <Reveal
          delay={0.1}
          className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-amber)] p-8 text-white sm:p-10 md:rounded-l-none md:pl-16"
        >
          <div className="relative z-10 md:text-right">

            <span className="inline-flex items-center gap-2 rounded-full bg-black/15 px-4 py-1.5 text-sm font-bold md:flex-row-reverse">
              <Flame className="h-4 w-4" />
              Feeling Hungry?
            </span>

            <p className="mt-4 max-w-sm text-white/90 md:ml-auto">
              Bold, hearty, indulgent — for the days you want comfort food that
              actually fills you up.
            </p>

            <div className="mt-8 space-y-4">
              {hungryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl bg-black/10 p-3 md:flex-row-reverse"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 md:text-right">
                    <p className="truncate font-semibold">
                      {item.name}
                    </p>

                    <p className="text-sm text-white/75">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}