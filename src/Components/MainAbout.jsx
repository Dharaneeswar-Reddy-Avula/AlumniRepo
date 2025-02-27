import React from 'react'
import about1 from "../assets/about1.png";
const MainAbout = () => {
  return (
    <div className="flex md:flex-row gap-[50px] justify-center items-center flex-col mx-2">
            <div className="md:h-[500px] md:w-[450px] flex flex-col gap-[40px]">
              <div className="text-[40px] text-[black] font-bold text-center">
                WELCOME TO <br />
                ALUMINI ASSOCIATION
              </div>
              <div className="text-[15px] text-[black] text-center font-semibold">
                We are a group of alumni who care deeply about our alma mater and
                the role it plays in our lives. The society is committed to
                fostering communication, friendship, and cooperation among its
                members, as well as promoting the development of the university. We
                hope that through our efforts, the university will become better and
                better, and the alumni will become more and more united.
              </div>
              <div className="flex flex-row gap-[10px] justify-center font-semibold">
                <div className="cursor-pointer text-[20px] h-[40px] w-[100px] text-[white] bg-[#002140] rounded-[10px] flex items-center justify-center">
                  Donate
                </div>
                <div className="cursor-pointer text-[20px] h-[40px] w-[100px]  bg-gray-400 rounded-[10px] flex items-center justify-center">
                  Sign in
                </div>
              </div>
            </div>
            <div>
              <img src={about1} className=" md:w-[600px]" />
            </div>
          </div>
  )
}

export default MainAbout