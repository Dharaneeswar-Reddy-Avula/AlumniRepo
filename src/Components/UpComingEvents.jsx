import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
// import firsteve from "../assets/firsteve.png";
// import Secondeve from "../assets/Secondeve.png";
const UpComingEvents = () => {
  return (
    <div className="my-6 mx-4 flex flex-col gap-4">
      <div className="text-3xl font-bold pt-2 text-blue-950">
        UpComing Events
      </div>
      <div className="pt-2">
        <h2 className="text-2xl font-bold text-center">Event name: ETERNOX - Never Ending Bond 🎉 </h2> 
        <br/>
        Hello Alumni, We are excited to invite
        you to the 10-Year Alumni Reunion at RGUKT-Nuzvid on March 22-23, 2025!
        Get ready for a nostalgic journey back to your alma mater, where
        lifelong memories were made. This two-day celebration will feature
        cultural programs, interactive sessions, and the grand launch of our
        Alumni Cell - a dedicated platform to strengthen connections between
        alumni and the institution for a brighter future. Let's come together to
        celebrate a decade of memories, reconnect with friends, and relive the
        golden days. Don't miss this historic event!
        <br /> 
        <h4 className="text-1xl font-bold">📢 Register now and make it memorable!</h4>
      </div>
      <div className="flex flex-row gap-[10px] text-sm flex-wrap pt-[6px] font-semibold">
        <div>
          <button className="bg-blue-100 rounded-lg flex items-center space-x-1 p-1 px-2 ">
            <CiLocationOn />
            <span>All events</span>
          </button>
        </div>
        <div>
          <button className="bg-blue-100 rounded-lg flex items-center space-x-1 p-1 px-2">
            <MdOutlineOndemandVideo />
            <span>Webinars</span>
          </button>
        </div>
        <div>
          <button className="bg-blue-100 rounded-lg flex items-center space-x-1 p-1 px-2">
            <IoPersonOutline />
            <span>Inperson</span>
          </button>
        </div>
        <div>
          <button className="bg-blue-100 rounded-lg flex items-center space-x-1 p-1 px-2">
            <IoPersonOutline />
            <span>Virtual</span>
          </button>
        </div>
      </div>
      {/* <div className="w-full bg-gray-300 flex items-center px-[20px] opacity-20 h-[80px]">
        Stay updated with the latest happenings at Rajiv Gandhi University of
        Knowledge Technologies! Our Event Calendar keeps you informed about
        upcoming seminars, workshops, cultural fests, alumni meetups, and more.
        Whether you're looking to learn, network, or celebrate, this is your
        go-to space for all events. Check the calendar regularly to never miss
        an exciting opportunity to engage and grow
      </div> */}

      <div className="pt-[10px] flex flex-col md:flex-row">
        <div className="flex w-full md:w-[25%]">
          <img src={firsteve} />
        </div>
        <div className="flex flex-col justify-center my-2 md:mx-4 gap-2 w-full md:w-[70%]">
          <div className="flex justify-end ">
            <button className="p-1 px-4 bg-blue-950 text-white text-sm md:text-lg rounded-xl font-semibold md:mt-4">
              RVSP
            </button>
          </div>
          <div className="flex font-semibold text-[#4573A1]">
            Oct 15
          </div>
          <div className="flex text-xl font-bold">
            Home coming
          </div>
          <div className="flex font-semibold text-[#4573A1] ">
            Join us for our annual home coming event,featuring the football
            game, the 5k run and more
          </div>
        </div>
      </div>
      {/* <div className="pt-[10px] flex flex-col md:flex-row">
        <div className="flex w-full md:w-[25%]">
          <img src={Secondeve} />
        </div>
        <div className="flex flex-col gap-2 md:mx-4 my-2 justify-center w-full md:w-[70%]">
          <div className="flex  justify-end ">
            <button className="p-1 px-4 bg-blue-950 text-white text-sm  md:text-lg rounded-xl font-semibold md:mt-4">
              RVSP
            </button>
          </div>
          <div className="flex  text-[#4573A1] font-semibold">
            Oct 15
          </div>
          <div className="flex  text-xl font-bold">
            Hello Nuzvidu
          </div>
          <div className="flex text-[#4573A1] font-semibold">
            Join us for our annual home coming event,featuring the football
            game, the 5k run and more
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UpComingEvents;
