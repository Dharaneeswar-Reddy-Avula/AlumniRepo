import React from 'react';
import { X } from 'lucide-react';

export const SponsorshipDetails = ({ sponsorship, onClose, onRegister }) => {
  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center p-4 mt-[70px]">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-3xl font-bold mb-6">{sponsorship.name}</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Details</h3>
            <p className="text-gray-700">{sponsorship.fullDetails}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Rules & Eligibility</h3>
            <ul className="list-disc pl-5 space-y-2">
              {sponsorship.rules.map((rule, index) => (
                <li key={index} className="text-gray-700">{rule}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <p className="text-gray-700">{sponsorship.instructions}</p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-2xl font-bold text-indigo-600">{sponsorship.amount}</span>
            <button
              onClick={onRegister}
              className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};