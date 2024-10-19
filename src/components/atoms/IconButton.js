import React from 'react';

function IconButton({ icon, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition duration-200 ${className}`}
    >
      <i className={`material-icons ${icon}`}></i>
    </button>
  );
}

export default IconButton;
