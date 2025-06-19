import React from "react";

export const metadata = {
  title: "Mentions légales - Water Plomberie Annecy",
  description: "Mentions légales du site Water Plomberie Annecy, artisan plombier à Annecy, Haute-Savoie.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Mentions légales</h1>
      <div className="space-y-6 text-gray-800 text-base">
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Éditeur du site</h2>
          <p>
            <b>Nom :</b> Hamza DJAFFER<br />
            <b>Entreprise :</b> Water Plomberie (auto-entrepreneur)<br />
            <b>Adresse :</b> 74000 Annecy, France<br />
            <b>Téléphone :</b> <a href="tel:+33783167613" className="text-blue-700 hover:underline">+33 7 83 16 76 13</a><br />
            <b>Email :</b> <a href="mailto:watter.plomberie@gmail.com" className="text-blue-700 hover:underline">watter.plomberie@gmail.com</a><br />
            <b>SIRET :</b> [À compléter]<br />
            <b>Responsable de publication :</b> Hamza DJAFFER<br />
            <b>Statut :</b> Auto-entrepreneur<br />
            <b>TVA intracom :</b> Non applicable (auto-entrepreneur)
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Hébergement</h2>
          <p>
            <b>Hébergeur :</b> GitHub Inc.<br />
            <b>Adresse :</b> 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />
            <b>Site :</b> <a href="https://github.com" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">github.com</a>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu du site (textes, images, logos, graphismes, etc.) est la propriété exclusive de Water Plomberie ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Hamza DJAFFER.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Contact</h2>
          <p>
            Pour toute question, vous pouvez nous contacter par email à <a href="mailto:watter.plomberie@gmail.com" className="text-blue-700 hover:underline">watter.plomberie@gmail.com</a> ou par téléphone au <a href="tel:+33783167613" className="text-blue-700 hover:underline">+33 7 83 16 76 13</a>.
          </p>
        </section>
      </div>
    </div>
  );
} 