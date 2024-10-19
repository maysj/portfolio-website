import React from 'react';
import Heading from '../atoms/Heading';
import Spotlight from '../molecules/Spotlight';
import HamburgerMenu from '../molecules/HamburgerMenu';

function LeftView({ spotlightContent, menuItems }) {
  return (
    <div className="fixed top-16 bottom-16 left-0 w-[40%] bg-white flex flex-col p-6">
      {/* Header Section */}
      <Heading
        level={3}
        className="text-left font-semibold text-blue-700 mb-6"
      >
        PAINTER: MAYS JONES, B. 2002
      </Heading>

      {/* Spotlight Window */}
      <div className="flex items-center justify-center border border-gray-300 p-4 h-[60%]">
        <Spotlight spotlightContent={spotlightContent} />
      </div>

      {/* Hamburger Menu */}
      <div className="absolute top-4 right-4">
        <HamburgerMenu menuItems={menuItems} />
      </div>
    </div>
  );
}

export default LeftView;
