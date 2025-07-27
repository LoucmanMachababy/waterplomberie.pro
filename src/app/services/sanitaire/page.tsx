import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plomberie Sanitaire Annecy - Salle de Bain, WC, Robinetterie | Water Plomberie",
  description: "Spécialiste plomberie sanitaire à Annecy : rénovation salle de bain, installation WC, robinetterie, douche italienne. Devis gratuit, intervention rapide Haute-Savoie.",
  keywords: "plomberie sanitaire annecy, rénovation salle de bain annecy, installation wc, robinetterie annecy, douche italienne, plombier sanitaire haute-savoie",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/services/sanitaire',
  },
};

export default function SanitairePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Plomberie Sanitaire à Annecy - Rénovation & Installation
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Water Plomberie, votre expert en plomberie sanitaire à Annecy. Rénovation complète de salle de bain, 
          installation WC, robinetterie et tous travaux sanitaires en Haute-Savoie.
        </p>

        {/* Services sanitaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">🚿 Rénovation Salle de Bain</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ <strong>Conception sur mesure</strong> - Étude personnalisée</li>
              <li>✓ <strong>Douche à l'italienne</strong> - Installation complète</li>
              <li>✓ <strong>Baignoire</strong> - Pose et raccordement</li>
              <li>✓ <strong>Carrelage et faïence</strong> - Pose professionnelle</li>
              <li>✓ <strong>Éclairage et ventilation</strong> - Installation électrique</li>
              <li>✓ <strong>Meuble vasque</strong> - Pose et raccordement</li>
            </ul>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Avant/Après :</strong> Découvrez nos réalisations de rénovation complète !
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">🚽 Installation Sanitaire</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ <strong>WC et toilettes</strong> - Installation et remplacement</li>
              <li>✓ <strong>Robinetterie</strong> - Mitigeurs, mélangeurs</li>
              <li>✓ <strong>Lavabos et vasques</strong> - Pose et raccordement</li>
              <li>✓ <strong>Éviers de cuisine</strong> - Installation complète</li>
              <li>✓ <strong>Canalisations</strong> - Création et réparation</li>
              <li>✓ <strong>Évacuations</strong> - Raccordement aux égouts</li>
            </ul>
            <div className="bg-green-100 p-4 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Garantie :</strong> 2 ans sur toutes nos installations sanitaires.
              </p>
            </div>
          </div>
        </div>

        {/* Nos réalisations */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Nos Réalisations à Annecy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-blue-500 text-4xl mb-3 text-center">🏠</div>
              <h3 className="font-semibold text-blue-800 mb-2 text-center">Rénovation Complète</h3>
              <p className="text-sm text-gray-700 text-center">
                Transformation totale d'une salle de bain de 8m² à Annecy-le-Vieux
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-cyan-500 text-4xl mb-3 text-center">✨</div>
              <h3 className="font-semibold text-blue-800 mb-2 text-center">Douche Italienne</h3>
              <p className="text-sm text-gray-700 text-center">
                Création d'une douche à l'italienne moderne à Seynod
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-purple-500 text-4xl mb-3 text-center">🔧</div>
              <h3 className="font-semibold text-blue-800 mb-2 text-center">WC Suspendu</h3>
              <p className="text-sm text-gray-700 text-center">
                Installation de WC suspendus avec bâti-support à Cran-Gevrier
              </p>
            </div>
          </div>
        </div>

        {/* Étapes de rénovation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Les Étapes de Votre Rénovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Visite & Devis</h3>
              <p className="text-sm text-gray-600">
                Visite gratuite à domicile et devis détaillé sous 24h
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Conception</h3>
              <p className="text-sm text-gray-600">
                Plans 3D et choix des matériaux selon vos goûts
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Réalisation</h3>
              <p className="text-sm text-gray-600">
                Travaux réalisés par nos artisans qualifiés
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Livraison</h3>
              <p className="text-sm text-gray-600">
                Réception des travaux et garantie 2 ans
              </p>
            </div>
          </div>
        </div>

        {/* Tarifs */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
            Tarifs Plomberie Sanitaire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Installation WC</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 150€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dépose ancien WC</li>
                <li>• Pose nouveau WC</li>
                <li>• Raccordement</li>
                <li>• Test étanchéité</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Robinetterie</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">À partir de 80€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dépose ancienne</li>
                <li>• Pose mitigeur</li>
                <li>• Raccordement</li>
                <li>• Réglages</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Rénovation Complète</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">Sur devis</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Étude personnalisée</li>
                <li>• Devis détaillé</li>
                <li>• Travaux clé en main</li>
                <li>• Garantie 2 ans</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Projet de rénovation sanitaire ?</h2>
          <p className="text-xl mb-6">
            Contactez Water Plomberie pour transformer votre salle de bain !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33783167613" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              📞 Appeler maintenant
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
