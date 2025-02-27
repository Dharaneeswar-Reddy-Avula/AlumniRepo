import React from 'react'
import Photoone from "../assets/Photoone.png";
import Phototwo from "../assets/Phototwo.png";
const SomeMemories = () => {
  return (
    <div className='my-6 mx-4 flex flex-col gap-4'>
         
         <div className="text-3xl font-bold pt-2 text-blue-950">Some memories</div>
        <div className="font-bold text-lg">All photos</div>
        <div className="flex flex-col md:flex-row gap-[6px]">
            <div><img src={Photoone} className="w-[562px] h-[496px] shadow-md shadow-blue-950 "></img></div>
            <div className="flex flex-col md:flex-row flex-wrap gap-[6px] pl-[6px]">
            <div><img src={Phototwo} className="w-[320px] h-[235px] shadow-md shadow-blue-950"></img></div>
            <div><img src={Phototwo} className="w-[180px] h-[235px] shadow-md shadow-blue-950"></img></div>
            <div><img src={Phototwo} className="w-[505px] h-[247px] shadow-md shadow-blue-950"></img></div>
            </div>
            <div><img src={Photoone} className="w-[562px] h-[496px] shadow-md shadow-blue-950"></img></div>
            <div><img src={Photoone} className="w-[562px] h-[496px]   pl-[4px] shadow-md shadow-blue-950"></img></div>
           
           

        </div>
    </div>
  )
}

export default SomeMemories