"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Phone, Mail, User, PenTool, AlertTriangle, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
    urgence: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ nom: '', email: '', telephone: '', service: '', message: '', urgence: false });
      }, 2000);
    }, 1000);
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
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-50 dark:bg-slate-950/50 p-8 pb-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                  Demande d'Intervention
                </h2>
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500" /> Réponse 1h</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-500" /> Sans Engagement</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Fermer"
              >
                <X size={24} className="text-slate-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 pt-6 overflow-y-auto custom-scrollbar">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-green-500/20">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Demande Envoyée !</h3>
                  <p className="text-slate-500">Nous vous recontacterons très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Nom Complet</label>
                      <div className="relative group">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          name="nom"
                          type="text"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                      <div className="relative group">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Téléphone <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        name="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Type de Service</label>
                    <div className="relative group">
                      <PenTool size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all font-medium appearance-none"
                      >
                        <option value="">Sélectionnez un service...</option>
                        <option value="urgence">🚨 Urgence (Fuite, Panne)</option>
                        <option value="sanitaire">🛁 Salle de Bain</option>
                        <option value="chauffage">🔥 Chauffage / Chauffe-eau</option>
                        <option value="entretien">🔧 Entretien Annuel</option>
                        <option value="autre">📋 Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 flex items-center gap-3">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        id="urgence"
                        name="urgence"
                        checked={formData.urgence}
                        onChange={handleChange}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 dark:border-slate-600 transition-all checked:border-red-500 checked:bg-red-500"
                      />
                      <CheckCircle2 size={12} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <label htmlFor="urgence" className="flex items-center gap-2 font-bold text-red-600 dark:text-red-400 cursor-pointer select-none">
                      <AlertTriangle size={18} />
                      Demande d'intervention prioritaire (Urgence)
                    </label>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Détaillez votre besoin..."
                      className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}