"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error swiper types are not compatible with Next.js build
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Star, MapPin, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mohamed Ben Amar",
    location: "Annecy",
    rating: 5,
    text: "Hamza a été incroyablement réactif. Un vrai professionnel ! Il est arrivé en 20 minutes et a résolu le problème rapidement.",
    service: "Urgence Fuite",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Lucas Delacroix",
    location: "Seynod",
    rating: 5,
    text: "Je recommande Water Plomberie. Leur service d'urgence m'a permis de régler une panne de chauffage en plein hiver.",
    service: "Dépannage",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Sophie Martin",
    location: "Cran-Gevrier",
    rating: 5,
    text: "Travail rapide et soigné, je recommande à 100%. Hamza a rénové entièrement notre salle de bain, le résultat est magnifique !",
    service: "Rénovation",
    date: "Il y a 3 semaines",
  },
  {
    id: 4,
    name: "Pierre Dubois",
    location: "Thonon",
    rating: 5,
    text: "Installation d'une nouvelle chaudière réalisée dans les temps et avec un excellent rapport qualité-prix.",
    service: "Installation",
    date: "Il y a 1 semaine",
  },
  {
    id: 5,
    name: "Marie Rousseau",
    location: "Annemasse",
    rating: 5,
    text: "Intervention très rapide pour un WC bouché. Satisfaite du service et du tarif transparent.",
    service: "Débouchage",
    date: "Il y a 4 jours",
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#fbbf24" : "none"}
          className={i < rating ? "text-amber-400" : "text-slate-200 dark:text-slate-700"}
        />
      ))}
    </div>
  );
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

export default function TestimonialsWithPhotos() {
  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-slate-300 dark:!bg-slate-700 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !w-8 !rounded-full'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="!pb-16"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="h-full bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-8 relative flex flex-col group border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
              <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/20 rotate-180" size={60} />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl ring-4 ring-white dark:ring-slate-800 shadow-lg">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-full shadow-md">
                    <BadgeCheck size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{testimonial.name}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                    <MapPin size={12} />
                    {testimonial.location}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-6">
                "{testimonial.text}"
              </blockquote>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold uppercase tracking-wide">
                <span className="text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
                <span className="text-slate-400">
                  {testimonial.date}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
