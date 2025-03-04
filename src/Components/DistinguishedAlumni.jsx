import React from "react";
import img from "../assets/logo.png";

import Divya from "../assets/Top20/Divya.jpg";
import Brahmi from "../assets/Top20/Brahmi.jpg";
import Harshith from "../assets/Top20/Harshith.jpg";
import Manoj from "../assets/Top20/Manoj.jpg";
import Narasimha from "../assets/Top20/Narasimha.jpg";
import NarasimhaRao from "../assets/Top20/NarasimhaRao.jpg";
import RaghuRamReddy from "../assets/Top20/RaghuRamReddy.jpg";
import Ramana from "../assets/Top20/Ramana.jpg";
import saimadhu from "../assets/Top20/saimadhu.jpg";
import Satyanarayana from "../assets/Top20/Satyanarayana.jpg";
import siva from "../assets/Top20/siva.jpg";
import SrikanthCh from "../assets/Top20/SrikanthCh.jpg";
import subbalakshmi from "../assets/Top20/subbalakshmi.jpg";
import suresh_bandi from "../assets/Top20/sureshbandi.jpg";
import venkateshbabu from "../assets/Top20/venkateshbabu.jpg";
import vijayKrishna from "../assets/Top20/vijayKrishna.jpg";

const DistinguishedAlumni = () => {
  const alumni = [
    {
        profile: Ramana,
        name: "Chintakayala Ramanna",
        position: "Assistant Director, Film Industry"
    },
    {
        profile: siva,
        name: "Siva V",
        position: "Deputy General Manager, Highways & Transport"
    },
    {
        profile: Brahmi,
        name: "Dr. Mukkanti Veera Bramha",
        position: "Head of Faculty, NIT AP"
    },
    {
        profile: Narasimha,
        name: "Narasimha Rao Yenugula",
        position: "Senior Design Specialist, Cyient"
    },
    {
        profile: Manoj,
        name: "B. Manoj",
        position: "Senior Data Scientist, Ixigo"
    },
    {
        profile: saimadhu,
        name: "Sai Madhu Polamuri",
        position: "Lead Data Scientist, Wells Fargo"
    },
    {
        profile: NarasimhaRao,
        name: "Narasimha Rao Manuka",
        position: "Lead Engineer, KiddeFenwal"
    },
    {
        profile: SrikanthCh,
        name: "Ch. Srikanth",
        position: "Deputy Manager, ITC"
    },
    {
        profile: suresh_bandi,
        name: "M. Suresh Babu",
        position: "Assistant Manager, Pidilite Industry"
    },
    {
        profile: vijayKrishna,
        name: "Vijay Krishna Malluri",
        position: "Assistant Manager, HPCL"
    },
    // {
    //     profile:"" ,
    //     name: "Aurifur Rehman Mohammed",
    //     position: "Azure Data Engineer"
    // },
    {
        profile: subbalakshmi,
        name: "P. Subbalakshmi",
        position: "Program Manager, Amazon"
    },
    {
        profile: Satyanarayana,
        name: "Kokkirapati VV Satyanarayana",
        position: "Post Doctoral Researcher (In South Korea)"
    },
    {
        profile: RaghuRamReddy,
        name: "Raghu Ram Reddy Pilli",
        position: "ISRO, URSC Scientist"
    },
    // {
    //     profile: "image_url",
    //     name: "Darala Suman",
    //     position: "Scientific Officer 'E', NPCL"
    // },
    {
        profile: venkateshbabu,
        name: "Annam Venkatesh Babu",
        position: "Reserve Bank of India (RBI) Assistant,Bangalore"
    },
    // {
    //     profile: "image_url",
    //     name: "Sateesh Kumar Injaratu",
    //     position: "Qualcomm Senior Manager, Bangalore"
    // },
    {
        profile: suresh_bandi,
        name: "B. Suresh",
        position: "Assistant Professor (MNIT Jaipur)"
    },
    // {
    //     profile: "image_url",
    //     name: "Linga Murthy",
    //     position: "GKN Aerospace Engine Private Limited - Research Engineer"
    // },
    {
        profile: Divya,
        name: "Kasula Divya Teja",
        position: "Manager at Deloitte, Hyderabad"
    }
];

  return (
   
    <div className="w-full md:w-[45%]  border bg-white shadow-lg rounded-md">
      {/* Header */}
      <div className="flex items-center px-4 py-4 border-b">
        <h2 className="text-lg font-bold text-blue-950">DISTINGUISHED ALUMNI</h2>
      </div>

      {/* Alumni List */}
      <div className="h-[400px] overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {alumni.map((data, index) => (
            <div key={index} className="flex items-center gap-4 hover:bg-gray-200 rounded-md p-3">
              <img src={data.profile} className="w-12 h-12 rounded-full" alt="profile" />
              <div>
                <div className="font-semibold">{data.name}</div>
                <div className="text-gray-500 text-sm">{data.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  
  );
};

export default DistinguishedAlumni;
