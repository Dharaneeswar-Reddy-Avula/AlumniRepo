import React from 'react'
import eventImage from "/assets/eventImage.png"
import { FiArrowUpRight } from "react-icons/fi";

const EventCard = () => {
  return (
    <div className='w-[300px] h-[420px] shadow-lg  rounded-xl border-[1px]'>
        <img src={eventImage} className='h-[300px] w-full rounded-t-xl'/>
        <div className='bg-[#001F3F] h-[120px] p-[20px] rounded-b-xl'>
             <h3 className='flex text-white gap-[5px] items-center font-semibold text-[18px]'>Update <span className='text-white text-[20px] font-bold'><FiArrowUpRight />
             </span>
             </h3>
             <p className='text-white text-[15px] py-[10px]'>Check out the latest news about our college and the alumni of our college </p>
        </div>
    </div>
  )
}

export default EventCard