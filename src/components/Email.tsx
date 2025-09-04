
"use client";

import React, { useEffect } from 'react';
import Contact from './Contact';
import emailjs from '@emailjs/browser';

export default function Email() {
  
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key.
    emailjs.init('7afhTGVapt-8lumBL');
  }, []);

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
      alert('Please select a subject before submitting.');
      return;
    }
    
    // The service and template IDs are hardcoded here, as in your original code.
    const serviceID = 'service_g5qo4y4';
    const templateID = 'template_mt1uh2t';

    // Call the EmailJS send function
    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert("Email Sent!");
        form.reset(); // Optionally reset the form after successful submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div>
      <Contact handleFormSubmit={handleFormSubmit} />
    </div>
  );
}