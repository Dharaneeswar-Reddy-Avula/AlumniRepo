import React from 'react';
import Homehero from '../../Components/Homehero';
import TopEvents from '../../Components/TopEvents';
import ProudGraduates from './ProudGraduates';
import HomeAbout from '../../Components/HomeAbout';
import HomeEvents from '../../Components/HomeEvents';
import HomeGetInvolved from '../../Components/HomeGetInvolved';
import Network from '../../Components/Network';
import Testimonals from "../../accernity/Testimonals";
import {InfiniteMovingCardsDemo} from "../../accernity/InfiniteMovingCardsDemo";
import HomeHeroBelow from '../../Components/HomeHeroBelow'
import Announcement from '../../Components/Announcement';
import DistinguishedAlumni from '../../Components/DistinguishedAlumni';
import LatestNews from '../../Components/LatestNews';
const Home = () => {
  return (
    <div className=''>
      <div className='flex md:flex-row flex-col justify-center items-center '>
      <div className='w-[100%]'><Homehero /></div>
     
      </div>
      <LatestNews />
      <ProudGraduates />
      <div className="flex flex-col md:flex-row w-full mt-8 md:justify-center lg:justify-around items-center  px-4 gap-[20px]">
      <Announcement />
      <DistinguishedAlumni />
    </div>

      <Testimonals />
      <HomeAbout />
      <Network />
      <HomeEvents />
      
      <HomeGetInvolved />
    </div>
  );
};
export default Home;
