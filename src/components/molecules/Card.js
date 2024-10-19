import React from 'react';
import ImageWrapper from '../atoms/ImageWrapper';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import LabelTag from '../atoms/LabelTag';

function Card({ title, description, imageUrl, tags = [], onClick }) {
  return (
    <div
      className="p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      <ImageWrapper src={imageUrl} alt={title} className="h-40 w-full mb-4" />
      {tags.length > 0 && (
        <div className="mb-2">
          {tags.map((tag, index) => (
            <LabelTag key={index} text={tag} className="mr-2" />
          ))}
        </div>
      )}
      <Heading level={3} className="text-gray-800 mb-2">{title}</Heading>
      <Paragraph className="text-gray-600">{description}</Paragraph>
    </div>
  );
}

export default Card;
