"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    title: "Rénovation Salle de Bain",
    beforeImage: "/salledebainavant.jpeg",
    afterImage: "/service2.jpg",
    description: "Transformation complète d'une salle de bain vétuste en espace moderne et fonctionnel",
    location: "Annecy-le-Vieux",
    duration: "3 jours"
  },
  {
    id: "toilette",
    title: "Rénovation WC",
    beforeImage: "/AVANTTOILETTE.jpeg",
    afterImage: "/aprestoilette.jpeg",
    description: "Modernisation complète des toilettes avec WC suspendu et carrelage contemporain",
    location: "Seynod",
    duration: "1 jour"
  }
];

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
}

function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [sliderValue, setSliderValue] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Positions fixes pour les particules
  const particlePositions = [
    { left: 20, top: 15 },
    { left: 35, top: 35 },
    { left: 50, top: 55 },
    { left: 65, top: 25 },
    { left: 80, top: 75 }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Titre et infos */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-800 mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <div className="flex justify-center gap-4 text-sm text-blue-600">
          <span className="flex items-center gap-1">
            📍 {item.location}
          </span>
          <span className="flex items-center gap-1">
            ⏱️ {item.duration}
          </span>
        </div>
      </div>

      {/* Container principal avec effet 3D */}
      <div className="relative mx-auto w-full max-w-[500px] h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl card-3d">
        
        {/* Effet de glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
        
        {/* Container des images */}
        <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden">
          
          {/* Input slider invisible */}
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={e => setSliderValue(Number(e.target.value))}
            className="absolute z-30 w-full h-full opacity-0 cursor-ew-resize"
            aria-label={`Slider avant/après ${item.title}`}
          />

          {/* Image AVANT (côté gauche) */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-300"
            style={{ width: `${100 - sliderValue}%` }}
          >
            <img 
              src={item.beforeImage} 
              alt={`Avant - ${item.title}`} 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>

          {/* Image APRÈS (côté droit) */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-300"
            style={{ 
              left: `${100 - sliderValue}%`, 
              width: `${sliderValue}%` 
            }}
          >
            <img 
              src={item.afterImage} 
              alt={`Après - ${item.title}`} 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20" />
          </div>

          {/* Labels AVANT/APRÈS */}
          <motion.div 
            className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold shadow-lg"
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
          >
            AVANT
          </motion.div>
          
          <motion.div 
            className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold shadow-lg"
            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
          >
            APRÈS
          </motion.div>

          {/* Poignée de slider moderne */}
          <div
            className="absolute top-0 h-full w-1 bg-white shadow-2xl z-20 transition-all duration-300"
            style={{ left: `calc(${sliderValue}% - 2px)` }}
          >
            {/* Cercle de contrôle */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border-4 border-blue-500 flex items-center justify-center cursor-ew-resize"
              animate={isHovered ? { 
                scale: 1.2,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
              } : { 
                scale: 1,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              whileHover={{ scale: 1.3 }}
            >
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-blue-500 rounded-full" />
                <div className="w-1 h-4 bg-blue-500 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Instructions */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 5 }}
          >
            ← Glissez pour comparer →
          </motion.div>

          {/* Effet de particules */}
          {isMounted && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {particlePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Statistiques de la rénovation */}
      <motion.div
        className="mt-6 grid grid-cols-3 gap-4 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-bold text-blue-600">100%</div>
          <div className="text-xs text-gray-600">Satisfaction</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-bold text-green-600">2 ans</div>
          <div className="text-xs text-gray-600">Garantie</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <div className="text-lg font-bold text-orange-600">Rapide</div>
          <div className="text-xs text-gray-600">Livraison</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ModernBeforeAfter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Nos Réalisations
            <span className="block text-2xl md:text-3xl text-cyan-600 font-normal mt-2">
              Avant / Après
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez la transformation spectaculaire de nos projets de plomberie et rénovation 
            à Annecy et dans toute la Haute-Savoie
          </p>
        </motion.div>

        {/* Grille des réalisations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {beforeAfterData.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Vous avez un projet de rénovation ? Demandez votre devis gratuit !
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir plus de réalisations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
