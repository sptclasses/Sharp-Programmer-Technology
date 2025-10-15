"use client";

import { useState, useEffect } from "react";

export default function AnimatedLogo() {
  const [text, setText] = useState({ s: "S", p: "P", t: "T" });
  const [showCursor, setShowCursor] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    // Phase 0: Show SPT for 1 second
    if (currentPhase === 0) {
      const timer = setTimeout(() => {
        setShowCursor(true);
        setCurrentPhase(1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Phase 1: Type "harp" after S
    if (currentPhase === 1) {
      const word = "harp";
      let index = 0;
      const interval = setInterval(() => {
        if (index <= word.length) {
          setText((prev) => ({ ...prev, s: "S" + word.substring(0, index) }));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setCurrentPhase(2), 100);
        }
      }, 60);
      return () => clearInterval(interval);
    }

    // Phase 2: Type "rogrammer" after P
    if (currentPhase === 2) {
      const word = "rogrammer";
      let index = 0;
      const interval = setInterval(() => {
        if (index <= word.length) {
          setText((prev) => ({ ...prev, p: "P" + word.substring(0, index) }));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setCurrentPhase(3), 100);
        }
      }, 60);
      return () => clearInterval(interval);
    }

    // Phase 3: Type "echnology" after T
    if (currentPhase === 3) {
      const word = "echnology";
      let index = 0;
      const interval = setInterval(() => {
        if (index <= word.length) {
          setText((prev) => ({ ...prev, t: "T" + word.substring(0, index) }));
          index++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
          setCurrentPhase(4);
        }
      }, 60);
      return () => clearInterval(interval);
    }

    // Phase 4: Show full text for 2 seconds, then reset to loop
    if (currentPhase === 4) {
      const timer = setTimeout(() => {
        setText({ s: "S", p: "P", t: "T" });
        setShowCursor(false);
        setCurrentPhase(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPhase]);

  return (
    <div className="flex items-center">
      <span className="text-xl font-bold text-white whitespace-nowrap transition-all duration-200 ease-in-out">
        {text.s} {text.p} {text.t}
        {showCursor && (
          <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-blink"></span>
        )}
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 0.7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
