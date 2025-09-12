import React from "react";

export default function Alumni() {
  const alumni = [
    { name: "Maria", title: "Software Engineer", company: "Tech Corp" },
    { name: "Ahmed", title: "Data Scientist", company: "Data Analytics Inc" },
    { name: "Sarah", title: "Marketing Director", company: "Digital Agency" },
  ];

  return (
    <section id="alumni" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Meet Our Top Alumni</h2>
        <p className="text-center text-xl text-gray-600 mb-12">Real students stories from our certified professionals</p>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 flex-wrap">
            {alumni.map((alumnus, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center min-w-[250px] transition-all duration-300 hover:transform hover:-translate-y-3 border-2 hover:border-purple-600">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-4">
                  {alumnus.name.substring(0, 2).toUpperCase()}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{alumnus.name}</h4>
                <p className="text-purple-600 font-semibold mb-1">{alumnus.title}</p>
                <p className="text-gray-600 text-sm mb-4">{alumnus.company}</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-700 hover:transform hover:-translate-y-1 cursor-pointer">
                    LinkedIn
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
