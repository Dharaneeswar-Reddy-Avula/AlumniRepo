import React from 'react'
import Graduates from '../assets/ab222.jpg';
import ab from "../assets/AB.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
const Homehero = () => {
  return (
    <div className="md:pb-[100px] bg-gray-200">
      <div className="relative">
        <img src={Graduates} className="w-full  md:object-cover md:h-[650px] h-[400px] hidden md:block"></img>
        <img src={ab} className="w-full h-[350px] block md:hidden"></img>

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="text-xl md:text-4xl font-semibold md:font-bold absolute mt-[-200px] lg:mt-[-350px] md:mt-[-400px] text-white w-[200px] md:w-[300px] ml-[20px] md:ml-[100px]">
        OUR PROUD ALUMNI

      </div>
      <div  className="absolute  mt-[-150px] lg:mt-[-260px] md:mt-[-300px] text-white w-[200px] md:w-[300px] ml-[20px] md:ml-[100px] font-semibold"><b>"Connecting Past, Inspiring Future - The RGUKT-Nuzvid Alumni Network" 🚀🎓</b></div>
      <div className="flex flex-row absolute mt-[-110px] md:mt-[-130px] lg:mt-[-100px] md:ml-[300px] lg:ml-[700px] gap-[20px] ml-[130px]">
        <div><FaInstagram className="w-[30px] h-[30px] text-white hidden"/></div>
        <div><FaSquareFacebook className="w-[30px] h-[30px] text-white hidden"/></div>
      </div>
      <div className="grid grid-cols-3 md:flex md:flex-row   gap-[4px] md:gap-[50px] lg:gap-[150px] bg-white mt-[-50px] absolute p-3 md:p-[20px] rounded-md md:ml-[130px] lg:ml-[410px] lg:ml-[500px]  m-[10px] justify-center items-center">
       <div className="flex flex-col  border-blue-950 h-[50px] border-r-4 md:ml-[15px] md:ml-[30px]">
        <div className="font-bold text-blue-950 md:text-4xl md:mr-[40px] lg:mr-[70px]">6000+</div>
        <div className="md:ml-[10px] font-bold mr-[40px] lg:mr-[70px]">Students</div>

       </div>
       <div className="flex flex-col md:border-blue-950 h-[50px] md:border-r-4 ml-[10px] md:ml-[0px]">
        <div className="font-bold text-blue-950 md:text-4xl md:mr-[40px] lg:ml-[-60px]">19000+</div>
        <div className="md:ml-[10px] font-bold md:mr-[40px] lg:ml-[-60px]">Alumni</div>
        

       </div>
       <div className="flex flex-col md:mt-[0px] lg:mr-[20px]">
        <div className="font-bold text-blue-950 md:text-4xl lg:ml-[-50px]">7,000+</div>
        <div className=" font-bold lg:ml-[-50px]">Placements</div>

       </div>
      </div>
      
    </div>
  )
}

export default Homehero
