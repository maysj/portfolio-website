import React from 'react';

function Heading({ level = 1, children, className = '' }) {
  const Tag = `h${level}`;
  const baseStyle = {
    1: 'text-4xl font-bold mb-4',
    2: 'text-3xl font-semibold mb-3',
    3: 'text-2xl font-medium mb-2',
  }[level] || 'text-xl font-medium mb-2';

  return <Tag className={`${baseStyle} ${className}`}>{children}</Tag>;
}

export default Heading;
