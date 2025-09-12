"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

interface ContactProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Contact({ handleFormSubmit }: ContactProps) {
  const faqs = [
    { question: "Question 1", answer: "Answer the question" },
    { question: "Question 2", answer: "Answer the question" },
    { question: "Question 3", answer: "Answer the question" },
    { question: "Question 4", answer: "Answer the question" },
  ];

  const contactCards = [
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
  ];

  return (
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
                  <option value="CCC Course">CCC Course</option>
                  <option value="O'level Course">O&apos;level Course</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Python">Python</option>
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
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:transform hover:-translate-y-1 cursor-pointer"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="bg-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-600 cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* FAQ */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-8 text-gray-900">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
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
          {contactCards.map((contact, index) => (
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
  );
}
