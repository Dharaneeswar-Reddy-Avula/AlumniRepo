import React from 'react'
import { FaExclamation } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
const Error404 = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full h-screen flex-col gap-[12px]">
      <div className="flex w-[40px] h-[40px] rounded-full text-red-500 bg-red-100 justify-center items-center"><FaExclamation /></div>
      <div className="text-2xl font-semibold">Page not found</div>
      <div className="flex w-[340px] md:w-[400px] justify-center items-center text-center  h-[70px] text-gray-400 text-md font-semibold">The page you are looking for does not exist.Here are some helpful links:</div>
      <div className="flex flex-row gap-[6px]">
        <div className="flex border border-2 w-[100px] h-[40px] justify-center items-center rounded-md"><button className="flex flex-row gap-[4px]"><FaArrowLeftLong className="flex mt-[4px]"/>Go back</button></div>
        <div className="w-[150px] h-[40px] border border-2 justify-center items-center flex text-white bg-black rounded-md"><button>Take me home</button></div>
      </div>
    </div>
    </>
  )
}

export default Error404
