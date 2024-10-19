import React from 'react';
import Card from './Card';

function Gallery({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          tags={item.tags}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}

export default Gallery;
