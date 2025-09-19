import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCode, faChartLine } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Courses() {
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
          level: "Beginner"
        },
        {
          name: "O Level",
          fullName: "Foundation Level Course",
          description: "Advanced computer course for IT professionals",
          duration: "12 Months",
          level: "Intermediate"
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
          level: "Intermediate"
        },
        {
          name: "Digital Marketing",
          fullName: "Digital Marketing Mastery",
          description: "SEO, social media, content marketing & more",
          duration: "3 Months",
          level: "Beginner"
        },
        {
          name: "Tally",
          fullName: "Tally ERP & Accounting",
          description: "Complete accounting software training",
          duration: "2 Months",
          level: "Beginner"
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to enhance your skills and boost your career
          </p>
        </div>

        {/* Course Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courseCategories.map((category) => (
            <div key={category.id} className={`bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
              category.id === 'nielit' ? 'flex flex-col' : ''
            }`}>
              {/* Category Header */}
              <div className={`${category.color} p-6 text-white text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={category.icon} className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90">{category.description}</p>
              </div>

              {/* Courses List */}
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
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{course.fullName}</p>
                      <p className={`text-sm text-gray-700 mb-3 leading-relaxed ${
                        category.id === 'nielit' ? 'flex-grow' : ''
                      }`}>{course.description}</p>
                      <div className={`flex justify-between items-center ${
                        category.id === 'nielit' ? 'mt-auto' : ''
                      }`}>
                        <span className="text-sm font-semibold text-gray-800">Duration: {course.duration}</span>
                        <Link href="/CourseLandingPage">
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
}
