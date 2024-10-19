import React from 'react';

function Spotlight({ spotlightContent }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {spotlightContent.type === 'video' ? (
        <video
          className="object-contain max-w-full max-h-full"
          src={spotlightContent.src}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      ) : (
        <img
          className="object-contain max-w-full max-h-full"
          src={spotlightContent.src}
          alt={spotlightContent.alt}
        />
      )}
    </div>
  );
}

export default Spotlight;
