
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
// import image from "../../../assets/webteam/sribabu.png";
import bgm from "../../../assets/webteam/bgm.png";
import hoverbg from "../../../assets/webteam/hoverbg.png"
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import Dharaneeswar from "../../../assets/webteam/Dharaneeswar_Reddy.png";
import sireesha from "../../../assets/webteam/sireesha.png"
import bindu from "../../../assets/webteam/bindu.png"

import Nakshatra from "../../../assets/webteam/Nakshatra.png"
import Leela from "../../../assets/webteam/Leela.png"
import siddu from "../../../assets/webteam/siddu.png"

import viswadatta from "../../../assets/webteam/viswadatta.png"

import mahesh from "../../../assets/CoreTeam/maheshbg2.png"
import karthik from "../../../assets/CoreTeam/karthikbg.png"

import santosh from "../../../assets/CoreTeam/santosh2.png"
import sravani from "../../../assets/CoreTeam/sravani2.png"


// const WebTeam = () => {
//   const coreTeam = [
//     { id: 1, Name: "Mahesh Karri", role: "Lead", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=387" },
//     { id: 2, Name: "Sarah Johnson", role: "Co-Lead", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=388" },
//   ];

//   const team = [
//     { id: 1, Name: "Dharaneeswar Reddy", role: "Fullstack Developer",image:Dharaneeswar },
//     { id: 2, Name: "Sireesha Sibbala", role: "Fullstack Developer",image:sireesha },
//     { id: 3, Name: "Bindusree Palukurthi", role: "Fullstack Developer",image:bindu },
//     { id: 4, Name: "Nakshatra Yeluri", role: "Fullstack Developer" ,image:Nakshatra},
//     { id: 5, Name: "Viswadatta Nidumukkala", role: "Fullstack Developer" ,image:viswadatta},
//     { id: 6, Name: "Pandi Srinivas Siddartha ", role: "Frontend Developer",image:siddu },
//     { id: 7, Name: "Leela Prasad Gedela", role: "Frontend Developer" ,image:Leela},
//   ];
//   return (
//     <div className="  mt-[110px] ">
//           <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">WEB TEAM</h2>
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
//                 Sribabu
//               </h3>
//               <span className="text-[18px] text-[#fe7524] text-center">
//                 Web Team Manager
//               </span>
//               {/* <img
//                 src={image}
//                 className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
//               /> */}
//               <div className="icons absolute left-[20px] bottom-[20px] gap-2">
//                 <div className="socialmedia flex flex-col gap-2 opacity-0 scale-y-0 transition-all duration-200 ease-in pl-1 group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
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
//             className="task-card relative scale-[0.8] h-[419px] w-full md:h-[401px] px-[20px] md:w-[300px] 
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
//                 <div className="socialmedia flex flex-col gap-2 opacity-0 scale-y-0 transition-all duration-200 ease-in pl-1 group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
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
// export default WebTeam;



