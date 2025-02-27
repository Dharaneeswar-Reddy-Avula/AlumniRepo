import React from 'react'
import Frame from "../assets/Frame1.png";
import { FaArrowCircleRight } from "react-icons/fa";
const HelpUs = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row  gap-10 items-center">
          <div className="w-full md:w-[60%] md:h-[430px] h-[250px]">
            <img src={Frame} className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 md:w-[30%] justify-end items-end">
            <div className="text-[55px] lg:text-[70px] text-right text-blue-950 leading-snug font-bold">
              Help us to do better
            </div>
            <div>Your help makes a big difference to us.</div>
            <div>Let's work together and make it happen big.</div>
            <div>
              <button className="flex flex-row px-4 py-1 items-center gap-2 my-4 rounded-2xl bg-blue-950 text-white">
                Donate <FaArrowCircleRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HelpUs