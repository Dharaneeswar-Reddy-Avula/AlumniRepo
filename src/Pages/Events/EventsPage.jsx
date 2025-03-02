import React from 'react'
import EventsHero from '../../Components/EventsHero';
import UpComingEvents from '../../Components/UpComingEvents';
import PastEvents from '../../Components/PastEvents';
import SomeMemories from '../../Components/SomeMemories';
import {LayoutGridDemo} from "../../accernity/LayoutGridDemo"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react';
const   EventsPage = () => {
  // Sample event data
  const events = [
    { date: new Date(2025, 3, 23), type: 'past' },
    { date: new Date(2023, 9, 15), type: 'upcoming' },
    // Add more events as needed
  ]
   const [value, setValue] = useState(new Date())
  
    const tileClassName = ({ date, view }) => {
      if (view === 'month') {
        const event = events.find(event => event.date.toDateString() === date.toDateString())
        if (event) {
          return event.type === 'past' ? 'past-event' : 'upcoming-event'
        }
      }
    }
  return (
    <div className="  mt-20 md:mt-28 lg:mt-[140px] mx-6 ">
      <div className=' gap-[20px] grid md:grid-cols-3 grid-cols-1'>
        <div className='md:col-span-2'><EventsHero/></div>
        <div className=' md:col-span-1'>
        <Calendar
          onChange={setValue}
          value={value}
          tileClassName={tileClassName}  className="md:h-[500px]"
        />
        </div>
      </div>
        <UpComingEvents/>
        <PastEvents/>
        <LayoutGridDemo/>
        {/*<SomeMemories/>*/} 
        
       
       


      
    </div>
  )
}

export default EventsPage
