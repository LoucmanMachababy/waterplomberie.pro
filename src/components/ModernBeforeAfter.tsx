"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, Star, ArrowRightLeft } from "lucide-react";

interface BeforeAfterItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  location: string;
  duration: string;
}

const beforeAfterData: BeforeAfterItem[] = [
  {
    id: "salle-bain",
    title: "Rénovation Master Bath",
    beforeImage: "/salledebainavant.jpeg",
    afterImage: "/service2.jpg",
    description: "Transformation complète d'un espace daté en une suite parentale moderne avec des finitions haut de gamme.",
    location: "Annecy-le-Vieux",
    duration: "3 jours"
  },
  {
    id: "toilette",
    title: "Modernisation Sanitaire",
    beforeImage: "/AVANTTOILETTE.jpeg",
    afterImage: "/aprestoilette.jpeg",
    description: "Installation d'un pack WC suspendu avec intégration invisible et carrelage grand format.",
    location: "Seynod",
    duration: "1 jour"
  }
];

function BeforeAfterSlider({ item }: { item: BeforeAfterItem }) {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl group"
    >
      <div className="p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="text-3xl font-black mb-2 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 font-medium">{item.description}</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 flex items-center gap-2 text-sm font-bold">
              <MapPin size={16} className="text-blue-500" />
              {item.location}
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/5 flex items-center gap-2 text-sm font-bold">
              <Clock size={16} className="text-blue-500" />
              {item.duration}
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-inner cursor-ew-resize select-none">
          {/* Background Images */}
          <div className="absolute inset-0">
            <img src={item.afterImage} alt="After" loading="lazy" className="w-full h-full object-cover" />
          </div>

          <div
            className="absolute inset-0 z-10 overflow-hidden border-r-2 border-white/50"
            style={{ width: `${sliderValue}%` }}
          >
            <img
              src={item.beforeImage}
              alt="Before"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
              style={{ width: `calc(100% * 100 / ${sliderValue})` }}
            />
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-black uppercase tracking-widest">
              Avant
            </div>
          </div>

          <div className="absolute top-6 right-6 z-20 px-4 py-2 bg-blue-600 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-xl">
            Après
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
            style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-1 h-full bg-white/50 backdrop-blur-sm" />
            <div className="absolute w-12 h-12 rounded-full bg-white shadow-2xl border-4 border-blue-600 flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
              <ArrowRightLeft size={20} />
            </div>
          </div>

          {/* Invisible Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            className="absolute inset-0 z-40 opacity-0 cursor-ew-resize"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ModernBeforeAfter() {
  return (
    <section id="avant-apres" className="py-32 px-6 bg-slate-50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Le Sens du <span className="text-blue-600">Détail.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Nous ne nous contentons pas de réparer : nous valorisons votre patrimoine.
              Découvrez nos transformations les plus marquantes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:flex flex-col items-center gap-2 p-8 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-600/20"
          >
            <Star size={40} fill="currentColor" />
            <div className="text-center">
              <div className="text-2xl font-black">100% Client</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Satisfait ou Retravaillé</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {beforeAfterData.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
