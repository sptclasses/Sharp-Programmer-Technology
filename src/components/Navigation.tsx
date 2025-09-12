"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronDown ,faGraduationCap} from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}: NavigationProps) {
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const navItems = ["home", "about", "courses", "features", "contact"];
  
  const featuresSubMenu = [
    { id: "library", name: "Library" },
    { id: "online-test", name: "Online Test" },
    { id: "demo-class", name: "Demo Class" }
  ];

  const getDisplayName = (item: string) => {
    const names: { [key: string]: string } = {
      home: "Home",
      about: "About Us",
      courses: "Courses",
      features: "Features",
      contact: "Contact Us"
    };
    return names[item] || item.charAt(0).toUpperCase() + item.slice(1);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center py-4">
        <div className="flex items-center gap-3 text-xl font-bold text-white">
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <span>Sharp Programming Technology</span>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item} className="relative">
                {item === "features" ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setFeaturesDropdownOpen(true)}
                    onMouseLeave={() => setFeaturesDropdownOpen(false)}
                  >
                    <button
                      className={`font-medium transition-all duration-300 relative cursor-pointer flex items-center gap-2 ${
                        activeSection === item ? "text-blue-400" : "text-white hover:text-blue-400"
                      }`}
                    >
                      {getDisplayName(item)}
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`text-xs transition-transform duration-300 ${
                          featuresDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                      {activeSection === item && <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-400"></span>}
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border min-w-[180px] z-50 transition-all duration-300 ${
                      featuresDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform translate-y-[-10px]'
                    }`}>
                      {featuresSubMenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            scrollToSection(subItem.id);
                            setFeaturesDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`font-medium transition-all duration-300 relative cursor-pointer ${
                      activeSection === item ? "text-blue-400" : "text-white hover:text-blue-400"
                    }`}
                  >
                    {getDisplayName(item)}
                    {activeSection === item && <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-400"></span>}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <a 
            href="tel:+91000000000" 
            className="hidden md:flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} className="text-sm" />
            <span className="text-sm font-medium">+91-000000000</span>
          </a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg py-4">
          {navItems.map((item) => (
            <div key={item}>
              {item === "features" ? (
                <div>
                  <button
                    onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                    className="flex items-center justify-between w-full text-left px-5 py-2 font-medium text-white hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span>{getDisplayName(item)}</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`text-xs transition-transform duration-300 ${
                        featuresDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {featuresDropdownOpen && (
                    <div className="bg-gray-700 py-2">
                      {featuresSubMenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            scrollToSection(subItem.id);
                            setFeaturesDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block w-full text-left px-8 py-2 text-sm text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-5 py-2 font-medium text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {getDisplayName(item)}
                </button>
              )}
            </div>
          ))}
          <a 
            href="tel:+917508644919" 
            className="flex items-center gap-2 text-white hover:text-blue-400 px-5 py-2 mt-2 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} className="text-sm" />
            <span className="text-sm font-medium">+91-75086 44919</span>
          </a>
        </div>
      )}
    </nav>
  );
}
