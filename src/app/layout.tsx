import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import AccessibilityWidget from "../components/AccessibilityWidget";
import ScrollProgressBar from "../components/ScrollProgressBar";
import Link from "next/link";
import UrgenceStickyButton from "../components/UrgenceStickyButton";
import CookieBanner from "../components/CookieBanner";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Plombier Annecy - Water Plomberie | Urgence 24/7, Chauffage, Sanitaire',
  description: 'Plombier à Annecy : dépannage urgence 24/7, installation et entretien sanitaire, chauffage. Service rapide, professionnel et de qualité. Contactez Hamza DJAFFER !',
  keywords: 'plombier annecy, urgence plomberie annecy, chauffage annecy, sanitaire annecy, water plomberie, hamza djaffer',
  openGraph: {
    title: 'Plombier Annecy - Water Plomberie',
    description: 'Plombier à Annecy : urgence 24/7, chauffage, sanitaire, service rapide et professionnel.',
    url: 'https://www.waterplomberie.pro/',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 400,
        alt: 'Water Plomberie Annecy',
      },
    ],
    locale: 'fr_FR',
    siteName: 'Water Plomberie',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@waterplomberie',
    title: 'Plombier Annecy - Water Plomberie',
    description: 'Plombier à Annecy : urgence 24/7, chauffage, sanitaire, service rapide et professionnel.',
    images: ['/logo.png'],
  },
};

// Ajout de l'icône alerte
const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14z" />
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <Script id="schema-localbusiness" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Plumber",
              "name": "Water Plomberie",
              "image": "/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Annecy",
                "addressCountry": "FR"
              },
              "telephone": "+33 7 83 16 76 13",
              "email": "watter.plomberie@gmail.com",
              "url": "https://www.waterplomberie.pro/",
              "areaServed": "Annecy",
              "description": "Plombier à Annecy : urgence 24/7, chauffage, sanitaire, service rapide et professionnel.",
              "founder": "Hamza DJAFFER"
            }
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgressBar />
        <nav className="sticky top-0 z-30 w-full bg-blue-700/90 backdrop-blur-md shadow-md flex items-center justify-between px-4 sm:px-12 py-3">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" width="40" height="40" className="rounded-full bg-white/80 p-1" />
            <span className="text-white font-bold text-lg hidden sm:inline">WATER</span>
          </Link>
          {/* Menu desktop */}
          <ul className="hidden sm:flex gap-3 sm:gap-6 text-white font-semibold text-base">
            <li><Link href="/" className="hover:text-blue-200 transition">Accueil</Link></li>
            <li><Link href="/#services" className="hover:text-blue-200 transition">Services</Link></li>
            <li><Link href="/#avant-apres" className="hover:text-blue-200 transition">Avant/Après</Link></li>
            <li><Link href="/#a-propos" className="hover:text-blue-200 transition">À propos</Link></li>
            <li><Link href="/#avis" className="hover:text-blue-200 transition">Avis</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-200 transition">Contact</Link></li>
            <li><Link href="/urgence" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full shadow transition flex items-center gap-1"><AlertIcon />Urgence</Link></li>
          </ul>
          {/* Burger menu mobile */}
          <button
            className="sm:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Menu mobile overlay */}
          {menuOpen && (
            <div className="fixed inset-0 z-40 bg-black/60 flex flex-col items-end">
              <div className="w-3/4 max-w-xs bg-blue-700 h-full p-8 flex flex-col gap-6 text-white font-semibold text-lg shadow-2xl animate-slide-in-right">
                <button
                  className="self-end mb-4 text-2xl"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  ×
                </button>
                <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition">Accueil</Link>
                <Link href="/#services" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition">Services</Link>
                <Link href="/#avant-apres" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition">Avant/Après</Link>
                <Link href="/#a-propos" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition">À propos</Link>
                <Link href="/#avis" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition">Avis</Link>
                <Link href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition">Contact</Link>
                <Link href="/urgence" onClick={() => setMenuOpen(false)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full shadow transition flex items-center gap-1"><AlertIcon />Urgence</Link>
              </div>
            </div>
          )}
        </nav>
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
