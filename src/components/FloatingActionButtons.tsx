"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Phone, MessageCircle, FileText, X } from "lucide-react";

interface FloatingActionButtonsProps {
  onContactClick: () => void;
}

export default function FloatingActionButtons({ onContactClick }: FloatingActionButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: "Appeler",
      href: "tel:+33783167613",
      color: "bg-blue-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/33783167613",
      color: "bg-green-600",
    },
    {
      icon: FileText,
      label: "Devis Gratuit",
      onClick: onContactClick,
      color: "bg-slate-900",
    },
  ];

  return (
    <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-[100] flex flex-col items-end gap-3 md:gap-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 md:gap-4 mb-2">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <span className="hidden md:block px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest shadow-xl border border-slate-100 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {action.label}
                </span>
                {action.href ? (
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${action.color} text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95`}
                  >
                    <action.icon size={20} className="md:w-6 md:h-6" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      action.onClick?.();
                      setIsOpen(false);
                    }}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${action.color} text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95`}
                  >
                    <action.icon size={20} className="md:w-6 md:h-6" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 ${isOpen ? "bg-slate-950 rotate-0" : "bg-blue-600 rotate-0 shadow-blue-600/20"
          }`}
      >
        {isOpen ? (
          <X size={24} className="md:w-7 md:h-7" />
        ) : (
          <div className="relative">
            <Plus size={24} className="md:w-7 md:h-7" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full animate-ping" />
          </div>
        )}
      </button>
    </div>
  );
}
