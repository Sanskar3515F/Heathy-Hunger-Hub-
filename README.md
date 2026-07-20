# 🥗 Healthy & Hunger Hub

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-e902b5?logo=framer)](https://www.framer.com/motion/)

A stunning, production-ready website for **Healthy & Hunger Hub**, a premium 100% Pure Veg restaurant located in Rasayani, Maharashtra. 

Built with modern web technologies, this project features a dynamic, responsive design with smooth micro-animations, a glassmorphism navigation bar, and robust SEO optimization.

---

## ✨ Features

- **⚡ Blazing Fast Performance:** Built on Next.js 16 with App Router and Turbopack.
- **🎨 Modern Design Aesthetics:** Beautiful UI with Tailwind CSS v4, featuring glassmorphism, dynamic gradients, and custom branding.
- **✨ Smooth Animations:** Powered by Framer Motion for scroll-reveals and interactive hover states.
- **📱 Fully Responsive:** Carefully crafted to look perfect on mobile devices, tablets, and large desktop screens.
- **🔍 SEO Optimized:** Complete with meta tags, Open Graph data, XML sitemaps, and JSON-LD structured data for local restaurants.
- **🗺️ Integrated Maps:** One-click "Get Directions" linked directly to the verified Google Place ID.
- **💬 Quick Contact Links:** Direct integration for WhatsApp and phone calls.

---

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (layout, pages, SEO)
├── components/           # Reusable UI components (Navbar, Hero, Menu, etc.)
├── data/                 # Single source of truth for business details (business.ts)
├── lib/                  # Utility functions (Tailwind merge, contact helpers)
└── public/images/        # Static assets (logo, menu photos, gallery)
```

---

## 🛠️ Customizing Data

All business information, menu items, and gallery photos are controlled from a single source of truth to make updates incredibly easy. 

Simply open `data/business.ts` to update:
- Phone & WhatsApp numbers
- Menu items and pricing
- Customer reviews
- Business hours

---

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push this code to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel will automatically build and deploy your site, providing a live URL instantly.

### Before you deploy:
- Update `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your actual production domain.
- Replace placeholder images in `public/images/` with actual restaurant photography.

---

## 💻 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Custom self-hosted fonts (`@fontsource/fraunces` and `@fontsource/plus-jakarta-sans`)

---
*Crafted with ❤️ for Healthy & Hunger Hub.*
