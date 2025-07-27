import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plombier Thonon-les-Bains - Urgence 24/7 | Water Plomberie",
  description: "Plombier à Thonon-les-Bains : intervention urgence 24/7, installation chauffage, rénovation sanitaire, dépannage. Devis gratuit, plombier professionnel Thonon, Évian.",
  keywords: "plombier thonon, plombier thonon les bains, urgence plomberie thonon, chauffage thonon, plombier évian, dépannage plomberie thonon",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/plombier-thonon',
  },
};

export default function PlombierThononPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Plombier Thonon-les-Bains - Service 24/7
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            <strong>Water Plomberie</strong> intervient rapidement à Thonon-les-Bains et dans le Chablais. 
            Urgence plomberie 24/7, chauffage, sanitaire. Devis gratuit, intervention rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33783167613" className="bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition">
              🚨 Urgence : 07 83 16 76 13
            </a>
            <Link href="/#contact" className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition">
              💬 Devis Gratuit
            </Link>
          </div>
        </div>

        {/* Services à Thonon */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <div className="text-red-500 text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">Urgence Plomberie Thonon</h2>
            <p className="text-gray-700 mb-4">
              Fuite d'eau, canalisation bouchée, panne de chauffage ? Intervention d'urgence 24h/24 
              à Thonon-les-Bains, Évian, Publier, Amphion.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Intervention rapide dans le Chablais</li>
              <li>✓ Disponible 24h/24 et 7j/7</li>
              <li>✓ Diagnostic gratuit</li>
              <li>✓ Réparation immédiate</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <div className="text-orange-500 text-4xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Chauffage Thonon</h2>
            <p className="text-gray-700 mb-4">
              Installation et entretien de chauffage à Thonon-les-Bains. Chaudières, radiateurs, 
              ballons d'eau chaude adaptés au climat du Léman.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Installation chaudières gaz/fioul</li>
              <li>✓ Entretien annuel obligatoire</li>
              <li>✓ Dépannage chauffage urgent</li>
              <li>✓ Pompes à chaleur lac Léman</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-blue-500 text-4xl mb-4">🚿</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Sanitaire Thonon</h2>
            <p className="text-gray-700 mb-4">
              Plomberie sanitaire à Thonon : installation WC, robinetterie, douche, 
              rénovation salle de bain complète.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Rénovation salle de bain</li>
              <li>✓ Installation WC et lavabo</li>
              <li>✓ Douche à l'italienne</li>
              <li>✓ Robinetterie moderne</li>
            </ul>
          </div>
        </div>

        {/* Zones d'intervention Chablais */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Intervention dans tout le Chablais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Thonon-les-Bains et environs</h3>
              <p className="text-gray-700 mb-4">
                Service de plomberie à Thonon-les-Bains centre, quartiers résidentiels, 
                zones commerciales et industrielles.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Centre-ville Thonon</li>
                <li>• Quartier de la Gare</li>
                <li>• Zone des Ursules</li>
                <li>• Quartier Concise</li>
                <li>• Vongy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Communes du Chablais</h3>
              <p className="text-gray-700 mb-4">
                Plombier dans toutes les communes du Chablais : Évian-les-Bains, 
                Publier, Amphion-les-Bains, Sciez, Douvaine.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Évian-les-Bains</li>
                <li>• Publier</li>
                <li>• Amphion-les-Bains</li>
                <li>• Sciez</li>
                <li>• Douvaine</li>
                <li>• Margencel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Spécificités Thonon */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Plomberie adaptée au climat du Léman
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">🌊 Proximité du Lac Léman</h3>
              <p className="text-gray-700 mb-4">
                Notre expertise en plomberie tient compte de l'humidité du lac Léman et des 
                spécificités climatiques de Thonon-les-Bains.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Protection contre l'humidité</li>
                <li>• Systèmes anti-gel adaptés</li>
                <li>• Ventilation optimisée</li>
                <li>• Matériaux résistants</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">🏔️ Climat Montagnard</h3>
              <p className="text-gray-700 mb-4">
                Installations de chauffage et plomberie adaptées aux variations de température 
                et aux conditions hivernales du Chablais.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Isolation renforcée</li>
                <li>• Chauffage haute performance</li>
                <li>• Protection gel des canalisations</li>
                <li>• Systèmes de dégivrage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarifs Thonon */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Tarifs Plombier Thonon-les-Bains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Dépannage Urgence</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 130€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Déplacement Thonon inclus</li>
                <li>• Diagnostic gratuit</li>
                <li>• Intervention 24h/24</li>
                <li>• Devis transparent</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Entretien Chaudière</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 85€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nettoyage complet</li>
                <li>• Vérification sécurité</li>
                <li>• Réglages optimaux</li>
                <li>• Certificat obligatoire</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Installation Sanitaire</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">Sur devis</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Étude personnalisée</li>
                <li>• Devis détaillé gratuit</li>
                <li>• Installation complète</li>
                <li>• Garantie 2 ans</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            *Tarifs indicatifs pour Thonon-les-Bains et le Chablais
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Plombier à Thonon-les-Bains</h2>
          <p className="text-xl mb-6">
            Water Plomberie intervient rapidement dans tout le Chablais !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33783167613" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              📞 07 83 16 76 13
            </a>
            <Link href="/#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition border-2 border-white">
              💬 Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
