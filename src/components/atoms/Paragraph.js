import React from 'react';

function Paragraph({ children, className = '' }) {
  return (
    <p className={`text-base leading-relaxed text-gray-800 ${className}`}>
      {children}
    </p>
  );
}

export default Paragraph;
