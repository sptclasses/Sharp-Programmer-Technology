"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop",
  ];

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image src={slide} alt={`Library ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-white max-w-4xl px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">Library Facilities</h1>
        <div className="mb-4">
          <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold inline-block">
            Available
          </span>
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold text-yellow-400 mb-2">** Government Certified Course **</p>
          <p className="text-base opacity-90">Eligible colleges in NON and VOM class institutions</p>
        </div>
      </div>
    </section>
  );
}
