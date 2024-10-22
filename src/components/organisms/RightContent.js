import React, { useRef, useEffect } from 'react';
import ImageWrapper from '../atoms/ImageWrapper';

function RightContent({ contentItems }) {
  const scrollRef = useRef(null);

  // Map vertical scroll to horizontal scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    
    const handleScroll = (e) => {
      e.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaY; // Map vertical scroll to horizontal scroll
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  // Endless scrolling behavior
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const loopScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // Jump back to the start
      }
      if (scrollContainer.scrollLeft === 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth; // Jump to the end
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', loopScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', loopScroll);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="overflow-x-auto whitespace-nowrap h-full p-8">
      {/* Horizontal grid with two rows */}
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {contentItems.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg shadow-lg p-4 transition-transform hover:scale-105 
              ${index % 4 === 0 ? 'row-span-2 w-64' : 'w-48 h-48'} 
              ${index % 3 === 0 ? 'h-64' : ''}`}
          >
            <ImageWrapper
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover rounded-md"
            />
            <h2 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightContent;
