"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Phone, Clock, ChevronRight, Award, ShieldCheck, Heart, Zap } from "lucide-react";

interface ModernHeroSectionProps {
  onContactClick: () => void;
}

// Scramble Text Effect Component
const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return letter;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-gradient">{display}</span>;
};

export default function ModernHeroSection({ onContactClick }: ModernHeroSectionProps) {
  const heroRef = useRef(null);

  // 3D Mouse Movement Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth - 0.5) * -50); // Invert for parallax
    y.set((clientY / innerHeight - 0.5) * -50);
  }

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 perspective-1000"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          style={{ x: mouseX, y: mouseY, scale: 1.1 }}
          className="absolute inset-0 opacity-30"
        >
          <img
            src="/service2.jpg"
            alt="Background"
            className="object-cover w-full h-full blur-[3px]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950" />

        {/* Animated Glows */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-6 pt-20"
      >
        <div className="max-w-5xl mx-auto text-center relative">

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8 hover:bg-blue-500/20 transition-colors"
          >
            <Zap size={16} className="text-blue-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">
              Disponible en 30 min
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-6"
          >
            PLOMBIER EXPERT <br />
            <span className="text-gradient inline-block mt-2 md:mt-0">&Agrave; ANNECY</span>
          </motion.h1>

          {/* Subtitle - Simplified & Bulleted */}
          {/* Subtitle - Simplified & Bulleted with SEO keywords */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-xl text-slate-300 mb-12 font-medium"
          >
            <h2 className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              Plombier Urgence 24/7
            </h2>
            <span className="hidden md:block text-slate-700">•</span>
            <h2 className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Fuite d'eau & Chauffage
            </h2>
            <span className="hidden md:block text-slate-700">•</span>
            <h2 className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Devis Gratuit Annecy
            </h2>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={onContactClick}
              className="group relative px-10 py-5 bg-blue-600 rounded-2xl text-white font-bold text-xl shadow-2xl shadow-blue-900/50 overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                Intervention Rapide
                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <a
              href="tel:+33783167613"
              className="group flex items-center gap-4 px-8 py-5 rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-md text-white font-bold text-lg transition-colors hover:bg-slate-800/80"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="flex flex-col items-start leading-none gap-1">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Urgence</span>
                <span className="text-lg tracking-wide font-mono">07 83 16 76 13</span>
              </div>
            </a>
          </motion.div>

          {/* Social Proof - Redesigned as Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, top: "7 Ans", sub: "d'Expérience", color: "text-purple-400", bg: "bg-purple-500/10" },
              { icon: ShieldCheck, top: "100%", sub: "Garantie Décennale", color: "text-blue-400", bg: "bg-blue-500/10" },
              { icon: Heart, top: "5/5", sub: "Satisfaction Google", color: "text-red-400", bg: "bg-red-500/10" },
              { icon: Clock, top: "20 min", sub: "Intervention Moy.", color: "text-green-400", bg: "bg-green-500/10" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/40 border border-white/5 backdrop-blur-sm flex flex-col items-center justify-center gap-2 hover:bg-slate-900/60 transition-colors group">
                <stat.icon className={`${stat.color} mb-1 group-hover:scale-110 transition-transform`} size={24} />
                <div className="text-white font-black text-xl leading-none">{stat.top}</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating 3D Card - Fixed Notification */}
      <motion.div
        style={{ x: useTransform(mouseX, val => val * 0.8), y: useTransform(mouseY, val => val * 0.8) }}
        className="absolute bottom-10 right-10 hidden 2xl:block z-30"
      >
        <div className="w-72 p-6 bg-slate-900/80 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl flex items-center gap-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white relative z-10">
              <ShieldCheck size={28} />
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-lg">Service Premium</div>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Satisfaction Totale</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
