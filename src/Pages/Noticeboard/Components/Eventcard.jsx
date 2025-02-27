import React from 'react';
import { Calendar, MapPin, Share2 } from 'lucide-react';

function EventCard({ title, date, location, image, isPastEvent }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg text-[#172554]">{title}</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        {location && (
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
        )}
        <div className="flex justify-between items-center">
          {isPastEvent ? (
            <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              Past Event
            </span>
          ) : (
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
              Upcoming Event
            </span>
          )}
          <button className="bg-[#172554] text-white px-4 py-2 rounded-md text-sm hover:bg-[#172554]">
            VIEW EVENT
          </button>
        </div>
      </div>
    </div>
  );
}

export { EventCard }