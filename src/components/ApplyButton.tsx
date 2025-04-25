import React from 'react';

interface ApplyButtonProps {
  url: string;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ url }) => {
  return (
    <a 
      href={url} 
      className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-lg text-xl uppercase tracking-wider transform transition duration-300 hover:scale-105 hover:shadow-lg animate-pulse-subtle"
    >
      Apply Now
    </a>
  );
};

export default ApplyButton;