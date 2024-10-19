import React from 'react';

function Crop({ children }) {
  return (
    <div className="fixed w-full h-screen z-0">
      {/* Top Black Bar */}
      <div className="absolute top-0 w-full h-16 bg-black flex justify-center z-10">
        <div className="w-full max-w-screen-xl h-4 bg-[#273362]"></div>
      </div>

      {/* Bottom Black Bar */}
      <div className="absolute bottom-0 w-full h-16 bg-black flex justify-center z-10">
        <div className="w-full max-w-screen-xl h-4 bg-[#273362]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex flex-col items-center justify-between mt-16 mb-16 bg-white z-20" style={{ backgroundImage: 'url(/public/texture.png)' }}>
        {children}
      </div>
    </div>
  );
}

export default Crop;
