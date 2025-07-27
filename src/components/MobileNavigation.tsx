"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Accueil", icon: "🏠" },
  { href: "/#services", label: "Services", icon: "🔧" },
  { href: "/services", label: "Tous nos services", icon: "📋" },
  { href: "/#avant-apres", label: "Avant/Après", icon: "🔄" },
  { href: "/#avis", label: "Avis clients", icon: "⭐" },
  { href: "/faq", label: "FAQ", icon: "❓" },
  { href: "/#contact", label: "Contact", icon: "📞" },
  { href: "/urgence", label: "Urgence 24/7", icon: "🚨" }
];

const cityPages = [
  { href: "/plombier-annecy", label: "Plombier Annecy", icon: "📍" },
  { href: "/plombier-thonon", label: "Plombier Thonon", icon: "📍" },
  { href: "/plombier-annemasse", label: "Plombier Annemasse", icon: "📍" }
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Bouton hamburger */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 md:hidden bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label="Menu de navigation"
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.div>
      </button>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Menu content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <img src="/logo.png" alt="Water Plomberie" className="w-12 h-12 rounded-full bg-white/20 p-1" />
                  <div>
                    <h2 className="text-xl font-bold">Water Plomberie</h2>
                    <p className="text-blue-100 text-sm">Plombier Annecy</p>
                  </div>
                </div>
                <div className="text-sm text-blue-100">
                  <p>📞 07 83 16 76 13</p>
                  <p>🚨 Urgence 24/7</p>
                </div>
              </div>

              {/* Navigation principale */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                        {item.label === "Urgence 24/7" && (
                          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            URGENT
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Villes d'intervention */}
              <div className="p-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Nos Villes</h3>
                <nav className="space-y-2">
                  {cityPages.map((city, index) => (
                    <motion.div
                      key={city.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navigationItems.length + index) * 0.05 }}
                    >
                      <Link
                        href={city.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 hover:text-green-700 transition-all group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          {city.icon}
                        </span>
                        <span className="font-medium">{city.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Actions rapides */}
              <div className="p-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+33783167613"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 bg-red-500 text-white p-4 rounded-lg font-bold hover:bg-red-600 transition-all"
                  >
                    <span className="text-xl">📞</span>
                    Appeler maintenant
                  </a>
                  <a
                    href="https://wa.me/33783167613?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20plombier%20%C3%A0%20Annecy%20!"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-lg font-bold hover:bg-green-600 transition-all"
                  >
                    <span className="text-xl">💬</span>
                    WhatsApp
                  </a>
                  <Link
                    href="/#contact"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white p-4 rounded-lg font-bold hover:bg-blue-600 transition-all"
                  >
                    <span className="text-xl">📧</span>
                    Devis gratuit
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-center text-sm text-gray-600">
                  <p className="font-semibold text-blue-800 mb-1">Water Plomberie</p>
                  <p>Hamza DJAFFER</p>
                  <p>7 ans d'expérience</p>
                  <p className="mt-2 text-xs">© 2025 Tous droits réservés</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
