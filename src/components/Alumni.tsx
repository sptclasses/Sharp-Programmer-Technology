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
      image: "/images/download.jpg",
      certificate: "/images/download (2).jpg",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      name: "Ahmed Hassan", 
      title: "Data Science Manager", 
      grade: "A+",
      course: "Python & Digital Marketing",
      linkedin: "#",
      twitter: "#",
      image: "/images/download.jpg",
      certificate: "/images/download (1).jpg",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      name: "Sarah Johnson", 
      title: "Marketing Director", 
      grade: "A+",
      course: "Digital Marketing & Tally",
      linkedin: "#",
      twitter: "#",
      image: "/images/download.jpg",
      certificate: "/images/download (2).jpg",
      gradient: "from-pink-500 to-red-600"
    },
  ];
  // Certificates are static images inside the card; no interactions.

  return (
    <section id="alumni" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Stars</h2>
            <FontAwesomeIcon icon={faTrophy} className="text-4xl text-yellow-500" />
          </div>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our outstanding alumni who transformed their careers with Sharp Programming Technology
          </p> */}
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl border border-gray-100">
              {/* Row 1: avatar, name/title, grade and course all in one horizontal row */}
              <div className="w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${alumnus.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md overflow-hidden`}>
                    {alumnus.image && (alumnus.image.startsWith('/') || alumnus.image.startsWith('http')) ? (
                      <img
                        src={alumnus.image.startsWith('public/') ? '/' + alumnus.image.replace(/^public\//, '') : alumnus.image}
                        alt={`${alumnus.name} photo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      alumnus.image
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 truncate">{alumnus.name}</h4>
                    <p className="text-sm text-gray-500 truncate">{alumnus.course}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">{alumnus.grade}</span>
                </div>
              </div>

              {/* Row 2: certificate (uniform A4 frame) */}
              <div className="mt-4">
                <div className="relative w-full rounded-xl border bg-white shadow-sm ring-1 ring-gray-100">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-t-xl" />
                  <div className="p-2 md:p-3">
                    <div
                      className="w-full overflow-hidden rounded-md bg-white"
                      style={{ aspectRatio: "297 / 210" }}
                    >
                      {alumnus.certificate ? (
                        <img
                          src={alumnus.certificate}
                          alt={`${alumnus.name} certificate`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 bg-gray-50">
                          No Certificate Available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
