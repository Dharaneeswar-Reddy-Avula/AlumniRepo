import React from 'react'
import Eventsimg from "../assets/Eventsimg2.jpg"
const EventsHero = () => {
  return (
    <div className='relative h-[200px] md:h-[300px] lg:h-[500px] w-full '>
        <img src={Eventsimg}  className='h-full w-full rounded-lg'/>
        <div className=' absolute top-0 left-0 w-full h-full justify-center items-center flex flex-col gap-2 md:gap-4'>
            <div className='text-white font-bold text-2xl md:text-4xl'>
                Event Name
            </div>
            <div className='text-white text-lg'>
                12-24-50
            </div>
            <div>
                <button className='p-1 px-4 bg-white text-lg rounded-xl font-semibold md:mt-4'>
                    RVSP
                </button>
            </div>
        </div>
    </div>
  )
}

export default EventsHero