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
import Nikhil from "../../assets/CoreTeam/Nikhil.jpg"

const teamMembers = [
  { name: "Nikhileswara Rao Sulake", title: "PRESIDENT", Branch: "CSE",
    //  image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",
    image:Nikhil,
    linkedin:"https://linkedin.com",
     logo:"fas fa-laptop"}, 

  { name: "Sai Manikanta Eswar Machara", title: "VICE PRESIDENT", Branch: "CSE", image:"https://media.licdn.com/dms/image/v2/D4E03AQFxWtaWfT3dxw/profile-displayphoto-shrink_800_800/B4EZVMDDOwHMAc-/0/1740737628800?e=1746057600&v=beta&t=MrqLEg_q5cWR2kQRxqubL9scyijMTQf3BH5xww4YvKo",linkedin:"https://linkedin.com",logo:"fas fa-laptop"},

  { name: "Aravind Pyil", title: "VICE PRESIDENT", Branch: "ECE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-broadcast-tower"},

  { name: "Siva Teja Reddy Annapureddy", title: "HR", Branch: "CSE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-laptop"},

  { name: "Mannepuri Chandrika", title: "HR", Branch: "CSE", image:"https://media.licdn.com/dms/image/v2/D4E03AQFkg9JQIq5HxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724823842191?e=1746057600&v=beta&t=bn-AslfD6sxF5qJYsgjOzLOPU-s1HNUmASQGmMVxL6U",linkedin:"https://linkedin.com",logo:"fas fa-laptop"},

  { name: "Hari Dharshan raj gorle", title: "PHOTOGRAPHY", Branch: "ECE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-broadcast-tower"},

  { name: "Anudeep dondapati", title: "DESIGN", Branch: "ECE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-broadcast-tower"},

  { name: "UdayCherri", title: "CYBER SECURITY", Branch: "CSE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-laptop"},

  { name: "Sri Babu Mandraju", title: "WEB TEAM LEAD", Branch: "CSE", image:"https://media.licdn.com/dms/image/v2/D5635AQE9TwJAOhfzZw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1696139734447?e=1741341600&v=beta&t=YqFyTl7wgnryftOcjQ0GrTFKFvaLSfBh7uclJEKLfVI",linkedin:"https://linkedin.com",logo:"fas fa-laptop"},

  { name: "Gude Maruthi Kumar", title: "UI/UX DESIGNER", Branch: "CSE", image:"https://media.licdn.com/dms/image/v2/D4E03AQFj4qnVRrgiDg/profile-displayphoto-shrink_800_800/B4EZRQmBjrGgAg-/0/1736518934765?e=1746057600&v=beta&t=nKwP_6Iq2sm8zke3m9MBPz5MYSRGpr8S_kBX2R1D7Xg",linkedin:"https://www.linkedin.com/in/gude-maruthi-kumar-16005b2b8",logo:"fas fa-laptop"},

  { name: "Akshay Hanok", title: "VIDEO EDITOR", Branch: "EEE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-bolt"},

  { name: "Chandra Siddhardha", title: "SOCIAL MEDIA MANAGER", Branch: "EEE", image:"https://media.licdn.com/dms/image/v2/D5603AQHHV90zscTW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729918300922?e=1746057600&v=beta&t=kGCZ37fH5IKsntmLSCjpbZtYz64YNUmJNE4A6TXdAgM",linkedin:"https://linkedin.com",logo:"fas fa-bolt"}

];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            branch = {member.Branch}
            image={member.image}
            linkedin={member.linkedin}
            logo={member.logo}

            
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
