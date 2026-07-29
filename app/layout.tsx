import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";
import MobileActionBar from "@/components/MobileActionBar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

const siteUrl = "https://heathy-hunger-hub-eh1k.vercel.app";

export const viewport: Viewport = {
  themeColor: "#1f4d3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Healthy & Hunger Hub | 100% Pure Veg Restaurant in Rasayani, Mohopada",
    template: "%s | Healthy & Hunger Hub",
  },
  description:
    "Healthy & Hunger Hub is a 100% Pure Veg restaurant in Rasayani (Sebi Rd, Navin Posari, Maharashtra 410222). We serve high-protein oats bowls, sprouts, smoothies, protein shakes, maggi, burgers & sandwiches. Open Mon–Sat 8 AM–11 PM & Sun 5 PM–11 PM. Call +91 83081 21672.",
  keywords: [
    "Healthy & Hunger Hub",
    "healthy food near me",
    "best healthy food near me",
    "healthy restaurants near me",
    "top healthy restaurants near me",
    "pure veg restaurant Rasayani",
    "100% pure veg Mohopada",
    "veg restaurant Rasayani",
    "Mohopada restaurant",
    "healthy food Rasayani",
    "best food in Rasayani",
    "Sebi Road Rasayani eatery",
    "protein shake Rasayani",
    "protein oats bowl near me",
    "best vegetarian food near me",
    "pure veg restaurants near me",
    "healthy food options near me",
    "protein bowls near me",
    "healthy breakfast near me",
    "healthy snacks near me",
    "Rasayani food delivery",
    "Navin Posari restaurants",
    "where to eat in Rasayani",
    "healthy cafe near me",
    "diet food near me",
    "high protein food near me",
    "smoothies near me",
    "best cafes in Mohopada",
    "Maharashtra 410222 restaurant",
    "chia seeds bowl near me",
    "sprouts near me",
    "oats breakfast near me",
    "veg burger near me",
    "veg sandwich Rasayani",
    "healthy food Navin Posari",
    "food near Rasayani railway station",
  ],
  authors: [{ name: "Healthy & Hunger Hub", url: siteUrl }],
  creator: "Healthy & Hunger Hub",
  publisher: "Healthy & Hunger Hub",
  category: "Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Healthy & Hunger Hub | 100% Pure Veg Restaurant in Rasayani",
    description:
      "100% Pure Veg restaurant in Rasayani serving protein oats, sprouts, smoothies, shakes & more. Open daily. Call +91 83081 21672.",
    url: siteUrl,
    siteName: "Healthy & Hunger Hub",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "Healthy & Hunger Hub — 100% Pure Veg Restaurant in Rasayani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy & Hunger Hub | 100% Pure Veg | Rasayani, Maharashtra",
    description:
      "High-protein food, pure veg meals & healthy snacks in Rasayani. Open Mon–Sat 8 AM–11 PM & Sun 5 PM–11 PM.",
    images: ["/images/hero/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "2dd56a2443edaadf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── Schema 1: Restaurant (Local Business) ──────────────────────────────────
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness", "FoodEstablishment"],
    "@id": `${siteUrl}/#restaurant`,
    name: business.name,
    description:
      "100% Pure Veg restaurant in Rasayani serving protein oats bowls, sprouts, smoothies, protein shakes, chia seeds bowls, burgers, sandwiches, maggi and more.",
    servesCuisine: ["Vegetarian", "Indian", "Healthy Food", "Protein Bowls", "Snacks"],
    priceRange: "₹",
    telephone: business.contact.phoneDisplay,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo.png`,
    image: `${siteUrl}/images/hero/hero.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: "Rasayani",
      addressRegion: "Maharashtra",
      postalCode: business.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.9015",
      longitude: "73.1782",
    },
    hasMap: business.google.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "17:00",
        closes: "23:00",
      },
    ],
    sameAs: ["https://www.instagram.com/healt.hyhungerhub"],
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    areaServed: ["Rasayani", "Navin Posari", "Mohopada", "Maharashtra"],
  };

  // ── Schema 2: Menu ─────────────────────────────────────────────────────────
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteUrl}/#menu`,
    name: "Healthy & Hunger Hub Menu",
    description: "Full vegetarian menu including healthy protein bowls and snacks.",
    url: `${siteUrl}/#menu`,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Healthy Section",
        description: "High-protein and nutritious food options",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Peanut Butter Banana Oats", description: "Oats with peanut butter, banana, honey, watermelon seeds", offers: { "@type": "Offer", price: "70", priceCurrency: "INR" } },
          { "@type": "MenuItem", name: "Protein Powder Bread", description: "Brown bread with whey protein", offers: { "@type": "Offer", price: "65", priceCurrency: "INR" } },
          { "@type": "MenuItem", name: "Special Sprouts", description: "Fresh protein-rich sprouts bowl", offers: { "@type": "Offer", price: "50", priceCurrency: "INR" } },
          { "@type": "MenuItem", name: "Dry Fruits Whey Protein Shake", description: "Whey protein shake with dry fruits", offers: { "@type": "Offer", price: "120", priceCurrency: "INR" } },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Snacks & Bites",
        description: "Delicious pure veg snacks and fast food",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Veg Sandwich", offers: { "@type": "Offer", price: "50", priceCurrency: "INR" } },
          { "@type": "MenuItem", name: "Veg Burger", offers: { "@type": "Offer", price: "60", priceCurrency: "INR" } },
          { "@type": "MenuItem", name: "Maggi", offers: { "@type": "Offer", price: "40", priceCurrency: "INR" } },
        ],
      },
    ],
  };

  // ── Schema 3: FAQ ──────────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Healthy & Hunger Hub located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthy & Hunger Hub is located on Sebi Road, Rasayani, Navin Posari, Maharashtra 410222, near Mohopada.",
        },
      },
      {
        "@type": "Question",
        name: "What are the opening hours of Healthy & Hunger Hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are open Monday to Saturday from 8:00 AM to 11:00 PM, and on Sundays from 5:00 PM to 11:00 PM.",
        },
      },
      {
        "@type": "Question",
        name: "Is Healthy & Hunger Hub 100% vegetarian?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Healthy & Hunger Hub is a 100% Pure Veg restaurant. We serve no meat, poultry, or seafood.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of food does Healthy & Hunger Hub serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve high-protein healthy food like oats bowls, protein shakes, sprouts, chia seeds bowls, and snacks like sandwiches, burgers, maggi, momos, and more.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Healthy & Hunger Hub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call or WhatsApp us at +91 83081 21672. You can also find us on Instagram at @healt.hyhungerhub.",
        },
      },
    ],
  };

  // ── Schema 4: Breadcrumb ───────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu",
        item: `${siteUrl}/#menu`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: `${siteUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Location",
        item: `${siteUrl}/#location`,
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Rasayani, Navin Posari, Maharashtra" />
        <meta name="geo.position" content="18.9015;73.1782" />
        <meta name="ICBM" content="18.9015, 73.1782" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className="antialiased">
        {children}
        <MobileActionBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

