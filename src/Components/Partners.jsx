import React from 'react'
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
const Partners = () => {
    const partners = [
        { photo: partner1 },
        { photo: partner2 },
        { photo: partner3 },
        { photo: partner2 },
        { photo: partner1 },
        { photo: partner3 },
        { photo: partner1 },
        { photo: partner2 },
      ];
  return (
    <div className="bg-[white] flex flex-col gap-[20px] mb-6  justify-center items-center ">
        <div>
          <p className="text-[30px] md:text-[40px] font-bold text-black my-[50px]">
            Our Proud<span className="text-blue-600"> Partners</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-[100px] justify-center items-center md:mx-[100px]">
          {partners.map((item, index) => (
            <div>
              <img src={item.photo} className="h-[90px] w-[90px]" />
            </div>
          ))}
        </div>
      </div>
  )
}

export default Partners