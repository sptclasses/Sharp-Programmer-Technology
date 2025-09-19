"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGraduationCap, faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const tabs = ["Overview", "Benefits", "Job Market", "Opportunities"];
  const navItems = ["home", "about", "courses", "features", "contact"];
   const [clickedItem, setClickedItem] = useState<string>("courses");

  const featuresSubMenu = [
    { id: "library", name: "Library" },
    { id: "online-test", name: "Online Test" },
    { id: "demo-class", name: "Demo Class" },
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

      {/* Tabs */}
      <div className="border-b border-gray-200 px-6">
        <div className="max-w-5xl mx-auto flex gap-8 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`py-4 font-medium ${
                activeTab === tab.toLowerCase()
                  ? "text-purple-600 border-b-2 border-purple-600 cursor-pointer"
                  : "text-gray-500 hover:text-purple-600 cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8 ">
        {activeTab === "overview" && (
          <>
            {/* Overview Content */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg text-gray-700 font-bold mb-4">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} /> Build modern web applications with React
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} /> Create RESTful APIs with Node.js and Express
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} /> Work with MongoDB and database design
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} /> Deploy applications to cloud platforms
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} /> Implement authentication and authorization
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheck} /> Master Git version control and collaboration
                </p>
              </div>
            </div>
          </>
        )}
        {activeTab === "benefits" && (
          <>
            {/* Benefits Content */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg text-gray-700 font-bold mb-4">Benefits</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Gain in-demand full stack development skills</li>
                <li>Access to real-world projects and hands-on experience</li>
                <li>Expert mentorship and career guidance</li>
                <li>Flexible learning at your own pace</li>
                <li>Certificate upon successful completion</li>
              </ul>
            </div>
          </>
        )}
        {activeTab === "job market" && (
          <>
            {/* Job Market Content */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg text-gray-700 font-bold mb-4">Job Market</h2>
              <p className="text-gray-700 text-sm mb-4">
                The demand for full stack developers is rapidly growing across industries. Companies are seeking professionals who can handle both frontend and backend development, making you highly employable.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Opportunities in tech startups and established companies</li>
                <li>Remote and onsite job options</li>
                <li>Competitive salaries and growth potential</li>
                <li>Roles: Full Stack Developer, Frontend Developer, Backend Developer, DevOps Engineer</li>
              </ul>
            </div>
          </>
        )}
        {activeTab === "opportunities" && (
          <>
            {/* Opportunities Content */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-lg text-gray-700 font-bold mb-4">Opportunities</h2>
              <p className="text-gray-700 text-sm mb-4">
                After completing this course, you can pursue various opportunities:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Work as a freelance developer</li>
                <li>Join a tech company or startup</li>
                <li>Build your own products or SaaS</li>
                <li>Continue learning advanced technologies</li>
                <li>Contribute to open source projects</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
