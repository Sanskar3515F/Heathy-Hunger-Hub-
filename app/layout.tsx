import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/900.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { business } from "@/data/business";
import MobileActionBar from "@/components/MobileActionBar";

const siteUrl = "https://healthyhungerhub.example"; // TODO: replace with the real production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Healthy & Hunger Hub — Rasayani, Mohopada | Healthy Meets Hungry",
    template: "%s | Healthy & Hunger Hub",
  },
  description:
    "Healthy & Hunger Hub in Rasayani (Sebi Rd, Navin Posari, Mohopada) serves fresh healthy bowls and hearty, cravable comfort food under one roof. See our menu, photos, and get directions.",
  keywords: [
    "Healthy & Hunger Hub",
    "Rasayani food",
    "Mohopada restaurant",
    "healthy food Rasayani",
    "fast food Mohopada",
    "Navi Mumbai eatery",
    "Sebi Road Rasayani",
  ],
  openGraph: {
    title: "Healthy & Hunger Hub — Rasayani, Mohopada",
    description:
      "Healthy Choices. Hungry Cravings. One Hub. Fresh, tasty food made for every craving — in Rasayani, Mohopada.",
    url: siteUrl,
    siteName: "Healthy & Hunger Hub",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.png", // TODO: replace with a real OG image (1200x630) once photos are added
        width: 1200,
        height: 630,
        alt: "Healthy & Hunger Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy & Hunger Hub — Rasayani, Mohopada",
    description: "Healthy Choices. Hungry Cravings. One Hub.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    servesCuisine: "Indian, Fast Food, Healthy Food",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: "Rasayani",
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: "IN",
    },
    url: siteUrl,
    // TODO: add "telephone" once the phone number is verified
    // TODO: add "aggregateRating" once real rating/review counts are verified
    // TODO: add "image" entries once real photos are added to public/images/
    hasMap: business.google.mapsUrl,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
