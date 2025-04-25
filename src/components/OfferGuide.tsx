import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const steps = [
  'Click The "Apply Now" Button',
  'Submit Your Email',
  'Complete A Short Survey',
  'Check Your Eligibility',
  'Start Reviewing'
];

const OfferGuide: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto mb-12">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <span className="text-xl font-semibold">Offer Guide</span>
        {isExpanded ? (
          <ChevronUp className="text-gray-600" />
        ) : (
          <ChevronDown className="text-gray-600" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 bg-white p-6 rounded-lg shadow-md animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">5 Simple Steps:</h3>
          <ul className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="mr-3 font-bold">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OfferGuide