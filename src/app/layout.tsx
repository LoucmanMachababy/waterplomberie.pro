import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import AccessibilityWidget from "../components/AccessibilityWidget";
import ScrollProgressBar from "../components/ScrollProgressBar";

import CookieBanner from "../components/CookieBanner";
import Header from "../components/Header";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import ModernFooter from "../components/ModernFooter";
import { ThemeProvider } from "../components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: 'Plombier Annecy ⭐ #1 Urgence 24/7 | Water Plomberie Expert',
  description: '🥇 PLOMBIER ANNECY #1 ⭐ Water Plomberie : LE plombier de référence à Annecy. Urgence 24/7, devis gratuit, intervention rapide. Plombier Annecy expert depuis 7 ans. Hamza DJAFFER.',
  keywords: 'plombier annecy, plombier annecy urgence, plombier annecy 24h, meilleur plombier annecy, plombier annecy pas cher, plombier annecy centre, plombier annecy le vieux, dépannage plomberie annecy, chauffagiste annecy, rénovation salle de bain annecy, plombier annecy avis, plombier annecy tarif, plombier annecy rapide, water plomberie annecy, hamza djaffer plombier annecy',
  authors: [{ name: 'Hamza DJAFFER' }],
  creator: 'Water Plomberie',
  publisher: 'Water Plomberie',
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.waterplomberie.pro/',
  },
  openGraph: {
    title: 'Plombier Annecy ⭐ #1 Urgence 24/7 | Water Plomberie Expert',
    description: '🥇 PLOMBIER ANNECY #1 ⭐ Water Plomberie : LE plombier de référence à Annecy. Urgence 24/7, devis gratuit, intervention rapide. Expert depuis 7 ans.',
    url: 'https://www.waterplomberie.pro/',
    type: 'website',
    images: [
      {
        url: 'https://www.waterplomberie.pro/service2.jpg',
        width: 1200,
        height: 630,
        alt: 'Water Plomberie - Plombier professionnel Annecy',
      },
    ],
    locale: 'fr_FR',
    siteName: 'Water Plomberie',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@waterplomberie',
    title: 'Plombier Annecy - Water Plomberie | Urgence 24/7',
    description: 'Plombier professionnel à Annecy : urgence 24/7, chauffage, sanitaire, rénovation. Devis gratuit.',
    images: ['https://www.waterplomberie.pro/service2.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script id="schema-localbusiness" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Plumber",
              "name": "Water Plomberie",
              "alternateName": "Water Plomberie Annecy",
              "image": [
                "https://www.waterplomberie.pro/logo.png",
                "https://www.waterplomberie.pro/service2.jpg"
              ],
              "logo": "https://www.waterplomberie.pro/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Annecy",
                "addressRegion": "Haute-Savoie",
                "postalCode": "74000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.8992",
                "longitude": "6.1294"
              },
              "telephone": "+33 7 83 16 76 13",
              "email": "watter.plomberie@gmail.com",
              "url": "https://www.waterplomberie.pro/",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Annecy"
                },
                {
                  "@type": "City",
                  "name": "Thonon-les-Bains"
                },
                {
                  "@type": "City",
                  "name": "Annemasse"
                },
                {
                  "@type": "City",
                  "name": "Cluses"
                },
                {
                  "@type": "City",
                  "name": "Rumilly"
                },
                {
                  "@type": "City",
                  "name": "La Roche-sur-Foron"
                }
              ],
              "description": "Plombier professionnel à Annecy et Haute-Savoie : urgence 24/7, chauffage, sanitaire, rénovation salle de bain. 7 ans d'expérience.",
              "founder": {
                "@type": "Person",
                "name": "Hamza DJAFFER"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceType": [
                "Plomberie d'urgence 24/7",
                "Installation sanitaire",
                "Réparation chauffage",
                "Rénovation salle de bain",
                "Dépannage plomberie"
              ],
              "priceRange": "€€",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Mohamed BEN AMAR"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Hamza a été incroyablement réactif lors de mon problème de fuite. Un vrai professionnel !"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Lucas DELACROIX"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Je recommande Water Plomberie. Leur service d'urgence m'a permis de régler une panne de chauffage en plein hiver."
                }
              ]
            }
          `}
        </Script>
      </head>
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PerformanceOptimizer />
          <ScrollProgressBar />
          <Header />
          {children}
          <AccessibilityWidget />
          <CookieBanner />
          <ModernFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
