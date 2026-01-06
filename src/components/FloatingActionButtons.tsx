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
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-4 mb-2">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-black uppercase tracking-widest shadow-xl border border-slate-100 dark:border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {action.label}
                </span>
                {action.href ? (
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-2xl ${action.color} text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95`}
                  >
                    <action.icon size={24} />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      action.onClick?.();
                      setIsOpen(false);
                    }}
                    className={`w-14 h-14 rounded-2xl ${action.color} text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95`}
                  >
                    <action.icon size={24} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-[2rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 ${isOpen ? "bg-slate-950 rotate-0" : "bg-blue-600 rotate-0 shadow-blue-600/20"
          }`}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <div className="relative">
            <Plus size={28} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </div>
        )}
      </button>
    </div>
  );
}
