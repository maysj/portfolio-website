import React from 'react';

function ImageWrapper({ src, alt, className = '', onClick }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`} onClick={onClick}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default ImageWrapper;
