"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroParticles() {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    // Positions fixes pour éviter l'hydratation mismatch
    const bubbles = [
      { x: 100, y: 500, r: 12, speed: 0.8, alpha: 0.3 },
      { x: 200, y: 520, r: 16, speed: 1.0, alpha: 0.4 },
      { x: 300, y: 480, r: 10, speed: 0.6, alpha: 0.5 },
      { x: 150, y: 510, r: 14, speed: 0.9, alpha: 0.3 },
      { x: 250, y: 490, r: 18, speed: 1.2, alpha: 0.4 },
      { x: 350, y: 530, r: 8, speed: 0.7, alpha: 0.6 },
      { x: 50, y: 540, r: 20, speed: 1.1, alpha: 0.2 },
      { x: 400, y: 470, r: 15, speed: 0.8, alpha: 0.5 },
      { x: 180, y: 550, r: 11, speed: 0.9, alpha: 0.3 },
      { x: 320, y: 460, r: 13, speed: 1.0, alpha: 0.4 },
      { x: 80, y: 520, r: 17, speed: 0.7, alpha: 0.3 },
      { x: 280, y: 500, r: 9, speed: 1.3, alpha: 0.5 },
      { x: 380, y: 510, r: 19, speed: 0.6, alpha: 0.2 },
      { x: 120, y: 480, r: 12, speed: 0.8, alpha: 0.4 },
      { x: 220, y: 540, r: 14, speed: 1.1, alpha: 0.3 },
      { x: 340, y: 490, r: 16, speed: 0.9, alpha: 0.5 },
      { x: 60, y: 500, r: 10, speed: 1.0, alpha: 0.6 },
      { x: 360, y: 520, r: 18, speed: 0.7, alpha: 0.2 }
    ];

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const b of bubbles) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(59,130,246,${b.alpha})`;
        ctx.fill();
        b.y -= b.speed;
        if (b.y + b.r < 0) {
          b.x = Math.random() * canvas.offsetWidth;
          b.y = canvas.offsetHeight + b.r;
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.5 }}
      aria-hidden
    />
  );
} 