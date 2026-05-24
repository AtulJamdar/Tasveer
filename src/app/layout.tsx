import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tasveer Photography | Premium Cinematic Wedding Photographer in Pune",
  description: "Award-winning Pune wedding photography studio capturing editorial, emotional, and luxury cinematic Indian weddings. Check 2026/2027 calendar availability.",
  keywords: ["wedding photography pune", "cinematic wedding films pune", "luxury wedding photographer", "tasveer photography", "best candid photographer pune"],
  openGraph: {
    title: "Tasveer Photography | Premium Cinematic Wedding Photographer in Pune",
    description: "Award-winning Pune wedding photography studio capturing editorial, emotional, and luxury cinematic Indian weddings. Check 2026/2027 calendar availability.",
    url: "https://tasveerweddingphotography.com",
    siteName: "Tasveer Photography",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Tasveer Photography — Premium Indian Wedding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://tasveerweddingphotography.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local SEO Structured Data for Pune Photography Studio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tasveer Photography",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
    "@id": "https://tasveerweddingphotography.com/#pune-studio",
    "url": "https://tasveerweddingphotography.com",
    "telephone": "+919876543210",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Koregaon Park, Lane 6",
      "addressLocality": "Pune",
      "postalCode": "411001",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5362,
      "longitude": 73.8940
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/tasveer_photography_pune",
      "https://www.facebook.com/tasveer_photography_pune"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} antialiased bg-black text-gold-100 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
