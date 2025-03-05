// import React from 'react';
// import Newimage from "../../../assets/Newimage.png";
// import { TiSocialLinkedinCircular } from "react-icons/ti";
// import { FaLinkedinIn } from "react-icons/fa6";

// const team = [
//   { id: 1, name: "Alice", Professsion: "President", ID: "N21000" },
 
// ];
// const tem=[
//   { id: 3, name: "Bob", Professsion: "Vice President", ID: "N21001" },
//   { id: 4, name: "Charlie", Professsion: "Secretary", ID: "N21002" },
//   { id: 5, name: "David", Professsion: "Treasurer", ID: "N21003" },
// ]

// const CoreTeam = () => {
//   return (
//     <>
//     <div className="flex flex-col">
//     <div className="flex flex-wrap justify-center items-center gap-6 p-4 mt-[50px] lg:mt-[140px] md:mt-[70px]">
//       {team.map((member) => (
//         <div key={member.id} className="relative flex flex-col items-center text-center">
//           <img
//             src={Newimage}
//             alt={member.name}
//             className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-blue-950 p-2"
//           />
//           <div className="absolute top-[80px] md:top-[80px] ml-[190px] bg-blue-950 md:ml-[195px] flex flex-row justify-center items-center rounded-[50%] w-[40px] h-[40px]">
//             <FaLinkedinIn  className="text-white text-xl " />
//           </div>
//           <div className="font-bold lg:mt-4">
//             <div>{member.name}</div>
//             <div>{member.Professsion}</div>
//             <div>{member.ID}</div>
//           </div>
//         </div>
//       ))}
//       </div>
//     <div className="flex flex-wrap justify-center items-center gap-6 p-4">
//       {tem.map((member) => (
//         <div key={member.id} className="relative flex flex-col items-center text-center">
//           <img
//             src={Newimage}
//             alt={member.name}
//             className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] rounded-full border-4 border-blue-950 p-2"
//           />
//           <div className="absolute top-[80px] md:top-[80px] ml-[190px] bg-blue-950 md:ml-[195px] flex flex-row justify-center items-center rounded-[50%] w-[40px] h-[40px]">
//             <FaLinkedinIn  className="text-white text-xl " />
//           </div>
//           <div className="font-bold lg:mt-4">
//             <div>{member.name}</div>
//             <div>{member.Professsion}</div>
//             <div>{member.ID}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//       </>
    
//   );
// };

// export default CoreTeam;



// CoreTeam.jsx
import React from "react";
import TeamCard from "./CoreTeamCard";
import "./CoreTeam.css";
import Nikhil from "../../assets/CoreTeam/nikhil.png"
import { CiCirclePlus } from "react-icons/ci";
// import image from "../../../assets/webteam/sribabu.png";
import bgm from "../../assets/webteam/bgm.png";
import hoverbg from "../../assets/webteam/hoverbg.png"
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import akshay from "../../assets/CoreTeam/akshay.png"
import anudeep from "../../assets/CoreTeam/anudeep.png"
import aravind from "../../assets/CoreTeam/ara.png"
import eswar from "../../assets/CoreTeam/eswar.png"
import gopi from "../../assets/CoreTeam/gopi.png"
import maruthi from "../../assets/CoreTeam/maruthi.png"
import siva from "../../assets/CoreTeam/siva.png"
import siddu from "../../assets/CoreTeam/siddu.png"
import hari from "../../assets/CoreTeam/hari.png"
const CoreTeam = () => {
  const team = [
    // { id: 1, Name: "Nikhileswara Rao Sulake", role: "President",image:Nikhil },
    { id: 1, Name: "Sai Manikanta Eswar Machara", role: "Vice President" ,image:eswar},
    { id: 2, Name: "Aravind pyli ", role: "Vice President",image:aravind },
    { id: 3, Name: "D.ANUDEEP", role: "Graphic Designer",image:anudeep},
    { id: 4, Name: "T.Akshay Hanok", role: "Video Editing Lead" ,image:akshay},
    { id: 5, Name: "G.Maruthi Kumar", role: "UI/UX Lead",image:maruthi },
    { id: 6, Name: "Gopi Jagadheesh Mahamkali ", role: "AI and Content Leaf Lead" ,image:gopi},
    { id: 7, Name: "Annapureddy Siva Teja Reddy ", role: "HR" ,image:siva},
    { id: 8, Name: "Hari Darshan Raj", role: "Photography Team Lead" ,image:hari},
    { id: 9, Name: "Siddarth ", role: "Social Media Lead" ,image:siddu},


  ];
  return (
    <div className="  mt-[110px] ">
            <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">CORE TEAM</h2>
            <div
            className="task-card relative scale-[0.8] h-[419px] w-[243px] md:h-[401px] px-[20px] md:w-[300px] 
                        group duration-150 after:absolute bg-cover bg-center 
                        flex flex-col justify-start items-center rounded-xl overflow-hidden mx-auto"
            style={{
              backgroundImage: `url(${bgm})`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverbg})`)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${bgm})`)}
           
          >
          
              <h3 className="text-center text-white text-[20px] mb-[7px] pt-[10px] font-bold text-wrap">
              Nikhileswara Rao Sulake
              </h3>
              <span className="text-[18px] text-[#fe7524] text-center">
                President
              </span>
              <img
                src={Nikhil}
                className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
              />
              <div className="icons absolute left-[20px] bottom-[20px] gap-2">
                <div className="socialmedia flex flex-col gap-2 opacity-0 scale-y-0 transition-all duration-200 ease-in pl-1 group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <RiInstagramLine />
                  </div>
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <BsTwitterX />
                  </div>
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <FaLinkedinIn />
                  </div>
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <FaFacebookF />
                  </div>
                </div>
                <span className="text-white text-[50px]">
                  <CiCirclePlus />
                </span>
              </div>
            </div>
      <div className="  flex justify-center items-center p-4 flex-wrap gap-[30px] flex-shrink-0 ">
        {team.map((item, index) => {
          return (
            <div
            className="task-card relative scale-[0.8] h-[419px] w-[243px] md:h-[401px] px-[20px] md:w-[300px] 
                        group duration-150 after:absolute bg-cover bg-center 
                        flex flex-col justify-start items-center rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url(${bgm})`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverbg})`)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${bgm})`)}
            key={index}
          >
          
              <h3 className="text-center text-white text-[20px] mb-[7px] pt-[10px] font-bold text-wrap">
                {item.Name}
              </h3>
              <span className="text-[18px] text-[#fe7524] text-center">
                {item.role}
              </span>
              <img
                src={item.image}
                className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
              />
              <div className="icons absolute left-[20px] bottom-[20px] gap-2">
                <div className="socialmedia flex flex-col gap-2 opacity-0 scale-y-0 transition-all duration-200 ease-in pl-1 group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <RiInstagramLine />
                  </div>
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <BsTwitterX />
                  </div>
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <FaLinkedinIn />
                  </div>
                  <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
                    <FaFacebookF />
                  </div>
                </div>
                <span className="text-white text-[50px]">
                  <CiCirclePlus />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CoreTeam;
