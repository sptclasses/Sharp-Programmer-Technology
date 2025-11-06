"use client";

import { useState, useEffect } from "react";
// ...existing code...
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { faPhone, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CourseHandoutTable from "@/components/ui/CourseHandoutTable";


// Data for Course Handout Table
const courseHandoutData = [
  {
    sno: 1,
    chapter: "Basic concepts of Accounting",
    duration: "2",
    theory: "2",
    lab: "0",
    outcomes: "Understand fundamental accounting principles and procedures."
  },
  {
    sno: 2,
    chapter: "Company Creation, Modification & other entries",
    duration: "5",
    theory: "2",
    lab: "3",
    outcomes: "Create, modify, and manage company data in Tally."
  },
   {
    sno: 3,
    chapter: "Journal entries & Ledger creation/modification etc.",
    duration: "12",
    theory: "4",
    lab: "8",
    outcomes: "Record transactions, manage ledgers, and correct entries."
  },
   {
    sno: 4,
    chapter: "Group Creation",
    duration: "2",
    theory: "0",
    lab: "2",
    outcomes: "Create and modify account groups as per organization needs."
  },
   {
    sno: 5,
    chapter: "Preparation of Vouchers-(Payment,Receipt, Journal, Contra, Purchase,Sales, Return Inward/Outward Voucher)",
    duration: "8",
    theory: "2",
    lab: "6",
    outcomes: "Record and manage various types of vouchers accurately."
  },
  {
    sno: 6,
    chapter: "Preparation of Trading Account Profit & Loss Account, Income & Expenditure A/c, Receipts & Payments A/c, Balance Sheet.",
    duration: "22",
    theory: "6",
    lab: "16",
    outcomes: "Prepare and interpret financial statements and reports."
  },
   {
    sno: 7,
    chapter: "Bank Reconciliation Statement.",
    duration: "4",
    theory: "2",
    lab: "2",
    outcomes: "Reconcile bank statements and rectify mismatches."
  },
  {
    sno: 8,
    chapter: "Preparation of Vouchers Type.",
    duration: "3",
    theory: "1",
    lab: "2",
    outcomes: "Create and customize voucher types for specific use."
  },
   {
    sno: 9,
    chapter: "Stock Management- Stock GroupCreation, Stock category, Godown maintenance, Unis creation, Stock ledger creation & maintenance etc.",
    duration: "6",
    theory: "0",
    lab: "6",
    outcomes: "Manage stock groups, items, godowns, and generate inventory reports"
  },
     {
    sno: 10,
    chapter: "Preparation of Purchase & SalesOrder Rejection In, Rejection Out,Sales Bill.",
    duration: "2",
    theory: "0",
    lab: "2",
    outcomes: "Prepare purchase/sales orders, return challans, and bills."
  },
  {
    sno: 11,
    chapter: "Depreciation Accounting",
    duration: "4",
    theory: "2",
    lab: "2",
    outcomes: "Calculate and record depreciation on fixed assets."
  },
  {
    sno: 12,
    chapter: "Tax deducted at Source (TDS) -Basic Rules, TDS calculation,deduction, Challan preparation, tax deposition etc., Prof. Tax (Slab,Payment procedure, accountingentries).",
    duration: "8",
    theory: "4",
    lab: "4",
    outcomes: "Compute TDS, Prof. Tax, generate challans, and record entries."
  },
   
  {
    sno: 13,
    chapter: "Manufacturing: Stock Item Creation, Finished Goods creation& Maintenance",
    duration: "2",
    theory: "0",
    lab: "2",
    outcomes: "Manage stock and entries for manufacturing processes."
  },
   {
    sno: 14,
    chapter: "Free Sample: Activation, Inventoryentries",
    duration: "2",
    theory: "0",
    lab: "2",
    outcomes: "Record and manage free sample transactions in accounts."
  },
   {
    sno: 15,
    chapter: "Price Level at Point of Sale:Necessary activation, Journalentries, Bill Design/preparation/generation etc.",
    duration: "4",
    theory: "0",
    lab: "4",
    outcomes: "Manage billing for retailers, wholesalers, and customers."
  },
   {
    sno: 16,
    chapter: "Job Costing: Basic Concepts,Accounting/ Inventory entries.",
    duration: "4",
    theory: "2",
    lab: "2",
    outcomes: "Understand and record job costing and inventory entries."
  },
     {
    sno: 17,
    chapter: "Payroll- Basic Concepts, Employee creation, Group creation,Attendance, Voucher Type creation, Payroll entries.",
    duration: "6",
    theory: "2",
    lab: "4",
    outcomes: "Create employee records, process salary, and generate reports."
  },
     {
    sno: 18,
    chapter: "Goods & Services Tax (GST)-Overview, Supply under GST,Charge of GST, Composition Levy, Time & Value of Supply, Input Tax Credit, Registration, Tax Calculation- Computation of GST Liability, Tax Invoice, Debit & Credit Notes, Tax Payment, Return filling, Exemptions etc",
    duration: "24",
    theory: "6",
    lab: "18",
    outcomes: "Understand GST concepts, calculate liabilities, and file returns."
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

      <div className="absolute inset-0 bg-black/0"></div>
      <div className="absolute inset-0 flex items-center">
        <div className="container-1200 px-9 w-full">
          <p className="text-xs sm:text-sm opacity-90 mb-2 cursor-pointer text-black">
            <span>
              <Link href="/" className="text-black cursor-pointer hover:-translate-y-1 font-bold transition-transform">Home</Link>
            </span> &gt; Tally
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">Tally</h1>
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
                 This Certificate Course in Financial Accounting using Tally (offered by NIELIT) aims to train individuals in computerized accounting using Tally ERP 9 — the most popular accounting and inventory management software in India.
                </p>
                <p>It equips learners with both theoretical knowledge and hands-on practical skills to perform financial accounting, taxation, payroll management, and business analysis efficiently.</p>
                <div>
                  <span className="font-semibold text-lg">🎯 Objectives</span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>Develop proficiency in <strong>computerized financial accounting</strong> using Tally ERP 9.</li>
                    <li>Train students to handle <strong>company accounts, inventory, and taxation modules.</strong></li>
                    <li>Prepare individuals for <strong>job roles in accounting and finance departments.</strong></li>
                    <li>Provide exposure to <strong>TDS, GST, payroll, and bank reconciliation</strong> operations.</li>
                    <li>Enable learners to interpret <strong>financial statements</strong> and perform real-time business analysis.</li>
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
                <li className="text-sm">Provides <strong>hands-on training</strong> in computerized accounting and financial reporting.</li>
                <li className="text-sm">Helps learners understand <strong>GST, TDS, payroll, and business transactions.</strong></li>
                <li className="text-sm">Prepares candidates for <strong>real-world accounting jobs</strong> in corporate and SME sectors.</li>
                <li className="text-sm">Recognized and certified by <strong>NIELIT (Government of India).</strong></li>
                <li className="text-sm">Builds a strong foundation for higher-level certifications like <strong>O&apos;Level (IT) or Advanced Tally courses.</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job Market Section - Gray shade */}
    <section id="job-market" className="scroll-mt-32 bg-gray-50 py-12">
  <div className="container-1200 mx-auto px-6 w-full">
            <h2 className="text-2xl text-gray-800 font-bold mb-6">Job Market</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              After completing Tally (offered by NIELIT) course, students are eligible for IT and office automation-related roles in both private and government sectors.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Typical job roles include:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Assistant – Accounts</li>
                <li className="text-sm">Tally Operator / Accountant</li>
                <li className="text-sm">Finance Executive / Billing Clerk</li>
                <li className="text-sm">Tax Assistant (TDS/GST)</li>
                <li className="text-sm">Payroll Administrator</li>
                <li className="text-sm">Inventory/Stock Manager</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800">Employment Sectors</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li className="text-sm">Private and Government Organizations</li>
                <li className="text-sm">Chartered Accountant Firms</li>
                <li className="text-sm">Retail and Manufacturing Businesses</li>
                <li className="text-sm">Educational and Financial Institutions</li>
                <li className="text-sm">SMEs and Startups</li>
              </ul>
            </div>
          </div>
        </section>

{/* Opportunities Section - Light shade */}
<section id="opportunities" className="scroll-mt-32 bg-white py-12">
  <div className="container-1200 mx-auto px-6 w-full">
    <h2 className="text-2xl text-gray-800 font-bold mb-6">Career Opportunities</h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      Completing this course opens doors to a wide range of accounting and finance roles across industries. 
      With hands-on experience in computerized accounting using Tally ERP 9, you’ll be ready to manage real-world 
      business transactions, taxation, and financial reporting with confidence.
    </p>
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Your Future Paths:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li className="text-sm">Work as a <strong>Tally Operator</strong> or <strong>Accounts Assistant</strong> in corporate or small business setups</li>
        <li className="text-sm">Join <strong>CA firms</strong> or <strong>accounting consultancies</strong> as a junior accountant</li>
        <li className="text-sm">Handle <strong>GST, TDS, Payroll, and Financial Reports</strong> for organizations</li>
        <li className="text-sm">Work as a <strong>Billing Executive</strong> or <strong>Finance Clerk</strong> in retail and service sectors</li>
        <li className="text-sm">Pursue roles such as <strong>Inventory or Stock Manager</strong> using Tally’s inventory features</li>
        <li className="text-sm">Freelance as a <strong>Tally Consultant</strong> for small and medium enterprises</li>
        <li className="text-sm">Upgrade your skills and move into <strong>senior accounting, auditing, or financial analysis</strong> roles</li>
      </ul>
    </div>
  </div>
</section>

      </div>
      {/* Eligibility Section */}
      <section id="eligibility" className="scroll-mt-32 bg-gray-50 py-12">
        <div className="container-1200 mx-auto px-6 w-full">
          <h2 className="text-2xl text-gray-800 font-bold mb-6">Eligibility</h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-5">For Students from Accredited Institutes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-5">
                <li className="text-sm">Minimum qualification: <strong>12th Pass (any stream)</strong> </li>
                <li className="text-sm">Basic <strong>computer knowledge</strong> is desirable</li>
                <li className="text-sm">Suitable for <strong>commerce students, job seekers, and working professionals</strong></li>
              </ul>
        </div>
      </section>
    </div>
  );
}
