"use client";

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTrophy, faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";

type ResultItem = { icon: any; number: string; label: string };

export default function Results(): React.ReactElement {
  const results: ResultItem[] = [
    { icon: faUsers, number: "1200+", label: "Students Graduated" },
    { icon: faTrophy, number: "98%", label: "Exam Success Rate" },
    { icon: faBriefcase, number: "85%", label: "Job Placement" },
    { icon: faStar, number: "4.9/5", label: "Student Satisfaction" },
  ];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
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

    // Star particle
  // color palette (light theme) similar to provided HTML snippet
  const paletteHex = ['#555','#ff6b6b','#ffb56b','#6bafff','#6bffb5','#d56bff','#fff66b'];

  class Star {
        x!: number;
        y!: number;
        vx!: number;
        vy!: number;
        size!: number;
        alpha!: number;
        history!: [number, number][];
    color!: { r: number; g: number; b: number };
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + Math.random() * 50;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = -1 - Math.random() * 1.5;
        this.size = 0.5 + Math.random() * 1.8;
        this.alpha = 0.3 + Math.random() * 0.7;
        this.history = [[this.x, this.y]];
        const hex = paletteHex[Math.floor(Math.random() * paletteHex.length)];
        this.color = hexToRgb(hex);
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.history.push([this.x, this.y]);
        if (this.history.length > 6) this.history.shift();
        if (this.y + this.size < -10 || this.x < -50 || this.x > width + 50) {
          this.reset(false);
        }
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        // tail
        // tail
        ctx.beginPath();
        for (let i = 0; i < this.history.length; i++) {
          const [hx, hy] = this.history[i];
          const t = i / Math.max(1, this.history.length - 1);
          ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${t * 0.45})`;
          ctx.beginPath();
          ctx.arc(hx, hy, Math.max(0.6, this.size * (0.6 - t * 0.4)), 0, Math.PI * 2);
          ctx.fill();
        }
        // head
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.alpha})`;
        ctx.fill();
        ctx.restore();
      }
    }

  let stars: Star[] = [];

    const createStars = () => {
      const area = width * height;
      const count = Math.max(60, Math.min(220, Math.floor(area / 4000)));
      stars = Array.from({ length: count }, () => new Star());
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

      // occasional twinkle
      if (Math.random() < 0.015) {
        const i = Math.floor(Math.random() * stars.length);
        const s = stars[i];
        s.alpha = Math.min(1, s.alpha + 0.4);
        setTimeout(() => (s.alpha = 0.3 + Math.random() * 0.7), 200 + Math.random() * 500);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    const onResize = () => {
      setSize();
      createStars();
    };

    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

    return (
      <section id="results" className="relative py-24 bg-gray-100 text-black overflow-hidden">
        <div ref={containerRef} className="absolute inset-0 pointer-events-none">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-black">Our Achievements</h2>

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
                  className={`relative overflow-hidden p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-3 ${cardClass}`}
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

// small helper: convert hex to rgb
function hexToRgb(hex: string) {
  const parsed = hex.replace('#', '');
  const bigint = parseInt(parsed, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
