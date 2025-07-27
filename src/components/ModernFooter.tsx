"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  // Positions fixes pour les particules
  const particlePositions = [
    { left: 5, top: 10 }, { left: 15, top: 30 }, { left: 25, top: 60 },
    { left: 35, top: 20 }, { left: 45, top: 80 }, { left: 55, top: 40 },
    { left: 65, top: 70 }, { left: 75, top: 15 }, { left: 85, top: 50 },
    { left: 95, top: 85 }, { left: 10, top: 75 }, { left: 30, top: 45 },
    { left: 50, top: 25 }, { left: 70, top: 90 }, { left: 90, top: 35 }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Urgence 24/7", href: "/urgence" },
        { label: "Plomberie Sanitaire", href: "/services/sanitaire" },
        { label: "Chauffage", href: "/services/chauffage" },
        { label: "Rénovation", href: "/services" }
      ]
    },
    {
      title: "Zones d'intervention",
      links: [
        { label: "Plombier Annecy", href: "/plombier-annecy" },
        { label: "Plombier Thonon", href: "/plombier-thonon" },
        { label: "Plombier Annemasse", href: "/plombier-annemasse" },
        { label: "Toute la Haute-Savoie", href: "/#zone-intervention" }
      ]
    },
    {
      title: "Informations",
      links: [
        { label: "À propos", href: "/#a-propos" },
        { label: "FAQ", href: "/faq" },
        { label: "Avis clients", href: "/#avis" },
        { label: "Contact", href: "/#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: "📧", label: "Email", href: "mailto:watter.plomberie@gmail.com" },
    { icon: "📞", label: "Téléphone", href: "tel:+33783167613" },
    { icon: "💬", label: "WhatsApp", href: "https://wa.me/33783167613" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
      {/* Effet de particules en arrière-plan */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Section principale */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Informations entreprise */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Water Plomberie Logo" 
                  className="w-12 h-12 rounded-full bg-white/10 p-1"
                />
                <div>
                  <h3 className="text-2xl font-bold">Water Plomberie</h3>
                  <p className="text-blue-200">Votre expert en plomberie</p>
                </div>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Hamza DJAFFER, plombier professionnel avec 7 ans d'expérience. 
                Service de qualité à Annecy et dans toute la Haute-Savoie.
              </p>

              {/* Certifications */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <span className="text-green-400">✓</span>
                  Assurance décennale
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <span className="text-green-400">✓</span>
                  Artisan certifié
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <span className="text-green-400">✓</span>
                  Garantie 2 ans
                </div>
              </div>
            </motion.div>

            {/* Sections de liens */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-blue-200 hover:text-white transition-colors duration-200 link-hover text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact et réseaux sociaux */}
          <motion.div
            className="mt-12 pt-8 border-t border-blue-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Informations de contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Contact Direct
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="text-white font-medium">07 83 16 76 13</p>
                      <p className="text-blue-200 text-sm">Urgence 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="text-white font-medium">watter.plomberie@gmail.com</p>
                      <p className="text-blue-200 text-sm">Devis gratuit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="text-white font-medium">Annecy, Haute-Savoie</p>
                      <p className="text-blue-200 text-sm">Intervention rapide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Actions Rapides
                </h4>
                <div className="space-y-3">
                  <motion.a
                    href="tel:+33783167613"
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🚨 Appeler maintenant
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/33783167613?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20plombier%20!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💬 WhatsApp
                  </motion.a>
                  
                  <motion.a
                    href="/#contact"
                    className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📧 Devis gratuit
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <div className="bg-blue-950/50 backdrop-blur-sm border-t border-blue-700/30">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-blue-200 text-sm">
                © {currentYear} Water Plomberie - Hamza DJAFFER. Tous droits réservés.
              </div>
              
              <div className="flex gap-4 text-sm">
                <Link href="/mentions-legales" className="text-blue-200 hover:text-white transition-colors">
                  Mentions légales
                </Link>
                <Link href="/confidentialite" className="text-blue-200 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
