import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="bg-black rounded-lg p-4 mb-4 animate-fade-in w-24 h-24 flex items-center justify-center">
        <span className="text-white text-7xl font-bold">S</span>
      </div>
      <h1 className="text-5xl font-bold tracking-tighter mb-2 animate-slide-up">SHEIN</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-slide-up-delay">Shein Reviewer</h2>
      <p className="text-gray-600 text-lg animate-fade-in-delay">Apply now to start reviewing for SHEIN</p>
    </div>
  );
};

export default Logo;