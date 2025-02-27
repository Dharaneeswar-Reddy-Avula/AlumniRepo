import React from 'react';
import { Share2, TrendingUp } from 'lucide-react';

function FundraiserCard({ title, image, amountRaised, goal, contributors, isCompleted }) {
  const progress = (amountRaised / goal) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-3 text-[#172554]">{title}</h3>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">INR {amountRaised.toLocaleString()}</span>
            <span className="text-gray-600">of INR {goal.toLocaleString()} goal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#172554] h-2 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span className="text-sm">
            {contributors} people {isCompleted ? 'contributed' : 'donated. Lets get to more!'}
          </span>
        </div>
        <button className="w-full bg-[#172554] text-white py-2 rounded-md hover:bg-[#172554] flex items-center justify-center">
          {isCompleted ? 'CONTRIBUTE NOW' : 'DONATE NOW'}
        </button>
      </div>
    </div>
  );
}

export { FundraiserCard }