import React, { useRef, useEffect } from 'react';
import Heading from '../atoms/Heading';
import Spotlight from '../molecules/Spotlight';

function LeftView({ spotlightContent, handleNextItem, handlePreviousItem }) {
  const videoRef = useRef(null);

  // Effect to play the video on page load
  useEffect(() => {
    if (spotlightContent.type === 'video' && videoRef.current) {
      videoRef.current.play();  // Ensure the video plays on load
    }
  }, [spotlightContent]);

  return (
    <div className="flex flex-col h-full p-8 overflow-hidden">
      {/* Header Section */}
      <div className="absolute top-0 left-0 p-4">
        <Heading
          level={3}
          className="font-bold font-kosugi text-black text-sm"
        >
          ARTIST: MAYS JONES, B. 2002
        </Heading>
      </div>

      {/* Spotlight Window */}
      <div className="flex justify-center items-center flex-shrink-0 h-[60vh] mt-16 relative">
        <div className="p-4 max-w-full max-h-full" style={{ backgroundColor: 'transparent' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {spotlightContent.type === 'video' ? (
              <video
                ref={videoRef}
                className="object-contain max-w-full max-h-full"
                src={spotlightContent.src}
                loop
                playsInline
              />
            ) : (
              <img
                className="object-contain max-w-full max-h-full"
                src={spotlightContent.src}
                alt={spotlightContent.title}
              />
            )}
          </div>
        </div>

        {/* Previous Arrow */}
        <button
          onClick={handlePreviousItem}
          className="absolute left-0 p-2 text-2xl bg-gray-200 hover:bg-gray-400 rounded-full"
        >
          ←
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNextItem}
          className="absolute right-0 p-2 text-2xl bg-gray-200 hover:bg-gray-400 rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default LeftView;
