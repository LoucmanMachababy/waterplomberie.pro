import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chauffage Annecy - Installation, Entretien, Dépannage | Water Plomberie",
  description: "Spécialiste chauffage à Annecy : installation chaudière, entretien, réparation radiateurs, ballon eau chaude. Intervention rapide 24/7 en Haute-Savoie. Devis gratuit.",
  keywords: "chauffage annecy, installation chaudière annecy, entretien chauffage, réparation radiateur, ballon eau chaude annecy, chauffagiste haute-savoie",
  alternates: {
    canonical: 'https://www.waterplomberie.pro/services/chauffage',
  },
};

export default function ChauffagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-800 mb-4">
          Chauffage à Annecy - Installation & Entretien
        </h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Water Plomberie, votre spécialiste chauffage à Annecy. Installation, entretien et dépannage 
          de tous types de systèmes de chauffage en Haute-Savoie. Intervention rapide 24/7.
        </p>

        {/* Services chauffage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">🔧 Installation de Chauffage</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ <strong>Chaudières gaz</strong> - Installation et mise en service</li>
              <li>✓ <strong>Chaudières électriques</strong> - Pose et raccordement</li>
              <li>✓ <strong>Radiateurs</strong> - Installation et remplacement</li>
              <li>✓ <strong>Ballons d'eau chaude</strong> - Pose et raccordement</li>
              <li>✓ <strong>Plancher chauffant</strong> - Installation complète</li>
              <li>✓ <strong>Pompes à chaleur</strong> - Installation et maintenance</li>
            </ul>
            <div className="bg-orange-100 p-4 rounded-lg">
              <p className="text-sm text-orange-800">
                <strong>Garantie :</strong> Tous nos équipements sont garantis et installés selon les normes en vigueur.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">🛠️ Entretien & Dépannage</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✓ <strong>Entretien annuel</strong> - Chaudières et systèmes</li>
              <li>✓ <strong>Dépannage urgent</strong> - Intervention 24/7</li>
              <li>✓ <strong>Réparation radiateurs</strong> - Fuite, purge, remplacement</li>
              <li>✓ <strong>Détartrage</strong> - Ballons et circuits</li>
              <li>✓ <strong>Diagnostic panne</strong> - Gratuit et rapide</li>
              <li>✓ <strong>Remplacement pièces</strong> - Pièces d'origine</li>
            </ul>
            <div className="bg-red-100 p-4 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Urgence :</strong> Panne de chauffage ? Nous intervenons en moins de 30 minutes !
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi l'entretien est important */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
            Pourquoi entretenir votre chauffage à Annecy ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-green-500 text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-orange-800 mb-2">Économies d'énergie</h3>
              <p className="text-sm text-gray-700">
                Un chauffage bien entretenu consomme jusqu'à 15% d'énergie en moins
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-500 text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold text-orange-800 mb-2">Sécurité</h3>
              <p className="text-sm text-gray-700">
                Prévention des risques de fuite de gaz et d'intoxication au monoxyde de carbone
              </p>
            </div>
            <div className="text-center">
              <div className="text-purple-500 text-4xl mb-3">⏰</div>
              <h3 className="font-semibold text-orange-800 mb-2">Durée de vie</h3>
              <p className="text-sm text-gray-700">
                Prolonge la durée de vie de vos équipements et évite les pannes
              </p>
            </div>
          </div>
        </div>

        {/* Tarifs indicatifs */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            Tarifs Chauffage à Annecy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 mb-3">Entretien Chaudière</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">À partir de 80€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nettoyage complet</li>
                <li>• Vérification sécurité</li>
                <li>• Réglages optimaux</li>
                <li>• Certificat d'entretien</li>
              </ul>
            </div>
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 mb-3">Dépannage Urgent</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">À partir de 120€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Déplacement inclus</li>
                <li>• Diagnostic gratuit</li>
                <li>• Intervention 24/7</li>
                <li>• Devis transparent</li>
              </ul>
            </div>
            <div className="border border-orange-200 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 mb-3">Installation Radiateur</h3>
              <div className="text-2xl font-bold text-orange-600 mb-2">À partir de 200€</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pose complète</li>
                <li>• Raccordement</li>
                <li>• Mise en service</li>
                <li>• Garantie 2 ans</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            *Tarifs indicatifs - Devis gratuit et personnalisé sur demande
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Besoin d'un chauffagiste à Annecy ?</h2>
          <p className="text-xl mb-6">
            Contactez Water Plomberie pour un devis gratuit et une intervention rapide !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+33783167613" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              📞 Appeler maintenant
            </a>
            <Link href="/#contact" className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition border-2 border-white">
              💬 Devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
