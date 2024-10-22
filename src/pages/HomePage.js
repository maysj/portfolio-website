import React, { useState } from 'react';
import LeftView from '../components/organisms/LeftView';
import RightContent from '../components/organisms/RightContent';

const contentItems = [
  {
    title: 'Spotlight Video',
    src: '/assets/painting.mp4',
    type: 'video',
  },
  {
    title: 'Sunset Over the Mountains',
    description: 'A beautiful painting capturing the warmth of a sunset.',
    src: '/assets/sunset.jpg',
    type: 'image',
  },
  {
    title: 'Forest Path',
    description: 'A peaceful path through a forest in autumn.',
    src: '/assets/forest.jpg',
    type: 'image',
  },
  {
    title: 'Ocean Waves',
    description: 'Waves crashing on a rocky shore under a cloudy sky.',
    src: '/assets/ocean.jpg',
    type: 'image',
  },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const spotlightContent = contentItems[currentIndex];

  // Handle next item (cycle to the next)
  const handleNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  // Handle previous item (cycle to the previous)
  const handlePreviousItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex w-full h-screen">
      {/* LeftView */}
      <div className="w-[61.8%]">
        <LeftView
          spotlightContent={spotlightContent}
          handleNextItem={handleNextItem}
          handlePreviousItem={handlePreviousItem}
        />
      </div>

      {/* RightContent */}
      <div className="w-[38.2%]">
        <RightContent contentItems={contentItems} />
      </div>
    </div>
  );
}

export default HomePage;
