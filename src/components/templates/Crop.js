import React from 'react';

function Crop({ children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden z-50">
      {/* Top Stripes */}
      <div className="absolute top-0 w-full z-50">
        {/* Black Stripe */}
        <div className="w-full h-16 bg-black"></div>
        {/* Blue Stripe */}
        <div className="w-full h-4 bg-[#273362]"></div>
      </div>

      {/* Bottom Stripes */}
      <div className="absolute bottom-0 w-full z-50">
        {/* Blue Stripe */}
        <div className="w-full h-4 bg-[#273362]"></div>
        {/* Black Stripe */}
        <div className="w-full h-16 bg-black"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex flex-col items-center justify-between mt-20 mb-20 z-10" style={{ backgroundImage: 'url(/public/texture.png)' }}>
        {children}
      </div>
    </div>
  );
}

export default Crop;
