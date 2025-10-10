"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "CCC Graduate",
      text: "The CCC course gave me a solid foundation in computer concepts. The instructors were knowledgeable and the library resources were excellent. I highly recommend Sharp Programming Technology!",
      rating: 5,
      initials: "/images/download.jpg",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Ahmed Hassan",
      role: "Python Developer",
      text: "The Python course transformed my career. I went from a complete beginner to landing a job as a Python developer within 6 months. Amazing experience!",
      rating: 5,
      initials: "/images/download.jpg",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Specialist",
      text: "The Digital Marketing course provided practical skills that I use daily in my job. The hands-on approach made all the difference in my learning.",
      rating: 5,
      initials: "/images/download.jpg",
      gradient: "from-pink-500 to-red-600"
    },
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  function scrollByDirection(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.round(track.clientWidth * 0.9);
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.querySelectorAll<HTMLElement>('[data-card]'));
    const target = children[index];
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handler = () => {
      const children = Array.from(track.querySelectorAll<HTMLElement>('[data-card]'));
      let nearest = 0; let min = Number.POSITIVE_INFINITY;
      const left = track.scrollLeft;
      children.forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft - left);
        if (dist < min) { min = dist; nearest = i; }
      });
      setActiveIdx(nearest);
    };
    track.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => track.removeEventListener('scroll', handler as EventListener);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900">What Our Students Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who transformed their careers with Sharp Programming Technology
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                data-card
                className="snap-start shrink-0 basis-full md:basis-1/2 lg:basis-1/3"
              >
                {/* Decorative gradient border wrapper */}
                <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/60 via-pink-500/60 to-yellow-500/60 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                  {/* subtle glow */}
                  <div className="absolute -inset-0.5 rounded-3xl blur-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-yellow-500/10 pointer-events-none" />

                  {/* Card body */}
                  <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ring-4 ring-white/60 overflow-hidden`}>
                        {typeof t.initials === 'string' && (t.initials.startsWith('/') || t.initials.startsWith('http')) ? (
                          <img src={t.initials} alt={`${t.name} avatar`} className="w-full h-full object-cover" />
                        ) : (
                          t.initials
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                            <p className="text-sm text-gray-500">{t.role}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(t.rating)].map((_, i) => (
                              <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-base" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-gray-700">
                      <p className="italic leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot pagination */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all ${activeIdx === i ? 'w-6 bg-purple-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
