import { Star, ExternalLink, MessageSquareText } from "lucide-react";
import { business } from "@/data/business";
import Reveal from "./Reveal";

export default function Reviews() {
  const hasReviews = business.reviews.length > 0;

  return (
    <section id="reviews" className="bg-[var(--color-cream)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-amber)]">
                Customer Reviews
              </p>
              <h2 className="text-balance mt-2 font-display text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
                What people are saying
              </h2>
            </div>
            <a
              href={business.google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-forest)] px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            >
              View on Google <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>

        {hasReviews ? (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {business.reviews.map((r, i) => (
              <Reveal key={r.name + i} delay={i * 0.08}>
                <div className="h-full rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`h-4 w-4 ${s < r.rating ? "fill-[var(--color-gold)] text-[var(--color-gold)]" : "text-black/15"}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-[var(--color-charcoal)]/80">&ldquo;{r.text}&rdquo;</p>
                  <p className="mt-4 text-sm font-bold text-[var(--color-charcoal)]">{r.name}</p>
                  {r.date && <p className="text-xs text-[var(--color-charcoal)]/50">{r.date}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-3 rounded-[var(--radius-card)] bg-white p-10 text-center shadow-[var(--shadow-soft)]">
              <MessageSquareText className="h-10 w-10 text-[var(--color-amber)]" aria-hidden />
              <p className="max-w-md text-[var(--color-charcoal)]/70">
                Real reviews couldn&apos;t be pulled in automatically. Once you
                paste in a few genuine reviews (with reviewer name and rating)
                from the Google listing, they&apos;ll appear here as cards.
              </p>
              <a
                href={business.google.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-charcoal)]/15 px-5 py-2.5 text-sm font-bold hover:border-[var(--color-amber)] hover:text-[var(--color-amber)]"
              >
                See reviews on Google <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
