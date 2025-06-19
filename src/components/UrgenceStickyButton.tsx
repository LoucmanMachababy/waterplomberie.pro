"use client";
import { usePathname } from "next/navigation";

export default function UrgenceStickyButton() {
  const pathname = usePathname();
  if (pathname === "/urgence") return null;
  return (
    <a
      href="/urgence"
      className="fixed bottom-24 right-6 z-40 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all animate-bounce border-2 border-white"
      aria-label="Urgence plomberie Annecy"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14z" />
      </svg>
      Urgence
    </a>
  );
} 