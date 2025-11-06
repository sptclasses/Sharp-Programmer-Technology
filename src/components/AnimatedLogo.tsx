"use client";

import { useState, useEffect } from "react";

export default function AnimatedLogo() {
  const fullText = "Sharp Programmer Technology";
  const typingSpeed = 100; // milliseconds per letter
  const pauseBeforeRestart = 2000; // pause duration before restart (in ms)
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Typing animation
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    // Once typing is done, pause and restart
    if (index === fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pauseBeforeRestart);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Blink cursor animation
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="flex items-center">
      <span className="text-3xl font-bold text-Red whitespace-nowrap transition-all duration-200 ease-in-out">
        {displayedText}
        <span
          className={`inline-block w-0.5 h-7 bg-black ml-1 pb-0 mx-0 transition-opacity duration-200  ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        ></span>
      </span>
    </div>
  );
}
