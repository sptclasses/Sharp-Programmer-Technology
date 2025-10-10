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
		chapter: "Introduction to C++",
		duration: "2",
		theory: "1",
		lab: "1",
		outcomes: "Understand basic C++ concepts"
	},
	{
		sno: 2,
		chapter: "Variables and Data Types",
		duration: "3",
		theory: "2",
		lab: "1",
		outcomes: "Learn about variables and types"
	},
	// Add more rows as needed
];

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
						</span> &gt; C++ Programming
					</p>
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">C++ Programming</h1>
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
				{/* Overview Section - Light shade */}
				<section id="overview" className="scroll-mt-32 bg-white py-12">
					<div 
						className="mx-auto px-6"
						style={{ width: 'calc(100% - 400px)', marginLeft: '160px', maxWidth: '100%' }}
					>
						<h2 className="text-2xl text-gray-800 font-bold mb-6">Overview</h2>
						<div className="text-gray-800 space-y-5">
							<p>
								The C++ Programming course covers the fundamentals of C++ language, object-oriented programming, and practical coding skills for real-world applications.
							</p>
							<ul className="list-disc list-inside ml-5 mt-2 space-y-1">
								<li>Variables, data types, and operators</li>
								<li>Control structures and functions</li>
								<li>Object-oriented programming: classes, inheritance, polymorphism</li>
								<li>File handling and standard template library (STL)</li>
							</ul>
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
						<ul className="list-disc list-inside text-gray-700 space-y-3 ml-5">
							<li>Master C++ programming for software development</li>
							<li>Build strong problem-solving and algorithmic skills</li>
							<li>Prepare for technical interviews and competitive exams</li>
							<li>Certificate upon successful completion</li>
						</ul>
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
							C++ developers are in demand for roles in software engineering, game development, embedded systems, and finance. Companies value C++ expertise for high-performance applications.
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-3 ml-5">
							<li>Opportunities in tech companies and startups</li>
							<li>Competitive salaries and career growth</li>
							<li>Roles: Software Engineer, Game Developer, Systems Programmer</li>
						</ul>
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
							After completing this course, you'll be ready for diverse roles in software development, systems programming, and more.
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-3 ml-5">
							<li>Work as a freelance developer or join leading companies</li>
							<li>Build your own software products</li>
							<li>Continue learning advanced topics in C++ and related technologies</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
}
