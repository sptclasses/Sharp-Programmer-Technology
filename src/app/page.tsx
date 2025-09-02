"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUsers,
  faTrophy,
  faBriefcase,
  faStar,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("home");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [alumniIndex] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop",
  ];

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(formData));
    alert("Thank you for your message! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center py-4">
          <div className="flex items-center gap-3 text-xl font-bold text-purple-600">
            <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
            <span>Sharp Programmer Technology</span>
          </div>
          <ul className="hidden md:flex gap-8">
            {["home", "about", "courses", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`font-medium transition-all duration-300 relative ${
                    activeSection === item ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-purple-600"></span>}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            {["home", "about", "courses", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-5 py-2 font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={slide} alt={`Library ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-white max-w-4xl px-5">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">Library Facilities</h1>
          <div className="mb-4">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold inline-block">
              Available
            </span>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold text-yellow-400 mb-2">** Government Certified Course **</p>
            <p className="text-base opacity-90">Eligible colleges in NON and VOM class institutions</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Us</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">Empowering Education Through Excellence</h3>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                We are a government-certified institution dedicated to providing high-quality education and comprehensive
                library facilities. Our mission is to foster learning and development through innovative teaching methods and
                state-of-the-art resources.
              </p>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                With years of experience in education, we have helped thousands of students achieve their academic and
                professional goals through our carefully designed courses and extensive library resources.
              </p>
              <div className="flex gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-purple-600 mb-2">500+</h4>
                  <p className="text-gray-600">Students Graduated</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-purple-600 mb-2">10+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-purple-600 mb-2">15+</h4>
                  <p className="text-gray-600">Expert Instructors</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/1710743175phptumVs9.jpeg"
                alt="About Us"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Brief Introduction of the Course</h2>
          <p className="text-center text-xl text-gray-600 mb-12">Explore our government-certified courses designed for your success</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {[
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
            ].map((course, index) => (
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
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-600 hover:transform hover:-translate-y-1 w-full">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
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

      {/* Results Section */}
      <section id="results" className="py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-12">Our Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: faUsers, number: "500+", label: "Students Trained" },
              { icon: faTrophy, number: "95%", label: "Success Rate" },
              { icon: faBriefcase, number: "80%", label: "Job Placement" },
              { icon: faStar, number: "4.8/5", label: "Average Rating" },
            ].map((result, index) => (
              <div key={index} className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-3">
                <div className="text-5xl mb-4 text-yellow-400">
                  <FontAwesomeIcon icon={result.icon} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{result.number}</h3>
                <p className="text-lg opacity-90">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section id="alumni" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Meet Our Top Alumni</h2>
          <p className="text-center text-xl text-gray-600 mb-12">Real students stories from our certified professionals</p>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex justify-center gap-8 flex-wrap">
              {[
                { name: "Maria", title: "Software Engineer", company: "Tech Corp" },
                { name: "Ahmed", title: "Data Scientist", company: "Data Analytics Inc" },
                { name: "Sarah", title: "Marketing Director", company: "Digital Agency" },
              ].map((alumni, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center min-w-[250px] transition-all duration-300 hover:transform hover:-translate-y-3 border-2 hover:border-purple-600">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-4">
                    {alumni.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">{alumni.name}</h4>
                  <p className="text-purple-600 font-semibold mb-1">{alumni.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{alumni.company}</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-700 hover:transform hover:-translate-y-1">
                      LinkedIn
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-5">
    {/* Grid for Form + FAQ side by side */}
    <div className="grid lg:grid-cols-2 gap-16 mb-16">
      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-8 text-gray-900">Send us a Message</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone No.
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="course-inquiry">CCC Course</option>
                      <option value="library-access">O&apos;level Course</option>
              <option value="general">Digital Marketing</option>
              <option value="general">Python</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:transform hover:-translate-y-1"
            >
              Send Message
            </button>
            <button
              type="reset"
              className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* FAQ */}
      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold mb-8 text-gray-900">Frequently Asked Questions</h3>
        {[
          { question: "Question 1", answer: "Answer the question" },
          { question: "Question 2", answer: "Answer the question" },
          { question: "Question 3", answer: "Answer the question" },
          { question: "Question 4", answer: "Answer the question" },
        ].map((faq, index) => (
          <div key={index} className="mb-6 p-4 bg-purple-600 text-white rounded-lg">
            <h4 className="font-semibold mb-2">{faq.question}</h4>
            <p className="text-sm opacity-90">{faq.answer}</p>
          </div>
        ))}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Contact Hours</h4>
          <p className="text-gray-600 mb-2">
            <strong>Monday - Friday:</strong>
            <br />
            9:00 AM - 6:00 PM EST
          </p>
          <p className="text-gray-600">
            <strong>Saturday:</strong>
            <br />
            10:00 AM - 4:00 PM EST
          </p>
        </div>
      </div>
    </div>

    {/* Contact Cards (Email / Phone / Address) */}
    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          icon: faEnvelope,
          title: "Email Us",
          description: "Send us an email and we'll get back to you within 24 hours",
          action: "Email Us",
          link: "mailto:info@noline.edu",
        },
        {
          icon: faPhone,
          title: "Call Us",
          description: "Speak to our friendly team member about our courses",
          action: "Phone Us",
          link: "tel:+1234567890",
        },
        {
          icon: faMapMarkerAlt,
          title: "Visit Us",
          description: "Come say hello at our office headquarters",
          action: "Address",
          link: "#address",
        },
      ].map((contact, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl text-center shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
        >
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
            <FontAwesomeIcon icon={contact.icon} />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">{contact.title}</h3>
          <p className="text-gray-600 mb-4">{contact.description}</p>
          <a
            href={contact.link}
            className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
          >
            {contact.action}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 text-xl font-bold text-purple-400 mb-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
                <span>Sharp Programmer Technology</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering students through government-certified education and comprehensive library facilities.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: faFacebook, href: "#" },
                  { icon: faTwitter, href: "#" },
                  { icon: faLinkedin, href: "#" },
                  { icon: faInstagram, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-purple-700 hover:transform hover:-translate-y-1"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Courses</h3>
              <ul className="space-y-2">
                {["Web Development", "Data Science", "Digital Marketing", "Python Programming"].map((course, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection("courses")}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {course}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
              <ul className="space-y-2">
                {[
                  { name: "About Us", section: "about" },
                  { name: "Contact", section: "contact" },
                  { name: "Library", section: "home" },
                  { name: "Success Stories", section: "results" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Sharp Programmer Technology Education. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-50 transition-all duration-300 hover:bg-green-600 hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}
