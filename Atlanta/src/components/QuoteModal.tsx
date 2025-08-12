import { useState } from "react";
import { Button } from "@/components/ui/button";

const QuoteModal = ({ buttonText = "Get a Quote", buttonClass = "px-8 py-6 text-lg" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setStatus('Thank you! Your quote request has been submitted.');
        setTimeout(() => {
          setIsOpen(false);
          setStatus(null);
        }, 2000);
      } else {
        setStatus('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Button 
        size="lg" 
        className={buttonClass}
        onClick={() => setIsOpen(true)}
      >
        {buttonText}
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white p-8 rounded-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">Get Your Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full p-3 border rounded-lg"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full p-3 border rounded-lg"
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                className="w-full p-3 border rounded-lg"
              />
              <textarea 
                name="message"
                placeholder="Tell us about your project" 
                className="w-full p-3 border rounded-lg h-24"
              />
              
              <div className="text-center py-2 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Need faster service?{" "}
                  <a 
                    href="tel:+14042595099" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Call now +1 404 259 5099
                  </a>
                </p>
