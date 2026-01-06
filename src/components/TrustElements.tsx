"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap, Heart, CheckCircle2, Star, Briefcase, FileCheck } from "lucide-react";

export default function TrustElements() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Expertise Reconnue",
      desc: "Savoir-faire validé par 7 ans de pratique.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Artisan Certifié",
      desc: "Expertise technique validée par 7 ans de pratique.",
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Réponse en 1h",
      desc: "Analyse et devis rapide pour vos projets urgents.",
      color: "amber"
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Pourquoi nous <span className="text-blue-600">choisir ?</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              La confiance ne se donne pas, elle se mérite. Voici les piliers
              de notre engagement envers chaque client.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 group hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20">
                <f.icon size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-blue-600 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">Notre Charte Qualité</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Star, text: "Matériaux Premium" },
                  { icon: CheckCircle2, text: "Chantier Propre" },
                  { icon: Heart, text: "Satisfaction 100%" },
                  { icon: Zap, text: "Ponctualité" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold">
                    <item.icon size={20} className="text-blue-200" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <ShieldCheck size={200} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-center border border-white/5"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 rounded-2xl bg-white/5 text-blue-400">
                <FileCheck size={40} />
              </div>
              <div>
                <div className="text-2xl font-black">Entreprise de Confiance</div>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Siret: 123 456 789 00010</div>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              Chaque intervention est rigoureusement documentée et suivie. Nous fournissons
              un rapport détaillé et une facture transparente pour toutes nos prestations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
