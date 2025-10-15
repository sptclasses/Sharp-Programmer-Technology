import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTrophy, faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Results() {
  const results = [
    { icon: faUsers, number: "500+", label: "Students Trained" },
    { icon: faTrophy, number: "95%", label: "Success Rate" },
    { icon: faBriefcase, number: "80%", label: "Job Placement" },
    { icon: faStar, number: "4.8/5", label: "Average Rating" },
  ];

  return (
    <section id="results" className="py-24 bg-yellow-400 text-black">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-6xl font-bold text-center mb-12 text-black">Our Results</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center p-8 bg-black rounded-2xl shadow-lg transition-all duration-300 hover:transform hover:-translate-y-3">
              <div className="text-5xl mb-4 text-yellow-400">
                <FontAwesomeIcon icon={result.icon} />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-yellow-400">{result.number}</h3>
              <p className="text-lg text-yellow-400 opacity-90">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
