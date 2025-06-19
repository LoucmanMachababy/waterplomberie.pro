import Link from "next/link";

export const metadata = {
  title: "Urgence Plomberie Annecy - Water Plomberie",
  description: "Urgence plomberie à Annecy : appelez directement, conseils immédiats, intervention rapide 24/7."
};

const urgenceFaq = [
  {
    question: "J&apos;ai une fuite d&apos;eau, que faire en attendant le plombier ?",
    answer: "Coupez l&apos;eau au robinet général, épongez l&apos;eau, coupez l&apos;électricité si besoin, puis appelez-nous immédiatement.",
  },
  {
    question: "Quels sont les cas d'urgence plomberie ?",
    answer: "Fuite importante, canalisation bouchée, absence d'eau chaude, chauffage en panne, WC inutilisable, etc.",
  },
  {
    question: "Intervenez-vous la nuit ou le week-end ?",
    answer: "Oui, nous intervenons 24h/24 et 7j/7 à Annecy et alentours pour toute urgence plomberie ou chauffage.",
  },
];

export default function UrgencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-white py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-6">URGENCE PLOMBERIE</h1>
      <a href="tel:+33783167613" className="bg-red-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg mb-8 hover:bg-red-700 transition animate-pulse">APPELER LE PLOMBIER IMMÉDIATEMENT</a>
      <div className="max-w-2xl w-full bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Conseils immédiats</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Coupez l&apos;eau au robinet général</li>
          <li>Épongez l&apos;eau pour limiter les dégâts</li>
          <li>Coupez l&apos;électricité si la fuite est proche d&apos;une prise</li>
          <li>Appelez Water Plomberie : <b>+33 7 83 16 76 13</b></li>
        </ul>
      </div>
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">FAQ Urgence</h2>
        <div className="flex flex-col gap-4">
          {urgenceFaq.map((faq, i) => (
            <div key={i} className="bg-red-50 rounded-xl shadow p-4">
              <h3 className="text-lg font-bold text-red-700 mb-1">{faq.question}</h3>
              <p className="text-gray-800">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/" className="mt-10 text-blue-700 hover:underline">Retour à l&apos;accueil</Link>
    </div>
  );
} 