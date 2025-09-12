import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPlay as faPlaySolid } from "@fortawesome/free-solid-svg-icons";

export default function WhatsAppButton() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Free Demo Class Button */}
      <div 
        onClick={scrollToContact}
        className="mb-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full px-4 py-2 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl animate-bounce group"
      >
        <div className="flex items-center gap-2 text-white">
          <FontAwesomeIcon icon={faPlaySolid} className="text-sm" />
          <div className="text-xs font-bold">
            <div className="leading-tight">FREE DEMO</div>
            <div className="leading-tight">OFFLINE CLASS</div>
          </div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 block"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}