const WebTeam = () => {
  const coreTeam = [
    { id: 1, Name: "Mahesh Karri", role: "Lead", image: mahesh , github:"https://github.com/Maheshkarri4444",linkedin:"https://www.linkedin.com/in/maheshkarri4444",twitter:"https://x.com/maheshkarri4444?t=xjhUeCzb6dtsYan1dFevUQ&s=09"},
    { id: 2, Name: "Karthik", role: "Co-Lead", image: karthik , linkedin:"https://www.linkedin.com/in/karthikeya-jidagam-18570b2a6?" , twitter:"https://x.com/KJidagam76068?t=_Zhbp-aCY251J7TmC6eAeQ&s=09" , github:"https://github.com/karthik73965"},
  ];

  const team = [
    { 
      id: 1, 
      Name: "Dharaneeswar Reddy", 
      role: "Fullstack Developer",
      image: Dharaneeswar,
      github: "https://github.com/Dharaneeswar-Reddy-Avula/",
      linkedin: "https://www.linkedin.com/in/dharaneeswar-reddy-avula-6600912aa/",
      twitter: "https://x.com/Dharaneeswar_"
    },
    { 
      id: 2, 
      Name: "Sireesha Sibbala", 
      role: "Fullstack Developer",
      image: sireesha,
      github: "https://github.com/sibbalas/-S31B19",
      linkedin: "https://www.linkedin.com/in/sireesha-sibbala-b2467631b/",
      twitter: "https://x.com/SireeshaSibbala"
    },
    { 
      id: 3, 
      Name: "Bindusree Palukurthi", 
      role: "Fullstack Developer",
      image: bindu,
      github: "https://github.com/BinduSree-18",
      linkedin: "https://www.linkedin.com/in/palukurthi-bindu-sree-737697325/",
      twitter: "https://x.com/BinduPalukurthi"
    },
    { 
      id: 4, 
      Name: "Nakshatra Yeluri", 
      role: "Fullstack Developer",
      image: Nakshatra,
      github: "https://github.com/Yeluri-Nakshatra",
      linkedin: "https://www.linkedin.com/in/nakshatra-yeluri-a58a8231a",
      twitter: "https://x.com/nakshatrayeluri"
    },
    { 
      id: 5, 
      Name: "Viswadatta Nidumukkala", 
      role: "Fullstack Developer",
      image: viswadatta,
      github: "https://github.com/Viswadatta1233",
      linkedin: "http://www.linkedin.com/in/datta-nidumukkala-00052b232",
      twitter: "https://x.com/Datta1074"
    },
    { 
      id: 6, 
      Name: "Pandi Srinivas Siddartha", 
      role: "Frontend Developer",
      image: siddu,
      github: "https://github.com/PandiSrinivasSiddartha",
      linkedin: "https://www.linkedin.com/in/pandi-srinivas-siddartha-256767316",
      twitter: "https://x.com/PandiSidda24064"
    },
    { 
      id: 7, 
      Name: "Leela Prasad Gedela", 
      role: "Frontend Developer",
      image: Leela,
      github: "https://github.com/LeelaPrasadGedela216",
      linkedin: "https://www.linkedin.com/in/leela-prasad-883718293",
      twitter: "https://x.com/n210479?t=A5Yjm8p31wg18_BNjaYvrg&s=09"
    },
    { 
      id: 8, 
      Name: "Santosh", 
      role: "UI/UX",
      image: santosh,
      linkedin: "https://www.linkedin.com/in/santhosh-kumar-002810291/",
      insta: "https://www.instagram.com/santhosh_kumar_itla?igsh=cTc3ZDJ3am55emtu"
    },
    { 
      id: 9, 
      Name: "Sravani", 
      role: "UI/UX",
      image: sravani
    },
    // { 
    //   id: 10, 
    //   Name: "Sribabu Mandraju", 
    //   role: "Fullstack Developer",
    //   image: sribabu,
    //   github: "https://github.com/Sribabu-Mandraju/",
    //   linkedin: "https://www.linkedin.com/in/sribabu-mandraju-590524233/",
    //   twitter: "https://x.com/5R1B4BU"
    // }
  ];
  


  const TeamCard = ({ name, role, image , github , linkedin , twitter }) => (
    <div
      className="task-card relative scale-[0.8] h-[419px] w-full md:h-[401px] px-[20px] md:w-[300px] 
                group duration-150 after:absolute bg-cover bg-center 
                flex flex-col justify-start items-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgm})`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${hoverbg})`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${bgm})`)}
    >
      <h3 className="text-center text-white text-[20px] mb-[7px] pt-[10px] font-bold text-wrap">
        {name}
      </h3>
      <span className="text-[18px] text-[#fe7524] text-center">
        {role}
      </span>
      <img
        src={image}
        alt={name}
        className="absolute duration-150 bottom-0 group-hover:translate-x-[30px]"
      />
<div className="icons absolute left-[20px] bottom-[20px] gap-2">
<div className="socialmedia flex flex-col gap-2 opacity-0 scale-y-0 transition-all duration-200 ease-in pl-1 group-hover:opacity-100 group-hover:scale-y-100 group-hover:animate-fold-out animate-fold-in">
  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center"
    >
      <FaGithub />
    </a>
  )}
  {twitter && (
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center"
    >
      <BsTwitterX />
    </a>
  )}
  {linkedin && (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[40px] w-[40px] bg-gradient-to-r from-purpleCustom via-pinkCustom to-orangeCustom rounded-full text-white text-[24px] flex justify-center items-center"
    >
      <FaLinkedinIn />
    </a>
  )}
</div>
<span className="text-white text-[50px]">
  <CiCirclePlus />
</span>
</div>

    </div>
  );

  return (
    <div className="mt-[110px]">
      <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">CORE & WEB Team</h2>
      <div className="flex justify-center items-center md:p-4 flex-wrap gap-[30px] flex-shrink-0">
        {coreTeam.map((member) => (
          <TeamCard key={member.id} name={member.Name} role={member.role} image={member.image} github={member.github} linkedin={member.linkedin} twitter={member.twitter} />
        ))}
      </div>

      {/* <h2 className="text-[#172554] text-3xl text-center py-[30px] font-bold">WEB TEAM</h2> */}
      {/* <div className="flex justify-center items-center">
        <TeamCard name="Sribabu" role="Team Manager" image={Dharaneeswar} github={"https://github.com/Sribabu-Mandraju/"} linkedin={"https://www.linkedin.com/in/sribabu-mandraju-590524233/"} twitter={"https://x.com/5R1B4BU"}/>
      </div> */}

      <div className="flex justify-center items-center md:p-4 flex-wrap gap-[30px] flex-shrink-0">
        {team.map((member) => (
          <TeamCard key={member.id} name={member.Name} role={member.role} image={member.image} github={member.github} linkedin={member.linkedin} twitter={member.twitter}/>
        ))}
      </div>
    </div>
  );
}

export default WebTeam;
