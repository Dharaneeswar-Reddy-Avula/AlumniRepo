import React, { useState } from "react";
import {
  IoPersonSharp,
  IoCalendarOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

// Import images
import img from "../../../assets/Reunion.png";
import grid1 from "../../../assets/grid1.png";
import grid2 from "../../../assets/grid2.png";
import grid3 from "../../../assets/grid3.png";
import grid4 from "../../../assets/grid4.png";
import grid5 from "../../../assets/grid5.png";
import grid6 from "../../../assets/grid6.png";
import grid7 from "../../../assets/grid7.png";

const PastReunions = () => {
  const [activeTab, setActiveTab] = useState("reunions");

  const events = [
    {
      title: "Alumni Reunion - 2018",
      date: "Jan 30, 2025",
      location: "Venue XYZ",
      time: "2:15-5:15",
      mem: 250,
      image: img,
    },
    {
      title: "Alumni Reunion - 2019",
      date: "Feb 10, 2025",
      location: "Venue ABC",
      time: "2:15-5:15",
      mem: 500,
      image: img,
    },
  ];

  const galleryImages = [grid1, grid2, grid3, grid4, grid5, grid6, grid7];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Past Reunions
        </h1>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "reunions"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("reunions")}
            >
              Reunions
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "gallery"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("gallery")}
            >
              Gallery
            </button>
          </div>
        </div>

        {activeTab === "reunions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <IoCalendarOutline className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <IoLocationOutline className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <IoTimeOutline className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-blue-900 font-semibold">
                    <IoPersonSharp className="mr-2" />
                    <span>{event.mem}+ Attendees</span>
                  </div>
                </div>
              </motion.div>
            ))} */}
          </div>
        )}
        <div className="w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px] justify-center">
          Will Update Soon
        </div>

        {activeTab === "gallery" && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PastReunions;
