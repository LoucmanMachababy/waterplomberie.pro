"use client";
import { motion } from "framer-motion";

const trustElements = [
  {
    icon: "🛡️",
    title: "Assurance Décennale",
    description: "Tous nos travaux sont couverts par une assurance décennale",
    color: "blue"
  },
  {
    icon: "📜",
    title: "Artisan Certifié",
    description: "Plombier certifié avec 7 ans d'expérience professionnelle",
    color: "green"
  },
  {
    icon: "⚡",
    title: "Intervention 24/7",
    description: "Service d'urgence disponible 24h/24 et 7j/7",
    color: "red"
  },
  {
    icon: "💰",
    title: "Devis Gratuit",
    description: "Estimation gratuite et sans engagement sous 1h",
    color: "purple"
  },
  {
    icon: "🔧",
    title: "Garantie 2 ans",
    description: "Garantie sur tous nos travaux et installations",
    color: "orange"
  },
  {
    icon: "⭐",
    title: "150+ Clients Satisfaits",
    description: "Note moyenne de 4.9/5 sur nos interventions",
    color: "yellow"
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    red: "bg-red-50 border-red-200 text-red-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-800"
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function TrustElements() {
  return (
    <div className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Water Plomberie s'engage à vous offrir un service de qualité avec toutes les garanties 
            et certifications nécessaires pour votre tranquillité d'esprit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustElements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${getColorClasses(element.color)}`}
            >
              <div className="text-4xl mb-4 text-center">{element.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{element.title}</h3>
              <p className="text-center text-sm leading-relaxed">{element.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Section certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">
            Nos Certifications & Assurances
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-1">SIRET</h4>
              <p className="text-sm text-gray-600">Entreprise déclarée</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-green-800 mb-1">Assurance</h4>
              <p className="text-sm text-gray-600">Responsabilité civile</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-purple-800 mb-1">Qualibat</h4>
              <p className="text-sm text-gray-600">Qualification professionnelle</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-orange-800 mb-1">Formation</h4>
              <p className="text-sm text-gray-600">Formation continue</p>
            </div>
          </div>
        </motion.div>

        {/* Engagement qualité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Notre Engagement Qualité</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Chez Water Plomberie, nous nous engageons à respecter les délais, 
            à utiliser des matériaux de qualité et à garantir la satisfaction de nos clients.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-xl">✓</span> Ponctualité garantie
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xl">✓</span> Matériaux certifiés
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xl">✓</span> Propreté du chantier
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xl">✓</span> Suivi après intervention
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
