"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, CheckCircle2, Zap, Clock } from "lucide-react";

export default function NewsletterSignup() {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setPhone('');
      } else {
        alert("Une erreur est survenue. Veuillez nous appeler directement.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-gradient-to-br from-blue-700 to-slate-900 p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap size={14} className="text-yellow-400" />
                Réponse en 5 minutes
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                Une Urgence Plomberie ? <br />
                <span className="text-blue-400">On vous rappelle de suite.</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-lg mb-8 font-medium">
                Laissez votre numéro, un expert certifié vous contacte immédiatement pour un diagnostic gratuit.
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-green-400" />
                  Dispo 24/7
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Sans Engagement
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider ml-1">Votre Numéro de Téléphone</label>
                    <div className="relative group">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors" size={20} />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full px-14 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        required
                        pattern="[0-9]{10}"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black text-lg transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Être Rappelé
                          <Send size={20} />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 text-center mt-2">
                      Vos données restent confidentielles.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">Demande Reçue !</h3>
                    <p className="text-slate-300 mb-6">Un technicien vous rappelle d'ici quelques minutes.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-400 text-sm font-bold hover:text-blue-300 underline"
                    >
                      Nouvelle demande
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
