import React from "react";
import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      image: "/images/ccc-removebg-preview.png",
      title: "Course on Computer Concepts (CCC)",
      description:
        "A basic-level computer literacy program by the National Institute of Electronics & Information Technology (NIELIT) designed to provide individuals with fundamental computer and IT skills for professional and daily use.",
      link: "https://www.nielit.gov.in/content/course-computer-concepts-ccc",
    },
    {
      image: "/images/o-level-banner-removebg-preview.png",
      title: "O Level",
      description:
        "A foundation-level computer course in India offered by the National Institute of Electronics and Information Technology (NIELIT), formerly known as the DOEACC Society.",
      link: "https://www.nielit.gov.in/hi/node/15962",
    },
    {
      image: "/images/Introduction_to_Digital_Marketing-1680153233.png",
      title: "Digital Marketing Mastery",
      description:
        "Teaches online marketing fundamentals like SEO, social media marketing, content marketing, and email marketing to help individuals build career and grow business online",
      link: "https://www.nielit.gov.in/sites/default/files/Delhi/digital%20marketing%206%20WEEKS.pdf",
    },
    {
      image: "/images/Python-Emblem.png",
      title: "Python",
      description:
        "Teaches beginners the Python programming language's fundamentals, including syntax, data types, variables, control flow (loops and conditionals), and basic data structures, often with hands-on coding exercises to develop foundational skills for various applications like web development, automation, data analysis, and machine learning",
      link: "https://www.nielit.gov.in/calicut/content/python-beginners",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Brief Introduction of the Course</h2>
        <p className="text-center text-xl text-gray-600 mb-12">Explore our government-certified courses designed for your success</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:transform hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="text-center mb-6">
                <Image src={course.image} alt={course.title} width={150} height={80} className="mx-auto rounded-lg" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">{course.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{course.description}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center"
                >
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-600 hover:transform hover:-translate-y-1 w-full cursor-pointer">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
