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

          {/* Tagline Badge with Glitch Effect on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-crosshair group"
          >
            <Zap size={16} className="text-yellow-400 group-hover:animate-ping" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-300 group-hover:text-white transition-colors">
              Expert Plombier Certifié
            </span>
          </motion.div>

          {/* Main Title with Scramble Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8"
          >
            PLOMBIER EXPERT <br />
            <ScrambleText text="À ANNECY" />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Intervention <strong>24/7 en 30 minutes</strong>. Dépannage fuite, chauffage et rénovation de salle de bain.
            <strong>Devis gratuit</strong> et tarifs transparents.
          </motion.p>

          {/* Action Buttons with Magnetic Feel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={onContactClick}
              className="group relative px-10 py-6 bg-blue-600 rounded-3xl text-white font-black text-xl shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                Prendre Rendez-vous
                <ChevronRight size={24} className="transition-transform group-hover:translate-x-2" />
              </span>
            </button>

            <a
              href="tel:+33783167613"
              className="group flex items-center gap-5 px-10 py-6 rounded-3xl border border-white/5 bg-slate-900/50 backdrop-blur-md text-white font-bold text-lg transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-green-400 relative z-10 border border-white/5">
                  <Phone size={24} />
                </div>
              </div>
              <div className="flex flex-col items-start leading-none gap-1">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-300 transition-colors">Urgence 24/7</span>
                <span className="text-xl tracking-wide font-mono">07 83 16 76 13</span>
              </div>
            </a>
          </motion.div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500"
          >
            {[
              { icon: Award, top: "150+", sub: "Projets Réalisés" },
              { icon: Heart, top: "5/5", sub: "Satisfaction" },
              { icon: Clock, top: "20m", sub: "Intervention Moy." }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <stat.icon className="text-slate-600 group-hover:text-blue-500 transition-colors duration-500" size={32} />
                <div className="text-left">
                  <div className="text-white font-black text-2xl leading-none mb-1">{stat.top}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.sub}</div>
                </div>
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
