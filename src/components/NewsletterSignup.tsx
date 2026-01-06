"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-20 overflow-hidden shadow-2xl shadow-blue-600/20"
        >
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-widest mb-8">
                    <Sparkles size={14} className="text-cyan-300" />
                    Conseils Experts & Offres
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                    Restez Informé. <br />
                    <span className="text-blue-200">Évitez les pannes.</span>
                  </h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-medium">
                    Inscrivez-vous pour recevoir nos guides d&apos;entretien saisonniers et bénéficier
                    de priorités sur nos interventions d&apos;urgence.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                    <div className="relative flex-1 group">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@exemple.com"
                        className="w-full px-16 py-5 rounded-2xl bg-white text-slate-900 font-bold placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-xl"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Rejoindre
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-2xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Vous êtes des nôtres !</h2>
                  <p className="text-2xl text-blue-100 mb-8">Un guide de bienvenue a été envoyé à votre email.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-white/60 font-bold underline hover:text-white transition-colors"
                  >
                    Réinitialiser
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
