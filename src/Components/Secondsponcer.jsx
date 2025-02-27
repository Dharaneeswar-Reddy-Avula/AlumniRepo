import React from 'react'
import Hostel from '../assets/Hostel.jpeg'
import Man from '../assets/Man.jpg'
import { FaAngleRight } from "react-icons/fa";
const Secondsponcer = () => {
  return (
    <div className="flex flex-col pt-[100px] pl-[10px] pr-[10px]">
        <div className="bg-gray-200 w-full h-[100px] flex flex-col p-[10px]">
            <div className="text-xl font-bold">Sponcerships</div>
            <div className="text-semibold pt-[10px]">Our alumni has graciously contribution in building the future of the university</div>

        </div>
        <div className="flex flex-row pt-[10px] lg:pl-[30px]">
            <div><img src={Hostel} className="w-full md:w-[350px] rounded-md h-[300px]"></img></div>
            <div className="flex flex-col pl-[10px] md:pl-[20px]">
                    <div className="text-lg font-bold pt-[6px]">I2 Hostel</div>
                    <div className="pt-[40px] text-sm font-semibold">Fund raised 1,00,000/-</div>
                    <div className="pt-[25px] text-sm font-semibold">Start:10/8/24</div>
                    <div className="font-bold pt-[20px]">Contributers</div>
                    <div className="flex flex-row pt-[30px]">
                        <div className="absolute"><img src={Man} className="w-[40px] h-[40px] rounded-full "></img></div>
                        <div className="absolute"><img src={Man} className="w-[40px] h-[40px] rounded-full ml-[20px]"></img></div>
                        <div className="absolute"><img src={Man} className="w-[40px] h-[40px] rounded-full ml-[40px]"></img></div>
                        <div className="absolute ml-[80px] md:ml-[90px] mt-[5px] font-bold text-lg">10+</div>
                    </div>
            </div>
            
        </div>
        <div className=" text-center">
            Accommodation. IIITH is a residential institute and it is compulsory for all students to stay on-campus. First year and second year
             students who have enrolled in Bachelor's or dual-degree programs are required to share rooms (double occupancy) whereas, from the 
             third year onward, students have single occupancy.
        </div>
        <div className=" text-center">
        As mentioned earlier, RGUKT is a fully residential environment. This is necessary because most of the rural students come from a 
        geographically distributed wide area and would not be able to commute to the campus. Thus, it is essential to provide a fully residential
         campus with all of the facilities included such as a shops, hospitals, bank, laundry, barbershops, etc. appropriate for a community of about
          20,000 people consisting of 12,000 students, 3000 faculty and staff and 5000 service providers of various types. The Director of the Institute also becomes the pseudo-Mayor of this township dealing with the typical problems of community based living. 
        </div>
      
    </div>
  )
}

export default Secondsponcer
