
import React from 'react'

import news4 from '../assets/news4.jpg'
import { CgArrowTopRight } from "react-icons/cg";
import event1 from "../assets/event1.jpg"
import hackathon from "../assets/Hackathon.png"
import aihackathon from "../assets/AIHackathon.png"
import achieve4 from "../assets/achieve4.jpg"
const LatestNews = () => {
    // const data=[
    //     {
    //         img:event1,
    //         link:'Read More',
    //         dscription:'New tech Startup satrted by a alumni . A great achivement by a RGUKTN'
    //     },
    //     {
    //         img:news2,
    //         link:'Read More',
    //         description:'Reaching peaks of competion in college hackathon, big fight for first prize'
    //     },
    //     {
    //         img:news3,
    //         link:'Read More',
    //         description:'Event to be hosted by alumni relations'
    //     },
    //     {
    //         img:news4,
    //         link:'Read More',
    //         description:'RGUKT reaching new heights'
    //     },
    // ]
  return (
    <div className='flex flex-col gap-8 py-12 md:py-8 bg-gray-200'>
        <div className='text-center text-4xl  font-bold text-blue-950'>
            Latest News
        </div>
        <div className='grid w-full px-[20px] md:w-[70vw] md:grid-cols-3 grig-cols-1 gap-4 md:grid-rows-2  md:h-[40vh] lg:h-[65vh] m-auto'>
            <div className='relative md:row-span-2 rounded-xl overflow-hidden '>
                <img src={event1} className='w-full h-full ' />
                <div className='absolute top-0 left-0 w-full justify-between text-white p-4 h-full bg-black bg-opacity-40 flex flex-col'>
                    <div className='self-end flex flex-row gap-2 items-center font-semibold cursor-pointer'>Read More <CgArrowTopRight/></div>
                    {/* <div>'New tech Startup satrted by a alumni . A great achivement by a RGUKTN</div> */}

                </div>

            </div>
            <div className='relative md:col-span-2 rounded-xl overflow-hidden '>
                <img src={hackathon} className='w-full h-full ' />
                <div className='absolute top-0 left-0 w-full justify-between text-white p-4 h-full bg-black bg-opacity-40 flex flex-col'>
                    <div className='self-end flex flex-row gap-2 items-center font-semibold cursor-pointer'>Read More <CgArrowTopRight/></div>
                    <div className='text-[13px] md:text-[16px]'>'Reaching peaks of competion in college hackathon, big fight for first prize</div>

                </div>

            </div>
            <div className='relative  rounded-xl overflow-hidden '>
                <img src={aihackathon} className='w-full h-full ' />
                <div className='absolute top-0 left-0 w-full justify-between text-white p-4 h-full bg-black bg-opacity-40 flex flex-col'>
                    <div className='self-end flex flex-row gap-2 items-center font-semibold cursor-pointer'>Read More <CgArrowTopRight/></div>
                    <div  className='text-[13px] md:text-[16px] '>'Intel AI Hackathon 2024 - 2nd Runner Up'</div>

                </div>

            </div>
            <div className='relative  rounded-xl overflow-hidden '>
                <img src={achieve4} className='md:w-full md:h-full ' />
                <div className='absolute top-0 left-0 w-full justify-between text-white p-4 h-full bg-black bg-opacity-40 flex flex-col'>
                    <div className='self-end flex flex-row gap-2 items-center font-semibold cursor-pointer'>Read More <CgArrowTopRight/></div>
                    <div className='text-[13px] md:text-[16px]'>'One of the 75 innovators in BUILD Program by ITIC, IIT Hyderabad.'</div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default LatestNews