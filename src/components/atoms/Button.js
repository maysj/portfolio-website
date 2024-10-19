import React from 'react';

function Button({ label, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
