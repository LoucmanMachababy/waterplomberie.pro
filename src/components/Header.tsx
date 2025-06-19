"use client";
import Link from "next/link";
import { useState } from "react";

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline mr-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
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
  );
} 