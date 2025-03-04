// import React from 'react'
// import aboutteam2 from '../../../assets/aboutteam2.jpg'
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// const WebTeam = () => {
//   const team=[
//     {id:1,Name:"Sribabu",Profession:"Web Manager"},
//     {id:2,Name:"Sribabu",Profession:"Web Manager"},
//     {id:3,Name:"Sribabu",Profession:"Web Manager"},
//     {id:4,Name:"Sribabu",Profession:"Web Manager"}
//   ]
//   return (
//     <div className="  flex justify-center items-center w-full min-h-screen lg:p-[100px]">
//       <div className="flex flex-row flex-wrap gap-[20px] md:gap-[60px] lg:gap-[100px] justify-center items-center">
//       {
//         team.map((mem)=>{
//           return(
//           <div className="w-[200px] h-[400px] rounded-full border border  overflow-hidden group relative"key={mem.id}>
//           <div className="absolute "><img src={aboutteam2} className="rounded-full w-[200px] h-[400px] group-hover:translate-y-[140px] transition-opacity duration-300 ease-in-out"></img></div>
//           <div className="absolute w-[50px]  h-[20px]  opacity-0 group-hover:opacity-100"><p className="mt-[30px] ml-[70px] font-bold text-blue-950">{mem.Name}</p></div>
//           <div className="absolute w-[200px]  h-[20px]  opacity-0 group-hover:opacity-100 "><p className="mt-[60px] ml-[60px] font-bold text-blue-950">{mem.Profession}</p></div>
//           <div className="w-[25px] h-[25px] rounded-md absolute mt-[100px] ml-[70px] bg-blue-950 text-white text-center flec items-center justify-center cursor-pointer  opacity-0 group-hover:opacity-100"><FaLinkedinIn className="p-[2px]  w-[25px] h-[25px]"/></div>
//           <div className="w-[25px] h-[25px] rounded-md absolute mt-[100px] ml-[110px] bg-blue-950 text-white text-center flex items-center justify-center cursor-pointer  opacity-0 group-hover:opacity-100"><FaInstagram className="p-[2px]  w-[25px] h-[25px]"/></div>
//         </div>
//           )
//         })
//       }
//       </div>
//     </div>
//   )
// }

// export default WebTeam
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
// import image from "../../../assets/webteam/sribabu.png";
import bgm from "../../../assets/webteam/bgm.png";
import hoverbg from "../../../assets/webteam/hoverbg.png"
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import Dharaneeswar from "../../../assets/webteam/Dharaneeswar_Reddy.png";
import sireesha from "../../../assets/webteam/sireesha.png"
import bindu from "../../../assets/webteam/bindu.png"

import Nakshatra from "../../../assets/webteam/Nakshatra.png"
import Leela from "../../../assets/webteam/Leela.png"
import siddu from "../../../assets/webteam/siddu.png"




const WebTeam = () => {
  const team = [
    { id: 1, Name: "Dharaneeswar Reddy", role: "Fullstack Developer",image:Dharaneeswar },
    { id: 2, Name: "Sireesha Sibbala", role: "Fullstack Developer",image:sireesha },
    { id: 3, Name: "Bindusree Palukurthi", role: "Fullstack Developer",image:bindu },
    { id: 4, Name: "Nakshatra Yeluri", role: "Fullstack Developer" ,image:Nakshatra},
    { id: 5, Name: "Viswadatta Nidumukkala", role: "Fullstack Developer" ,image:""},
    { id: 6, Name: "Pandi Srinivas Siddartha ", role: "Frontend Developer",image:siddu },
    { id: 7, Name: "Leela Prasad Gedela", role: "Frontend Developer" ,image:Leela},
  ];
  return (
    <div className="  mt-[110px] ">
            <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">WEB TEAM</h2>
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
                Sribabu
              </h3>
              <span className="text-[18px] text-[#fe7524] text-center">
                Manager
              </span>
              {/* <img
                src={image}
                className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
              /> */}
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
export default WebTeam;
