"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FloatingActionButtonsProps {
  onContactClick: () => void;
}

export default function FloatingActionButtons({ onContactClick }: FloatingActionButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    {
      icon: "📞",
      label: "Appeler",
      href: "tel:+33783167613",
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.1
    },
    {
      icon: "💬",
      label: "WhatsApp",
      href: "https://wa.me/33783167613?text=Bonjour%2C%20j%27ai%20besoin%20d%27un%20plombier%20!",
      color: "bg-green-600 hover:bg-green-700",
      delay: 0.2
    },
    {
      icon: "📧",
      label: "Devis",
      onClick: onContactClick,
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.3
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Boutons d'action */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3">
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                transition={{ delay: action.delay, duration: 0.2 }}
                className="flex items-center gap-3"
              >
                {/* Label */}
                <motion.div
                  className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: action.delay + 0.1 }}
                >
                  {action.label}
                </motion.div>
                
                {/* Bouton */}
                {action.href ? (
                  <motion.a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-12 h-12 rounded-full ${action.color} text-white flex items-center justify-center shadow-lg text-xl transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action.icon}
                  </motion.a>
                ) : (
                  <motion.button
                    onClick={action.onClick}
                    className={`w-12 h-12 rounded-full ${action.color} text-white flex items-center justify-center shadow-lg text-xl transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {action.icon}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Bouton principal */}
      <motion.button
        onClick={toggleMenu}
        className={`w-14 h-14 rounded-full shadow-2xl text-white text-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-blue-500 hover:bg-blue-600 pulse-glow'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? '✕' : '💧'}
      </motion.button>

      {/* Indicateur d'urgence */}
      {!isOpen && (
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          !
        </motion.div>
      )}
    </div>
  );
}
