"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Services",
      links: [
        { label: "Urgence 24/7", href: "/urgence" },
        { label: "Installation Sanitaire", href: "/#services" },
        { label: "Réparation Chauffage", href: "/#services" },
        { label: "Rénovation de Salle de Bain", href: "/#services" }
      ]
    },
    {
      title: "Navigation",
      links: [
        { label: "Réalisations", href: "/#avant-apres" },
        { label: "Expertise", href: "/#a-propos" },
        { label: "Avis Clients", href: "/#avis" },
        { label: "Contactez-nous", href: "/#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Identity */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
                <img src="/logo.png" alt="Plombier Annecy - Water Plomberie Logo" className="w-12 h-12 object-contain brightness-0 invert" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight leading-none text-white">
                  WATER<span className="text-blue-500">.</span>
                </span>
                <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-slate-500">
                  Plomberie Annecy
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg max-w-md mb-8 leading-relaxed">
              L&apos;excellence artisanale au service de votre habitat. Plus de 7 ans
              d&apos;expertise technique à Annecy et en Haute-Savoie.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Phone, href: "tel:+33783167613", label: "Appeler" },
                { icon: MessageCircle, href: "https://wa.me/33783167613", label: "WhatsApp" },
                { icon: Mail, href: "mailto:watter.plomberie@gmail.com", label: "Email" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="grid md:grid-cols-3 gap-6 p-1 bg-slate-900 border border-white/5 rounded-3xl mb-20">
          <div className="p-6 flex items-center gap-4 hover:bg-slate-800 rounded-2xl transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-500 uppercase">Localisation</div>
              <div className="text-white font-semibold">Annecy, 74000</div>
            </div>
          </div>
          <div className="p-6 flex items-center gap-4 hover:bg-slate-800 rounded-2xl transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Phone size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-500 uppercase">Urgence 24/7</div>
              <div className="text-white font-semibold">07 83 16 76 13</div>
            </div>
          </div>
          <div className="p-6 flex items-center gap-4 hover:bg-slate-800 rounded-2xl transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-500 uppercase">Service</div>
              <div className="text-white font-semibold">Suivi Assuré</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} Water Plomberie. Tous droits réservés. Design by Antigravity.
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
