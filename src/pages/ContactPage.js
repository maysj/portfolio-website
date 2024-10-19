import React, { useState } from 'react';
import Heading from '../components/atoms/Heading';
import InputField from '../components/atoms/InputField';
import Button from '../components/atoms/Button';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send to API or email)
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <Heading level={1} className="text-blue-700 mb-4">Contact Me</Heading>
      {isSubmitted ? (
        <div className="text-center mt-8">
          <Heading level={2} className="text-green-600">Thank you for reaching out!</Heading>
          <p className="mt-4 text-gray-700">I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <InputField
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <InputField
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
            />
          </div>
          <Button
            label="Send Message"
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3"
          />
        </form>
      )}
    </div>
  );
}

export default ContactPage;
