import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#273362] text-white py-4 px-8 shadow-md relative z-10">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">Mays Jones Art</Link>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="hover:text-gray-300 block md:inline-block mt-4 md:mt-0">Home</Link>
          <Link to="/portfolio" className="hover:text-gray-300 block md:inline-block mt-4 md:mt-0">Portfolio</Link>
          <Link to="/contact" className="hover:text-gray-300 block md:inline-block mt-4 md:mt-0">Contact</Link>
          <Link to="/cart" className="hover:text-gray-300 block md:inline-block mt-4 md:mt-0">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
