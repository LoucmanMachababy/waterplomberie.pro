"use client";
import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2, ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "orange" | "green" | "red" | "purple";
  onContactClick: () => void;
}

const colorVariants = {
  blue: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    buttonBg: "bg-blue-600 hover:bg-blue-700",
    accent: "bg-blue-500",
    border: "group-hover:border-blue-500/30",
    tag: "bg-blue-500/10 text-blue-500"
  },
  orange: {
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    buttonBg: "bg-orange-600 hover:bg-orange-700",
    accent: "bg-orange-500",
    border: "group-hover:border-orange-500/30",
    tag: "bg-orange-500/10 text-orange-500"
  },
  green: {
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    buttonBg: "bg-green-600 hover:bg-green-700",
    accent: "bg-green-500",
    border: "group-hover:border-green-500/30",
    tag: "bg-green-500/10 text-green-500"
  },
  red: {
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    buttonBg: "bg-red-600 hover:bg-red-700",
    accent: "bg-red-500",
    border: "group-hover:border-red-500/30",
    tag: "bg-red-500/10 text-red-500"
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    buttonBg: "bg-purple-600 hover:bg-purple-700",
    accent: "bg-purple-500",
    border: "group-hover:border-purple-500/30",
    tag: "bg-purple-500/10 text-purple-500"
  }
};

export default function ModernServiceCard({
  icon: Icon,
  title,
  description,
  features,
  color,
  onContactClick
}: ServiceCardProps) {
  const colors = colorVariants[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className={`h-full flex flex-col p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 shadow-xl group-hover:-translate-y-2 ${colors.border}`}>
        {/* Accent Bar */}
        <div className={`absolute top-8 right-8 w-1 h-8 rounded-full ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center ${colors.iconColor} mb-8 transition-transform group-hover:scale-110 duration-500`}>
          <Icon size={32} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-none">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="flex-1 space-y-4 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={18} className={colors.iconColor} />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Footer / CTA */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onContactClick}
            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 ${colors.buttonBg} text-white shadow-lg`}
          >
            <span>Demander une intervention</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Special Tags */}
        {color === "red" && (
          <div className="absolute top-8 right-8">
            <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-tighter rounded-full border border-red-500/20">
              Prioritaire
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
