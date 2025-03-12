// // CoreTeam.jsx
// import React from "react";
// import TeamCard from "./CoreTeamCard";
// import "./CoreTeam.css";
// import Nikhil from "../../assets/CoreTeam/nikhil.png"
// import { CiCirclePlus } from "react-icons/ci";
// // import image from "../../../assets/webteam/sribabu.png";
// import bgm from "../../assets/webteam/bgm.png";
// import hoverbg from "../../assets/webteam/hoverbg.png"
// import { FaFacebookF } from "react-icons/fa6";
// import { BsTwitterX } from "react-icons/bs";
// import { FaLinkedinIn } from "react-icons/fa";
// import { RiInstagramLine } from "react-icons/ri";
// import akshay from "../../assets/CoreTeam/akshay.png"
// import anudeep from "../../assets/CoreTeam/anudeep.png"
// import aravind from "../../assets/CoreTeam/ara.png"
// import eswar from "../../assets/CoreTeam/eswar.png"
// import gopi from "../../assets/CoreTeam/gopi.png"
// import maruthi from "../../assets/CoreTeam/maruthi.png"
// import siva from "../../assets/CoreTeam/siva.png"
// import siddu from "../../assets/CoreTeam/siddu.png"
// import hari from "../../assets/CoreTeam/hari.png"
// const CoreTeam = () => {
//   const team = [
//     // { id: 1, Name: "Nikhileswara Rao Sulake", role: "President",image:Nikhil },
//     { id: 1, Name: "Sai Manikanta Eswar Machara", role: "Vice President" ,image:eswar},
//     { id: 2, Name: "Aravind pyli ", role: "Vice President",image:aravind },
//     { id: 3, Name: "D.ANUDEEP", role: "Graphic Designer",image:anudeep},
//     { id: 4, Name: "T.Akshay Hanok", role: "Video Editing Lead" ,image:akshay},
//     { id: 5, Name: "G.Maruthi Kumar", role: "UI/UX Lead",image:maruthi },
//     { id: 6, Name: "Gopi Jagadheesh Mahamkali ", role: "AI and Content Leaf Lead" ,image:gopi},
//     { id: 7, Name: "Annapureddy Siva Teja Reddy ", role: "HR" ,image:siva},
//     { id: 8, Name: "Hari Darshan Raj", role: "Photography Team Lead" ,image:hari},
//     { id: 9, Name: "Siddarth ", role: "Social Media Lead" ,image:siddu},


//   ];
//   return (
//     <div className="  mt-[110px] ">
//             <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">CORE TEAM</h2>
//             <div
//             className="task-card relative scale-[0.8] h-[419px]  md:h-[401px] px-[20px] md:w-[300px] 
//                         group duration-150 after:absolute bg-cover bg-center 
//                         flex flex-col justify-start items-center rounded-xl overflow-hidden mx-auto"
//             style={{
//               backgroundImage: `url(${bgm})`,
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverbg})`)}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${bgm})`)}
           
//           >
          
//               <h3 className="text-center text-white text-[20px] mb-[7px] pt-[10px] font-bold text-wrap">
//               Nikhileswara Rao Sulake
//               </h3>
//               <span className="text-[18px] text-[#fe7524] text-center">
//                 President
//               </span>
//               <img
//                 src={Nikhil}
//                 className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
//               />
//               <div className="icons absolute left-[20px] bottom-[20px] gap-2">
//                 <div className="flex flex-col gap-2 pl-1 transition-all duration-200 ease-in scale-y-0 opacity-0 socialmedia group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <RiInstagramLine />
//                   </div>
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <BsTwitterX />
//                   </div>
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <FaLinkedinIn />
//                   </div>
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <FaFacebookF />
//                   </div>
//                 </div>
//                 <span className="text-white text-[50px]">
//                   <CiCirclePlus />
//                 </span>
//               </div>
//             </div>
//       <div className="  flex justify-center items-center md:p-4 flex-wrap gap-[30px] flex-shrink-0 ">
//         {team.map((item, index) => {
//           return (
//             <div
//             className="task-card relative scale-[0.8] h-[419px] w-full  md:h-[401px] px-[20px] md:w-[300px] 
//                         group duration-150 after:absolute bg-cover bg-center 
//                         flex flex-col justify-start items-center rounded-xl overflow-hidden"
//             style={{
//               backgroundImage: `url(${bgm})`,
//             }}
//             onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverbg})`)}
//             onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${bgm})`)}
//             key={index}
//           >
          
//               <h3 className="text-center text-white text-[20px] mb-[7px] pt-[10px] font-bold text-wrap">
//                 {item.Name}
//               </h3>
//               <span className="text-[18px] text-[#fe7524] text-center">
//                 {item.role}
//               </span>
//               <img
//                 src={item.image}
//                 className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
//               />
//               <div className="icons absolute left-[20px] bottom-[20px] gap-2">
//                 <div className="flex flex-col gap-2 pl-1 transition-all duration-200 ease-in scale-y-0 opacity-0 socialmedia group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <RiInstagramLine />
//                   </div>
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <BsTwitterX />
//                   </div>
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <FaLinkedinIn />
//                   </div>
//                   <div className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center">
//                     <FaFacebookF />
//                   </div>
//                 </div>
//                 <span className="text-white text-[50px]">
//                   <CiCirclePlus />
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default CoreTeam;
import React, { useState } from 'react';
import { LinkedinIcon, InstagramIcon } from 'lucide-react';
import Nikhil from "../../assets/CoreTeam/nikhil.png"
import Aravind from  "../../assets/CoreTeam/aravind3.jpg"
import Mahesh from "../../assets/CoreTeam/Mahesh.jpg"
import { color } from 'framer-motion';

