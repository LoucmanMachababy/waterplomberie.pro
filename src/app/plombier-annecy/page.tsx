import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plombier Annecy - Urgence 24/7, Devis Gratuit | Water Plomberie",
  description: "Plombier à Annecy : intervention urgence 24/7, installation chauffage, rénovation salle de bain, dépannage. Devis gratuit, plombier professionnel Annecy centre, Annecy-le-Vieux.",
  keywords: "plombier annecy, urgence plomberie annecy, chauffage annecy, plombier annecy centre, plombier annecy le vieux, dépannage plomberie annecy, rénovation salle de bain annecy",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/plombier-annecy',
  },
};

export default function PlombierAnnecyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Plombier à Annecy - Intervention Rapide 24/7
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            <strong>Water Plomberie</strong>, votre plombier de confiance à Annecy. Urgence 24/7, 
            installation chauffage, rénovation sanitaire. Devis gratuit, intervention en moins de 30 minutes.
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

        {/* Services à Annecy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <div className="text-red-500 text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">Urgence Plomberie Annecy</h2>
            <p className="text-gray-700 mb-4">
              Fuite d&apos;eau, canalisation bouchée, panne de chauffage ? Intervention d&apos;urgence 24h/24
              à Annecy centre, Annecy-le-Vieux, Novel, Meythet.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Intervention en moins de 30 minutes</li>
              <li>✓ Disponible 24h/24 et 7j/7</li>
              <li>✓ Diagnostic gratuit</li>
              <li>✓ Réparation immédiate si possible</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <div className="text-orange-500 text-4xl mb-4">🔥</div>
            <h2 className="text-2xl font-bold text-orange-800 mb-4">Chauffage Annecy</h2>
            <p className="text-gray-700 mb-4">
              Installation, entretien et dépannage de chauffage à Annecy. Chaudières, radiateurs,
              ballons d&apos;eau chaude, pompes à chaleur.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Installation de chaudières gaz/électrique</li>
              <li>✓ Entretien annuel obligatoire</li>
              <li>✓ Dépannage chauffage urgent</li>
              <li>✓ Remplacement radiateurs</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="text-blue-500 text-4xl mb-4">🚿</div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Rénovation Salle de Bain</h2>
            <p className="text-gray-700 mb-4">
              Rénovation complète de salle de bain à Annecy. Douche italienne, WC, robinetterie, 
              carrelage. Projet clé en main.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Conception sur mesure</li>
              <li>✓ Douche à l&apos;italienne</li>
              <li>✓ Installation WC suspendu</li>
              <li>✓ Pose carrelage et faïence</li>
            </ul>
          </div>
        </div>

        {/* Zones d&apos;intervention à Annecy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Zones d'intervention à Annecy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Annecy Centre-Ville</h3>
              <p className="text-gray-700 mb-4">
                Intervention rapide dans le centre historique d&apos;Annecy : Vieille Ville,
                quartier de la gare, Courier, Parmelan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vieille Ville d'Annecy</li>
                <li>• Quartier de la Gare</li>
                <li>• Avenue de Genève</li>
                <li>• Rue Carnot</li>
                <li>• Place des Cordeliers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Communes d'Annecy</h3>
              <p className="text-gray-700 mb-4">
                Service de plomberie dans toutes les communes d&apos;Annecy :
                Annecy-le-Vieux, Cran-Gevrier, Meythet, Seynod, Pringy.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Annecy-le-Vieux</li>
                <li>• Cran-Gevrier</li>
                <li>• Meythet</li>
                <li>• Seynod</li>
                <li>• Pringy</li>
                <li>• Novel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pourquoi choisir notre plombier à Annecy */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Pourquoi choisir Water Plomberie à Annecy ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-blue-500 text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-blue-800 mb-2">Rapidité</h3>
              <p className="text-sm text-gray-700">
                Intervention en moins de 30 minutes sur Annecy et communes
              </p>
            </div>
            <div className="text-center">
              <div className="text-green-500 text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-blue-800 mb-2">Tarifs Transparents</h3>
              <p className="text-sm text-gray-700">
                Devis gratuit et détaillé, pas de surprise sur la facture
              </p>
            </div>
            <div className="text-center">
              <div className="text-purple-500 text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold text-blue-800 mb-2">Garantie</h3>
              <p className="text-sm text-gray-700">
                Garantie 2 ans sur tous nos travaux de plomberie
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-4xl mb-3">👨‍🔧</div>
              <h3 className="font-semibold text-blue-800 mb-2">Expertise</h3>
              <p className="text-sm text-gray-700">
                7 ans d&apos;expérience en plomberie à Annecy
              </p>
            </div>
          </div>
        </div>

        {/* Tarifs plombier Annecy */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Tarifs Plombier Annecy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Dépannage Urgence</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 120€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Déplacement inclus sur Annecy</li>
                <li>• Diagnostic gratuit</li>
                <li>• Intervention 24h/24</li>
                <li>• Devis transparent</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Installation WC</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 150€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dépose ancien WC</li>
                <li>• Pose nouveau WC</li>
                <li>• Raccordement complet</li>
                <li>• Test étanchéité</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Entretien Chaudière</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 80€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nettoyage complet</li>
                <li>• Vérification sécurité</li>
                <li>• Réglages optimaux</li>
                <li>• Certificat d&apos;entretien</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            *Tarifs indicatifs pour Annecy - Devis gratuit et personnalisé
          </p>
        </div>

        {/* Contact plombier Annecy */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Besoin d&apos;un plombier à Annecy ?</h2>
          <p className="text-xl mb-6">
            Contactez Water Plomberie pour une intervention rapide et professionnelle !
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
