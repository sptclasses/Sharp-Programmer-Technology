import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria",
      role: "CCC Graduate",
      text: "The CCC course gave me a solid foundation in computer concepts. The instructors were knowledgeable and the library resources were excellent.",
      rating: 5,
    },
    {
      name: "Ahmed",
      role: "Python Developer",
      text: "The Python course transformed my career. I went from a complete beginner to landing a job as a Python developer within 6 months.",
      rating: 5,
    },
    {
      name: "Sarah",
      role: "Digital Marketing Specialist",
      text: "The Digital Marketing course provided practical skills that I use daily in my job. The hands-on approach made all the difference.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
