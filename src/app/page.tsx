"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import TestimonialsWithPhotos from "../components/TestimonialsWithPhotos";
import NewsletterSignup from "../components/NewsletterSignup";
import TrustElements from "../components/TrustElements";
import ModernHeroSection from "../components/ModernHeroSection";
import ModernServiceCard from "../components/ModernServiceCard";
import ModernBeforeAfter from "../components/ModernBeforeAfter";
// import ModernFooter from "../components/ModernFooter"; // Handled by layout
import FloatingActionButtons from "../components/FloatingActionButtons";
import PlombierAnnecySEO from "../components/PlombierAnnecySEO";
import PlombierAnnecySchema from "../components/PlombierAnnecySchema";
import { AlertTriangle, Bath, Flame, Globe, MapPin, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 overflow-x-hidden">
        <PlombierAnnecySchema />

        {/* HERO SECTION */}
        <ModernHeroSection onContactClick={openModal} />

        <ContactModal open={modalOpen} onClose={closeModal} />

        {/* SERVICES SECTION */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                Services <span className="text-blue-600">Premium</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                Une expertise technique rigoureuse associée à un service client irréprochable.
                Nous intervenons sur tous vos projets avec la même exigence de qualité.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <ModernServiceCard
                icon={AlertTriangle}
                title="Urgence 24/7"
                description="Réactivité absolue pour stopper vos fuites et pannes en moins de 30 minutes à Annecy."
                features={[
                  "Intervention Flash < 30min",
                  "Disponibilité nuit & weekend",
                  "Diagnostic expert immédiat",
                  "Sécurisation des lieux"
                ]}
                color="red"
                onContactClick={openModal}
              />

              <ModernServiceCard
                icon={Bath}
                title="Plomberie Sanitaire"
                description="Conception et installation de systèmes sanitaires haute performance pour votre confort."
                features={[
                  "Salles de bain de luxe",
                  "Robinetterie haut de gamme",
                  "Traitement de l'eau",
                  "Réseaux d'évacuation"
                ]}
                color="blue"
                onContactClick={openModal}
              />

              <ModernServiceCard
                icon={Flame}
                title="Confort Thermique"
                description="Optimisation de vos systèmes de chauffage pour une efficacité énergétique maximale."
                features={[
                  "Pompes à chaleur",
                  "Chaudières nouvelle gén.",
                  "Planchers chauffants",
                  "Entretien & Optimisation"
                ]}
                color="orange"
                onContactClick={openModal}
              />
            </div>
          </div>
        </section>

        {/* BEFORE/AFTER SECTION */}
        <ModernBeforeAfter />

        {/* ABOUT SECTION */}
        <section id="a-propos" className="py-32 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-2xl opacity-20" />
                  <span className="relative px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
                    L'Artisanat d'Excellence
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Hamza DJAFFER,<br />
                  <span className="text-slate-400">Votre Expert de Confiance.</span>
                </h2>
                <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                  Plombier certifié avec plus de 7 ans d'expérience en Haute-Savoie.
                  Je m'engage personnellement à offrir un service rapide, durable et transparent.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Diplôme d'Expertise Technique",
                    "Assurances & Responsabilité Civile",
                    "Matériel de pointe (Camera thermique, Détection acoustique)",
                    "Devis transparent et sans surprise"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg font-semibold">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <CheckCircle2 size={14} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl"
                >
                  Me contacter directement
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                  <img src="/service2.jpg" alt="Expertise Plomberie" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white p-6 shadow-2xl -rotate-12 border-4 border-white dark:border-slate-900">
                  <span className="text-4xl font-black">7+</span>
                  <span className="text-xs font-bold uppercase tracking-tighter text-center">Années d'Expertise Terrain</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST ELEMENTS */}
        <TrustElements />

        {/* TESTIMONIALS */}
        <section id="avis" className="py-32 overflow-hidden bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-6">La Voix de nos <span className="text-blue-600">Clients</span></h2>
              <p className="text-xl text-slate-500">Découvrez pourquoi Annecy nous fait confiance.</p>
            </div>
            <TestimonialsWithPhotos />
          </div>
        </section>

        {/* SEO CONTENT */}
        <PlombierAnnecySEO />

        {/* SERVICE AREA */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Globe size={800} strokeWidth={0.5} className="absolute -top-40 -left-40 animate-slow-spin text-blue-500" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl font-black mb-8">Annecy & Haute-Savoie.</h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                  Basés à Annecy, nous intervenons dans un rayon de 50km pour garantir
                  une intervention rapide en moins de 30 minutes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    "Annecy", "Thonon", "Annemasse", "Cluses",
                    "Rumilly", "La Roche", "Sallanches", "Seynod"
                  ].map(city => (
                    <div key={city} className="flex items-center gap-3 text-lg font-bold">
                      <MapPin size={20} className="text-blue-500" />
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square md:aspect-video rounded-[2rem] bg-slate-800 border border-white/10 overflow-hidden group">
                {/* Abstract Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full text-blue-500" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 H100 V100 H0 Z" fill="none" />
                    <path d="M10 50 Q 30 30 50 50 T 90 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M20 80 Q 40 40 60 60 T 100 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="20" cy="30" r="1" />
                    <circle cx="60" cy="80" r="1" />
                    <circle cx="80" cy="20" r="1" />
                    <circle cx="90" cy="90" r="1" />
                  </svg>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulse Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse" />

                    {/* Central Card */}
                    <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl text-center transform group-hover:scale-105 transition-transform duration-500">
                      <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/20">
                        <MapPin size={32} />
                      </div>
                      <div className="text-2xl font-black text-white mb-1">Haute-Savoie</div>
                      <div className="text-blue-400 font-bold uppercase tracking-widest text-xs">Zone d'Intervention</div>
                      <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-400 font-medium text-left">
                        <span>✓ Annecy</span>
                        <span>✓ Thonon</span>
                        <span>✓ Annemasse</span>
                        <span>✓ Seynod</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER / CTA */}
        <NewsletterSignup />

        <FloatingActionButtons onContactClick={openModal} />
      </div>
    </AnimatePresence>
  );
}