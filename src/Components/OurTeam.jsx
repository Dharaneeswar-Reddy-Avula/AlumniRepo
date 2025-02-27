import React from 'react'
import aboutteam from "../assets/aboutteam2.jpg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const OurTeam = () => {
    const data = [
        { name: "Marta", position: "web developer" },
        { name: "Marta", position: "web developer" },
        { name: "Marta", position: "web developer" },
        { name: "Marta", position: "web developer" },
        { name: "Marta", position: "web developer" },
        { name: "Marta", position: "web developer" },
      ];
  return (
    <div className="bg-[#E3E3E3] flex flex-col gap-[30px] mt-[30px]">
            <div className="text-[40px] text-center text-blue-950 font-bold mt-[30px]">
              OUR TEAM
            </div>
            <div className="flex flex-wrap justify-center items-center gap-[50px] m-[30px]">
              {data.map((item, index) => (
                <div className="relative">
                  <img
                    src={aboutteam}
                    className="h-[350px] w-[300px] rounded-[5px]"
                  />
                  <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-[#F2F2F2] h-[90px] flex flex-col justify-center gap-[5px] items-center text-[black]">
                    <div className='font-bold'>{item.name}</div>
                    <div>{item.position}</div>
                    <div className="flex flex-row gap-[20px]">
                      <div>
                        <FaGithub className='cursor-pointer'/>
                      </div>
                      <div>
                        <FaLinkedinIn className='cursor-pointer'/>
                      </div>
                      <div>
                        <FaInstagram className='cursor-pointer'/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default OurTeam