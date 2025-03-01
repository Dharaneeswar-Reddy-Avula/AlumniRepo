import React from 'react'
import sec from '../assets/Secondeve.png'
import third from '../assets/Thirdeve.png'
import fourth from '../assets/Fourtheve.png'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";
const HomeEvents = () => {
  return (
    <div className='flex  py-10 md:px-20 flex-col-reverse md:gap-36 justify-center items-center md:flex-row bg-gray-300'>
        
        <div className='flex mt-4 flex-col gap-4 w-[85%] md:w-full  lg:w-[50%]'>
            <div className='text-4xl md:text-6xl font-bold text-blue-950'>Events</div>
            <div>🎉 Alumni Events - Stay Connected, Stay Inspired!
            Our alumni events are more than just reunions - they're opportunities to reconnect, celebrate, and grow together! Whether it,s a homecoming reunion, networking meetups, career workshops, or milestone celebrations, we ensure every event strengthens the bond between alumni and RGUKT-Nuzvid.

            </div>
            
            <div>
                <Link to='/event_calender'><button className='p-2 px-4 flex flex-row gap-2 items-center text-lg bg-blue-950 text-white font-bold rounded-xl'>Explore<FaArrowCircleRight className='text-white' /></button></Link>
            </div>

        </div>
        <div className=' relative h-[200px] lg:h-[400px]'>
            <img src={sec} className='absolute right-14 md:right-20 lg:right-24 bottom-0 -rotate-6 w-[100px] md:w-[200px] h-[100px]  lg:h-[200px]' />
            <img src={third} className='absolute bottom-0 -right-14 md:-right-10 lg:left-28 rotate-12 w-[100px] md:w-[200px] h-[100px] lg:h-[200px] ' />
            <img src={fourth} className='w-[100px] md:w-[200px] h-[100px] lg:h-[200px] rotate-2 ' />
        </div>
    </div>
  )
}

export default HomeEvents