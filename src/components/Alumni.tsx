import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTrophy, faStar, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Alumni() {
  const alumni = [
    { 
      name: "Maria Rodriguez", 
      title: "Senior Software Engineer", 
      grade: "A+",
      course: "Python & Web Development",
      linkedin: "#",
      twitter:"#",
      image: "MR",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      name: "Ahmed Hassan", 
      title: "Data Science Manager", 
      grade: "A+",
      course: "Python & Digital Marketing",
      linkedin: "#",
      twitter: "#",
      image: "AH",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      name: "Sarah Johnson", 
      title: "Marketing Director", 
      grade: "A+",
      course: "Digital Marketing & Tally",
      linkedin: "#",
      twitter: "#",
      image: "SJ",
      gradient: "from-pink-500 to-red-600"
    },
  ];

  return (
    <section id="alumni" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Success Stories</h2>
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our outstanding alumni who transformed their careers with Sharp Programming Technology
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
              {/* Card Content */}
              <div className="p-8">
                {/* Profile Image */}
                <div className="text-center mb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${alumnus.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    {alumnus.image}
                  </div>
                  {/* <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
                    ))}
                  </div> */}
                </div>
                
                {/* Alumni Info */}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{alumnus.name}</h4>
                  {/* <div className="flex items-center justify-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faBriefcase} className="text-gray-500 text-sm" />
                    <p className="text-purple-600 font-semibold">{alumnus.title}</p>
                  </div> */}
                  <p className="text-lg font-bold text-gray-800 mb-3">{alumnus.grade}</p>
                  
                  {/* Course Badge */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-blue-500 text-sm" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {alumnus.course}
                    </span>
                  </div>
                </div>
                
                {/* Social Links */}
                {/* <div className="flex justify-center gap-3">
                  {alumnus.linkedin && (
                    <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer">
                      <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </button>
                    </a>
                  )}
                  {alumnus.twitter && (
                    <a href={alumnus.twitter} target="_blank" rel="noopener noreferrer">
                      <button className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                        <FontAwesomeIcon icon={faTwitter} />
                      </button>
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
