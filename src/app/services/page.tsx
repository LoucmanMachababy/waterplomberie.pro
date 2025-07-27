import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services Plomberie Annecy - Urgence, Chauffage, Sanitaire | Water Plomberie",
  description: "Découvrez tous nos services de plomberie à Annecy : urgence 24/7, installation chauffage, rénovation sanitaire, dépannage. Devis gratuit, intervention rapide en Haute-Savoie.",
  keywords: "services plomberie annecy, urgence plombier 24h, installation chauffage annecy, rénovation salle de bain, dépannage plomberie haute-savoie",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Nos Services de Plomberie à Annecy
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Water Plomberie vous propose une gamme complète de services de plomberie à Annecy et dans toute la Haute-Savoie. 
          Intervention rapide, devis gratuit et garantie sur tous nos travaux.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service Urgence */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all">
            <div className="text-red-500 text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Urgence 24/7</h2>
            <p className="text-gray-700 mb-6">
              Fuite d'eau, canalisation bouchée, panne de chauffage ? Notre équipe intervient 
              24h/24 et 7j/7 à Annecy et dans toute la Haute-Savoie pour tous vos dépannages urgents.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              <li>✓ Intervention en moins de 30 minutes</li>
              <li>✓ Diagnostic gratuit</li>
              <li>✓ Réparation immédiate si possible</li>
              <li>✓ Devis transparent</li>
            </ul>
            <Link href="/urgence" className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              En savoir plus
            </Link>
          </div>

          {/* Service Chauffage */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all">
            <div className="text-orange-500 text-4xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Chauffage</h2>
            <p className="text-gray-700 mb-6">
              Installation, entretien et réparation de tous types de systèmes de chauffage : 
              chaudières, radiateurs, ballons d'eau chaude, pompes à chaleur.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              <li>✓ Installation de chaudières</li>
              <li>✓ Entretien annuel</li>
              <li>✓ Réparation de radiateurs</li>
              <li>✓ Remplacement ballon d'eau chaude</li>
            </ul>
            <Link href="/services/chauffage" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              En savoir plus
            </Link>
          </div>

          {/* Service Sanitaire */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all">
            <div className="text-blue-500 text-4xl mb-4">🚿</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Plomberie Sanitaire</h2>
            <p className="text-gray-700 mb-6">
              Installation et rénovation complète de salles de bain, WC, cuisine. 
              Robinetterie, évacuations, canalisations - nous gérons tout de A à Z.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              <li>✓ Rénovation salle de bain</li>
              <li>✓ Installation WC</li>
              <li>✓ Pose de robinetterie</li>
              <li>✓ Création de douche à l'italienne</li>
            </ul>
            <Link href="/services/sanitaire" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Section Pourquoi nous choisir */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Pourquoi choisir Water Plomberie à Annecy ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-blue-500 text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-blue-800 mb-2">Intervention Rapide</h3>
              <p className="text-sm text-gray-600">Déplacement en moins de 30 minutes sur Annecy</p>
            </div>
            <div className="text-center">
              <div className="text-green-500 text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-blue-800 mb-2">Devis Gratuit</h3>
              <p className="text-sm text-gray-600">Estimation gratuite et sans engagement</p>
            </div>
            <div className="text-center">
              <div className="text-purple-500 text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-blue-800 mb-2">Garantie</h3>
              <p className="text-sm text-gray-600">Garantie sur tous nos travaux</p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-3xl mb-3">👨‍🔧</div>
              <h3 className="font-semibold text-blue-800 mb-2">7 ans d'expérience</h3>
              <p className="text-sm text-gray-600">Expertise reconnue en Haute-Savoie</p>
            </div>
          </div>
        </div>

        {/* Zone d'intervention */}
        <div className="bg-gradient-to-r from-blue-100 to-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Zone d'intervention en Haute-Savoie
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Nous intervenons rapidement dans toute la Haute-Savoie pour tous vos besoins en plomberie :
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "Annecy", "Thonon-les-Bains", "Annemasse", "Cluses", 
              "Rumilly", "La Roche-sur-Foron", "Sallanches", "Bonneville",
              "Seynod", "Cran-Gevrier", "Pringy", "Chamonix"
            ].map((ville) => (
              <div key={ville} className="bg-white rounded-lg p-3 shadow">
                <span className="font-semibold text-blue-700">{ville}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
