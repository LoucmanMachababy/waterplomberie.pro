import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQ Plombier Annecy - Water Plomberie",
  description: "Toutes les réponses à vos questions sur la plomberie, l'urgence, le chauffage et l'entretien à Annecy. Water Plomberie répond à vos besoins !",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">FAQ - Questions fréquentes</h1>
      <FaqClient />
    </div>
  );
} 