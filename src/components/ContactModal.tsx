"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
    urgence: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait intégrer avec un service d'email ou CRM
    console.log('Formulaire soumis:', formData);
    alert('Merci ! Nous vous recontacterons dans les plus brefs délais.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Fermer la fenêtre de contact"
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              ×
            </button>

            {/* Header avec garanties */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 text-blue-700">💧 Devis Gratuit en 1 minute</h2>
              <div className="flex justify-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> Réponse rapide
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> Sans engagement
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-green-500">✓</span> Intervention 24/7
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Nom et Email sur la même ligne */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-nom" className="font-semibold text-blue-800">Nom <span className="text-red-500">*</span></label>
                  <input
                    id="contact-nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-email" className="font-semibold text-blue-800">Email <span className="text-red-500">*</span></label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    required
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-tel" className="font-semibold text-blue-800">Téléphone <span className="text-red-500">*</span></label>
                <input
                  id="contact-tel"
                  name="telephone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  required
                />
              </div>

              {/* Type de service */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-service" className="font-semibold text-blue-800">Type de service</label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="urgence">🚨 Urgence plomberie</option>
                  <option value="chauffage">🔥 Chauffage</option>
                  <option value="sanitaire">🚿 Plomberie sanitaire</option>
                  <option value="renovation">🏠 Rénovation salle de bain</option>
                  <option value="entretien">🔧 Entretien</option>
                  <option value="autre">💬 Autre</option>
                </select>
              </div>

              {/* Urgence checkbox */}
              <div className="flex items-center gap-2 bg-red-50 p-3 rounded-lg border border-red-200">
                <input
                  id="contact-urgence"
                  name="urgence"
                  type="checkbox"
                  checked={formData.urgence}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="contact-urgence" className="font-semibold text-red-700">
                  🚨 C'est urgent ! (intervention dans l'heure)
                </label>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="font-semibold text-blue-800">Décrivez votre problème <span className="text-red-500">*</span></label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Décrivez votre problème de plomberie..."
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  rows={3}
                  required
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>📞</span>
                {formData.urgence ? 'Demander une intervention urgente' : 'Recevoir mon devis gratuit'}
              </button>

              {/* Garanties en bas */}
              <div className="text-center text-sm text-gray-600 mt-2">
                <p>⚡ Réponse en moins d'1 heure • 🛡️ Devis sans engagement • 📞 Intervention 24/7</p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}