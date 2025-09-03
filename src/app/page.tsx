"use client";

import { useState } from "react";
import Navigation from "../component/Navigation";
import Hero from "../component/Hero";
import About from "../component/About";
import Courses from "../component/Course";
import Testimonials from "../component/Testimonials";
import Results from "../component/Result";
import Alumni from "../component/Alumni";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import WhatsAppButton from "../component/WhatsAppButton";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
    alert("Thank you for your message! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Results />
      <Alumni />
      <Contact handleFormSubmit={handleFormSubmit} />
      <Footer scrollToSection={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
}
