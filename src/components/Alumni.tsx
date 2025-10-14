import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faStar,} from "@fortawesome/free-solid-svg-icons";

export default function Alumni() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Array<{ left: string; size: string; color: string; delay: string }>>([]);
  const [showBurst, setShowBurst] = useState(false);
  const [burst, setBurst] = useState<Array<{ ox: string; oy: string; tx: string; ty: string; size: string; color: string; delay: string; rot: string; clip?: string; radius?: string }>>([]);

  const alumni = [
    { 
      name: "Maria Rodriguez", 
      title: "Senior Software Engineer", 
      grade: "A+",
      course: "Python & Web Development",
      linkedin: "#",
      twitter:"#",
      image: "/images/download.jpg",
      certificate: "/images/download (2).jpg",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      name: "Shivam Uttam", 
      title: "Data Science Manager", 
      grade: "A",
      course: "Course On Computer Concepts",
      linkedin: "#",
      twitter: "#",
      image: "/images/Screenshot 2025-10-14 122958.png",
      certificate: "/images/CCC SHIVAM_page-0001.jpg",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      name: "Sarah Johnson", 
      title: "Marketing Director", 
      grade: "A+",
      course: "Digital Marketing & Tally",
      linkedin: "#",
      twitter: "#",
      image: "/images/download.jpg",
      certificate: "/images/download (2).jpg",
      gradient: "from-pink-500 to-red-600"
    },
  ];
  // Certificates are static images inside the card; no interactions.

  // Trigger birthday pop (confetti) when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Generate confetti pieces once
          const colors = ["#F87171", "#FBBF24", "#34D399", "#60A5FA", "#A78BFA", "#F472B6"];
          const pieces = Array.from({ length: 48 }).map(() => {
            const left = Math.floor(Math.random() * 100) + "%";
            const sizePx = Math.floor(6 + Math.random() * 10);
            const delayMs = Math.floor(Math.random() * 350);
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
              left,
              size: `${sizePx}px`,
              color,
              delay: `${delayMs}ms`,
            };
          });
          setConfettiPieces(pieces);
          setShowConfetti(true);
          // Generate random shapes that burst from bottom-center of section across the screen
          const rect = el.getBoundingClientRect();
          const originX = Math.floor(rect.left + rect.width / 2);
          const originY = Math.floor(rect.bottom); // bottom center of section (viewport coords)
          const vw = window.innerWidth;
          const vh = window.innerHeight;

          const shapeClips = [
            { type: 'circle', radius: '9999px' },
            { type: 'square', radius: '6px' },
            { type: 'triangle', clip: 'polygon(50% 0%, 0% 100%, 100% 100%)' },
            { type: 'diamond', clip: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
            { type: 'hex', clip: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' },
          ];

          const burstCount = 44;
          const burstArr = Array.from({ length: burstCount }).map(() => {
            const targetX = Math.floor(Math.random() * vw);
            const targetY = Math.floor(Math.random() * vh);
            const sizePx = Math.floor(10 + Math.random() * 18);
            const delayMs = Math.floor(Math.random() * 180);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const rot = `${Math.floor(Math.random() * 360)}deg`;
            const shape = shapeClips[Math.floor(Math.random() * shapeClips.length)];
            return {
              ox: `${originX}px`,
              oy: `${originY}px`,
              tx: `${targetX}px`,
              ty: `${targetY}px`,
              size: `${sizePx}px`,
              color,
              delay: `${delayMs}ms`,
              rot,
              clip: shape.clip,
              radius: shape.radius,
            };
          });
          setBurst(burstArr);
          setShowBurst(true);
          // Hide after animation completes
          const t1 = setTimeout(() => setShowConfetti(false), 2600);
          const tB = setTimeout(() => setShowBurst(false), 1400);
          // Only trigger once
          observer.disconnect();
          return () => { clearTimeout(t1); clearTimeout(tB); };
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="alumni"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Stars</h2>
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500" />
          </div>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our outstanding alumni who transformed their careers with Sharp Programming Technology
          </p> */}
        </div>

        {/* Birthday Pop Confetti */}
        {showConfetti && (
          <div className="confetti-container">
            {confettiPieces.map((p, i) => (
              <span
                key={i}
                className="confetti-piece"
                style={{
                  left: p.left,
                  width: p.size,
                  height: `calc(${p.size} * 0.5)`,
                  backgroundColor: p.color,
                  animationDelay: `0ms, ${p.delay}`,
                }}
              />
            ))}
          </div>
        )}

        {/* Bottom-center to screen spread random shapes */}
        {showBurst && (
          <div className="fixed inset-0 z-[58] pointer-events-none">
            {burst.map((b, i) => (
              <span
                key={i}
                className="shape-particle"
                style={{
                  ['--ox' as any]: b.ox,
                  ['--oy' as any]: b.oy,
                  ['--tx' as any]: b.tx,
                  ['--ty' as any]: b.ty,
                  ['--rot' as any]: b.rot,
                  width: b.size,
                  height: b.size,
                  backgroundColor: b.color,
                  animationDelay: b.delay,
                  borderRadius: b.radius,
                  clipPath: b.clip as any,
                  mixBlendMode: 'multiply',
                }}
              />
            ))}
          </div>
        )}

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus, index) => (
            <div key={index} className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-400/30 to-blue-400/30 hover:from-purple-400/50 hover:to-blue-400/50 transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-transform duration-300 group-hover:-translate-y-2 border border-white/20">
              {/* Row 1: avatar, name/title, grade and course all in one horizontal row */}
              <div className="w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${alumnus.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md overflow-hidden ring-4 ring-white/40`}>
                    {alumnus.image && (alumnus.image.startsWith('/') || alumnus.image.startsWith('http') || alumnus.image.startsWith('images/') || alumnus.image.startsWith('public/')) ? (
                      <img
                        src={
                          alumnus.image.startsWith('/')
                            ? alumnus.image
                            : '/' + alumnus.image.replace(/^public\//, '')
                        }
                        alt={`${alumnus.name} photo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      alumnus.image
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 truncate">{alumnus.name}</h4>
                    <p className="text-sm text-gray-500 truncate">{alumnus.course}</p>
                    <div className="mt-1 flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, iStar) => (
                        <FontAwesomeIcon key={iStar} icon={faStar} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">{alumnus.grade}</span>
                </div>
              </div>

              {/* Row 2: certificate (uniform A4 frame) */}
              <div className="mt-4">
                <div className="relative w-full rounded-xl border bg-white shadow-sm ring-1 ring-gray-100">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-t-xl" />
                  <div className="p-2 md:p-3">
                    <div
                      className="w-full overflow-hidden rounded-md bg-white"
                      style={{ aspectRatio: "297 / 210" }}
                    >
                      {alumnus.certificate ? (
                        <img
                          src={alumnus.certificate}
                          alt={`${alumnus.name} certificate`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 bg-gray-50">
                          No Certificate Available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Badges */}
              {/* <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
                  {alumnus.title}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-purple-500" />
                  {alumnus.course}
                </span>
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
