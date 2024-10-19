import React, { useState } from 'react';
import NavigationBar from '../components/organisms/NavigationBar';
import LeftView from '../components/organisms/LeftView';
import RightContent from '../components/organisms/RightContent';
import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';
import ImageWrapper from '../components/atoms/ImageWrapper';

const initialSpotlightContent = {
  type: 'video',
  src: '/assets/painting.mp4',
  alt: 'Spotlight Video',
};

const contentItems = [
  {
    title: 'Sunset Over the Mountains',
    description: 'A beautiful painting capturing the warmth of a sunset.',
    imageUrl: '/assets/sunset.jpg',
    type: 'image',
    tags: ['New', 'For Sale'],
  },
  {
    title: 'Forest Path',
    description: 'A peaceful path through a forest in autumn.',
    imageUrl: '/assets/forest.jpg',
    type: 'image',
    tags: ['Available'],
  },
  {
    title: 'Ocean Waves',
    description: 'Waves crashing on a rocky shore under a cloudy sky.',
    imageUrl: '/assets/ocean.jpg',
    type: 'image',
    tags: ['Featured'],
  },
];

function HomePage() {
  const [spotlightContent, setSpotlightContent] = useState(initialSpotlightContent);

  const handleSelectItem = (item) => {
    if (item && item.type && item.imageUrl) {
      setSpotlightContent(
        <div>
          <Heading level={2} className="text-blue-700 font-kosugi-maru">{item.title}</Heading>
          <Paragraph className="mt-2 font-kosugi-maru">{item.description}</Paragraph>
          <ImageWrapper src={item.imageUrl} alt={item.title} className="mt-4" />
        </div>
      );
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="bg-white font-kosugi-maru" style={{ backgroundImage: 'url(/assets/images/texture.png)' }}>
        {spotlightContent && (
          <LeftView spotlightContent={spotlightContent} menuItems={['Home', 'Portfolio', 'Contact']} />
        )}
        {contentItems && contentItems.length > 0 && (
          <RightContent contentItems={contentItems} onSelectItem={handleSelectItem} />
        )}
      </div>
    </>
  );
}

export default HomePage;
