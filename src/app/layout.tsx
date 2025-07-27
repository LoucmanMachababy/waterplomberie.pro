import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import AccessibilityWidget from "../components/AccessibilityWidget";
import ScrollProgressBar from "../components/ScrollProgressBar";

import UrgenceStickyButton from "../components/UrgenceStickyButton";
import CookieBanner from "../components/CookieBanner";
import Header from "../components/Header";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Plombier Annecy ⭐ #1 Urgence 24/7 | Water Plomberie Expert',
  description: '🥇 PLOMBIER ANNECY #1 ⭐ Water Plomberie : LE plombier de référence à Annecy. Urgence 24/7, devis gratuit, intervention rapide. Plombier Annecy expert depuis 7 ans. Hamza DJAFFER.',
  keywords: 'plombier annecy, plombier annecy urgence, plombier annecy 24h, meilleur plombier annecy, plombier annecy pas cher, plombier annecy centre, plombier annecy le vieux, dépannage plomberie annecy, chauffagiste annecy, rénovation salle de bain annecy, plombier annecy avis, plombier annecy tarif, plombier annecy rapide, water plomberie annecy, hamza djaffer plombier annecy',
  authors: [{ name: 'Hamza DJAFFER' }],
  creator: 'Water Plomberie',
  publisher: 'Water Plomberie',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceOptimizer />
        <ScrollProgressBar />
        <Header />
        {children}
        <AccessibilityWidget />
        {/* Bouton WhatsApp flottant */}
        <a
          href="https://wa.me/33783167613?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20plombier%20%C3%A0%20Annecy%20!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all animate-bounce"
          aria-label="Contact WhatsApp Water Plomberie"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.93L0 24l6.24-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.24-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86 1.08.16.18.32.2.6.07.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.62-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1.01-1 2.47s1.02 2.87 1.16 3.07c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
          </svg>
        </a>
        <UrgenceStickyButton />
        <footer className="py-8 text-center text-gray-500 text-sm">
          © 2025 Water Plomberie. Tous droits réservés. |
          <a href="/mentions-legales" className="text-blue-700 hover:underline mx-2">Mentions légales</a> |
          <a href="/confidentialite" className="text-blue-700 hover:underline mx-2">Confidentialité</a>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
