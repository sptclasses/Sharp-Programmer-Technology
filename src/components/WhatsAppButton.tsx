import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-50 transition-all duration-300 hover:bg-green-600 hover:scale-110"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}
