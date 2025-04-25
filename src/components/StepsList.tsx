import React from 'react';

const steps = [
  'Click The "Apply Now" Button',
  'Submit Your Email',
  'Complete A Short Survey',
  'Check Your Eligibility',
  'Start Reviewing'
];

const StepsList: React.FC = () => {
  return (
    <div className="bg-black text-white rounded-lg p-10 mb-12 w-full max-w-lg mx-auto shadow-2xl animate-fade-in-delay">
      <ul className="space-y-6">
        {steps.map((step, index) => (
          <li 
            key={index} 
            className="flex items-center justify-center text-center animate-slide-in"
            style={{ animationDelay: `${(index + 1) * 0.15}s` }}
          >
            <span className="text-lg md:text-xl">• {step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepsList;