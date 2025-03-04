// import React from 'react'
// import aboutteam from "../assets/aboutteam2.jpg";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// const OurTeam = () => {
//     const data = [
//         { name: "Marta", position: "web developer" },
//         { name: "Marta", position: "web developer" },
//         { name: "Marta", position: "web developer" },
//         { name: "Marta", position: "web developer" },
//         { name: "Marta", position: "web developer" },
//         { name: "Marta", position: "web developer" },
//       ];
//   return (
//     <div className="bg-[#E3E3E3] flex flex-col gap-[30px] mt-[30px]">
//             <div className="text-[40px] text-center text-blue-950 font-bold mt-[30px]">
//               OUR TEAM
//             </div>
//             <div className="flex flex-wrap justify-center items-center gap-[50px] m-[30px]">
//               {data.map((item, index) => (
//                 <div className="relative">
//                   <img
//                     src={""}
//                     className="h-[350px] w-[300px] rounded-[5px]"
//                   />
//                   <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-[#F2F2F2] h-[90px] flex flex-col justify-center gap-[5px] items-center text-[black]">
//                     <div className='font-bold'>{item.name}</div>
//                     <div>{item.position}</div>
//                     <div className="flex flex-row gap-[20px]">
//                       <div>
//                         <FaGithub className='cursor-pointer'/>
//                       </div>
//                       <div>
//                         <FaLinkedinIn className='cursor-pointer'/>
//                       </div>
//                       <div>
//                         <FaInstagram className='cursor-pointer'/>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//   )
// }

// export default OurTeam


import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Import faculty images
import blessy from "../assets/Faculty/blessy mam -cse.jpg";
import Jyothilal from "../assets/Faculty/Jyothilala Sir EEE.jpg";
import Pavani from "../assets/Faculty/Pavani mam-Mech.jpg";
import Siva from "../assets/Faculty/Siva Sir MME.jpg";
import Ganesh from "../assets/Faculty/ganesh Sir -civil.jpg";
import Anila from "../assets/Faculty/Anila Mam-chem.jpg";

import MLRao from"../assets/Faculty/MLRao Sir CSE.jpg";
import Priyanka from "../assets/Faculty/priyanka mam ece.jpg";
import Praveen from "../assets/Faculty/Praveen Sir ECE.jpg"

const OurTeam = () => {
  const data = [
    { name: "Mr. Mahalakshmi Rao", position: "Assistant Professor (C)", Department: "Computer Science and Engineering", img: MLRao },
    { name: "Ms. Mathe Jerusha Blessy", position: "Assistant Professor (C)", Department: "Computer Science and Engineering", img: blessy },
    { name: "Ms. Yenni Priyanka", position: "Assistant Professor (C)", Department: "Electronics and Communications Engineering", img: Priyanka },
    { name: "Mr. Praveen", position: "Assistant Professor (C)", Department: "Electronics and Communications Engineering", img:Praveen },
    { name: "Dr. Jyothilal Nayak Bharothu", position: "Assistant Professor", Department: "Electrical and Electronics Engineering", img: Jyothilal },
    { name: "Dr. U. Pavani", position: "Assistant Professor (C)", Department: "Mechanical Engineering", img: Pavani },
    { name: "Mr. Maduru Ganesh", position: "Assistant Professor (C)", Department: "Civil Engineering", img: Ganesh },
    { name: "Ms. Anila Pulikam", position: "Assistant Professor (C)", Department: "Chemical Engineering", img: Anila },
    { name: "Mr. T. Siva", position: "Assistant Professor (C)", Department: "Metallurgical and Material Science Engineering", img: Siva },
  ];

  return (
    <div className="bg-[#E3E3E3] flex flex-col gap-10 mt-10 p-4 md:px-10">
      <div className="text-3xl md:text-4xl text-center text-blue-950 font-bold mt-6">
        OUR TEAM
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {data.map((item, index) => (
          <div key={index} className="w-full max-w-[350px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-5">
            {/* Profile Image */}
            <img
              src={item.img || ""}
              alt={item.name}
              className="h-[150px] w-[150px] rounded-full object-cover border border-gray-300"
            />
            {/* Faculty Details */}
            <div className="text-center mt-4">
              <div className="font-bold text-lg">{item.name}</div>
              <div className="text-gray-600">{item.position}</div>
              <div className="text-blue-900 font-semibold">{item.Department}</div>
              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-3 text-blue-700">
                <FaGithub className="cursor-pointer hover:text-black" />
                <FaLinkedinIn className="cursor-pointer hover:text-blue-500" />
                <FaInstagram className="cursor-pointer hover:text-pink-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;