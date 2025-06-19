"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAccepted(localStorage.getItem("cookieAccepted") === "true");
    }
  }, []);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[9999] bg-blue-900 text-white px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-lg animate-fade-in">
      <span>
        Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie de suivi n'est déposé sans votre consentement. <a href="/confidentialite" className="underline text-blue-200">En savoir plus</a>.
      </span>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full shadow transition"
        onClick={() => {
          setAccepted(true);
          if (typeof window !== "undefined") localStorage.setItem("cookieAccepted", "true");
        }}
        aria-label="Accepter les cookies nécessaires"
      >
        OK
      </button>
    </div>
  );
} 