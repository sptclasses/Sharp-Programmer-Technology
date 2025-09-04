
"use client";

import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import emailjs from '@emailjs/browser';

// Custom Popup Component
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}

const CustomPopup: React.FC<PopupProps> = ({ isOpen, onClose, type, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all border pointer-events-auto">
        <div className="text-center">
          {/* Icon */}
          <div className="mb-4">
            {type === 'success' ? (
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          
          {/* Message */}
          <p className="text-gray-600 mb-6">{message}</p>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer ${
              type === 'success' 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Email() {
  const [popup, setPopup] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({ isOpen: false, type: 'success', title: '', message: '' });
  
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key.
    emailjs.init('DqOxNXub268mRzdQo');
  }, []);
  
  const showPopup = (type: 'success' | 'error', title: string, message: string) => {
    setPopup({ isOpen: true, type, title, message });
  };
  
  const closePopup = () => {
    setPopup({ isOpen: false, type: 'success', title: '', message: '' });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    // Collect form data using a more React-friendly approach
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const params = {
      fullName: formData.get('fullName') ,
      email: formData.get('email'), 
      phone: formData.get('phone') ,
      subject: formData.get('subject'),
      message: formData.get('message') 
    };
    
    console.log('Subject value:', params.subject);
    console.log('All form data:', params);
    
    // Validate that subject is selected
    if (!params.subject || params.subject === '') {
      showPopup('error', 'Subject Required', 'Please select a subject before submitting.');
      return;
    }
    
    // The service and template IDs are hardcoded here, as in your original code.
    const serviceID = 'service_uhos308';
    const templateID = 'template_bf0jr9e';

    // Call the EmailJS send function
    emailjs.send(serviceID, templateID, params)
      .then(() => {
        showPopup('success', 'Email Sent Successfully!', 'Thank you for your message! We\'ll get back to you soon.');
        form.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        showPopup('error', 'Email Failed', 'Failed to send email. Please try again later or contact us directly.');
      });
  };

  return (
    <>
      <Contact handleFormSubmit={handleFormSubmit} />
      <CustomPopup 
        isOpen={popup.isOpen}
        onClose={closePopup}
        type={popup.type}
        title={popup.title}
        message={popup.message}
      />
    </>
  );
}