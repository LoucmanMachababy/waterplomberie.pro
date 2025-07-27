"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error swiper types are not compatible with Next.js build
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Mohamed BEN AMAR",
    location: "Annecy",
    rating: 5,
    text: "Hamza a été incroyablement réactif lors de mon problème de fuite. Un vrai professionnel ! Il est arrivé en 20 minutes et a résolu le problème rapidement.",
    service: "Urgence plomberie",
    date: "Il y a 2 semaines",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    name: "Lucas DELACROIX",
    location: "Seynod",
    rating: 5,
    text: "Je recommande Water Plomberie. Leur service d'urgence m'a permis de régler une panne de chauffage en plein hiver. Très professionnel et prix correct.",
    service: "Dépannage chauffage",
    date: "Il y a 1 mois",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    name: "Sophie MARTIN",
    location: "Cran-Gevrier",
    rating: 5,
    text: "Travail rapide et soigné, je recommande à 100%. Hamza a rénové entièrement notre salle de bain, le résultat est magnifique !",
    service: "Rénovation salle de bain",
    date: "Il y a 3 semaines",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 4,
    name: "Pierre DUBOIS",
    location: "Thonon-les-Bains",
    rating: 5,
    text: "Excellent service ! Installation d'une nouvelle chaudière réalisée dans les temps et avec un excellent rapport qualité-prix. Je recommande vivement.",
    service: "Installation chauffage",
    date: "Il y a 1 semaine",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 5,
    name: "Marie ROUSSEAU",
    location: "Annemasse",
    rating: 5,
    text: "Intervention très rapide pour un WC bouché. Hamza est arrivé en 30 minutes et a tout réglé. Très satisfaite du service et du tarif transparent.",
    service: "Débouchage",
    date: "Il y a 4 jours",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      ))}
    </div>
  );
};

export default function TestimonialsWithPhotos() {
  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-blue-500',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-700'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          }
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header avec photo et infos */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`Photo de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-blue-800">{testimonial.name}</h4>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{testimonial.location}</p>
                  <div className="flex items-center gap-2 text-xs text-blue-600">
                    <span className="bg-blue-100 px-2 py-1 rounded-full">{testimonial.service}</span>
                    <span className="text-gray-500">{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Témoignage */}
              <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              {/* Badge vérifié */}
              <div className="flex items-center gap-2 text-sm text-green-600">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Avis vérifié
                </span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Statistiques en bas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-700 mb-1">150+</div>
            <div className="text-sm text-gray-600">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-700 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Note moyenne</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-700 mb-1">7 ans</div>
            <div className="text-sm text-gray-600">D'expérience</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
