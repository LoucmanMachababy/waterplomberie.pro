"use client";
import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Préchargement des images critiques
    const criticalImages = [
      '/logo.png',
      '/service2.jpg',
      '/salledebainavant.jpeg',
      '/aprestoilette.jpeg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Optimisation des polices
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Lazy loading pour les images non critiques
    const lazyImages = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.lazy || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Nettoyage
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null; // Ce composant n'affiche rien
}
