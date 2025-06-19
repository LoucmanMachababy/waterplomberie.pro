"use client";

const faqs = [
  {
    question: "Comment réagir en cas de fuite d'eau à Annecy ?",
    answer: "Coupez l'eau au robinet général, épongez l'eau, puis contactez Water Plomberie pour une intervention rapide 24/7 à Annecy.",
  },
  {
    question: "Quels sont les signes d'une canalisation bouchée ?",
    answer: "Écoulement lent, mauvaises odeurs, bruits inhabituels. Contactez-nous pour un débouchage professionnel !",
  },
  {
    question: "Proposez-vous des interventions d'urgence la nuit ou le week-end ?",
    answer: "Oui, Water Plomberie intervient 24h/24 et 7j/7 à Annecy et alentours pour toute urgence plomberie ou chauffage.",
  },
  {
    question: "Quels types de travaux réalisez-vous ?",
    answer: "Dépannage, installation, rénovation, entretien de plomberie sanitaire, chauffage, robinetterie, WC, douches, etc.",
  },
  {
    question: "Comment demander un devis gratuit ?",
    answer: "Utilisez notre formulaire de contact ou appelez-nous directement. Nous répondons rapidement à toutes les demandes de devis à Annecy.",
  },
];

export default function FaqClient() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
} 