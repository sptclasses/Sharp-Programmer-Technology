"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Results from "../components/Results";
import Alumni from "../components/Alumni";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Email from "../components/Email";

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
      <Email/>
   
    </div>
  );
}
