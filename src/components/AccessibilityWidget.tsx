"use client";

export default function AccessibilityWidget() {
  return (
    <div id="accessibility-widget" className="hidden md:flex fixed bottom-6 left-6 z-50 flex-col gap-2">
      <button id="increase-text" className="bg-blue-700 text-white rounded-full p-3 shadow hover:bg-blue-800 transition" aria-label="Augmenter la taille du texte" onClick={() => { document.body.style.fontSize = '1.25em'; }}>
        A+
      </button>
      <button id="decrease-text" className="bg-blue-700 text-white rounded-full p-3 shadow hover:bg-blue-800 transition" aria-label="Réduire la taille du texte" onClick={() => { document.body.style.fontSize = '1em'; }}>
        A-
      </button>
      <button id="toggle-contrast" className="bg-yellow-500 text-black rounded-full p-3 shadow hover:bg-yellow-600 transition" aria-label="Activer/Désactiver le contraste élevé" onClick={() => { document.body.classList.toggle('high-contrast'); }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg>
      </button>
    </div>
  );
}
