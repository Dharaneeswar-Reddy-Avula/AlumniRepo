import React from 'react';
import { CheckCircle, X } from 'lucide-react';

export const SuccessModal = ({ registrationData, onClose }) => {
  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
          
          <div className="text-left mt-6 space-y-2">
            <p><strong>Name:</strong> {registrationData.name}</p>
            <p><strong>Email:</strong> {registrationData.email}</p>
            <p><strong>Phone:</strong> {registrationData.phone}</p>
          </div>

          <button
            onClick={onClose}
            className="mt-6 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};