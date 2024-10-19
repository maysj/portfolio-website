import React from 'react';

function LabelTag({ text, className = '' }) {
  console.log('LabelTag text:', text);  // Debugging log
  return (
    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white ${className}`}>
      {text}
    </span>
  );
}

export default LabelTag;
