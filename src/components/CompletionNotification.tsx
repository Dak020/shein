import React, { useEffect, useState } from 'react';
import { Circle } from 'lucide-react';

const names = [
  // 80% female names
  'Sarah M.', 'Emma L.', 'Lisa P.', 'Anna W.', 'Maria C.',
  'Sophie N.', 'Emily S.', 'Rachel K.', 'Jessica T.', 'Laura B.',
  'Michelle D.', 'Christina R.', 'Jennifer H.', 'Nicole P.', 'Amy W.',
  'Victoria L.', 'Elizabeth A.', 'Catherine M.', 'Julia S.', 'Diana R.',
  // 20% male names
  'John D.', 'Michael R.', 'David K.', 'James B.', 'William G.'
];

const CompletionNotification: React.FC = () => {
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    const updateNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
    };

    updateNotification();
    const interval = setInterval(updateNotification, 5000);
    return () => clearInterval(interval);
  }, []);

  return currentName ? (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 animate-slide-in max-w-sm">
      <div className="flex items-center space-x-3">
        <Circle className="text-green-500 fill-green-500" size={12} />
        <div>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">{currentName}</span> just completed the survey
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default CompletionNotification;