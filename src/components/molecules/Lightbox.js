import React, { useEffect } from 'react';

function Lightbox({ image, nextImage, prevImage, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextImage, prevImage, onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300">
      <button className="absolute top-4 right-4 text-white text-3xl" onClick={onClose}>&times;</button>
      <div className="relative max-w-7xl max-h-full flex items-center space-x-8">
        <div className="cursor-pointer opacity-70 hover:opacity-100 transition" onClick={prevImage}>
          <img src={image.prevPreview} alt="Previous preview" className="w-56 h-auto object-cover rounded-md" />
        </div>
        <img src={image.current} alt="Lightbox content" className="object-contain w-full h-full transition-transform duration-300 max-w-3xl" />
        <div className="cursor-pointer opacity-70 hover:opacity-100 transition" onClick={nextImage}>
          <img src={image.nextPreview} alt="Next preview" className="w-56 h-auto object-cover rounded-md" />
        </div>
      </div>
      <div className="text-center text-white mt-4">
        <h2 className="text-2xl font-semibold">{image.title}</h2>
        <p className="text-sm mt-1">{image.date}</p>
      </div>
    </div>
  );
}

export default Lightbox;
