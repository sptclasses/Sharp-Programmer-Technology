import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode, faChartLine, faChevronLeft, faChevronRight, faDesktop, faNetworkWired, faCalculator, faMobile, faFileCode, } from "@fortawesome/free-solid-svg-icons";
import { faPython,faJava} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Courses() {
  /* 
  // COMMENTED OUT - PREVIOUS COURSE DESIGN
  const courseCategories = [
    {
      id: "nielit",
      title: "NIELIT Courses",
      icon: faGraduationCap,
      description: "Government certified computer literacy programs",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      courses: [
        {
          name: "CCC",
          fullName: "Course on Computer Concepts",
          description: "Basic computer literacy program for fundamental IT skills",
          duration: "3 Months",
        },
        {
          name: "O Level",
          fullName: "Foundation Level Course",
          description: "Advanced computer course for IT professionals",
          duration: "12 Months",
        }
      ]
    },
    {
      id: "development",
      title: "Development & Accounting",
      icon: faChartLine,
      description: "Practical skills for modern business needs",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      courses: [
        {
          name: "Web Development",
          fullName: "Full Stack Web Development",
          description: "Build modern websites and web applications",
          duration: "6 Months",
        },
        {
          name: "Digital Marketing",
          fullName: "Digital Marketing Mastery",
          description: "SEO, social media, content marketing & more",
          duration: "3 Months",
        },
        {
          name: "Tally",
          fullName: "Tally ERP & Accounting",
          description: "Complete accounting software training",
          duration: "2 Months",
        }
      ]
    },
    {
      id: "programming",
      title: "Programming Languages",
      icon: faCode,
      description: "Master popular programming languages",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      courses: [
        {
          name: "Python",
          fullName: "Python Programming",
          description: "Popular language for AI, web dev & automation",
          duration: "4 Months",
          level: "Beginner"
        },
        {
          name: "C++",
          fullName: "C++ Programming",
          description: "Object-oriented programming fundamentals",
          duration: "5 Months",
          level: "Intermediate"
        },
        {
          name: "Java",
          fullName: "Java Programming",
          description: "Enterprise-level application development",
          duration: "6 Months",
          level: "Intermediate"
        }
      ]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to enhance your skills and boost your career
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courseCategories.map((category) => (
            <div key={category.id} className={`bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
              category.id === 'nielit' ? 'flex flex-col' : ''
            }`}>
              <div className={`${category.color} p-6 text-white text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={category.icon} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90">{category.description}</p>
              </div>

              <div className="p-6 flex-1">
                <div className={`${
                  category.id === 'nielit' ? 'flex flex-col gap-4 h-full' : 'space-y-4'
                }`}>
                  {category.courses.map((course, index) => (
                    <div key={index} className={`border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:border-purple-300 hover:bg-purple-50 ${
                      category.id === 'nielit' ? 'flex-1 flex flex-col' : ''
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-gray-900">{course.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{course.fullName}</p>
                      <p className={`text-sm text-gray-700 mb-3 leading-relaxed ${
                        category.id === 'nielit' ? 'flex-grow' : ''
                      }`}>{course.description}</p>
                      <div className={`flex justify-between items-center ${
                        category.id === 'nielit' ? 'mt-auto' : ''
                      }`}>
                        <span className="text-sm font-semibold text-gray-800">Duration: {course.duration}</span>
                        <Link href={`/CourseLandingPage/${course.name.toLowerCase().replace(/\+/g, 'plus').replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`}>
                          <button className="text-white bg-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all duration-300 cursor-pointer">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  */

  // NEW COURSE DESIGN WITH SMOOTH INFINITE LOOP
  const [currentSlide, setCurrentSlide] = useState(2); // Start at index 2 (first real course after clones)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const nielitCourses = [
    {
      id: "ccc",
      icon: "images/NIELIT_logo-removebg-preview.png",
      iconType: "image",
      title: "CCC (Course on Computer Concepts)",
      description: "Basic computer literacy program covering essential computer, internet, and digital skills.",
      duration: "3 Months",
      slug: "ccc"
    },
    {
      id: "o-level",
      icon: "images/NIELIT_logo-removebg-preview.png",
      iconType: "image",
      title: "O-Level Certification",
      description: "Government-recognized IT certification course focusing on programming, networking, and database fundamentals.",
      duration: "1 Year",
      slug: "o-level"
    }
  ];

  const professionalCourses = [
    {
      id: "web-dev",
      icon: <FontAwesomeIcon icon={faCode} />,
      title: "Full Stack Web Development",
      description: "Learn to build dynamic websites and apps using HTML, CSS, JS, React, Node, and databases.",
      duration: "6 Months",
      slug: "web-development"
    },
    {
      id: "digital-marketing",
      icon: "images/a-sleek-vector-logo-design-featuring-a-s_leRUoo9vSqmRAmteQnLJyg_gdE9hBy2RGun-Ly39HR_Rw-removebg-preview.png",
      iconType: "image",
      title: "Digital Marketing",
      description: "Master SEO, social media strategies, and advertising tools to enhance online business presence.",
      duration: "3 Months",
      slug: "digital-marketing"
    },
    {
      id: "tally",
      icon: <FontAwesomeIcon icon={faCalculator}  />,
      title: "Tally with GST",
      description: "Learn accounting and GST billing using Tally ERP for small and medium enterprises .",
      duration: "3 Months",
      slug: "tally"
    },
    {
      id: "python",
      icon: <FontAwesomeIcon icon={faPython}  />,
      title: "Python Programming",
      description: "Beginner to advanced-level Python course covering data structures, web automation, and APIs.",
      duration: "2 Months",
      slug: "python"
    },
    {
      id: "cpp",
      icon: <FontAwesomeIcon icon={faFileCode}  />,
      title: "C++ Programming",
      description: "Learn the principles of Object-Oriented Programming and problem-solving with C++.",
      duration: "2 Months",
      slug: "cplusplus"
    },
    {
      id: "java",
      icon: <FontAwesomeIcon icon={faJava}  />,
      title: "Java Programming",
      description: "Develop robust applications using Java's OOPs concepts, Swing, and database connectivity.",
      duration: "3 Months",
      slug: "java"
    }
  ];

  // Create cloned courses for infinite loop
  const lastTwoCourses = professionalCourses.slice(-2);
  const firstTwoCourses = professionalCourses.slice(0, 2);
  const clonedCourses = [
    ...lastTwoCourses.map(course => ({ ...course, id: `${course.id}-clone-start` })),
    ...professionalCourses,
    ...firstTwoCourses.map(course => ({ ...course, id: `${course.id}-clone-end` }))
  ];

  const totalCourses = professionalCourses.length;
  const maxSlide = totalCourses + 1; // +2 for clones at start, -1 for index

  // Handle transition end to reset position for infinite loop
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // If we're at the end clones, jump to the beginning
    if (currentSlide >= totalCourses + 2) {
      setCurrentSlide(2);
    }
    // If we're at the start clones, jump to the end
    else if (currentSlide <= 1) {
      setCurrentSlide(totalCourses + 1);
    }
  };

  // Auto-slide functionality with infinite loop, pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide(prev => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  // Calculate real slide index for dot indicator
  const getRealSlideIndex = () => {
    if (currentSlide <= 1) return totalCourses - 2 + currentSlide;
    if (currentSlide >= totalCourses + 2) return currentSlide - totalCourses - 2;
    return currentSlide - 2;
  };

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to enhance your skills and boost your career
          </p>
        </div>
        
        {/* NIELIT Certified Courses Section */}
        <div className="mb-16">
          <div className="border-l-4 border-blue-500 pl-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">NIELIT Certified Courses</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {nielitCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 lg:p-8 min-h-[240px] sm:min-h-[260px] cursor-pointer">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 h-full">
                  <div className="flex-shrink-0">
                    {course.iconType === "image" ? (
                      <img 
                        src={course.icon as string} 
                        alt={`${course.title} icon`}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg"
                      />
                    ) : (
                      <div className="text-3xl sm:text-4xl text-blue-600">{course.icon}</div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{course.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{course.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0 mt-auto pt-3">
                      <span className="text-sm sm:text-base text-gray-500 font-medium">Duration: {course.duration}</span>
                      <Link href={`/CourseLandingPage/${course.slug}`}>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-lg text-sm sm:text-base font-medium transition-colors duration-300 w-full sm:w-auto">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional & Skill Development Courses Section */}
        <div>
          <div className="border-l-4 border-green-500 pl-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional & Skill Development Courses</h2>
          </div>
          
          {/* Carousel Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
              aria-label="Previous slide"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 text-lg" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer"
              aria-label="Next slide"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 text-lg" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div 
                className={`flex items-stretch ${isTransitioning ? 'transition-transform duration-3000 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 50}%)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {clonedCourses.map((course, index) => (
                  <div 
                    key={course.id} 
                    className="w-1/2 flex-shrink-0 px-4 h-full"
                  >
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 lg:p-8 min-h-[320px] lg:min-h-[260px] flex flex-col justify-between cursor-pointer h-full">
                      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex-shrink-0 flex items-start">
                          {course.iconType === 'image' ? (
                            <img 
                              src={course.icon as string} 
                              alt={`${course.title} icon`}
                              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                            />
                          ) : (
                            <div className="text-3xl sm:text-4xl text-blue-600">
                              {course.icon}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{course.title}</h3>
                          <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{course.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0 mt-4">
                        <span className="text-sm sm:text-base text-gray-500 font-medium">Duration: {course.duration}</span>
                        <Link href={`/CourseLandingPage/${course.slug}`}>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer rounded-lg text-sm sm:text-base font-medium transition-colors duration-300 w-full sm:w-auto">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalCourses - 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentSlide(index + 2);
                  }}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                    index === getRealSlideIndex() ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
