"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error: Swiper 8 types are inexact, EffectCoverflow existe bien à l'exécution
import { EffectCoverflow, Pagination } from "swiper";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([EffectCoverflow, Pagination]);

const images = [
  { src: "/service2.jpg", alt: "Salle de bain rénovée" },
  { src: "/salledebainavant.jpeg", alt: "Salle de bain avant" },
  { src: "/aprestoilette.jpeg", alt: "Toilette rénovée" },
  { src: "/AVANTTOILETTE.jpeg", alt: "Toilette avant" },
  { src: "/urgence-plomberie.jpg", alt: "Urgence plomberie" },
];

export default function RealisationCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1.2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="realisation-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="w-64 h-80 flex items-center justify-center">
            <div className="relative w-60 h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 