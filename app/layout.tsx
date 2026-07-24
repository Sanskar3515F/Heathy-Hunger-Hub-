import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";
import MobileActionBar from "@/components/MobileActionBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

const siteUrl = "https://healthyhungerhub.com";

export const viewport: Viewport = {
  themeColor: "#1f4d3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Healthy & Hunger Hub — 100% Pure Veg | Rasayani, Mohopada",
    template: "%s | Healthy & Hunger Hub",
  },
  description:
    "Healthy & Hunger Hub in Rasayani (Sebi Rd, Navin Posari) is a 100% Pure Veg restaurant serving protein oats bowls, sprouts, smoothies, maggi, burgers, and sandwiches. Explore our menu & get directions.",
  keywords: [
    "Healthy & Hunger Hub",
    "Pure Veg Rasayani",
    "100% Pure Veg Mohopada",
    "Mohopada restaurant",
    "healthy food Rasayani",
    "fast food Mohopada",
    "Sebi Road Rasayani eatery",
    "protein shake Rasayani",
  ],
  authors: [{ name: "Healthy & Hunger Hub" }],
  creator: "Healthy & Hunger Hub",
  publisher: "Healthy & Hunger Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Healthy & Hunger Hub — 100% Pure Veg | Rasayani, Mohopada",
    description:
      "Healthy Choices. Hungry Cravings. One Hub. 100% Pure Veg fresh food & quick bites in Rasayani, Mohopada.",
    url: siteUrl,
    siteName: "Healthy & Hunger Hub",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "Healthy & Hunger Hub — 100% Pure Veg Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy & Hunger Hub — 100% Pure Veg | Rasayani",
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
    servesCuisine: "Vegetarian, Indian Fast Food, Healthy Food",
    priceRange: "₹₹",
    telephone: business.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: "Rasayani",
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: "IN",
    },
    url: siteUrl,
    hasMap: business.google.mapsUrl,
    image: `${siteUrl}/images/hero/hero.png`,
    isAcceptingReservations: "True",
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
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
