import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const socialLinks = [
    { icon: faFacebook, href: "#" },
    // { icon: faTwitter, href: "#" },
    // { icon: faLinkedin, href: "#" },
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
      <div className="max-w-full mx-auto pl-5 pr-5">
        {/* Single Row Footer */}
  {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8"> */}
  <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-10 mb-8">

          {/* Sharp Programmer Technology Section */}
          <div>
            <div className="flex items-center gap-3 text-xl font-bold text-purple-400 mb-4">
              <span>Sharp Programmer Technology</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-left">
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

          {/* Contact Hours */}
          <div className="md:ml-16">
            <div className="flex items-center gap-2 mb-4 ">
              <FontAwesomeIcon icon={faClock} className="text-green-400 2xl:ml-15 md:ml-0" />
              <h3 className="text-lg font-semibold text-gray-100">Contact Hours</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-300">Mon - Sat:</span>
                <span className="text-gray-400">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-300">Sunday:</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="md:ml-22">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Courses</h3>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("courses")}
                    className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1 md:pr-2 md:ml-17">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Find Us</h3>
            <div className="rounded-lg overflow-hidden border-2 border-purple-600 shadow-lg w-full max-w-xs h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1759736834129!5m2!1sen!2sin!6m8!1m7!1swK70i3Bs_ajieXuBpm3F4w!2m2!1d26.41563494803535!2d80.39264395008229!3f63.58497067687935!4f3.771586021299271!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
            <span className="text-xs text-gray-400 mt-2">View on Google Maps</span>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Sharp Programmer Technology Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
