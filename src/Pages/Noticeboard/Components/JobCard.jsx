import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

function JobCard({ title, company, location, deadline, salary, applications }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-lg mb-1 text-[#172554]">{title}</h3>
          <span className="text-sm text-gray-600">{company}</span>
        </div>
        <span className="bg-blue-100 text-[#172554] px-2 py-1 rounded text-sm">Job</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">Apply by: {deadline}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-2" />
          <span className="text-sm">{salary}</span>
        </div>
        <div className="text-gray-600 text-sm">
          {applications} applied
        </div>
      </div>
      <div className="flex justify-between">
        <button className="text-[#172554] hover:text-[#172554] font-medium">
          View Job Post
        </button>
        <button className="bg-[#172554] text-white px-6 py-2 rounded-md hover:bg-[#172554]">
          Apply
        </button>
      </div>
    </div>
  );
}

export { JobCard }