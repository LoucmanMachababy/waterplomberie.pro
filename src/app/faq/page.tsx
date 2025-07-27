import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ Plombier Annecy - Questions fréquentes | Water Plomberie",
  description: "Toutes les réponses à vos questions sur la plomberie, urgence 24/7, chauffage, sanitaire et rénovation à Annecy et Haute-Savoie. Tarifs, délais, garanties - Water Plomberie.",
  keywords: "faq plombier annecy, questions plomberie, tarif plombier annecy, urgence plomberie prix, garantie plomberie, devis plombier gratuit",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">FAQ - Questions fréquentes</h1>
      <FaqClient />
    </div>
  );
} 