const president = {
  id: 1,
  name: "Nikhileswara Rao Sulake",
  role: "PRESIDENT",
  category: "Leadership",
  image: Nikhil,
  bgColor: "bg-white",
  linkedin: "https://www.linkedin.com/in/nikhileswara-rao-sulake",
};

const vicePresidents = [
  {
    id: 2,
    name: "Sai Manikanta Eswar",
    role: "VICE PRESIDENT",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bgColor: "bg-gray-300"
  },
  {
    id: 3,
    name: "Aravind pyli",
    role: "Vice President & CEO",
    category: "Leadership",
    image: Aravind,
    bgColor: "bg-white"
  },
  {
    id: 4,
    name: "D.ANUDEEP",
    role: "VICE PRESIDENT",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bgColor: "bg-amber-50"
  }
];

const coreTeam = [
  {
    id: 5,
    name: "T.Akshay Hanok",
    role: "Head",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "bg-white"
  },
  {
    id: 6,
    name: "G.Maruthi Kumar",
    role: "Co-Head",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bgColor: "bg-gray-300"
  },
  {
    id: 7,
    name: "Gopi Jagadheesh",
    role: "Head",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bgColor: "bg-amber-50"
  },
  {
    id: 8,
    name: "Siddarth",
    role: "Lead",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "bg-white"
  },
  {
    id: 9,
    name: "Gopi Jagadheesh",
    role: "Head",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bgColor: "bg-amber-50"
  },
  {
    id: 10,
    name: "Siddarth",
    role: "Co-Head",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "bg-white"
  },
  {
    id: 11,
    name: "Gopi Jagadheesh",
    role: "Lead",
    category: "HR",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bgColor: "bg-amber-50"
  },
  {
    id: 12,
    name: "Siddarth",
    role: "Head",
    category: "Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "bg-white"
  },
  {
    id:13,
    name:"Mahesh Karri",
    role:"Head",
    category: "Web Team",
    image:Mahesh,
    bgColor:"bg-amber-50",
  }
];

const TeamCard = ({ member, isEven = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`w-[170px] rounded-[80px] ${member.bgColor} shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 group ${isEven ? 'mb-20' : 'mt-20'} cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col items-center px-4 pt-6">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="mt-1 text-xs font-medium tracking-wider text-gray-600 uppercase">{member.role}</p>
        <p className={`mt-1 text-xs font-medium tracking-wider text-gray-500 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          {member.category}
        </p>
        <div className={`flex gap-2 transition-all duration-200 ${isExpanded ? 'h-8 opacity-100 mt-2' : 'h-0 opacity-0'}`}>
          <LinkedinIcon 
            className="w-5 h-5 transition-colors cursor-pointer hover:text-blue-600"
            onClick={(e) => {
              e.stopPropagation();
              // Add LinkedIn link handling here
            }}
          />
          <InstagramIcon 
            className="w-5 h-5 transition-colors cursor-pointer hover:text-pink-600"
            onClick={(e) => {
              e.stopPropagation();
              // Add Instagram link handling here
            }}
          />
        </div>
      </div>

      <div className={`w-full aspect-[3/4] transition-all duration-300 ${isExpanded ? 'mt-0' : '-mt-4'}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="object-cover bg-[#8a9faf] object-center rounded-t-[80px] w-full h-full"
        />
      </div>
    </div>
  );
};

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-4 py-6 ">
      {categories.filter(category => category !== "Leadership").map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2.5 shadow-lg text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category
              ? 'bg-blue-900 text-white scale-110'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

function CoreTeam() {
  const uniqueCategories = [...new Set(coreTeam.map(member => member.category))];
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);
  const filteredCoreTeam = coreTeam.filter(member => member.category === selectedCategory);

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              #ffffff 0%,
              #ffffff 25%,
              #e5e5e5 25%,
              #e5e5e5 50%,
              #f8f8f8 50%,
              #f8f8f8 75%,
              #e0e0e0 75%,
              #e0e0e0 100%
            )
          `,
          backgroundSize: '100% 100%',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="px-4 py-12 mt-10 sm:mt-20 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-center">Meet our</h1>
          <h2 className="mb-16 text-4xl font-bold text-center">Web Team</h2>
          
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-8 mb-16 md:gap-16">
              <div className="flex justify-center mb-16">
                <TeamCard member={president} isEven="true" />
              </div>
              {vicePresidents.map((vp, index) => (
                <div
                  key={vp.id}
                  className="transition-all duration-500 ease-in-out transform"
                  style={{
                    opacity: 0,
                    animation: 'fadeIn 0.5s ease-in-out forwards',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <TeamCard 
                    member={vp} 
                    isEven={index % 2 === 1}
                  />
                </div>
              ))}
            </div>
          </div>

          <CategoryFilter
            categories={uniqueCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="flex flex-wrap justify-center gap-8 mt-8 md:gap-16">
            {filteredCoreTeam.map((member, index) => (
              <div
                key={member.id}
                className="transition-all duration-500 ease-in-out transform"
                style={{
                  opacity: 0,
                  animation: 'fadeIn 0.5s ease-in-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <TeamCard 
                  member={member} 
                  isEven={index % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreTeam;