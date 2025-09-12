"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Results from "../components/Results";
import Alumni from "../components/Alumni";
import Email from "../components/Email";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

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


  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Courses />
      <Testimonials />
      <Results />
      <Alumni />
      <Email/>
      <Footer scrollToSection={scrollToSection} />
      <WhatsAppButton />
      
   
    </div>
  );
}