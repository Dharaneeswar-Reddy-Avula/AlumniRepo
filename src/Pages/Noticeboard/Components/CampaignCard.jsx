import React from 'react';
import { Flag } from 'lucide-react';

function CampaignCard({ title, image, endsOn }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[270px] ">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-[150px] object-cover" />
        <div className="absolute top-4 right-4">
          <Flag className="w-5 h-5 text-gray-700" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2 whitespace-nowrap text-[14.5px] text-[#172554]">{title}</h3>
        <p className="text-sm text-gray-600">Ends on {endsOn}</p>
        <button className="mt-3 text-[#172554] hover:text-[#172554] text-sm font-medium">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}

export default CampaignCard;

export { CampaignCard }