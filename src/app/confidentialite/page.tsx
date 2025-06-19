import React from "react";

export const metadata = {
  title: "Politique de confidentialité - Water Plomberie Annecy",
  description: "Politique de confidentialité et gestion des données personnelles du site Water Plomberie Annecy.",
};

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Politique de confidentialité</h1>
      <div className="space-y-6 text-gray-800 text-base">
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Collecte des données</h2>
          <p>
            Les informations recueillies via le formulaire de contact (nom, email, téléphone, message) sont strictement utilisées pour répondre à votre demande et ne sont jamais transmises à des tiers sans votre consentement.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Utilisation des données</h2>
          <p>
            Vos données sont utilisées uniquement pour vous recontacter et établir un devis ou une relation commerciale. Elles ne sont pas utilisées à des fins de prospection ou de marketing sans votre accord.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Durée de conservation</h2>
          <p>
            Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis supprimées au bout de 12 mois maximum.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Droits des utilisateurs</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition, de suppression et de portabilité de vos données. Pour exercer vos droits, contactez-nous à <a href="mailto:watter.plomberie@gmail.com" className="text-blue-700 hover:underline">watter.plomberie@gmail.com</a>.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Cookies</h2>
          <p>
            Ce site n&apos;utilise que des cookies strictement nécessaires à son fonctionnement (aucun cookie de tracking ou publicitaire sans consentement explicite). Si des outils de mesure d&apos;audience ou de suivi sont ajoutés, un bandeau de consentement s&apos;affichera.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Contact</h2>
          <p>
            Pour toute question relative à la gestion de vos données personnelles, contactez-nous à <a href="mailto:watter.plomberie@gmail.com" className="text-blue-700 hover:underline">watter.plomberie@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
} 