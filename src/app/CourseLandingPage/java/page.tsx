"use client";

import { useState, useEffect } from "react";
// ...existing code...
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import {  faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CourseHandoutTable from "@/components/ui/CourseHandoutTable";


// Data for Course Handout Table
const courseHandoutData = [
  {
    sno: 1,
    chapter: "Introduction to Java and Development Environment",
    duration: "3",
    theory: "3",
    lab: "0",
    outcomes: "Understand Java’s history, features, and its platform independence using JDK, JRE, and JVM setup."
  },
  {
    sno: 2,
    chapter: "Java Syntax, Data Types, and Operators",
    duration: "5",
    theory: "3",
    lab: "2",
    outcomes: "Learn Java syntax, identifiers, primitive data types, type casting, and use of arithmetic and logical operators."
  },
  {
    sno: 3,
    chapter: "Control Structures and Looping Constructs",
    duration: "6",
    theory: "3",
    lab: "3",
    outcomes: "Implement conditional statements and iterative loops such as if, else, switch, for, while, and do-while."
  },
  {
    sno: 4,
    chapter: "Arrays and Strings",
    duration: "6",
    theory: "2",
    lab: "4",
    outcomes: "Work with one-dimensional and two-dimensional arrays and apply string manipulation and comparison methods."
  },
  {
    sno: 5,
    chapter: "Methods and Parameter Passing",
    duration: "4",
    theory: "2",
    lab: "2",
    outcomes: "Define reusable methods, apply parameter passing, and implement method overloading in Java programs."
  },
  {
    sno: 6,
    chapter: "Object-Oriented Programming Concepts",
    duration: "8",
    theory: "3",
    lab: "5",
    outcomes: "Apply OOP principles such as encapsulation, inheritance, polymorphism, and abstraction in Java applications."
  },
  {
    sno: 7,
    chapter: "Constructors, Static Members, and Packages",
    duration: "5",
    theory: "2",
    lab: "3",
    outcomes: "Understand constructors, static methods and variables, and organize reusable code using Java packages."
  },
  {
    sno: 8,
    chapter: "Interfaces and Abstract Classes",
    duration: "5",
    theory: "2",
    lab: "3",
    outcomes: "Differentiate between abstract classes and interfaces and implement multiple inheritance through interfaces."
  },
  {
    sno: 9,
    chapter: "Exception Handling",
    duration: "4",
    theory: "2",
    lab: "2",
    outcomes: "Handle runtime errors effectively using try-catch-finally blocks, throw/throws, and custom exceptions."
  },
  {
    sno: 10,
    chapter: "File Handling and Streams",
    duration: "5",
    theory: "2",
    lab: "3",
    outcomes: "Perform file input/output operations using Java I/O streams and serialization techniques."
  },
  {
    sno: 11,
    chapter: "Multithreading and Synchronization",
    duration: "5",
    theory: "2",
    lab: "3",
    outcomes: "Implement multithreading concepts, manage thread lifecycle, and use synchronization for thread safety."
  },
  {
    sno: 12,
    chapter: "Collections Framework and Generics",
    duration: "7",
    theory: "3",
    lab: "4",
    outcomes: "Use Java Collections API including List, Set, and Map interfaces and apply generics for type-safe programming."
  },
  {
    sno: 13,
    chapter: "Database Connectivity (JDBC)",
    duration: "6",
    theory: "2",
    lab: "4",
    outcomes: "Connect Java applications to relational databases using JDBC, execute SQL queries, and process result sets."
  },
  {
    sno: 14,
    chapter: "Mini Project and Code Review",
    duration: "6",
    theory: "1",
    lab: "5",
    outcomes: "Integrate all course concepts into a practical Java project and perform debugging, testing, and documentation."
  }
  
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
  const [selectedTab, setSelectedTab] = useState<string>("Overview");
  const [isMuted, setIsMuted] = useState(true);

  const tabs = ["Overview", "Course Handout", "Benefits", "Job Market", "Opportunities", "Eligibility"];
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
      features: "Facility",
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

  // Scroll spy: observe sections and update selectedTab when they enter the viewport
  useEffect(() => {
    const sections = [
      { id: 'overview', tab: 'Overview' },
      { id: 'course-handout', tab: 'Course Handout' },
      { id: 'benefits', tab: 'Benefits' },
      { id: 'job-market', tab: 'Job Market' },
      { id: 'opportunities', tab: 'Opportunities' },
      { id: 'eligibility', tab: 'Eligibility' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // choose the most visible/first intersecting entry
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) {
              setSelectedTab(match.tab);
            }
          }
        });
      },
      {
        root: null,
        // adjust rootMargin so the tab highlights when section is comfortably in view
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.15,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-800/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
        <div className="max-w-full mx-auto px-5 flex items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 mr-auto">
                    <h1 className="text-white text-xl font-bold">Sharp Programmer Technology (SPT)</h1>
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
            className="md:hidden flex flex-col gap-1 cursor-pointer ml-0 px-2"
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
                      onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
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
  <div className="relative text-white mb-2 mt-16">
    <div className="relative w-full h-40 sm:h-80 md:h-96 lg:h-[480px]">
      {/* Desktop/large screens: full-bleed background (shown from sm and up) */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/images/Cource Banner.png"
          alt="Course banner"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Mobile: show a separate image sized for phones */}
      <div className="sm:hidden absolute inset-0 flex items-center justify-center">
        <div className="w-20/20 ">
          <Image
            src="/images/mobile2.png"
            alt="Course banner mobile"
            width={800}
            height={320}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Content over the image */}
      <div className="absolute inset-0 flex items-center courseText courseMobileText">
        <div className="container-1200 px-9 w-full">
          <p className="text-xs sm:text-sm opacity-90 mb-2 cursor-pointer text-black">
            <span>
              <Link href="/" className="text-black cursor-pointer hover:-translate-y-1 font-bold transition-transform">Home</Link>
            </span> &gt; Java Programming
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Java Programming</h1>
        </div>
      </div>
    </div>
  </div>

  {/* Navigation Tabs - mobile: horizontally scrollable pill buttons */}
  <div className="border-b border-gray-200 px-2 sticky top-24 md:top-20 bg-white z-40">
        <div className="container-1200 px-0 w-full pt-4 pb-4">
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-3 md:gap-6 w-max md:w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setSelectedTab(tab); scrollToTab(tab); }}
                  className={`inline-block whitespace-nowrap px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${selectedTab === tab ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Content - All Sections Visible */}
      <div className="space-y-0">
        {/* Overview Section (text left, video right) - Light shade */}
        <section id="overview" className="scroll-mt-32 bg-white py-12">
          <div className="container-1200 mx-auto px-6 w-full">
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Overview</h2>
            <div className="grid md:grid-cols-2 gap-25 items-start">
              <div className="text-gray-800 space-y-5 text-justify">
                <p>
                 Java is a general-purpose, object-oriented programming language designed to be platform-independent (Write Once, Run Anywhere) via the Java Virtual Machine.
                </p>
                <p>A Java programming course typically covers fundamentals (syntax, data types, control flow), object-oriented concepts (classes, objects, inheritance, polymorphism), as well as advanced topics like collections, multithreading, frameworks, and building real-world applications.</p>
                <div>
                  <span className="font-semibold text-lg">🎯 Objectives</span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>To introduce learners to Java programming fundamentals: syntax, data types, operators, control statements.</li>
                    <li>To build competence in object-oriented programming using Java: classes, objects, inheritance, polymorphism, encapsulation.</li>
                    <li>To teach advanced Java features: collections framework, exception handling, multithreading, I/O, generics.</li>
					          <li>To enable learners to apply Java in practical application contexts: desktop apps, server-side applications, mobile/Android, enterprise systems.</li>
					          <li>To prepare students to work in Java-based development environments and take up programming roles leveraging Java skills.</li>
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
               <div className="relative w-11/12 sm:w-11/12 md:w-10/12 video-container mt-4 md:mt-0 pt-0 xl:bottom-0 md:bottom-0 2xl:bottom-12 mx-auto">
                  <div className="overflow-hidden rounded-2xl shadow-2xl bg-black/5">
                    <iframe
                      src={`https://www.youtube.com/embed/g6gWkSl5IVA?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&rel=0&controls=0`}
                     className="w-full h-96 sm:h-80 md:h-72 lg:h-80 xl:h-90 rounded-2xl mt-0 pt-0"
                      frameBorder="0"
                      allow="autoplay; muted"
                      title="Course Overview Video"
                    />
                    <button
                      onClick={() => setIsMuted((prev) => !prev)}
                      className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 640 640">
                          <path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 640 640">
                          <path d="M144 416L192 416L326.1 535.2C332.5 540.9 340.7 544 349.2 544C368.4 544 384 528.4 384 509.2L384 130.8C384 111.6 368.4 96 349.2 96C340.7 96 332.5 99.1 326.1 104.8L192 224L144 224C117.5 224 96 245.5 96 272L96 368C96 394.5 117.5 416 144 416zM476.6 245.5C466.3 237.1 451.2 238.7 442.8 249C434.4 259.3 436 274.4 446.3 282.8C457.1 291.6 464 305 464 320C464 335 457.1 348.4 446.3 357.3C436 365.7 434.5 380.8 442.8 391.1C451.1 401.4 466.3 402.9 476.6 394.6C498.1 376.9 512 350.1 512 320C512 289.9 498.1 263.1 476.5 245.5z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Handout Section - Gray shade */}
        <section id="course-handout" className="scroll-mt-32 bg-gray-50 py-12">
          <div className="container-1200 mx-auto px-6 w-full">
            <h2 className="text-2xl text-black font-bold mb-6">Course Handout</h2>
            {/* Data-driven table for easy updates */}
            <div className="overflow-x-auto">
              <HandoutTableBlock />
            </div>
          </div>
        </section>

        {/* Benefits Section - Light shade */}
    <section id="benefits" className="scroll-mt-32 bg-white py-12">
  <div className="container-1200 mx-auto px-6 w-full">
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Benefits</h2>
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm"><strong>Wide use & platform-independence:</strong> Java&apos;s “write once, run anywhere” principle means applications can run on many platforms.</li>
                <li className="text-sm"><strong>Strong ecosystem and community:</strong> A large number of libraries, frameworks, tools, and a mature community make Java development efficient.</li>
                <li className="text-sm"><strong>Good career foundation:</strong> Learning Java gives you a strong programming base and opens up many technical career paths.</li>
                <li className="text-sm"><strong>High demand:</strong> Java programmers remain in demand in many domains (enterprise apps, backend services, Android, big data).</li>
                <li className="text-sm"><strong>Transferable skills:</strong> The object-oriented and structured programming skills you learn in Java carry over to other languages and platforms.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job Market Section - Gray shade */}
    <section id="job-market" className="scroll-mt-32 bg-gray-50 py-12">
  <div className="container-1200 mx-auto px-6 w-full">
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Job Market</h2>
            {/* <p className="text-gray-700 mb-6 leading-relaxed">
              The demand for full stack developers is rapidly growing across industries. Companies are seeking professionals who can handle both frontend and backend development, making you highly employable in today&apos;s competitive market.
            </p> */}
            <div className="space-y-4">
              {/* <h3 className="text-lg font-semibold text-gray-800">Market Opportunities:</h3> */}
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Java remains one of the most widely used languages in enterprise software, backend systems, and large organisations.</li>
                <li className="text-sm">Roles for Java developers and related functions are actively listed and sought. For example: “12 Java career opportunities” article lists multiple roles and salary ranges.</li>
                <li className="text-sm">With more businesses relying on scalable, cross-platform, backend and enterprise systems, Java remains relevant and has good growth potential.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Opportunities Section - Light shade */}
        <section id="opportunities" className="scroll-mt-32 bg-white py-12">
          <div className="container-1200 mx-auto px-6 w-full">
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Career Opportunities</h2>
            {/* <p className="text-gray-700 mb-6 leading-relaxed">
              After completing this comprehensive course, you&apos;ll have access to diverse career paths and exciting opportunities in the tech industry.
            </p> */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">With Java skills, you can pursue roles such as:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Java Developer / Software Engineer (Backend)</li>
                <li className="text-sm">Full Stack Developer (Java + frameworks)</li>
                <li className="text-sm">Android Mobile App Developer (Java-based)</li>
                <li className="text-sm">Enterprise Application Developer (Java EE / Spring / Hibernate)</li>
                <li className="text-sm">Solutions Architect / Technical Lead in Java-centric architecture</li>
                <li className="text-sm">Freelance Java Developer / Consultant</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      {/* Eligibility Section */}
      <section id="eligibility" className="scroll-mt-32 bg-gray-50 py-12">
        <div className="container-1200 mx-auto px-6 w-full">
          <h2 className="text-2xl text-gray-800 font-bold mb-6">Eligibility</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Often, no strict prerequisite other than basic computer literacy and logical thinking; many courses accept learners with little to no prior programming experience.</li>
                <li className="text-sm">A background in mathematics or familiarity with programming concepts helps for more advanced Java topics (multithreading, data structures).</li>
              </ul>
        </div>
      </section>
    </div>
  );
}
