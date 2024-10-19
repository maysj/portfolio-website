// import React, { useState } from 'react';
// import LeftView from '../components/organisms/LeftView';
// import RightContent from '../components/organisms/RightContent';
// import sampleImage from '../assets/images/sample.jpg';
// import Heading from '../components/atoms/Heading';
// import Paragraph from '../components/atoms/Paragraph';
// import ImageWrapper from '../components/atoms/ImageWrapper';

// function LandingPage() {
//   const [selectedContent, setSelectedContent] = useState(null);

//   const sampleItems = [
//     {
//       title: 'Sunset Over the Mountains',
//       description: 'A beautiful painting capturing the warmth of a sunset.',
//       imageUrl: sampleImage,
//       tags: ['New', 'For Sale'],
//     },
//     {
//       title: 'Forest Path',
//       description: 'A peaceful path through a forest in autumn.',
//       imageUrl: sampleImage,
//       tags: ['Available'],
//     },
//     {
//       title: 'Ocean Waves',
//       description: 'Waves crashing on a rocky shore under a cloudy sky.',
//       imageUrl: sampleImage,
//       tags: ['Featured'],
//     },
//   ];

//   const handleContentSelect = (item) => {
//     setSelectedContent(
//       <div>
//         <Heading level={2} className="text-blue-700">{item.title}</Heading>
//         <Paragraph className="mt-2">{item.description}</Paragraph>
//         <ImageWrapper src={item.imageUrl} alt={item.title} className="mt-4" />
//       </div>
//     );
//   };

//   return (
//     <div className="flex w-full h-screen bg-gray-50">
//       {/* Left Fixed View */}
//       <div className="w-3/5 h-full overflow-auto border-r-2 border-gray-300 bg-gray-100 p-6">
//         <LeftView content={selectedContent} />
//       </div>

//       {/* Right Dynamic Content */}
//       <div className="w-2/5 h-full overflow-auto p-6 bg-white">
//         <RightContent items={sampleItems} onContentSelect={handleContentSelect} />
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
