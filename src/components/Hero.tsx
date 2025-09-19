"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
  scrollToSection?: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps = {}) {
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
    <section id="home" className="relative min-h-[60vh] h-[90vh] flex items-center justify-center text-center overflow-hidden pt-24 md:pt-40 lg:pt-48 pb-8 sm:pb-0">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image src={slide} alt={`Library ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-white max-w-4xl px-5">
        <h1
          className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight md:leading-tight"
          style={{ fontSize: 'clamp(1.1rem, 4vw, 3.5rem)' }}
        >
          <span className="text-purple-400">Go beyond the code.</span> Master the technical and soft skills that truly empower your future.
        </h1>

<!--         <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
          Your growth in technology is our mission. With expert guidance and comprehensive resources, we are here to help you excel and achieve your goals.
          </p> -->
          {/* <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your growth in technology is our mission. With expert guidance and comprehensive resources, we&apos;re here to help you excel and achieve your goals.
          </p> */}
<!-- 

          <div className="mb-12">
            <button
              onClick={() => scrollToSection && scrollToSection('contact')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Your growth in technology is our mission. With expert guidance and comprehensive resources, we are here to help you excel and achieve your goals.
        </p>
        
        <div className="mb-12">
          <button 
            onClick={() => scrollToSection && scrollToSection('contact')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
          >
            CONTACT US
          </button>
        </div>


          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-sm md:text-base opacity-90">
                <span className="block">Years</span>
                <span className="block text-xs opacity-75">of excellence in education</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">1,000+</div>
              <div className="text-sm md:text-base opacity-90">
                <span className="block">Students</span>
                <span className="block text-xs opacity-75">Trained</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">4.5</div>
              <div className="text-sm md:text-base opacity-90">
                <span className="block">Google Rating</span>
                <span className="block text-xs opacity-75">by Students</span>
              </div>
            </div>
          </div>
      </div>
    
    </section>
  );

  // return (
  //   <section id="home" className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
  //     <div className="absolute inset-0 z-0">
  //       <div className="relative w-full h-full">
  //         {slides.map((slide, index) => (
  //           <div
  //             key={index}
  //             className={`absolute inset-0 transition-opacity duration-1000 ${
  //               index === activeSlide ? "opacity-100" : "opacity-0"
  //             }`}
  //           >
  //             <Image src={slide} alt={`Library ${index + 1}`} fill className="object-cover" />
  //           </div>
  //         ))}
  //       </div>
  //       <div className="absolute inset-0 bg-black/60"></div>
  //     </div>
  //     <div className="relative z-10 text-white max-w-4xl px-5">
  //       <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  //         <span className="text-purple-400">Go beyond the code.</span> Master the technical and soft skills that truly empower your future.
  //       </h1>
  //       <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
  //         Your growth in technology is our mission. With expert guidance and comprehensive resources, we&apos;re here to help you excel and achieve your goals.
  //       </p>
        
  //       <div className="mb-12">
  //         <button 
  //           onClick={() => scrollToSection && scrollToSection('contact')}
  //           className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
  //         >
  //           CONTACT US
  //         </button>
  //       </div>

  //       {/* Statistics */}
  //       <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
  //         <div className="text-center">
  //           <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">5</div>
  //           <div className="text-sm md:text-base opacity-90">
  //             <span className="block">Years</span>
  //             <span className="block text-xs opacity-75">of excellence in education</span>
  //           </div>
  //         </div>
  //         <div className="text-center">
  //           <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">1,000+</div>
  //           <div className="text-sm md:text-base opacity-90">
  //             <span className="block">Students</span>
  //             <span className="block text-xs opacity-75">Trained</span>
  //           </div>
  //         </div>
  //         <div className="text-center">
  //           <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">4.5</div>
  //           <div className="text-sm md:text-base opacity-90">
  //             <span className="block">Google Rating</span>
  //             <span className="block text-xs opacity-75">by Students</span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

}
