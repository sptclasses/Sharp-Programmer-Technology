import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const socialLinks = [
    { icon: faFacebook, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faLinkedin, href: "#" },
    { icon: faInstagram, href: "#" },
  ];

  const courses = ["Web Development", "Data Science", "Digital Marketing", "Python Programming"];

  const companyLinks = [
    { name: "About Us", section: "about" },
    { name: "Contact", section: "contact" },
    { name: "Library", section: "home" },
    { name: "Success Stories", section: "results" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 text-xl font-bold text-purple-400 mb-4">
              <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
              <span>Sharp Programmer Technology</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students through government-certified education and comprehensive library facilities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-purple-700 hover:transform hover:-translate-y-1"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Courses</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("courses")}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Sharp Programmer Technology Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
