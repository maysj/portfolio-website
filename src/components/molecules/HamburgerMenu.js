import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Clear any timeout to close the menu
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a slight delay before closing the menu
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 500); // Menu will close after 500ms delay
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hamburger Icon */}
      <button
        className="p-2 bg-gray-700 text-white rounded-md focus:outline-none"
      >
        &#9776;
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="p-2">
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              <Link to="/" className="hover:text-gray-300 block">Home</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              <Link to="/portfolio" className="hover:text-gray-300 block">Portfolio</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              <Link to="/contact" className="hover:text-gray-300 block">Contact</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
              <Link to="/cart" className="hover:text-gray-300 block">Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
