# Image folders — what goes where

Every image currently on the site is an **abstract placeholder** (a simple
brand-colored SVG graphic, not a real photo) so nothing looks broken. Replace
them with real, authorized photos of Healthy & Hunger Hub using the exact
filenames below, and they'll appear on the live site automatically.

## `hero/`
- `hero-main.svg` → replace with a striking, well-lit photo of your best/signature
  dish, shot close-up. This is the first image visitors see. **Recommended:**
  1200×1500px or larger, portrait orientation, JPG or PNG (`hero-main.jpg`/`.png`
  — then update the `src` in `components/Hero.tsx` to match the new extension).

## `menu/`
- `healthy-1.svg`, `healthy-2.svg` → real photos of your lighter/healthy dishes
- `hungry-1.svg`, `hungry-2.svg` → real photos of your hearty/indulgent dishes
- `snacks-1.svg` → a snack item photo
- `drinks-1.svg` → a beverage photo
- Recommended: square, at least 800×800px, shot from a slight top-down angle.
- Add more files here and reference them in `data/business.ts` → `menuItems`
  as you add more dishes.

## `gallery/`
- `food-1.svg`, `food-2.svg`, `food-3.svg` → appetizing food shots
- `shop-1.svg`, `shop-2.svg` → storefront / signage photos
- `interior-1.svg` → seating / interior photo
- Add as many extra images as you like — just add matching entries to
  `galleryImages` in `data/business.ts`.

## `store/`
- `storefront.svg` → used in the About section. Replace with a real photo of
  the shopfront or interior that best represents the Hub.

## `logo/`
- `logo.svg` → replace with the real logo if one exists (SVG or PNG both work).

---

**Tip:** After adding real photos, update the `src` paths in `data/business.ts`
and the relevant components if you change file extensions (e.g. `.svg` → `.jpg`).
