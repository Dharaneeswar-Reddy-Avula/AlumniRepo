import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import Frame2 from "../assets/Frame2.png";
const Contributors = () => {
  return (
    <div>
         <div className="flex relative flex-col h-[24vh] md:h-[50vh] lg:h-[90vh] justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="text-[80px] md:text-[100px] font-bold">
                            10,345+
                        </div>
                        <div className='font-semibold'>
                            contributors
                        </div>
                    </div>
                    <div>
                    <button className="flex flex-row px-4 py-1 items-center gap-2 my-4 rounded-2xl bg-blue-950 text-white">
                        Contribute <FaArrowCircleRight className="text-white" />
                      </button>
                    </div>
                    <div className="absolute hidden lg:block top-10 left-64 w-[130px] h-[170px]">
                    <img src={Frame2} className="h-full w-full" />
                    </div>
                    <div className="absolute hidden lg:block top-56 left-40 w-[150px] h-[170px]">
                    <img src={Frame2} className="h-full w-full" />
                    </div>
                    <div className="absolute hidden lg:block bottom-28 left-80 w-[150px] h-[100px]">
                    <img src={Frame2} className="h-full w-full" />
                    </div>
                    <div className="absolute hidden lg:block top-10 right-80 w-[150px] h-[100px]">
                    <img src={Frame2} className="h-full w-full" />
                    </div>
                    <div className="absolute hidden lg:block top-24 right-40 w-[150px] h-[170px]">
                    <img src={Frame2} className="h-full w-full" />
                    </div>
                    <div className="absolute hidden lg:block top-72 right-44 w-[200px] h-[170px]">
                    <img src={Frame2} className="h-full w-full" />
                    </div>
        
        
                </div>
    </div>
  )
}

export default Contributors