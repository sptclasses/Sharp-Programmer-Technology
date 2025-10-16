"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTrophy, faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ResultItem = { icon: IconDefinition; number: string; label: string };

export default function Results(): React.ReactElement {
  const results: ResultItem[] = [
    { icon: faUsers, number: "1200+", label: "Students Graduated" },
    { icon: faTrophy, number: "98%", label: "Exam Success Rate" },
    { icon: faBriefcase, number: "85%", label: "Job Placement" },
    { icon: faStar, number: "4.9/5", label: "Student Satisfaction" },
  ];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const container = containerRef.current;
  if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

  let width = container.clientWidth;
  let height = container.clientHeight;
  const dpr = Math.max(1, window.devicePixelRatio || 1);

    const setSize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

  // allow canvas container to receive pointer events for hover interactions
  container.style.pointerEvents = 'auto';

  // Star particle
  const mouse = { x: null as number | null, y: null as number | null, radius: 100 };
  // color palette (light theme) similar to provided HTML snippet
  const paletteHex = ['#555','#ff6b6b','#ffb56b','#6bafff','#6bffb5','#d56bff','#fff66b'];

  class Star {
        x!: number;
        y!: number;
        vx!: number;
        vy!: number;
        size!: number;
        baseSize!: number;
        alpha!: number;
        opacitySpeed!: number;
        history!: Array<{ x: number; y: number; opacity: number }>;
    color!: { r: number; g: number; b: number };
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + Math.random() * 50;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        // base sizes per original snippet
        this.size = Math.random() * 3 + 2;
        this.baseSize = this.size;
        this.alpha = Math.random() * 0.7 + 0.3;
        this.opacitySpeed = Math.random() * 0.015 + 0.005;
  this.history = [{ x: this.x, y: this.y, opacity: this.alpha }];
        const hex = paletteHex[Math.floor(Math.random() * paletteHex.length)];
        this.color = hexToRgb(hex);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if(this.x > width) this.x = 0;
        if(this.x < 0) this.x = width;
        if(this.y > height) this.y = 0;
        if(this.y < 0) this.y = height;

        this.alpha += this.opacitySpeed;
        if(this.alpha > 0.9 || this.alpha < 0.3) this.opacitySpeed *= -1;

        this.history.push({ x: this.x, y: this.y, opacity: this.alpha });
        if (this.history.length > 8) this.history.shift();
        if (this.y + this.size < -10 || this.x < -50 || this.x > width + 50) {
          this.reset(false);
        }
        // react to mouse hover: repel (keep growth subtle per original)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const repel = (mouse.radius - dist) / mouse.radius * 3;
            this.x += Math.cos(angle) * repel;
            this.y += Math.sin(angle) * repel;
          }
        }
        if(Math.random() < 0.002) this.alpha = 1;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        // tail - draw as small 5-point stars (use history entries)
        for (let i = 0; i < this.history.length; i++) {
          const h = this.history[i];
          ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${h.opacity * 0.3})`;
          drawStar(ctx, h.x, h.y, 5, this.size / 1.5, this.size / 3);
        }

        ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`;
        drawStar(ctx, this.x, this.y, 5, this.size, this.size / 2);
        ctx.restore();
      }
    }

  let stars: Star[] = [];

    const createStars = () => {
      stars = [];
      for (let i = 0; i < 120; i++) {
        const size = Math.random() * 3 + 2;
        const x = Math.random() * width;
        const y = Math.random() * height;
        const speedX = (Math.random() - 0.5) * 0.25;
        const speedY = (Math.random() - 0.5) * 0.25;
        const colorHex = paletteHex[Math.floor(Math.random() * paletteHex.length)];
        stars.push(new Star());
        // after creating, override properties to match original constructor expectations
        const s = stars[stars.length - 1];
        s.x = x;
        s.y = y;
        s.vx = speedX;
        s.vy = speedY;
        s.size = size;
        s.baseSize = size;
        s.color = hexToRgb(colorHex);
        s.alpha = Math.random() * 0.7 + 0.3;
      }
    };

    createStars();

    let last = performance.now();

    const render = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      // subtle background gradient
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, "rgba(255,255,255,0.02)");
      g.addColorStop(1, "rgba(0,0,0,0.02)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (const s of stars) {
        s.update();
        s.draw(ctx);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setSize();
        createStars();
      }, 150);
    };

    // mouse handlers for hover interaction
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

  window.addEventListener("resize", onResize);
  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      // reset pointer events to original (none) to avoid blocking underlying interactions
      container.style.pointerEvents = 'none';
    };
    // debounce for resize to avoid flapping
  }, []);

    return (
      <section id="results" ref={containerRef} className="relative py-24 bg-gray-100 text-black overflow-hidden min-h-[80vh] flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="relative max-w-6xl w-full mx-auto px-5 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Our Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const cardClass = [
                "bg-gradient-to-br from-indigo-600 to-blue-500 text-white",
                "bg-gradient-to-br from-pink-500 to-red-500 text-white",
                "bg-gradient-to-br from-teal-500 to-green-400 text-black",
                "bg-gradient-to-br from-orange-500 to-yellow-400 text-black",
              ][index % 4];

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden p-8 rounded-3xl shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 ${cardClass}`}
                >
                  <div className="text-4xl md:text-5xl mb-4">
                    <FontAwesomeIcon icon={result.icon} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{result.number}</h3>
                  <p className="text-lg opacity-90">{result.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}

// small helper: draw a star shape on canvas
function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.closePath();
  ctx.fill();
}

// small helper: convert hex to rgb
function hexToRgb(hex: string) {
  const parsed = hex.replace('#', '');
  const bigint = parseInt(parsed, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
