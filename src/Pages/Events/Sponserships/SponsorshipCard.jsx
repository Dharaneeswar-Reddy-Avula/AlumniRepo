import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SponsorshipCard = ({ sponsorship, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
      onClick={() => onClick(sponsorship)}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{sponsorship.name}</h3>
      <p className="text-gray-600 mb-4">{sponsorship.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-indigo-600 font-semibold">{sponsorship.amount}</span>
        <button
          className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClick(sponsorship);
          }}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};