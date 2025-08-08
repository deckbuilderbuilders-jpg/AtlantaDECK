import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Loader2 } from 'lucide-react';

const PortfolioPopup = ({ 
  buttonText = "Portfolio", 
  buttonClassName = "text-nav-text hover:text-foreground transition-colors",
  variant = "link" // "link" or "button"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Your Google Drive folder ID - replace with your actual folder ID
  const GOOGLE_DRIVE_FOLDER_ID = '1ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg'; // Replace with your folder ID
  
  // Sample images for demo - these will be replaced when Google Drive loads
  const sampleImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      title: 'Modern Deck Design'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop',
      title: 'Traditional Wooden Deck'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      title: 'Multi-Level Deck'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop',
      title: 'Deck with Pergola'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop',
      title: 'Waterfront Deck'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
      title: 'Composite Deck'
    }
  ];

  // Function to load images from Google Drive
  const loadGoogleDriveImages = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Note: This requires Google Drive API setup and CORS configuration
      // For production, you'd need to set up Google Drive API credentials
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${GOOGLE_DRIVE_FOLDER_ID}'+in+parents+and+mimeType+contains+'image'&key=YOUR_API_KEY`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch from Google Drive');
      }
      
      const data = await response.json();
      const driveImages = data.files.map(file => ({
        id: file.id,
        url: `https://drive.google.com/uc?id=${file.id}`,
        title: file.name.replace(/\.[^/.]+$/, "") // Remove file extension for display
      }));
      
      setImages(driveImages);
    } catch (err) {
      console.log('Google Drive not configured, using sample images');
      setImages(sampleImages);
    } finally {
      setLoading(false);
    }
  };

  // Load images on component mount
  useEffect(() => {
    loadGoogleDriveImages();
  }, []);

  const handleGoogleDriveLoad = () => {
    // This function is no longer needed since we auto-load
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openPopup = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closePopup();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={openPopup}
        className={buttonClassName}
      >
        {buttonText}
      </button>

      {/* Portfolio Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <div className="w-[95vw] h-[95vh] bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header */}
            <div className="bg-gray-900 text-white p-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Our Deck Portfolio</h2>
                <p className="text-gray-300 mt-2">Showcasing our finest work</p>
              </div>
              
              <button
                onClick={closePopup}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                {error}
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex">
              
              {/* Image Display */}
              <div className="flex-1 relative bg-gray-100 flex items-center justify-center">
                {loading ? (
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-8 h-8 animate-spin" />
                    <span className="text-lg">Loading images...</span>
                  </div>
                ) : images.length > 0 ? (
                  <>
                    <img
                      src={images[currentIndex]?.url}
                      alt={images[currentIndex]?.title}
                      className="max-w-full max-h-full object-contain shadow-lg"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full">
                      {currentIndex + 1} of {images.length}
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-500">
                    <p className="text-xl mb-4">No images to display</p>
                    <p>Add a Google Drive folder URL to load your portfolio</p>
                  </div>
                )}
              </div>

              {/* Sidebar with Thumbnails and Info */}
              <div className="w-80 bg-gray-50 border-l border-gray-200 flex flex-col">
                
                {/* Current Image Info */}
                {images.length > 0 && (
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">{images[currentIndex]?.title}</h3>
                  </div>
                )}

                {/* Thumbnail Grid */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <h4 className="font-semibold mb-4 text-gray-700">All Projects ({images.length})</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                          index === currentIndex 
                            ? 'ring-3 ring-blue-500 shadow-lg' 
                            : 'hover:shadow-md opacity-75 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions Footer */}
            <div className="bg-gray-100 px-6 py-3 text-sm text-gray-600 border-t">
              <p>
                <span className="font-semibold">Navigation:</span> Use arrow keys or click arrows to browse • 
                <span className="font-semibold ml-2">Exit:</span> Press Esc or click X
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPopup;
