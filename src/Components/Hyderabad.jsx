import React from "react";
import hyderabad from "../assets/hyderabad2.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import Alumni_Directory from "../Pages/Alumni/Alumni_Directory/Alumni_Directory";
import TopEvents from "./TopEvents";
import PastEvents from "./PastEvents";
const Hyderabad = () => {
  const [members, setMembers] = useState(true);
  const [news, setNews] = useState(false);
  const [events, setEvents] = useState(false);
  const activeMembers = () => {
    setMembers(true);
    setNews(false);
    setEvents(false);
  };
  const activeNews = () => {
    setMembers(false);
    setNews(true);
    setEvents(false);
  };
  const activeEvents = () => {
    setMembers(false);
    setNews(false);
    setEvents(true);
  };
  return (
    <div className="overflow-x-hidden mt-20">
      <div className="flex flex-col gap-8 justify-center items-center">
        {/* Join us */}
        <div className="group relative  w-screen h-[300px] md:h-[400px] overflow-hidden ">
          <img src={hyderabad} className="w-full h-full " />
          <div className="flex flex-col cursor-pointer gap-10 p-6  absolute top-0 left-0 w-full h-full bg-black bg-opacity-20">
            <div className="text-white font-semibold text-4xl">Hyderabad</div>
            <div>
              <button className="flex flex-row gap-2  items-center rounded-2xl px-4 py-[4px] bg-blue-950 text-white font-semibold">
                Join Us <FaArrowCircleRight />
              </button>
            </div>
          </div>
        </div>
        {/* Tab section */}
        <div className="flex flex-row font-semibold rounded-2xl border bg-white">
          <div
            className={`h-full cursor-pointer duration-[500ms] text-lg py-1 px-4 rounded-2xl ${
              members ? "bg-blue-950 text-white" : "text-blue-950"
            }`}
            onClick={activeMembers}
          >
            Members
          </div>
          <div
            className={`h-full cursor-pointer duration-[500ms] text-lg py-1 px-4 rounded-2xl ${
              news ? "bg-blue-950 text-white" : "text-blue-950"
            }`}
            onClick={activeNews}
          >
            News
          </div>
          <div
            className={`h-full cursor-pointer duration-[500ms] text-lg py-1 px-4 rounded-2xl ${
              events ? "bg-blue-950 text-white" : "text-blue-950"
            }`}
            onClick={activeEvents}
          >
            Events
          </div>
        </div>
        {members && <Alumni_Directory />}
        {news && <TopEvents/>}
        {events && <PastEvents/>}
      </div>
    </div>
  );
};

export default Hyderabad;
