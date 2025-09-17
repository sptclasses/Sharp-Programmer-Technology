import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "CCC Graduate",
      text: "The CCC course gave me a solid foundation in computer concepts. The instructors were knowledgeable and the library resources were excellent. I highly recommend Sharp Programming Technology!",
      rating: 5,
      initials: "MR",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Ahmed Hassan",
      role: "Python Developer",
      text: "The Python course transformed my career. I went from a complete beginner to landing a job as a Python developer within 6 months. Amazing experience!",
      rating: 5,
      initials: "AH",
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Specialist",
      text: "The Digital Marketing course provided practical skills that I use daily in my job. The hands-on approach made all the difference in my learning.",
      rating: 5,
      initials: "SJ",
      gradient: "from-pink-500 to-red-600"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who transformed their careers with Sharp Programming Technology
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
              {/* Profile Section */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  {testimonial.initials}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-purple-600 font-semibold text-sm mb-3">{testimonial.role}</p>
                
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div className="relative">
                <div className="text-6xl text-gray-200 absolute -top-2 -left-2 leading-none font-serif">&ldquo;</div>
                <p className="text-gray-700 italic leading-relaxed relative z-10 pl-4">
                  {testimonial.text}
                </p>
                <div className="text-6xl text-gray-200 absolute -bottom-4 -right-2 leading-none font-serif">&rdquo;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
