import React from "react";
import img from "../assets/logo.png";
const Announcement = () => {
  const announc = [
    {
      profile: img,
      sendor: "Office of Alumni Affairs - RGUKT NUZVID",
      position: "PROJECT ASSISTANT",
      address: "at Rajiv Gandhi University of Knowledge Technologies",
      description:"📢 ANNOUNCEMENT: ETERNOX –Never Ending Bond 🎉 Dear Alumni,It's time to reunite, relive, and rejoice! Join us for ETERNOX, our grand Alumni Homecoming Event at RGUKT-Nuzvid. Reconnect with friends, share memories, and celebrate the journey! 📅 22nd – 23rd March | 📍 RGUKT-Nuzvid Campus Don't miss this unforgettable reunion! Confirm your participation now.",
    },
    {
      profile: img,
      sendor: "Office of Alumni Affairs - RGUKT NUZVID",
      position: "PROJECT ASSISTANT",
      address: "at Rajiv Gandhi University of Knowledge Technologies",
      description:"📢 ANNOUNCEMENT: ETERNOX –Never Ending Bond 🎉 Dear Alumni,It's time to reunite, relive, and rejoice! Join us for ETERNOX, our grand Alumni Homecoming Event at RGUKT-Nuzvid. Reconnect with friends, share memories, and celebrate the journey! 📅 22nd – 23rd March | 📍 RGUKT-Nuzvid Campus Don't miss this unforgettable reunion! Confirm your participation now.",
    },
    {
        profile: img,
        sendor: "Office of Alumni Affairs - RGUKT NUZVID",
        position: "PROJECT ASSISTANT",
        address: "at Rajiv Gandhi University of Knowledge Technologies",
      description:"📢 ANNOUNCEMENT: ETERNOX –Never Ending Bond 🎉 Dear Alumni,It's time to reunite, relive, and rejoice! Join us for ETERNOX, our grand Alumni Homecoming Event at RGUKT-Nuzvid. Reconnect with friends, share memories, and celebrate the journey! 📅 22nd – 23rd March | 📍 RGUKT-Nuzvid Campus Don't miss this unforgettable reunion! Confirm your participation now."
      },
  ];
  return (
   
    <div className="w-full md:w-[45%]  border bg-white shadow-lg rounded-md">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <h2 className="text-lg text-blue-950 font-bold">ANNOUNCEMENTS</h2>
        <a href="#" className="text-red-600 font-semibold">View All</a>
      </div>

      {/* Announcement List */}
      <div className="h-[400px] overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {announc.map((data, index) => (
            <div key={index} className="flex flex-col border-2 border-gray-300 rounded-md p-3 hover:bg-gray-200">
              <div className="flex gap-3 items-center">
                <img src={data.profile} className="w-12 h-12 rounded-full" alt="profile" />
                <div>
                  <div className="font-semibold text-sm">{data.sendor}</div>
                  <div className="text-gray-500 text-xs font-semibold">{data.position.toUpperCase()}</div>
                  <div className="text-xs text-gray-900">{data.address}</div>
                </div>
              </div>
              <p className="text-sm mt-2">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Announcement;
