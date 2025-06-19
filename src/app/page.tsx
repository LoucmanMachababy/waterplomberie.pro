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
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen text-gray-900">
        {/* HERO SECTION avec image de fond immersive, overlay, parallax et reveal */}
        <section ref={heroRef} className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] overflow-hidden">
          {/* Dégradé animé en fond */}
          <div className="absolute inset-0 w-full h-full z-0 animate-gradient bg-gradient-to-br from-blue-700 via-blue-400 to-cyan-300 opacity-80 blur-sm" style={{backgroundSize:'200% 200%'}} />
          {/* Image de fond avec parallax */}
          <motion.div
            style={{ y }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full z-0"
          >
            <img
              src="/service2.jpg"
              alt="Salle de bain rénovée Hero"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </motion.div>
          <HeroParticles />
          {/* Contenu Hero */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <img src="/logo.png" alt="Water Plomberie Logo" width="100" height="100" className="mx-auto rounded-full shadow-lg bg-white/80 p-2" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
            >
              {"Votre expert en plomberie".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  style={{ display: char === " " ? "inline-block" : "inline" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl mb-2 text-white/90"
            >
              Hamza DJAFFER - Service professionnel et rapide
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg mb-6 text-white/80"
            >
              Une plomberie d&apos;exception pour un confort inégalable
            </motion.p>
            {/* Bouton Devis gratuit avec effet glassmorphism et glow */}
            <motion.button
              onClick={openModal}
              variants={fadeInUp}
              className="relative inline-block px-10 py-4 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none overflow-hidden group bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white text-lg tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:border-blue-200 hover:shadow-blue-400/40"
              style={{ boxShadow: "0 0 32px 4px #3b82f6aa, 0 2px 8px #0004" }}
              whileHover={{ scale: 1.08, boxShadow: "0 0 48px 8px #3b82f6, 0 2px 8px #0004" }}
            >
              <span className="relative z-10">💧 Devis gratuit en 1 min</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 blur-xl opacity-60 animate-pulse group-hover:opacity-90 group-hover:animate-none" />
              <span className="absolute inset-0 rounded-full border-2 border-blue-300/40 group-hover:border-blue-400/80 transition" />
            </motion.button>
          </motion.div>
          {/* Appel rapide sticky sur mobile */}
          <div className="absolute top-4 right-4 z-20 block sm:hidden">
            <a href="tel:+33783167613" className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition flex items-center gap-2">
              <span className="material-icons">call</span> Appel rapide
          </a>
        </div>
          {/* Modal de contact (affiché si modalOpen) */}
          <ContactModal open={modalOpen} onClose={closeModal} />
        </section>

        {/* SERVICES */}
        <motion.section
          id="services"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-16 px-2 sm:px-4 bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Nos services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Urgence 24/7 */}
            <motion.div
              whileHover={{ scale: 1.07, rotate: 2, boxShadow: "0 8px 32px #3b82f6aa" }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl transition cursor-pointer flex flex-col items-center glass-card"
            >
              <ServiceLottieIcon type="robinet" />
              <h3 className="text-xl font-semibold mb-2 mt-4 text-blue-900">Urgence 24/7</h3>
              <p className="mb-4 text-gray-700">Intervention rapide jour et nuit pour tous vos besoins urgents.</p>
              <button
                onClick={openModal}
                aria-label="Demander un devis pour l'urgence 24/7"
                className="relative inline-block px-6 py-3 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none overflow-hidden group bg-white/30 backdrop-blur-lg border-2 border-white/40 text-blue-900 text-base tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white/50 hover:border-blue-200 hover:shadow-blue-400/40"
                style={{ boxShadow: "0 0 24px 2px #3b82f6aa, 0 2px 8px #0004" }}
              >
                <span className="relative z-10">Demander un devis</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 blur-xl opacity-40 animate-pulse group-hover:opacity-80 group-hover:animate-none" />
                <span className="absolute inset-0 rounded-full border-2 border-blue-300/40 group-hover:border-blue-400/80 transition" />
              </button>
            </motion.div>
            {/* Plomberie sanitaire */}
            <motion.div
              whileHover={{ scale: 1.07, rotate: -2, boxShadow: "0 8px 32px #3b82f6aa" }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl transition cursor-pointer flex flex-col items-center glass-card"
            >
              <ServiceLottieIcon type="outils" />
              <h3 className="text-xl font-semibold mb-2 mt-4 text-blue-900">Plomberie sanitaire</h3>
              <p className="mb-4 text-gray-700">Installation et entretien de robinetterie, WC, baignoires, douches, etc.</p>
              <button
                onClick={openModal}
                aria-label="Demander un devis pour la plomberie sanitaire"
                className="relative inline-block px-6 py-3 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none overflow-hidden group bg-white/30 backdrop-blur-lg border-2 border-white/40 text-blue-900 text-base tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white/50 hover:border-blue-200 hover:shadow-blue-400/40"
                style={{ boxShadow: "0 0 24px 2px #3b82f6aa, 0 2px 8px #0004" }}
              >
                <span className="relative z-10">Demander un devis</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 blur-xl opacity-40 animate-pulse group-hover:opacity-80 group-hover:animate-none" />
                <span className="absolute inset-0 rounded-full border-2 border-blue-300/40 group-hover:border-blue-400/80 transition" />
              </button>
            </motion.div>
            {/* Chauffage */}
            <motion.div
              whileHover={{ scale: 1.07, rotate: 1, boxShadow: "0 8px 32px #3b82f6aa" }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-xl transition cursor-pointer flex flex-col items-center glass-card"
            >
              <ServiceLottieIcon type="flamme" />
              <h3 className="text-xl font-semibold mb-2 mt-4 text-blue-900">Chauffage</h3>
              <p className="mb-4 text-gray-700">Pose et maintenance de systèmes de chauffage, radiateurs, ballons d&apos;eau chaude.</p>
              <button
                onClick={openModal}
                aria-label="Demander un devis pour le chauffage"
                className="relative inline-block px-6 py-3 rounded-full font-bold shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none overflow-hidden group bg-white/30 backdrop-blur-lg border-2 border-white/40 text-blue-900 text-base tracking-wider transition-all duration-300 hover:scale-105 hover:bg-white/50 hover:border-blue-200 hover:shadow-blue-400/40"
                style={{ boxShadow: "0 0 24px 2px #3b82f6aa, 0 2px 8px #0004" }}
              >
                <span className="relative z-10">Demander un devis</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 blur-xl opacity-40 animate-pulse group-hover:opacity-80 group-hover:animate-none" />
                <span className="absolute inset-0 rounded-full border-2 border-blue-300/40 group-hover:border-blue-400/80 transition" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* AVANT/APRÈS SLIDER (ordre corrigé et responsive améliorée) */}
        <motion.section
          id="avant-apres"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-16 px-2 sm:px-4 bg-gradient-to-r from-blue-100 to-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Avant / Après</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-center justify-center">
            {/* SLIDER SALLE DE BAIN (avant à gauche, après à droite) */}
            <div className="flex-1 text-center">
              <h4 className="font-semibold mb-2">Salle de bain</h4>
              <div className="relative mx-auto w-[90vw] max-w-[400px] h-56 md:h-64 rounded-3xl overflow-hidden shadow-2xl group bg-white/30 backdrop-blur-md border border-white/40 glass-card transition-transform duration-300 hover:scale-105">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={e => setSliderValue(Number(e.target.value))}
                  className="absolute z-10 w-full h-8 opacity-0 cursor-ew-resize"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                  aria-label="Slider avant/après salle de bain"
                />
                {/* Avant à gauche */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
                  <img src="/salledebainavant.jpeg" alt="Avant Salle de bain" className="object-cover transition-all duration-300 w-full h-full" />
                </div>
                {/* Après à droite */}
                <div className="absolute inset-0 overflow-hidden" style={{ left: `${100 - sliderValue}%`, width: `${sliderValue}%` }}>
                  <img src="/service2.jpg" alt="Après Salle de bain" className="object-cover transition-all duration-300 w-full h-full" />
                </div>
                <div className="absolute top-2 left-2 bg-white/90 px-3 py-1 rounded text-base font-bold shadow">Avant</div>
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded text-base font-bold shadow">Après</div>
                {/* Poignée glossy custom */}
                <div
                  className="absolute top-0 left-0 h-full w-8 flex flex-col items-center justify-center z-20 pointer-events-none"
                  style={{ left: `calc(${sliderValue}% - 16px)` }}
                >
                  <div className="w-8 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-white/80 rounded-full shadow-lg border-2 border-blue-300/60 flex flex-col items-center justify-center relative">
                    <div className="w-2 h-8 bg-blue-700 rounded-full my-2" />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-blue-700 bg-white/80 px-2 py-0.5 rounded-full shadow border border-blue-200 animate-pulse">Glisser</span>
                  </div>
                </div>
              </div>
            </div>
            {/* SLIDER TOILETTE (avant à gauche, après à droite) */}
            <div className="flex-1 text-center">
              <h4 className="font-semibold mb-2">Toilette</h4>
              <div className="relative mx-auto w-[90vw] max-w-[400px] h-56 md:h-64 rounded-3xl overflow-hidden shadow-2xl group bg-white/30 backdrop-blur-md border border-white/40 glass-card transition-transform duration-300 hover:scale-105">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={e => setSliderValue(Number(e.target.value))}
                  className="absolute z-10 w-full h-8 opacity-0 cursor-ew-resize"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                  aria-label="Slider avant/après toilette"
                />
                {/* Avant à gauche */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${100 - sliderValue}%` }}>
                  <img src="/AVANTTOILETTE.jpeg" alt="Avant Toilette" className="object-cover transition-all duration-300 w-full h-full" />
                </div>
                {/* Après à droite */}
                <div className="absolute inset-0 overflow-hidden" style={{ left: `${100 - sliderValue}%`, width: `${sliderValue}%` }}>
                  <img src="/aprestoilette.jpeg" alt="Après Toilette" className="object-cover transition-all duration-300 w-full h-full" />
                </div>
                <div className="absolute top-2 left-2 bg-white/90 px-3 py-1 rounded text-base font-bold shadow">Avant</div>
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded text-base font-bold shadow">Après</div>
                {/* Poignée glossy custom */}
                <div
                  className="absolute top-0 left-0 h-full w-8 flex flex-col items-center justify-center z-20 pointer-events-none"
                  style={{ left: `calc(${sliderValue}% - 16px)` }}
                >
                  <div className="w-8 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-white/80 rounded-full shadow-lg border-2 border-blue-300/60 flex flex-col items-center justify-center relative">
                    <div className="w-2 h-8 bg-blue-700 rounded-full my-2" />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-blue-700 bg-white/80 px-2 py-0.5 rounded-full shadow border border-blue-200 animate-pulse">Glisser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* À PROPOS */}
        <motion.section
          id="a-propos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-16 px-4 bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">À propos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <img src="/logo.png" alt="Hamza DJAFFER" width="80" height="80" className="mx-auto mb-4 rounded-full" />
            <h3 className="text-xl font-semibold mb-2">Hamza DJAFFER - Votre expert en plomberie</h3>
            <p className="mb-4">Plombier certifié avec plus de 7 ans d&apos;expérience. Spécialisé dans l&apos;urgence, la plomberie sanitaire et le chauffage, je m&apos;engage à offrir un service rapide et de qualité à Annecy et ses environs.</p>
            <ul className="text-left inline-block mx-auto list-disc list-inside text-gray-700">
              <li><b>Urgence dépannage 24/7 :</b> Intervention rapide jour et nuit.</li>
              <li><b>Plomberie sanitaire :</b> Installation et entretien de robinetterie, WC, baignoires, douches, etc.</li>
              <li><b>Chauffage :</b> Pose et maintenance de systèmes de chauffage, radiateurs, ballons d&apos;eau chaude.</li>
            </ul>
          </div>
        </motion.section>

        {/* AVIS CLIENTS CARROUSEL */}
        <motion.section
          id="avis"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-16 px-4 bg-gradient-to-r from-blue-100 to-white"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">Avis clients</h2>
          <div className="max-w-2xl mx-auto">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="rounded-xl shadow-lg"
            >
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                  <p className="italic mb-2 text-center">&quot;Hamza a été incroyablement réactif lors de mon problème de fuite. Un vrai professionnel !&quot;</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <span className="font-semibold">Mohamed BEN AMAR</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                  <p className="italic mb-2 text-center">&quot;Je recommande Water Plomberie. Leur service d&apos;urgence m&apos;a permis de régler une panne de chauffage en plein hiver.&quot;</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <span className="font-semibold">Lucas DELACROIX</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                  <p className="italic mb-2 text-center">&quot;Travail rapide et soigné, je recommande à 100%&quot;</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl">★★★★★</span>
                    <span className="font-semibold">Sophie MARTIN</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.section>

        {/* ZONE D'INTERVENTION */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
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
          className="py-16 px-4 bg-white"
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

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-500 text-sm">
          © 2025 Water Plomberie. Tous droits réservés.
      </footer>
    </div>
    </AnimatePresence>
  );
}