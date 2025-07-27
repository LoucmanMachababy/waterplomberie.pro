"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";

interface ModernHeroSectionProps {
  onContactClick: () => void;
}

export default function ModernHeroSection({ onContactClick }: ModernHeroSectionProps) {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0px", "150px"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Positions fixes pour éviter l'hydratation mismatch
  const particlePositions = [
    { left: 10, top: 20 }, { left: 25, top: 60 }, { left: 45, top: 15 },
    { left: 60, top: 80 }, { left: 75, top: 35 }, { left: 90, top: 70 },
    { left: 15, top: 90 }, { left: 35, top: 45 }, { left: 55, top: 25 },
    { left: 80, top: 55 }, { left: 20, top: 75 }, { left: 70, top: 10 },
    { left: 40, top: 85 }, { left: 85, top: 40 }, { left: 30, top: 65 },
    { left: 65, top: 30 }, { left: 50, top: 95 }, { left: 95, top: 50 },
    { left: 5, top: 40 }, { left: 12, top: 85 }
  ];

  // Effet de parallaxe avec la souris
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  }, []);

  // Animation de typing et montage
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsTyping(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 gradient-animated opacity-90" />
      
      {/* Image de fond avec parallaxe */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/service2.jpg"
          alt="Salle de bain rénovée par Water Plomberie"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/30 to-cyan-900/50" />
      </motion.div>

      {/* Particules flottantes */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}

      {/* Contenu principal */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo avec effet de glow */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 animate-pulse" />
            <img 
              src="/logo.png" 
              alt="Water Plomberie Logo" 
              className="relative w-24 h-24 mx-auto rounded-full shadow-2xl bg-white/90 p-2"
            />
          </div>
        </motion.div>

        {/* Titre principal avec effet de typing */}
        <motion.h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl ${isTyping ? 'typing-effect' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="gradient-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Plombier Annecy ⭐ #1
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-xl md:text-2xl mb-4 text-blue-100 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          LE Plombier de Référence à Annecy
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <strong>Water Plomberie</strong> - Votre plombier Annecy expert depuis 7 ans.
          Urgence 24/7, devis gratuit, intervention rapide partout à Annecy et Haute-Savoie.
        </motion.p>

        {/* Boutons d'action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Bouton principal */}
          <motion.button
            onClick={onContactClick}
            className="group relative px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/40 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              💧 Devis gratuit en 1 min
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
          </motion.button>

          {/* Bouton urgence */}
          <motion.a
            href="tel:+33783167613"
            className="group relative px-8 py-4 bg-red-500/90 backdrop-blur-lg border-2 border-red-400 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 pulse-glow"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              🚨 Urgence 24/7
            </span>
          </motion.a>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { number: "150+", label: "Clients satisfaits", icon: "👥" },
            { number: "7 ans", label: "D'expérience", icon: "🏆" },
            { number: "24/7", label: "Service d'urgence", icon: "⚡" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
              }}
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-white/70 text-sm mt-2">Scroll</p>
      </motion.div>
    </section>
  );
}
