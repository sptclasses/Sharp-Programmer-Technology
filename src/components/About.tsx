import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoEmbed = "https://www.youtube.com/embed/g6gWkSl5IVA";
  return (
    <section id="about" className="py-20 mt-12 font-['Inter','Poppins',sans-serif]" style={{ backgroundColor: '#f9f9fb' }}>
      <div className="mx-auto" style={{ width: '1330px', height: '436px' }}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">A brief about</h2>
            <h2 className="text-5xl font-bold -mt-2 mb-8" style={{ color: '#7b2ff7' }}>SPT</h2>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed text-justify">
              We are a government-certified institution dedicated to providing high-quality education and comprehensive
              library facilities. Our mission is to foster learning and development through innovative teaching methods and
              state-of-the-art resources.
            </p>
            <p className="text-lg mb-8 text-gray-600 leading-relaxed text-justify">
              With years of experience in education, we have helped thousands of students achieve their academic and
              professional goals through our carefully designed courses and extensive library resources.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg" style={{ marginLeft: '90px' }}>
              <div className="overflow-hidden rounded-2xl shadow-2xl bg-black/5">
                {/* Auto-playing video without sound */}
                <iframe
                  src={`${videoEmbed}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&rel=0&controls=0`}
                  className="w-full h-80 md:h-72 lg:h-80 rounded-2xl"
                  frameBorder="0"
                  allow="autoplay; muted"
                  title="About video"
                />
                {/* Mute/Unmute button */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M144 416L192 416L326.1 535.2C332.5 540.9 340.7 544 349.2 544C368.4 544 384 528.4 384 509.2L384 130.8C384 111.6 368.4 96 349.2 96C340.7 96 332.5 99.1 326.1 104.8L192 224L144 224C117.5 224 96 245.5 96 272L96 368C96 394.5 117.5 416 144 416zM476.6 245.5C466.3 237.1 451.2 238.7 442.8 249C434.4 259.3 436 274.4 446.3 282.8C457.1 291.6 464 305 464 320C464 335 457.1 348.4 446.3 357.3C436 365.7 434.5 380.8 442.8 391.1C451.1 401.4 466.3 402.9 476.6 394.6C498.1 376.9 512 350.1 512 320C512 289.9 498.1 263.1 476.5 245.5z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Video Modal */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
              <div className="relative w-[95%] md:w-[80%] lg:w-[70%] max-h-[90vh] bg-transparent">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={`${videoEmbed}?autoplay=1&rel=0`}
                    className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    title="About video"
                  />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md cursor-pointer"
                  aria-label="Close video"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
