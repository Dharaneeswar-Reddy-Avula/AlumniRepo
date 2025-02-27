import React from 'react'
import EventsHero from '../../Components/EventsHero';
import UpComingEvents from '../../Components/UpComingEvents';
import PastEvents from '../../Components/PastEvents';
import SomeMemories from '../../Components/SomeMemories';
import {LayoutGridDemo} from "../../accernity/LayoutGridDemo"


const   EventsPage = () => {
  return (
    <div className="  mt-20 md:mt-28 lg:mt-[140px] mx-6 ">
        <EventsHero/>
        <UpComingEvents/>
        <PastEvents/>
        <LayoutGridDemo/>
        {/*<SomeMemories/>*/} 
        
       
       


      
    </div>
  )
}

export default EventsPage
