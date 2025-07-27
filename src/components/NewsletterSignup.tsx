"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi (à remplacer par une vraie intégration)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-center text-white shadow-xl"
      >
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2">Merci pour votre inscription !</h3>
        <p className="text-green-100">
          Vous recevrez nos conseils plomberie et nos offres spéciales directement dans votre boîte mail.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-center text-white shadow-xl"
    >
      <div className="text-4xl mb-4">📧</div>
      <h3 className="text-2xl font-bold mb-3">Conseils Plomberie Gratuits</h3>
      <p className="text-blue-100 mb-6 text-lg">
        Recevez nos conseils d'expert, astuces d'entretien et offres spéciales directement par email !
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  Inscription...
                </span>
              ) : (
                'S\'inscrire'
              )}
            </button>
          </form>
        </div>
      </div>
      
      <div className="flex justify-center gap-6 mt-6 text-sm text-blue-100">
        <span className="flex items-center gap-1">
          <span className="text-white">✓</span> Conseils d'expert
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">✓</span> Offres exclusives
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">✓</span> Pas de spam
        </span>
      </div>
    </motion.div>
  );
}
