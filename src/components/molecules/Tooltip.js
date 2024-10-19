import React from 'react';

function Tooltip({ text, children }) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

export default Tooltip;
