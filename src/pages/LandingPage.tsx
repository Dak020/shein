import React from 'react';
import Logo from '../components/Logo';
import OfferGuide from '../components/OfferGuide';
import ApplyButton from '../components/ApplyButton';
import CompletionNotification from '../components/CompletionNotification';

const LandingPage: React.FC = () => {
  const redirectUrl = "https://glstrck.com/aff_c?offer_id=365&aff_id=28799";
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-10">
          <Logo />
        </div>
        
        <OfferGuide />
        
        <div className="text-center">
          <ApplyButton url={redirectUrl} />
          <p className="mt-4 text-gray-600 italic">You will hear from us within 24 hours</p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        © uplevelrewards.com, Inc. All rights reserved
      </div>
      <CompletionNotification />
    </div>
  );
};

export default LandingPage;