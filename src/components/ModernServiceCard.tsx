"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "orange" | "green" | "red" | "purple";
  onContactClick: () => void;
}

const colorVariants = {
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "shadow-blue-500/25"
  },
  orange: {
    gradient: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    text: "text-orange-800",
    border: "border-orange-200",
    button: "bg-orange-600 hover:bg-orange-700",
    glow: "shadow-orange-500/25"
  },
  green: {
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    button: "bg-green-600 hover:bg-green-700",
    glow: "shadow-green-500/25"
  },
  red: {
    gradient: "from-red-500 to-pink-500",
    bg: "bg-red-50",
    text: "text-red-800",
    border: "border-red-200",
    button: "bg-red-600 hover:bg-red-700",
    glow: "shadow-red-500/25"
  },
  purple: {
    gradient: "from-purple-500 to-indigo-500",
    bg: "bg-purple-50",
    text: "text-purple-800",
    border: "border-purple-200",
    button: "bg-purple-600 hover:bg-purple-700",
    glow: "shadow-purple-500/25"
  }
};

export default function ModernServiceCard({
  icon,
  title,
  description,
  features,
  color,
  onContactClick
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const colors = colorVariants[color];

  // Positions fixes pour les particules
  const particlePositions = [
    { left: 20, top: 10 },
    { left: 50, top: 30 },
    { left: 80, top: 50 }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Effet de glow en arrière-plan */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`} />
      
      {/* Carte principale */}
      <div className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 ${colors.border} transition-all duration-300 card-3d overflow-hidden`}>
        
        {/* Effet de shimmer */}
        <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Header avec icône */}
        <div className="text-center mb-6">
          <motion.div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-4xl mb-4 shadow-lg ${colors.glow}`}
            animate={isHovered ? { 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            } : { 
              scale: 1, 
              rotate: 0,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          
          <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-center mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} flex-shrink-0`} />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Bouton d'action */}
        <motion.button
          onClick={onContactClick}
          className={`w-full ${colors.button} text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50`}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center justify-center gap-2">
            <span>Demander un devis</span>
            <motion.span
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Badge "Populaire" pour certains services */}
        {color === "red" && (
          <div className="absolute -top-3 -right-3">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              🚨 URGENT
            </div>
          </div>
        )}

        {color === "blue" && (
          <div className="absolute -top-3 -right-3">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              ⭐ POPULAIRE
            </div>
          </div>
        )}

        {/* Particules flottantes */}
        {isMounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} opacity-20`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
