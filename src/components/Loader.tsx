"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
        <ellipse cx="32" cy="48" rx="16" ry="6" fill="#3b82f6" opacity="0.2" />
        <path d="M32 8C32 8 16 32 32 56C48 32 32 8 32 8Z" fill="#3b82f6" />
        <circle cx="32" cy="28" r="6" fill="#60a5fa" />
      </svg>
    </div>
  );
} 