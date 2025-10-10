"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const googleForms="https://docs.google.com/forms/d/1zwSTL61VMXSHeI066tSOVly3Y9c_gIfbiknb20e0si8"

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["home", "about", "courses", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center py-4">
        <div className="flex items-center gap-3 text-xl font-bold text-purple-600">
          <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
          <span>Sharp Programmer Technology</span>
        </div>
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-all duration-300 relative cursor-pointer transform active:scale-110 ${
                  activeSection === item ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-purple-600"></span>}
              </button>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-5 py-2 font-medium text-gray-800 hover:text-purple-600 transition-all duration-300 transform active:scale-105 cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
