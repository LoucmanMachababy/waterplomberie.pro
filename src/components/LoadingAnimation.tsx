"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  // Positions fixes pour les particules
  const particlePositions = [
    { left: 10, top: 20 }, { left: 25, top: 60 }, { left: 45, top: 15 },
    { left: 60, top: 80 }, { left: 75, top: 35 }, { left: 90, top: 70 },
    { left: 15, top: 90 }, { left: 35, top: 45 }, { left: 55, top: 25 },
    { left: 80, top: 55 }, { left: 20, top: 75 }, { left: 70, top: 10 },
    { left: 40, top: 85 }, { left: 85, top: 40 }, { left: 30, top: 65 },
    { left: 65, top: 30 }, { left: 50, top: 95 }, { left: 95, top: 50 },
    { left: 5, top: 40 }, { left: 12, top: 85 }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
      {/* Particules de fond */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
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
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      {/* Contenu principal */}
      <div className="relative z-10 text-center">
        {/* Logo avec animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 animate-pulse" />
            <img 
              src="/logo.png" 
              alt="Water Plomberie" 
              className="relative w-24 h-24 mx-auto rounded-full shadow-2xl bg-white/90 p-2"
            />
          </div>
        </motion.div>

        {/* Titre avec animation de typing */}
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Water Plomberie
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-xl text-blue-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Chargement en cours...
        </motion.p>

        {/* Barre de progression animée */}
        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Indicateur de chargement rotatif */}
        <motion.div
          className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
