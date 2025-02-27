import React from 'react';
import { BarChart2, Share2, MoreVertical } from 'lucide-react';

function PollCard({ author, date, question, options, totalVotes }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium">
            {author.charAt(0)}
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-[#172554]">{author}</h3>
            <span className="text-sm text-gray-600">{date}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500 hover:text-gray-700">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
      <h4 className="text-lg font-medium mb-3 text-[#172554]">{question}</h4>
      <div className="space-y-2 mb-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full p-3 text-left border rounded-md hover:bg-gray-50"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex items-center text-gray-600 text-sm">
        <BarChart2 className="w-4 h-4 mr-2" />
        {totalVotes} votes
      </div>
    </div>
  );
}

export { PollCard }