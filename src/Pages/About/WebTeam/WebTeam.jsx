import React from 'react'
import aboutteam2 from '../../../assets/aboutteam2.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const WebTeam = () => {
  const team=[
    {id:1,Name:"Sribabu",Profession:"Web Manager"},
    {id:2,Name:"Sribabu",Profession:"Web Manager"},
    {id:3,Name:"Sribabu",Profession:"Web Manager"},
    {id:4,Name:"Sribabu",Profession:"Web Manager"}
  ]
  return (
    <div className="  flex justify-center items-center w-full min-h-screen lg:p-[100px]">
      <div className="flex flex-row flex-wrap gap-[20px] md:gap-[60px] lg:gap-[100px] justify-center items-center">
      {
        team.map((mem)=>{
          return(
          <div className="w-[200px] h-[400px] rounded-full border border  overflow-hidden group relative"key={mem.id}>
          <div className="absolute "><img src={aboutteam2} className="rounded-full w-[200px] h-[400px] group-hover:translate-y-[140px] transition-opacity duration-300 ease-in-out"></img></div>
          <div className="absolute w-[50px]  h-[20px]  opacity-0 group-hover:opacity-100"><p className="mt-[30px] ml-[70px] font-bold text-blue-950">{mem.Name}</p></div>
          <div className="absolute w-[200px]  h-[20px]  opacity-0 group-hover:opacity-100 "><p className="mt-[60px] ml-[60px] font-bold text-blue-950">{mem.Profession}</p></div>
          <div className="w-[25px] h-[25px] rounded-md absolute mt-[100px] ml-[70px] bg-blue-950 text-white text-center flec items-center justify-center cursor-pointer  opacity-0 group-hover:opacity-100"><FaLinkedinIn className="p-[2px]  w-[25px] h-[25px]"/></div>
          <div className="w-[25px] h-[25px] rounded-md absolute mt-[100px] ml-[110px] bg-blue-950 text-white text-center flex items-center justify-center cursor-pointer  opacity-0 group-hover:opacity-100"><FaInstagram className="p-[2px]  w-[25px] h-[25px]"/></div>
        </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default WebTeam