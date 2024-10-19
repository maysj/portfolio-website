import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Heading from '../components/atoms/Heading';
import Button from '../components/atoms/Button';
import ImageWrapper from '../components/atoms/ImageWrapper';
import Lightbox from '../components/molecules/Lightbox';

const portfolioData = {
  paintings: [
    { title: 'Sunset Over the Mountains', date: '2023-09-01', imageUrl: '/assets/images/sample.jpg' },
    { title: 'Forest Path', date: '2023-05-12', imageUrl: '/assets/images/sample.jpg' },
    { title: 'Ocean Waves', date: '2023-01-23', imageUrl: '/assets/images/sample.jpg' },
  ],
  drawings: [
    { title: 'Cityscape Sketch', date: '2023-07-15', imageUrl: '/assets/images/sample.jpg' },
    { title: 'Portrait Study', date: '2023-04-08', imageUrl: '/assets/images/sample.jpg' },
  ],
  digital: [
    { title: 'Abstract Digital Art', date: '2023-10-01', imageUrl: '/assets/images/sample.jpg' },
    { title: 'Fantasy Landscape', date: '2023-06-10', imageUrl: '/assets/images/sample.jpg' },
  ],
};

function PortfolioPage() {
  const [expandedMedium, setExpandedMedium] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);
  const { addToCart } = useContext(CartContext);

  const handleViewMore = (medium) => {
    setExpandedMedium(expandedMedium === medium ? null : medium);
  };

  const openLightbox = (medium, index) => {
    setLightboxImages(portfolioData[medium]);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + lightboxImages.length) % lightboxImages.length);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Heading level={1} className="text-blue-700 mb-8">My Portfolio</Heading>

      {Object.keys(portfolioData).map((medium) => (
        <div key={medium} className="mb-12">
          <Heading level={2} className="mb-4 capitalize">{medium}</Heading>
          <div className="flex overflow-x-scroll space-x-4">
            {portfolioData[medium].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-60" onClick={() => openLightbox(medium, index)}>
                <ImageWrapper
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg shadow-md cursor-pointer"
                />
                <p className="mt-2 text-gray-700">{item.title}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button
              label={expandedMedium === medium ? 'View Less' : 'View More'}
              onClick={() => handleViewMore(medium)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
            />
          </div>
          {expandedMedium === medium && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData[medium].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg" onClick={() => openLightbox(medium, index)}>
                  <ImageWrapper
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-md cursor-pointer"
                  />
                  <Heading level={3} className="mt-4 text-blue-700">{item.title}</Heading>
                  <p className="mt-2 text-gray-700">Created on: {item.date}</p>
                  <Button
                    label="Add to Cart"
                    onClick={() => addToCart(item)}
                    className="bg-green-500 hover:bg-green-600 text-white mt-4 py-2 px-4"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {lightboxOpen && (
        <Lightbox
          image={{
            current: lightboxImages[lightboxIndex].imageUrl,
            prevPreview: lightboxImages[(lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length].imageUrl,
            nextPreview: lightboxImages[(lightboxIndex + 1) % lightboxImages.length].imageUrl,
            title: lightboxImages[lightboxIndex].title,
            date: lightboxImages[lightboxIndex].date,
          }}
          nextImage={nextImage}
          prevImage={prevImage}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default PortfolioPage;
