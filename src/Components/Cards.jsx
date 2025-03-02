import React from 'react'
import aboutteam2 from "../assets/aboutteam2.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Cards = () => {
  const teamMembers = [
    { id: 1, image: aboutteam2,name:"Name",profession:"Profession" },
    
  ];
  return (
   <>
   <div className="text-2xl font-bold flex justify-center">Members</div>
    <div className="flex flex-row flex-wrap justify-center gap-[40px] pt-[10px]">
      {teamMembers.map((member)=>{
        return(
          <div 
        key={member.id}
        className="flex w-[300px] h-[350px] border border-gray-200 rounded-md p-[10px] flex-col group">
       <div className="relative w-[300px] h-[270px]  group"><img src={member.image} className="w-[280px] h-[280px]  transition-all duration-300 ease-in-out group-hover:h-[330px]" />
         <div className="absolute translate-y-[-140px]  w-full h-[60%] bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
       </div>
 
         <div className="flex justify-center font-bold pt-[15px] text-[#182d6a] text-xl group-hover:translate-y-[-80px]">{member.name}</div>
         <div className="flex justify-center opacity-0 group-hover:translate-y-[-70px] group-hover:opacity-100  text-[#182d6a] text-xl">{member.profession}</div>
         <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-[-60px]"><hr></hr></div>
         <div className="flex flex-row opacity-0 group-hover:opacity-100 translate-y-[-50px] justify-evenly">
           <div><FaFacebookF className="w-[20px] h-[20px]  text-[#182d6a]"/></div>
           <div><FaInstagram className="w-[20px] h-[20px] text-[#182d6a]"/></div>
           <div><FaTwitter className="w-[20px] h-[20px] text-[#182d6a]"/></div>
 
         </div>
        
       </div>
        );
      })}
    
    </div>
   </>
  )
}

export default Cards
