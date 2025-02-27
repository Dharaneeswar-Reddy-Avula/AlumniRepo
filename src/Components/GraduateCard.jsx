import React from 'react'
import proud from '/assets/proud.png'
import '../Pages/Home/ProudGrad.css';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
const GraduateCard = () => {
  return (
    <div>
    <div className='relative flex justify-center items-center p-[30px] flex-col shadow-lg border-[1px] h-[320px] ml-[10px] w-full lg:w-[400px] md:w-[350px] md:h-[370px] lg:h-[350px]'>
      <div className="text-[40px] font-bold mt-[-70px] md:ml-[-250px] ml-[-150px]"><ImQuotesLeft /></div>
        <p className='text-center text-[20px] p-[5px] mt-[20px]'>"University X provided me with the skills and opportunities to excel in my career."</p>
        <div className="flex flex-row gap-[10px] bg-blue-200 md:w-[400px] h-[100px] absolute bottom-0 left-0 right-0">
        <img src={proud} className='h-[50px] w-[50px] rounded-full image ml-[50px] mt-[20px]'/>
        <div className="flex flex-col gap-[5px] mt-[20px]">
        <div className="text-[black] font-bold text-[20px]">Sribabu</div>
        <div className="text-[15px] ">WEb developer</div>
        </div>
        </div>
    </div>
    <div className="flex flex-row gap-[10px] justify-center mt-[20px]">
      <div className="h-[40px] w-[40px] flex justify-center items-center bg-gray-200 rounded-[50%]"><FaTwitter /></div>
      <div className="h-[40px] w-[40px] flex justify-center items-center bg-gray-200 rounded-[50%]"><FaLinkedinIn /></div>
      </div>

    </div>
  )
}

export default GraduateCard