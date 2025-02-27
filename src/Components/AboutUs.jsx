import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex md:flex-row  flex-col md:gap-[70px]  gap-[40px]  justify-center items-center  mt-[60px]">
        <div className="order-2 md:order-1">
          <div className="cursor-pointer h-[50px] md:w-[500px] w-[300px] text-[20px] font-bold text-[black] shadow-lg px-[20px] flex items-center ">
            Our mission
          </div>
          <div className="cursor-pointer h-[50px] md:w-[500px] w-[300px] text-[20px] font-bold text-[black] shadow-lg px-[20px] flex items-center ">
            Our vision
          </div>
          <div className="cursor-pointer h-[50px] md:w-[500px] w-[300px] text-[20px] font-bold text-[black] shadow-lg px-[20px] flex items-center ">
            Our purpose
          </div>
        </div>
        <div className="text-[black] text-[35px] lg:text-[60px] font-bold order-1 md:order-2">
          About us
        </div>
      </div>
  )
}

export default AboutUs