
import React from 'react';

const ChristmasTree: React.FC = () => {
  return (
    <div className="relative w-32 h-40 flex flex-col items-center">
      {/* Stars */}
      <div className="absolute -top-4 text-yellow-400 text-3xl animate-pulse">★</div>
      {/* Layers */}
      <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-green-700 -mb-4 drop-shadow-lg"></div>
      <div className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[50px] border-b-green-800 -mb-4 drop-shadow-lg"></div>
      <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[60px] border-b-green-900 drop-shadow-lg"></div>
      {/* Trunk */}
      <div className="w-6 h-8 bg-amber-900"></div>
      {/* Decorations */}
      <div className="absolute top-10 left-12 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
      <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
      <div className="absolute bottom-16 left-10 w-2 h-2 rounded-full bg-yellow-300"></div>
    </div>
  );
};

export default ChristmasTree;
