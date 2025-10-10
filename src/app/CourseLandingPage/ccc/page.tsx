"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGraduationCap, faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CourseHandoutTable from "@/components/ui/CourseHandoutTable";

// Data for Course Handout Table
const courseHandoutData = [
  {
    sno: 1,
    chapter: "Introduction to Computers",
    duration: "2",
    theory: "1",
    lab: "1",
    outcomes: "Understand basic computer concepts"
  },
  {
    sno: 2,
    chapter: "Operating Systems",
    duration: "3",
    theory: "2",
    lab: "1",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 3,
    chapter: "Word Processing",
    duration: "12",
    theory: "4",
    lab: "8",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 4,
    chapter: "Spread Sheet",
    duration: "12",
    theory: "3",
    lab: "9",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 5,
    chapter: "Presentation",
    duration: "12",
    theory: "3",
    lab: "9",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 6,
    chapter: "Introduction To Internet and WWW",
    duration: "7",
    theory: "3",
    lab: "4",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 7,
    chapter: "E-mail, Social, Networking And E-Governance Services",
    duration: "9",
    theory: "3",
    lab: "9",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 8,
    chapter: "Digital Financial tools and Applications",
    duration: "8",
    theory: "3",
    lab: "5",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 9,
    chapter: "Overview Of Cyber Security",
    duration: "8",
    theory: "3",
    lab: "5",
    outcomes: "Learn OS basics and usage"
  },
   {
    sno: 10,
    chapter: "Overview of Future Skills and AI",
    duration: "9",
    theory: "3",
    lab: "6",
    outcomes: "Learn OS basics and usage"
  },
  // Add more rows as needed
];

// Table component for Course Handout
// local adapter to use the reusable UI component
function HandoutTableBlock() {
  return <CourseHandoutTable rows={courseHandoutData} />;
}

