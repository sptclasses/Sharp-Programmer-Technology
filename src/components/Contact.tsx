"use client";

import React from "react";
import{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock, 
  faQuestionCircle,
  faHeadset,
  faPaperPlane,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
// import { constants } from "buffer";

interface ContactProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export default function Contact({ handleFormSubmit }: ContactProps) {
  const [openIndex,setOpenIndex]=useState<number | null>(null);
  const toggleFAQ=(index:number)=>{
    setOpenIndex(openIndex===index ? null:index)
  }
  const faqs = [
    { 
      question: "How long are the courses?", 
      answer: "Course duration varies from 2-12 months depending on the program. CCC is 3 months, Python is 4 months, and O-Level is 12 months." 
    },
    { 
      question: "Are the courses government certified?", 
      answer: "Yes, our CCC and O-Level courses are NIELIT certified. We also provide industry-recognized certificates for other courses." 
    },
    { 
      question: "Do you provide job assistance?", 
      answer: "Absolutely! We have a 95% job placement rate and partnerships with 50+ companies to help our students find suitable positions." 
    },
    { 
      question: "Can I attend classes online?", 
      answer: "No, we offer only offline classes. You can choose the mode that suits your schedule and preferences." 
    },
  ];

  const contactCards = [
    {
      icon: faEnvelope,
      title: "Email Us",
      description: "Get detailed information about our courses and admission process",
      action: "Email",
      link: "mailto:Email",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: faPhone,
      title: "Call Us",
      description: "Speak directly with our admission counselors",
      action: "+9100000000",
      link: "tel:+9100000000",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      description: "Tour our modern facilities and meet our experienced faculty",
      action: "View Location",
      link: "#address",
      gradient: "from-orange-500 to-red-600"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-full mx-auto px-3 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faHeadset} className="text-4xl text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
            <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to start your learning journey? Contact our expert team for personalized guidance and course recommendations.
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">24hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="xl:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-purple-600" />
                <h3 className="text-3xl font-bold text-gray-900">Send us a Message</h3>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 hover:border-gray-300 bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 hover:border-gray-300 bg-gray-50 focus:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 hover:border-gray-300 bg-gray-50 focus:bg-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      Course Interest
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 hover:border-gray-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select your interest</option>
                      <option value="CCC Course">CCC Course</option>
                      <option value="O'level Course">O Level Course</option>
                      <option value="Python Programming">Python Programming</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Tally Accounting">Tally Accounting</option>
                      <option value="Java Programming">Java Programming</option>
                      <option value="C++ Programming">C++ Programming</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals, questions, or how we can help you..."
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all duration-300 hover:border-gray-300 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </button>
                  <button
                    type="reset"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer border-2 border-gray-200 hover:border-gray-300"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* FAQ Section - Takes 1 column */}
          <div className="xl:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-8">
                <FontAwesomeIcon icon={faQuestionCircle} className="text-2xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">FAQ</h3>
              </div>
              
              <div className="space-y-4 mb-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300   ease-in-out transform hover:-translate-y-1">
                   {/* <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4"> */}
                    <button onClick={()=>toggleFAQ(index)}
                    className="w-full text-left bg-gradient-to-r from-purple-50 to-blue-50 p-4 flex justify-between items-center cursor-pointer">
                      <h4 className="font-bold text-gray-900 text-sm">{faq.question}</h4>
                      <span className="text-gray-500 text-lg cursor-pointer select-none">
                        {openIndex===index?"-":"+"}
                      </span>
                      </button>
                      {/* answer */}
                      <div
                      className={`transition-all duration-300 ease-in-out ${
                        openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                      } overflow-hidden`}
                    >
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Hours */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon icon={faClock} className="text-green-600" />
                  <h4 className="font-bold text-green-900">Contact Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Mon - Fri:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Saturday:</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-700">Sunday:</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactCards.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl text-center shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <FontAwesomeIcon icon={contact.icon} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{contact.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{contact.description}</p>
              <a
                href={contact.link}
                className={`inline-block bg-gradient-to-r ${contact.gradient} text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                {contact.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
