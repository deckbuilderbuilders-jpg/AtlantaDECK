import { useState } from "react";
import { Button } from "@/components/ui/button";

const QuoteModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button that opens the popup */}
      <Button 
        size="lg" 
        className="px-8 py-6 text-lg"
        onClick={() => setIsOpen(true)}
      >
        Get a Quote
      </Button>

      {/* Popup Window */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4 text-black">Get Your Quote</h2>
            
            {/* Form */}
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border rounded-lg"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-3 border rounded-lg"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-3 border rounded-lg"
              />
              <textarea 
                placeholder="Tell us about your project" 
                className="w-full p-3 border rounded-lg h-24"
              />
              
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Submit Quote Request
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteModal;
