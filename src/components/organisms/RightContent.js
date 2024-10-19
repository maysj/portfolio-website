import React from 'react';
import ImageWrapper from '../atoms/ImageWrapper';
import HamburgerMenu from '../molecules/HamburgerMenu';

function RightContent({ contentItems, onSelectItem }) {
  return (
    <div className="w-[60%] ml-[40%] p-8 overflow-auto relative">
      {/* Hamburger Menu */}
      <div className="absolute top-4 right-4">
        <HamburgerMenu menuItems={['Home', 'Portfolio', 'Contact']} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {contentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => onSelectItem(item)}
          >
            <ImageWrapper
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-4 text-lg font-medium text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightContent;
