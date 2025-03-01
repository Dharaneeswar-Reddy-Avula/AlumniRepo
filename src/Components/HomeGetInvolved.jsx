import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";
import Cont from '../assets/contribute.png'
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
const HomeGetInvolved = () => {
  return (
    <div className='flex  py-20 md:px-20 flex-col gap-4 md:gap-10 justify-center items-center md:flex-row '>
        <div className='flex justify-center relative'>
            <img src={Cont} className='w-[85%] md:w-[100%]   lg:w-[75%] ' />
            <div className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-2xl md:text-lg lg:text-4xl font-bold'>10,540+</div>
        </div>
        <div className='flex flex-col gap-4 w-[85%] md:w-[200%]  lg:w-[60%]'>
            <div className='text-4xl font-bold text-blue-950'>Get Involved</div>
            <div>Being an RGUKT Nuzvid Alumni Association member is being connected to the university and helping it grow. This platform offers a chance to interact with other alumni, assist students, and work together on projects that build our community.
            Stay connected, stay inspired, and keep making a difference as members of the RGUKT Nuzvid tradition.

            </div>
            <div className='font-bold'>10,540+ Contributors</div>
            <div>
                <Link to='/donate'><button className='p-2 px-4 flex flex-row gap-2 items-center text-lg bg-blue-950 text-white font-bold rounded-xl'>Get Involve{/*<FaArrowCircleRight className='text-white' />*/}
                <div className="h-[15px] w-[15px] rounded-[50%] bg-[white] flex justify-center items-center">
  <MdArrowOutward className="text-blue-950 font-extrabold text-[24px]" />
</div>
</button></Link>
            </div>

        </div>
    </div>
  )
}

export default HomeGetInvolved