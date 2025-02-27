import React from 'react';
const NetworkCard = ({ title, members }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col justify-around ">
      <h3 className="font-medium mb-2  text-[13px] text-[#172554]">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{members} Members</p>
      <div className="flex -space-x-2 mb-3">
        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/32?img=${i + 1}`}
            alt="Member"
            className="w-[32px] h-[32px] rounded-full border-2 border-white"
          />
        ))}
      </div>
      <button className="text-sm text-gray-700 hover:text-gray-900 text-left">
        View All
      </button>
    </div>
  );
}

export default NetworkCard;

