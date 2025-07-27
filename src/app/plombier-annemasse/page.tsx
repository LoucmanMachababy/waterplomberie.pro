import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plombier Annemasse - Urgence 24/7, Frontalier Suisse | Water Plomberie",
  description: "Plombier à Annemasse : intervention urgence 24/7, installation chauffage, rénovation sanitaire. Service frontalier Suisse, Gaillard, Ambilly. Devis gratuit.",
  keywords: "plombier annemasse, urgence plomberie annemasse, chauffage annemasse, plombier gaillard, plombier ambilly, plombier frontalier suisse",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/plombier-annemasse',
  },
};

export default function PlombierAnnemassePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Plombier Annemasse - Service Frontalier 24/7
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            <strong>Water Plomberie</strong> intervient à Annemasse et dans l'agglomération franco-genevoise. 
            Urgence plomberie 24/7, service frontalier Suisse. Devis gratuit, intervention rapide.
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

        {/* Services à Annemasse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <div className="text-red-500 text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">Urgence Plomberie Annemasse</h2>
            <p className="text-gray-700 mb-4">
              Fuite d'eau, canalisation bouchée, panne de chauffage ? Intervention d'urgence 24h/24 
              à Annemasse, Gaillard, Ambilly, Ville-la-Grand.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Intervention rapide frontalier</li>
              <li>✓ Disponible 24h/24 et 7j/7</li>
              <li>✓ Diagnostic gratuit</li>
              <li>✓ Service bilingue FR/EN</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <div className="text-orange-500 text-4xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Chauffage Annemasse</h2>
            <p className="text-gray-700 mb-4">
              Installation et entretien de chauffage à Annemasse. Chaudières, radiateurs, 
              systèmes adaptés aux normes françaises et suisses.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Installation chaudières performantes</li>
              <li>✓ Entretien annuel obligatoire</li>
              <li>✓ Dépannage chauffage urgent</li>
              <li>✓ Normes FR et CH</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-blue-500 text-4xl mb-4">🚿</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Sanitaire Annemasse</h2>
            <p className="text-gray-700 mb-4">
              Plomberie sanitaire à Annemasse : installation WC, robinetterie, douche, 
              rénovation salle de bain pour frontaliers.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Rénovation salle de bain</li>
              <li>✓ Installation WC et lavabo</li>
              <li>✓ Douche à l'italienne</li>
              <li>✓ Équipements haut de gamme</li>
            </ul>
          </div>
        </div>

        {/* Spécificité frontalier */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            🇨🇭 Service Frontalier Spécialisé
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Expertise Frontalière</h3>
              <p className="text-gray-700 mb-4">
                Water Plomberie comprend les spécificités des logements frontaliers : 
                normes suisses, équipements haut de gamme, exigences qualité.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Connaissance normes CH</li>
                <li>• Équipements premium</li>
                <li>• Service bilingue</li>
                <li>• Facturation adaptée</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-4">Agglomération Franco-Genevoise</h3>
              <p className="text-gray-700 mb-4">
                Intervention dans toute l'agglomération franco-genevoise : Annemasse, 
                Gaillard, Ambilly, Saint-Julien, proximité Genève.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Annemasse centre</li>
                <li>• Gaillard</li>
                <li>• Ambilly</li>
                <li>• Ville-la-Grand</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Zones d'intervention */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Zones d'intervention Annemasse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Annemasse Centre</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Centre-ville</li>
                <li>• Quartier de la Gare</li>
                <li>• Zone commerciale</li>
                <li>• Résidences neuves</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Communes Limitrophes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gaillard</li>
                <li>• Ambilly</li>
                <li>• Ville-la-Grand</li>
                <li>• Étrembières</li>
              </ul>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Secteur Frontalier</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Proche frontière CH</li>
                <li>• Résidences frontaliers</li>
                <li>• Quartiers résidentiels</li>
                <li>• Zones pavillonnaires</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tarifs Annemasse */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Tarifs Plombier Annemasse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Dépannage Urgence</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 125€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Déplacement Annemasse inclus</li>
                <li>• Diagnostic gratuit</li>
                <li>• Intervention 24h/24</li>
                <li>• Facturation transparente</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Installation Premium</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">Sur devis</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Équipements haut de gamme</li>
                <li>• Normes suisses respectées</li>
                <li>• Installation soignée</li>
                <li>• Garantie étendue</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Entretien Chaudière</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 85€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entretien complet</li>
                <li>• Vérification sécurité</li>
                <li>• Certificat obligatoire</li>
                <li>• Conseils optimisation</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            *Tarifs adaptés au secteur frontalier - Devis gratuit
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Plombier Annemasse - Service Frontalier</h2>
          <p className="text-xl mb-6">
            Water Plomberie, votre plombier de confiance dans l'agglomération franco-genevoise !
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
