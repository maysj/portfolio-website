import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 text-gray-800 hover:text-gray-600" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
