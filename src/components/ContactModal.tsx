"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
          >
            <button onClick={onClose} aria-label="Fermer la fenêtre de contact" className="absolute top-3 right-3 text-gray-400 hover:text-blue-700 text-2xl font-bold">×</button>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Demander un devis gratuit</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-nom" className="font-semibold text-blue-800">Nom <span className="text-red-500">*</span></label>
                <input id="contact-nom" type="text" placeholder="Votre nom" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition" required />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-email" className="font-semibold text-blue-800">Email <span className="text-red-500">*</span></label>
                <input id="contact-email" type="email" placeholder="Votre email" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition" required />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-tel" className="font-semibold text-blue-800">Téléphone</label>
                <input id="contact-tel" type="tel" placeholder="Votre téléphone" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="font-semibold text-blue-800">Message <span className="text-red-500">*</span></label>
                <textarea id="contact-message" placeholder="Votre message" className="p-3 rounded border border-gray-300 focus:outline-blue-400 focus:ring-2 focus:ring-blue-300 transition" rows={4} required />
              </div>
              <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-800 transition transform hover:scale-105">Envoyer</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 