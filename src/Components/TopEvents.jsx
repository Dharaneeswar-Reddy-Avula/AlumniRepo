import React from 'react'
import EventCard from '../Pages/Home/EventCard'
const TopEvents = () => {
  return (
    <div className="mt-[20px]">
        <h1 className='text-[25px] font-semibold text-center '>Top News & Events</h1>
        <h2 className='text-[25px] font-semibold px-[50px] text-center'>Latest News</h2>
        <div className="eventcards flex justify-center gap-[20px] flex-wrap mt-[20px]">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        </div>
            
    </div>
  )
}

export default TopEvents