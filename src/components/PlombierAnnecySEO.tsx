"use client";
import { motion } from "framer-motion";
import { MapPin, Trophy, Star, ShieldCheck } from "lucide-react";

export default function PlombierAnnecySEO() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main SEO Header - Visually appealing but keyword rich */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-widest mb-6 border border-blue-200 dark:border-blue-800">
            <Trophy size={14} /> #1 Plombier Annecy
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
            Votre Partenaire Plomberie de Confiance <span className="text-blue-600">à Annecy</span>
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-slate-500 dark:text-slate-400 leading-relaxed text-justify md:text-center">
            <p>
              Depuis plus de 7 ans, <strong>Water Plomberie</strong> s'impose comme la référence du <strong>dépannage et de l'installation sanitaire à Annecy</strong>.
              Notre équipe d'experts certifiés intervient 24/7 pour résoudre vos urgences : fuites, pannes de chauffage, ou dégorgements.
              Nous combinons savoir-faire artisanal et équipements de pointe pour garantir des interventions durables et conformes aux normes en vigueur.
            </p>
          </div>
        </div>

        {/* SEO Grid - Key Services & Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Urgence Annecy 24/7", text: "Intervention en < 30 min pour fuites et pannes critiques.", icon: ShieldCheck },
            { title: "Rénovation Expert", text: "Transformation complète de salles de bain et cuisines.", icon: Star },
            { title: "Chauffage Certifié", text: "Entretien et remplacement de chaudières toutes marques.", icon: Trophy },
            { title: "Tarifs Transparents", text: "Devis gratuit et détaillé avant toute intervention.", icon: ShieldCheck }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Locations Tags - For Local SEO */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">Zones d'Intervention Prioritaires</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Plombier Annecy Centre", "Plombier Annecy-le-Vieux", "Plombier Seynod", "Plombier Cran-Gevrier",
              "Plombier Pringy", "Plombier Épagny", "Plombier Meythet", "Plombier Sevrier", "Plombier Veyrier-du-Lac"
            ].map((zone, i) => (
              <span key={i} className="px-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                <MapPin size={12} className="inline mr-1" /> {zone}
              </span>
            ))}
          </div>
          <p className="text-xs text-center text-slate-400 mt-6 max-w-2xl mx-auto italic">
            * Intervention possible dans toute la Haute-Savoie sur demande. Frais de déplacement offerts dans un rayon de 10km autour d'Annecy.
          </p>
        </div>
      </div>
    </section>
  );
}
