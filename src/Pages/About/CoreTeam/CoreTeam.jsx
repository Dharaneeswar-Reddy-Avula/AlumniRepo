import React from 'react';
import Newimage from "../../../assets/Newimage.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";

const team = [
  { id: 1, name: "Alice", Professsion: "President", ID: "N21000" },
 
];
const tem=[
  { id: 3, name: "Bob", Professsion: "Vice President", ID: "N21001" },
  { id: 4, name: "Charlie", Professsion: "Secretary", ID: "N21002" },
  { id: 5, name: "David", Professsion: "Treasurer", ID: "N21003" },
]

const CoreTeam = () => {
  return (
    <>
    <div className="flex flex-col">
    <div className="flex flex-wrap justify-center items-center gap-6 p-4 mt-[50px] lg:mt-[140px] md:mt-[70px]">
      {team.map((member) => (
        <div key={member.id} className="relative flex flex-col items-center text-center">
          <img
            src={Newimage}
            alt={member.name}
            className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-blue-950 p-2"
          />
          <div className="absolute top-[80px] md:top-[80px] ml-[190px] bg-blue-950 md:ml-[195px] flex flex-row justify-center items-center rounded-[50%] w-[40px] h-[40px]">
            <FaLinkedinIn  className="text-white text-xl " />
          </div>
          <div className="font-bold lg:mt-4">
            <div>{member.name}</div>
            <div>{member.Professsion}</div>
            <div>{member.ID}</div>
          </div>
        </div>
      ))}
      </div>
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
      {tem.map((member) => (
        <div key={member.id} className="relative flex flex-col items-center text-center">
          <img
            src={Newimage}
            alt={member.name}
            className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-blue-950 p-2"
          />
          <div className="absolute top-[80px] md:top-[80px] ml-[190px] bg-blue-950 md:ml-[195px] flex flex-row justify-center items-center rounded-[50%] w-[40px] h-[40px]">
            <FaLinkedinIn  className="text-white text-xl " />
          </div>
          <div className="font-bold lg:mt-4">
            <div>{member.name}</div>
            <div>{member.Professsion}</div>
            <div>{member.ID}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
      </>
    
  );
};

export default CoreTeam;
