import React, { useState } from 'react';

function HamburgerMenu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-2 bg-gray-700 text-white rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="p-2">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
