"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Réalisations", href: "/#avant-apres" },
    { name: "Expertise", href: "/#a-propos" },
    { name: "Avis", href: "/#avis" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="relative w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
              <img src="/logo.png" alt="Water Plomberie" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tight leading-none ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
                WATER<span className="text-blue-500">.</span>
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? "text-slate-500" : "text-blue-200"}`}>
                Plomberie
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-luxury hover:text-blue-500 ${isScrolled ? "text-slate-600 dark:text-slate-300" : "text-white/90"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="tel:+33783167613"
              className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border transition-luxury ${isScrolled
                ? "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                : "border-white/20 text-white hover:bg-white/10"
                }`}
            >
              <Phone size={16} />
              <span className="text-sm font-bold">07 83 16 76 13</span>
            </Link>

            <Link
              href="/urgence"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-600/20 transition-luxury hover:scale-105 flex items-center gap-2"
            >
              <ShieldCheck size={16} />
              <span>Intervention</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-xl transition-luxury ${isScrolled ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800" : "text-white bg-white/10"
                }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <img src="/logo.png" alt="Logo" className="w-6 h-6 brightness-0 invert" />
                </div>
                <span className="font-bold text-lg dark:text-white">WATER.</span>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 px-6 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-slate-900 dark:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-auto flex flex-col gap-4">
                <Link
                  href="tel:+33783167613"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold"
                >
                  <Phone size={20} />
                  Appeler maintenant
                </Link>
                <Link
                  href="/urgence"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20"
                >
                  <Clock size={20} />
                  Urgence 24/7
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}