export default function CoursePage() {
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedItem, setClickedItem] = useState<string>("courses");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const tabs = ["Overview", "Course Handout", "Benefits", "Job Market", "Opportunities"];
  const navItems = ["home", "about", "courses", "features", "contact"];

  const featuresSubMenu = [
    { id: "library", name: "Library" },
    { id: "online-test", name: "Online Test" },
  ];


  const getDisplayName = (item: string) => {
    const names: { [key: string]: string } = {
      home: "Home",
      about: "About Us",
      courses: "Courses",
      features: "Features",
      contact: "Contact Us",
    };
    return names[item] || item.charAt(0).toUpperCase() + item.slice(1);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTab = (tabName: string) => {
    const element = document.getElementById(tabName.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
        <div className="max-w-full mx-auto px-5 flex items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 text-xl font-bold text-white mr-auto">
            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-purple-400" />
            <span>Sharp Programming Technology</span>
          </div>

          {/* Navigation Items */}
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
                          activeSection === item
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        }`}
                      >
                        {getDisplayName(item)}
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`text-xs transition-transform duration-300 ${
                            featuresDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        {activeSection === item && (
                          <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-400"></span>
                        )}
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border min-w-[180px] z-50 transition-all duration-300 ${
                          featuresDropdownOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
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
                    <Link
                      href={
                        item === "home"
                          ? "/"
                          : item === "about"
                          ? "/"
                          : item === "courses"
                          ? "/course"
                          : item === "contact"
                          ? "/"
                          : "#"
                      }
                      className={`font-medium transition-all duration-300 relative cursor-pointer ${
                        clickedItem === item
                          ? "text-blue-400"
                          : "text-white hover:text-blue-400"
                      }`}
                      onClick={() => setClickedItem(item)}
                    >
                      {getDisplayName(item)}
                      {clickedItem === item && (
                        <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-blue-400 transition-all duration-300"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="tel:+9100000000"
              className="hidden md:flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span className="text-sm font-medium">+91-000000000</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg py-4">
            {navItems.map((item) => (
              <div key={item}>
                {item === "features" ? (
                  <div>
                    <button
                      onClick={() =>
                        setFeaturesDropdownOpen(!featuresDropdownOpen)
                      }
                      className="flex items-center justify-between w-full text-left px-5 py-2 font-medium text-white hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <span>{getDisplayName(item)}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-xs transition-transform duration-300 ${
                          featuresDropdownOpen ? "rotate-180" : ""
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
                  <Link
                    href={
                      item === "home"
                        ? "/"
                        : item === "about"
                        ? "/"
                        : item === "courses"
                        ? "/course"
                        : item === "contact"
                        ? "/"
                        : "#"
                    }
                    className="block w-full text-left px-5 py-2 font-medium text-white hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getDisplayName(item)}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="tel:+9100000000"
              className="flex items-center gap-2 text-white hover:text-blue-400 px-5 py-2 mt-2 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faPhone} className="text-sm" />
              <span className="text-sm font-medium">+91-000000000</span>
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white pt-32 pb-12 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 mt-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm opacity-80 mb-2 cursor-pointer">
            <span>
              <Link href="/" className="text-white cursor-pointer hover:-translate-y-1 font-bold transition-transform">Home</Link>
            </span> &gt; Course On Computer Concepts
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Course On Computer Concepts</h1>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 px-1 sticky top-20 bg-white z-40">
        <div
          className="flex gap-8"
          style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToTab(tab)}
              className="py-4 font-medium text-gray-500 hover:text-purple-600 cursor-pointer transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Content - All Sections Visible */}
      <div className="space-y-0">
        {/* Overview Section (text left, video right) - Light shade */}
        <section id="overview" className="scroll-mt-32 bg-white py-12">
          <div 
            className="mx-auto px-6"
            style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Overview</h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="text-gray-800 space-y-5">
                <p>
                  The Course on Computer Concepts (CCC) is a foundational computer literacy program designed to equip learners with essential IT skills for personal, academic, and professional use. It provides a strong understanding of computer operations, applications, and the internet, enabling participants to confidently use digital tools in everyday life.
                </p>
                <div>
                  <span className="font-semibold text-lg">🎯 Objectives</span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>To introduce the basic concepts of computers and information technology.</li>
                    <li>To develop skills in using common computer applications.</li>
                    <li>To promote digital literacy and e-Governance awareness.</li>
                  </ul>
                </div>
                {/* <div>
                  <span className="font-semibold text-lg">📘 What You’ll Learn</span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>Fundamentals of Computers: Hardware, software, input/output devices, operating systems.</li>
                    <li>Word Processing & Spreadsheets: Create, format, and analyze documents and data.</li>
                    <li>Presentation Skills: Design and deliver digital presentations.</li>
                    <li>Internet & Email: Use browsers, search engines, and communicate via email.</li>
                    <li>Digital Financial Services: Online banking, UPI, and cybersecurity basics.</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-lg">🧠 Who Should Enroll</span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>Students, job seekers, and professionals seeking basic computer proficiency.</li>
                    <li>Anyone preparing for government or competitive exams where computer knowledge is required.</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-lg">🕒 Duration</span>
                  <p className="ml-5 mt-2">Typically 80 hours (Theory + Practical) — can be completed in 2–3 months.</p>
                </div>
                <div>
                  <span className="font-semibold text-lg">🏆 Certification</span>
                  <p className="ml-5 mt-2">After successful completion, learners receive an NIELIT (DOEACC) CCC Certificate, recognized by government and private organizations across India.</p>
                </div> */}
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="overflow-hidden rounded-lg shadow-lg bg-black/5">
                    <img src="/images/1710743175phptumVs9.jpeg" alt="CCC overview" className="w-full h-56 object-cover" />
                    <button
                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-md ring-4 ring-black/20 cursor-pointer text-white"
                      aria-label="Play CCC overview"
                      onClick={() => { setVideoUrl('https://www.youtube.com/embed/dQw4w9WgXcQ'); setVideoModalOpen(true); }}
                    >
                      ▶
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Handout Section - Gray shade */}
        <section id="course-handout" className="scroll-mt-32 bg-gray-50 py-12">
          <div 
            className="mx-auto px-6"
            style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
          >
            <h2 className="text-2xl text-black font-bold mb-6">Course Handout</h2>
            {/* Data-driven table for easy updates */}
            <div className="overflow-x-auto">
              <HandoutTableBlock />
            </div>
          </div>
        </section>

        {/* Benefits Section - Light shade */}
        <section id="benefits" className="scroll-mt-32 bg-white py-12">
          <div 
            className="mx-auto px-6"
            style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Benefits</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Gain in-demand full stack development skills</li>
                <li className="text-sm">Access to real-world projects and hands-on experience</li>
                <li className="text-sm">Expert mentorship and career guidance</li>
                <li className="text-sm">Flexible learning at your own pace</li>
                <li className="text-sm">Certificate upon successful completion</li>
                <li className="text-sm">Job placement assistance and career support</li>
                <li className="text-sm">Access to exclusive developer community</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job Market Section - Gray shade */}
        <section id="job-market" className="scroll-mt-32 bg-gray-50 py-12">
          <div 
            className="mx-auto px-6"
            style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Job Market</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The demand for full stack developers is rapidly growing across industries. Companies are seeking professionals who can handle both frontend and backend development, making you highly employable in today's competitive market.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Market Opportunities:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Opportunities in tech startups and established companies</li>
                <li className="text-sm">Remote and onsite job options available globally</li>
                <li className="text-sm">Competitive salaries ranging from ₹4-15 LPA</li>
                <li className="text-sm">Career growth potential and leadership opportunities</li>
                <li className="text-sm">Roles: Full Stack Developer, Frontend Developer, Backend Developer, DevOps Engineer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Opportunities Section - Light shade */}
        <section id="opportunities" className="scroll-mt-32 bg-white py-12">
          <div 
            className="mx-auto px-6"
            style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
          >
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Career Opportunities</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              After completing this comprehensive course, you'll have access to diverse career paths and exciting opportunities in the tech industry.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Your Future Paths:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Work as a freelance developer with international clients</li>
                <li className="text-sm">Join leading tech companies or innovative startups</li>
                <li className="text-sm">Build your own products, SaaS applications, or tech business</li>
                <li className="text-sm">Continue learning advanced technologies like AI/ML, Cloud Computing</li>
                <li className="text-sm">Contribute to open source projects and build your reputation</li>
                <li className="text-sm">Become a technical mentor or instructor</li>
                <li className="text-sm">Transition into product management or technical leadership roles</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl">
            <div className="flex justify-end p-2">
              <button className="text-gray-700 font-bold px-3 py-1" onClick={() => { setVideoModalOpen(false); setVideoUrl(null); }}>Close</button>
            </div>
            <div className="w-full h-0" style={{ paddingBottom: '56.25%', position: 'relative' }}>
              {videoUrl && (
                <iframe
                  src={videoUrl}
                  title="Course overview video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
