import React from 'react'
import './Goldtext.css'
const rewards=[
    {id:1,number:"80+",specialization:"cxo"},
    {id:2,number:"200+",specialization:"ph.D"},
    {id:3,number:"15+",specialization:"CHAPTERS"},
    {id:4,number:"100+",specialization:"STARTUPS"},
    {id:5,number:"18+",specialization:"UNICORNS"},
    {id:6,number:"500+",specialization:"ACADEMECIANS"},
    {id:7,number:"100+",specialization:"RESEARCH"},
    {id:8,number:"200+",specialization:"AUTHORS"},
    {id:9,number:"1000+",specialization:"BUEROCRATS"}
    
];
const Network = () => {
  return (
    <div className="flex justify-center mb-[20px]">
        <div className="flex flex-col justify-center">
            <div className="text-3xl text-[#182d6a]  flex justify-center underline text-center">IIITNUZVID ALUMNI NETWORK</div>
            <div className="flex flex-row flex-wrap gap-8 md:gap-12 lg:gap-[100px] text-center justify-center pt-[30px] lg:ml-[100px] lg:mr-[100px]">{
                rewards.map((num)=>{
                   return(
                    <div className="flex flex-col gold-shine" key={num.id}><p className="text-4xl font-semibold ">{num.number}</p><p className="font-extrabold text-[#182d6a] text-xl">{num.specialization}</p></div>
                   );
                })}

            </div>
            <div className="flex justify-center text-center pt-[50px]"><button className="bg-[#182d6a] p-[10px] text-white rounded-[10px]">GET YOUR ALUMNI SMART CARD</button></div>

        </div>
      
    </div>
  )
}

export default Network
