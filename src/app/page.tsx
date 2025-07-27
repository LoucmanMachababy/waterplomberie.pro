"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error swiper types are not compatible with Next.js build
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState, useRef, useCallback } from "react";
import HeroParticles from "../components/HeroParticles";
import ContactModal from "../components/ContactModal";
import ServiceLottieIcon from "../components/ServiceLottieIcon";
import TestimonialsWithPhotos from "../components/TestimonialsWithPhotos";
import NewsletterSignup from "../components/NewsletterSignup";
import TrustElements from "../components/TrustElements";
import MobileNavigation from "../components/MobileNavigation";
import ModernHeroSection from "../components/ModernHeroSection";
import ModernServiceCard from "../components/ModernServiceCard";
import ModernBeforeAfter from "../components/ModernBeforeAfter";
import ModernFooter from "../components/ModernFooter";
import FloatingActionButtons from "../components/FloatingActionButtons";
import PlombierAnnecySEO from "../components/PlombierAnnecySEO";
import PlombierAnnecySchema from "../components/PlombierAnnecySchema";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  // Pour le slider avant/après
  const [sliderValue, setSliderValue] = useState(50);
  const heroRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  // Parallax effet sur le Hero
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], ["0px", "60px"]);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-gray-900 px-2 sm:px-0">
        <PlombierAnnecySchema />
        <MobileNavigation />
        {/* HERO SECTION MODERNE */}
        <ModernHeroSection onContactClick={openModal} />

        {/* Modal de contact */}
        <ContactModal open={modalOpen} onClose={closeModal} />

        {/* SECTION SEO PLOMBIER ANNECY */}
        <PlombierAnnecySEO />

        {/* SERVICES MODERNES */}
        <section id="services" className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Nos Services
                <span className="block text-2xl md:text-3xl text-cyan-600 font-normal mt-2">
                  Excellence & Professionnalisme
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Water Plomberie vous accompagne dans tous vos projets de plomberie,
                du dépannage d'urgence à la rénovation complète
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ModernServiceCard
                icon="🚨"
                title="Urgence 24/7"
                description="Intervention rapide jour et nuit pour tous vos besoins urgents de plomberie à Annecy et environs."
                features={[
                  "Intervention en moins de 30 minutes",
                  "Disponible 24h/24 et 7j/7",
                  "Diagnostic gratuit",
                  "Réparation immédiate si possible"
                ]}
                color="red"
                onContactClick={openModal}
              />

              <ModernServiceCard
                icon="🚿"
                title="Plomberie Sanitaire"
                description="Installation et entretien de robinetterie, WC, baignoires, douches et tous équipements sanitaires."
                features={[
                  "Installation WC et lavabos",
                  "Robinetterie moderne",
                  "Douche à l'italienne",
                  "Rénovation salle de bain"
                ]}
                color="blue"
                onContactClick={openModal}
              />

              <ModernServiceCard
                icon="🔥"
                title="Chauffage"
                description="Pose et maintenance de systèmes de chauffage, radiateurs, chaudières et ballons d'eau chaude."
                features={[
                  "Installation chaudières",
                  "Entretien annuel",
                  "Réparation radiateurs",
                  "Ballons d'eau chaude"
                ]}
                color="orange"
                onContactClick={openModal}
              />
            </div>
          </div>
        </section>

        {/* AVANT/APRÈS MODERNE */}
        <ModernBeforeAfter />

        {/* À PROPOS */}
        <motion.section
          id="a-propos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-10 px-2 sm:px-4 bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">À propos de Water Plomberie</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <img src="/logo.png" alt="Hamza DJAFFER - Plombier Annecy" width="80" height="80" className="mx-auto mb-4 rounded-full" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Hamza DJAFFER - Votre plombier de confiance à Annecy</h3>
              <p className="text-lg mb-6 text-gray-700">
                Plombier certifié avec plus de 7 ans d&apos;expérience en Haute-Savoie. Spécialisé dans l&apos;urgence,
                la plomberie sanitaire et le chauffage, je m&apos;engage à offrir un service rapide et de qualité
                à Annecy et dans toute la région.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-blue-800">🚨 Nos Services d&apos;Urgence</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Dépannage 24h/24 et 7j/7</strong> à Annecy et environs</li>
                  <li>✓ <strong>Intervention rapide</strong> en moins de 30 minutes</li>
                  <li>✓ <strong>Réparation de fuites</strong> d&apos;eau urgentes</li>
                  <li>✓ <strong>Débouchage canalisations</strong> et évacuations</li>
                  <li>✓ <strong>Dépannage chauffage</strong> en urgence</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-orange-800">🔧 Expertise Technique</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>Plomberie sanitaire :</strong> WC, robinetterie, douches</li>
                  <li>✓ <strong>Chauffage :</strong> chaudières, radiateurs, ballons</li>
                  <li>✓ <strong>Rénovation :</strong> salles de bain complètes</li>
                  <li>✓ <strong>Installation :</strong> équipements neufs</li>
                  <li>✓ <strong>Entretien :</strong> maintenance préventive</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-blue-800 text-center">
                Pourquoi choisir Water Plomberie à Annecy ?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="font-semibold text-blue-700">Intervention Express</p>
                  <p className="text-sm text-gray-600">Déplacement rapide sur Annecy</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💰</div>
                  <p className="font-semibold text-blue-700">Devis Gratuit</p>
                  <p className="text-sm text-gray-600">Estimation sans engagement</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🛡️</div>
                  <p className="font-semibold text-blue-700">Garantie Qualité</p>
                  <p className="text-sm text-gray-600">Travaux garantis 2 ans</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ÉLÉMENTS DE CONFIANCE */}
        <TrustElements />

        {/* AVIS CLIENTS AVEC PHOTOS */}
        <motion.section
          id="avis"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-16 px-2 sm:px-4 bg-gradient-to-r from-blue-100 to-white"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Ce que disent nos clients</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits à Annecy et dans toute la Haute-Savoie
          </p>
          <TestimonialsWithPhotos />
        </motion.section>

        {/* ZONE D'INTERVENTION */}
        <section className="py-10 px-2 sm:px-4 bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Zone d&apos;intervention en Haute-Savoie (74)</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Carte SVG Haute-Savoie stylisée */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl border border-blue-200 p-6">
                <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Forme simplifiée de la Haute-Savoie */}
                  <path d="M60,30 Q30,80 60,180 Q100,240 200,220 Q240,180 210,120 Q250,80 180,40 Q120,10 60,30 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="3" />
                  {/* Annecy */}
                  <circle cx="120" cy="110" r="13" fill="#2563eb" stroke="#fff" strokeWidth="3" />
                  <text x="120" y="108" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">Annecy</text>
                  {/* Thonon-les-Bains */}
                  <circle cx="80" cy="60" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
                  <text x="80" y="55" textAnchor="middle" fontSize="11" fill="#2563eb">Thonon</text>
                  {/* Annemasse */}
                  <circle cx="200" cy="70" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
                  <text x="200" y="65" textAnchor="middle" fontSize="11" fill="#2563eb">Annemasse</text>
                  {/* Cluses */}
                  <circle cx="180" cy="150" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
                  <text x="180" y="145" textAnchor="middle" fontSize="11" fill="#2563eb">Cluses</text>
                  {/* Rumilly */}
                  <circle cx="90" cy="180" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
                  <text x="90" y="195" textAnchor="middle" fontSize="11" fill="#2563eb">Rumilly</text>
                  {/* La Roche-sur-Foron */}
                  <circle cx="160" cy="110" r="7" fill="#38bdf8" stroke="#fff" strokeWidth="2" />
                  <text x="160" y="105" textAnchor="middle" fontSize="10" fill="#2563eb">La Roche</text>
                </svg>
              </div>
            </div>
            {/* Texte SEO local */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-gray-700 mb-4">Intervention rapide en Haute-Savoie (74) : Annecy, Thonon-les-Bains, Annemasse, Cluses, Rumilly, La Roche-sur-Foron, Sallanches, Bonneville, Seynod, Cran-Gevrier, Pringy, et toutes les communes alentours.</p>
              <ul className="flex flex-wrap gap-3 justify-center md:justify-start text-blue-700 font-semibold text-base">
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Annecy</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Thonon-les-Bains</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Annemasse</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Cluses</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Rumilly</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">La Roche-sur-Foron</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Sallanches</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Bonneville</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Seynod</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Cran-Gevrier</li>
                <li className="bg-blue-100 rounded-full px-4 py-1 shadow">Pringy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-10 px-2 sm:px-4 bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Contactez-nous pour un devis rapide</h2>
          {/* Encart premium devis gratuit */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-4 bg-white/40 backdrop-blur-md border border-blue-200 rounded-2xl shadow-lg px-6 py-4 justify-center">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36" className="text-blue-600"><circle cx="18" cy="18" r="18" fill="#38bdf8" /><path d="M12 18l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div className="text-left">
                <div className="font-bold text-blue-800 text-lg">Devis gratuit, réponse en 1h</div>
                <div className="text-blue-700 text-sm">Recevez une estimation rapide et sans engagement.</div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto bg-white/40 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-200">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Votre nom" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition bg-white/70" required />
              <input type="email" placeholder="Votre email" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition bg-white/70" required />
              <input type="tel" placeholder="Votre téléphone" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition bg-white/70" />
              <textarea placeholder="Votre message" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition bg-white/70" rows={4} required />
              <input type="file" className="p-3 rounded border border-gray-300 bg-white/70" />
              <button type="submit" className="relative inline-block px-8 py-3 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-400 text-white text-lg tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-blue-400/40 animate-glow">
                <span className="relative z-10">Envoyer</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 blur-xl opacity-40 animate-pulse group-hover:opacity-80 group-hover:animate-none" />
                <span className="absolute inset-0 rounded-full border-2 border-blue-300/40 group-hover:border-blue-400/80 transition" />
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="font-semibold">Hamza DJAFFER</p>
              <p>Téléphone : <a href="tel:+33783167613" className="text-blue-700 font-bold hover:underline">+33 7 83 16 76 13</a></p>
              <p>Email : <a href="mailto:watter.plomberie@gmail.com" className="text-blue-700 font-bold hover:underline">watter.plomberie@gmail.com</a></p>
            </div>
          </div>
        </motion.section>

        {/* NEWSLETTER */}
        <section className="py-16 px-2 sm:px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto">
            <NewsletterSignup />
          </div>
        </section>

        {/* FOOTER MODERNE */}
        <ModernFooter />

        {/* BOUTONS FLOTTANTS */}
        <FloatingActionButtons onContactClick={openModal} />
    </div>
    </AnimatePresence>
  );
}