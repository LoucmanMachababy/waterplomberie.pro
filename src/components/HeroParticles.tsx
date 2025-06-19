"use client";
import { useEffect, useRef } from "react";

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const bubbles = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: canvas.offsetHeight + Math.random() * 100,
      r: 8 + Math.random() * 16,
      speed: 0.5 + Math.random() * 1.2,
      alpha: 0.2 + Math.random() * 0.4,
    }));

    function draw() {
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.5 }}
      aria-hidden
    />
  );
} 