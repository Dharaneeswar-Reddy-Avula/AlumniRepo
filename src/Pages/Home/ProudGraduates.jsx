// import React, { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./ProudGrad.css";
// import grad from "../../assets/Man1.jpg"
// import cramana from "../../assets/Top20/Ramana.jpg"
// import siva from "../../assets/Top20/siva.jpg"
// import Brahmi from "../../assets/Top20/Brahmi.jpg"
// import Narasimha from "../../assets/Top20/Narasimha.jpg"
// import Manoj from "../../assets/Top20/Manoj.jpg"
// import subbalakshmi from "../../assets/Top20/Subbalakshmi.jpg"
// import bandisuresh from "../../assets/Top20/suresh bandi.jpg"
// import venkateshbabu from "../../assets/Top20/venkateshbabu.jpg"
// import RaghuRamReddy from "../../assets/Top20/RaghuRamReddy.jpg"
// import Satyanarayana from "../../assets/Top20/Satyanarayana.jpg"
// import Divya from "../../assets/Top20/Divya.jpg"
// // Placeholder image from Unsplash
// const placeholderImage =  grad;


// const rawAlumniData = [
//   {
//     "name": "Chintakayala Ramanna",
//     "branch": "CHEM",
//     "current_position": "Assistant Director, Film Industry",
//     "year_of_graduation": 2008,
//     "image": cramana
//   },
//   {
//     "name": "Siva V",
//     "branch": "CIVIL",
//     "current_position": "Deputy General Manager, Highways & Transport",
//     "year_of_graduation": 2008,
//     "image": siva
//   },
//   {
//     "name": "Dr. Mukkanti Veera Bramha",
//     "branch": "CIVIL",
//     "current_position": "Head of Faculty, NIT AP",
//     "year_of_graduation": 2008,
//     "image": Brahmi
//   },
//   {
//     "name": "Narasimha Rao Yenugula",
//     "branch": "CIVIL",
//     "current_position": "Senior Design Specialist, Cyient",
//     "year_of_graduation": 2008,
//     "image": Narasimha
//   },
//   {
//     "name": "B. Manoj",
//     "branch": "CSE",
//     "current_position": "Senior Data Scientist, Ixigo",
//     "year_of_graduation": 2008,
//     "image": Manoj
//   },
//   {
//     "name": "Sai Madhu Polamuri",
//     "branch": "CSE",
//     "current_position": "Lead Data Scientist, Wells Fargo",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "Narasimha Rao Manuka",
//     "branch": "CSE",
//     "current_position": "Lead Engineer, KiddeFenwal",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "Ch. Srikanth",
//     "branch": "CHEM",
//     "current_position": "Deputy Manager, ITC",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "M. Suresh Babu",
//     "branch": "CHEM",
//     "current_position": "Assistant Manager, Pidilite Industry",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "Vijay Krishna Malluri",
//     "branch": "CHEM",
//     "current_position": "Assistant Manager, HPCL",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "Aurifur Rehman Mohammed",
//     "branch": "MECH",
//     "current_position": "Azure Data Engineer",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "P. Subbalakshmi",
//     "branch": "CHEM",
//     "current_position": "Program Manager, Amazon",
//     "year_of_graduation": 2008,
//     "image": subbalakshmi
//   },
//   {
//     "name": "Kokkirapati VV Satyanarayana",
//     "branch": "CHEM",
//     "current_position": "Post Doctoral Researcher (In South Korea)",
//     "year_of_graduation": 2008,
//     "image": Satyanarayana
//   },
//   {
//     "name": "Raghu Ram Reddy Pilli",
//     "branch": "ECE",
//     "current_position": "ISRO, URSC Scientist",
//     "year_of_graduation": 2008,
//     "image": RaghuRamReddy
//   },
//   {
//     "name": "Darala Suman",
//     "branch": "MECH",
//     "current_position": "Scientific Officer 'E', NPCL",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "Annam Venkatesh Babu",
//     "branch": "MECH",
//     "current_position": "Reserve Bank of India (RBI) Assistant, Bangalore",
//     "year_of_graduation": 2008,
//     "image": venkateshbabu
//   },
//   {
//     "name": "Sateesh Kumar Injaratu",
//     "branch": "ECE",
//     "current_position": "Qualcomm Senior Manager, Bangalore",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "B. Suresh",
//     "branch": "MME",
//     "current_position": "Assistant Professor (MNIT Jaipur)",
//     "year_of_graduation": 2008,
//     "image": bandisuresh
//   },
//   {
//     "name": "Linga Murthy",
//     "branch": "MECH",
//     "current_position": "GKN Aerospace Engine Private Limited - Research Engineer",
//     "year_of_graduation": 2008,
//     "image": "image_url"
//   },
//   {
//     "name": "Kasula Divya Teja",
//     "branch": "ECE",
//     "current_position": "Manager at Deloitte, Hyderabad",
//     "year_of_graduation": 2008,
//     "image": Divya
//   }
// ];

// // Format the data to match the expected structure
// export const generateAlumniData = () => {
//   const years = Array.from({ length: 17 }, (_, i) => 2008 + i);
//   const alumniData = {};

//   // Initialize empty arrays for all years
//   years.forEach((year) => {
//     alumniData[year] = [];
//   });

//   // Add the actual alumni data to the 2008 year
//   rawAlumniData.forEach((alumni, index) => {
//     alumniData[2008].push({
//       id: `2008-${index}`,
//       name: alumni.name,
//       branch: alumni.branch,
//       currentRole: alumni.current_position,
//       year: 2008,
//       image: alumni.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//     });
//   });

//   // For years after 2008, create empty arrays (no placeholder data)
//   for (let year = 2009; year <= 2024; year++) {
//     alumniData[year] = [];
//   }

//   return alumniData;
// };

// export const alumniData = generateAlumniData();

// const GraduateCard = ({ graduate }) => {
//   return (
//     <div className="flex flex-col w-[400px] min-h-[500px] backdrop-blur-lg  border-gray-200 rounded-lg shadow-md overflow-hidden bg-[#172554] text-white border-[2px] p-[5px]">
//    <div className="h-[300px] w-full flex items-center justify-center overflow-hidden bg-gray-100">
//   <img 
//     src={graduate.image} 
//     alt={graduate.name} 
//     className="object-contain max-w-full max-h-full"
//   />
// </div>
  
//     {/* Alumni Details Container */}
//     <div className="w-full flex flex-col  md:justify-between p-4 md:h-[200px] gap-4">
//       {/* Left Section - Name & Graduation Year */}
//       <div className="text-left">
//         <h3 className="text-lg font-bold">{graduate.name}</h3>
//         <p className="">Year of Graduation: {graduate.year}</p>
//       </div>
  
//       {/* Right Section - Additional Details */}
//       <div className="flex flex-col text-left text-[16px]">
//         <p className="mb-1"><span className="font-semibold">Branch:</span> {graduate.branch}</p>
//         <p className="mb-1"><span className="font-semibold">Achievement:</span> {graduate.achievement}</p>
//         <p className="mb-1"><span className="font-semibold">Current Role:</span> {graduate.currentRole}</p>
//       </div>
//     </div>
//   </div>
  
//   );
// };

// const ProudGraduates = () => {
//   const [selectedYear, setSelectedYear] = useState(2024);
//   const [filteredAlumni, setFilteredAlumni] = useState(alumniData[2024]);
//   const [activeAlumni, setActiveAlumni] = useState(null);
//   const yearScrollRef = useRef(null);

//   const handleYearClick = (year) => {
//     setSelectedYear(year);
//     setFilteredAlumni(alumniData[year]);
//     setActiveAlumni(null);
//   };

//   const handleAlumniClick = (alumni) => {
//     setActiveAlumni(alumni);
//   };

//   const scrollYears = (direction) => {
//     if (yearScrollRef.current) {
//       const scrollAmount = direction === 'left' ? -200 : 200;
//       yearScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-[22px] font-semibold text-center my-4">
//         Our Proud Graduates
//       </h1>

//       {/* Main Layout (Swiper & Grid) */}
//       <div className="flex flex-col md:flex-row gap-5 items-start mt-4">
//         {/* Swiper Carousel */}
//         <div className="w-full md:w-[40%] order-2 md:order-1">
//           <Swiper
//             modules={[Navigation,  Autoplay]}
//             navigation
           
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             className="graduate-swiper"
//           >
//             {(activeAlumni ? [activeAlumni] : filteredAlumni).map((alumni) => (
//               <SwiperSlide key={alumni.id} className="flex justify-center items-center py-4">
//                 <GraduateCard graduate={alumni} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Alumni Section */}
//         <div className="w-full md:w-[60%] order-2 md:order-2">
//           {/* Year Buttons */}
//           <div className="relative w-full px-[23px] md:px-[70px]">
//             <button 
//               onClick={() => scrollYears('left')}
//               className="absolute left-0 md:ml-[40px] top-[15px] transform -translate-y-1/2 z-10 rounded-full p-1"
//             >
//               <ChevronLeft size={20} />
//             </button>
            
//             <div 
//               ref={yearScrollRef}
//               className="flex gap-2 pb-2 overflow-x-auto scrollbar-hide"
//             >
//               {Object.keys(alumniData).map((year) => (
//                 <button
//                   key={year}
//                   data-year={year}
//                   onClick={() => handleYearClick(Number(year))}
//                   className={`px-4 py-1 border rounded-md transition-colors flex-shrink-0 ${
//                     selectedYear === Number(year)
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-200 hover:bg-gray-300"
//                   }`}
//                 >
//                   {year}
//                 </button>
//               ))}
//             </div>
            
//             <button 
//               onClick={() => scrollYears('right')}
//               className="absolute right-0 top-[15px] transform -translate-y-1/2 z-10 rounded-full p-1 md:mr-[40px]"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>

//           {/* Alumni Grid */}
//           <div className="flex  md:grid-cols-4 md:grid lg:grid-cols-7 lg:grid md:gap-3 mt-4 md:px-[70px] overflow-x-auto gap-[20px] py-[10px]">
//             {filteredAlumni.map((alumni) => (
//               <div
//                 key={alumni.id}
//                 className={`cursor-pointer text-center ${
//                   activeAlumni?.id === alumni.id ? 'ring-2 ring-blue-500 rounded-md' : ''
//                 }`}
//                 onClick={() => handleAlumniClick(alumni)}
//               >
//                 <img
//                   src={alumni.image}
//                   alt={alumni.name}
//                   className=" w-[150px] lg:h-[90px] lg:w-[90px] rounded-[5px] border-gray-200 border-[2px] mx-auto"
//                 />
//                 <p className="text-xs font-semibold mt-1">{alumni.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProudGraduates;

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProudGrad.css";
import grad from "../../assets/Man1.jpg";
import cramana from "../../assets/Top20/Ramana.jpg";
import siva from "../../assets/Top20/siva.jpg";
import Brahmi from "../../assets/Top20/Brahmi.jpg";
import Narasimha from "../../assets/Top20/Narasimha.jpg";
import Manoj from "../../assets/Top20/Manoj.jpg";
import subbalakshmi from "../../assets/Top20/Subbalakshmi.jpg";
import bandisuresh from "../../assets/Top20/suresh bandi.jpg";
import venkateshbabu from "../../assets/Top20/venkateshbabu.jpg";
import RaghuRamReddy from "../../assets/Top20/RaghuRamReddy.jpg";
import Satyanarayana from "../../assets/Top20/Satyanarayana.jpg";
import Divya from "../../assets/Top20/Divya.jpg";

// Placeholder image
const placeholderImage = grad;

const rawAlumniData = [
  {
    "name": "Chintakayala Ramanna",
    "branch": "CHEM",
    "current_position": "Assistant Director, Film Industry",
    "year_of_graduation": 2008,
    "image": cramana
  },
  {
    "name": "Siva V",
    "branch": "CIVIL",
    "current_position": "Deputy General Manager, Highways & Transport",
    "year_of_graduation": 2008,
    "image": siva
  },
  {
    "name": "Dr. Mukkanti Veera Bramha",
    "branch": "CIVIL",
    "current_position": "Head of Faculty, NIT AP",
    "year_of_graduation": 2008,
    "image": Brahmi
  },
  {
    "name": "Narasimha Rao Yenugula",
    "branch": "CIVIL",
    "current_position": "Senior Design Specialist, Cyient",
    "year_of_graduation": 2008,
    "image": Narasimha
  },
  {
    "name": "B. Manoj",
    "branch": "CSE",
    "current_position": "Senior Data Scientist, Ixigo",
    "year_of_graduation": 2008,
    "image": Manoj
  },
  {
    "name": "Sai Madhu Polamuri",
    "branch": "CSE",
    "current_position": "Lead Data Scientist, Wells Fargo",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Narasimha Rao Manuka",
    "branch": "CSE",
    "current_position": "Lead Engineer, KiddeFenwal",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Ch. Srikanth",
    "branch": "CHEM",
    "current_position": "Deputy Manager, ITC",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "M. Suresh Babu",
    "branch": "CHEM",
    "current_position": "Assistant Manager, Pidilite Industry",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Vijay Krishna Malluri",
    "branch": "CHEM",
    "current_position": "Assistant Manager, HPCL",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Aurifur Rehman Mohammed",
    "branch": "MECH",
    "current_position": "Azure Data Engineer",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "P. Subbalakshmi",
    "branch": "CHEM",
    "current_position": "Program Manager, Amazon",
    "year_of_graduation": 2008,
    "image": subbalakshmi
  },
  {
    "name": "Kokkirapati VV Satyanarayana",
    "branch": "CHEM",
    "current_position": "Post Doctoral Researcher (In South Korea)",
    "year_of_graduation": 2008,
    "image": Satyanarayana
  },
  {
    "name": "Raghu Ram Reddy Pilli",
    "branch": "ECE",
    "current_position": "ISRO, URSC Scientist",
    "year_of_graduation": 2008,
    "image": RaghuRamReddy
  },
  {
    "name": "Darala Suman",
    "branch": "MECH",
    "current_position": "Scientific Officer 'E', NPCL",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Annam Venkatesh Babu",
    "branch": "MECH",
    "current_position": "Reserve Bank of India (RBI) Assistant, Bangalore",
    "year_of_graduation": 2008,
    "image": venkateshbabu
  },
  {
    "name": "Sateesh Kumar Injaratu",
    "branch": "ECE",
    "current_position": "Qualcomm Senior Manager, Bangalore",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "B. Suresh",
    "branch": "MME",
    "current_position": "Assistant Professor (MNIT Jaipur)",
    "year_of_graduation": 2008,
    "image": bandisuresh
  },
  {
    "name": "Linga Murthy",
    "branch": "MECH",
    "current_position": "GKN Aerospace Engine Private Limited - Research Engineer",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Kasula Divya Teja",
    "branch": "ECE",
    "current_position": "Manager at Deloitte, Hyderabad",
    "year_of_graduation": 2008,
    "image": Divya
  }
];

// Generate alumni data
export const generateAlumniData = () => {
  const years = Array.from({ length: 17 }, (_, i) => 2008 + i);
  const alumniData = {};

  // Initialize empty arrays for all years
  years.forEach((year) => {
    alumniData[year] = [];
  });

  // Add the actual alumni data to the 2008 year
  rawAlumniData.forEach((alumni, index) => {
    alumniData[2008].push({
      id: `2008-${index}`,
      name: alumni.name,
      branch: alumni.branch,
      currentRole: alumni.current_position,
      year: 2008,
      image: alumni.image || placeholderImage,
    });
  });

  // For years after 2008, create empty arrays (no placeholder data)
  for (let year = 2009; year <= 2024; year++) {
    alumniData[year] = [];
  }

  return alumniData;
};

export const alumniData = generateAlumniData();

// GraduateCard component
const GraduateCard = ({ graduate }) => {
  return (
    <div className="flex flex-col w-[400px] min-h-[500px] backdrop-blur-lg border-gray-200 rounded-lg shadow-md overflow-hidden bg-[#172554] text-white border-[2px] p-[5px]">
      <div className="h-[300px] w-full flex items-center justify-center overflow-hidden bg-gray-100">
        <img
          src={graduate.image}
          alt={graduate.name}
          className="object-contain max-w-full max-h-full"
        />
      </div>
      <div className="w-full flex flex-col md:justify-between p-4 md:h-[200px] gap-4">
        <div className="text-left">
          <h3 className="text-lg font-bold">{graduate.name}</h3>
          <p>Year of Graduation: {graduate.year}</p>
        </div>
        <div className="flex flex-col text-left text-[16px]">
          <p className="mb-1">
            <span className="font-semibold">Branch:</span> {graduate.branch}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Achievement:</span> {graduate.achievement}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Current Role:</span> {graduate.currentRole}
          </p>
        </div>
      </div>
    </div>
  );
};

// ProudGraduates component
const ProudGraduates = () => {
  const [selectedYear, setSelectedYear] = useState(2008);
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData[2008]);
  const [activeAlumni, setActiveAlumni] = useState(null);
  const yearScrollRef = useRef(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setFilteredAlumni(alumniData[year]);
    setActiveAlumni(null);
  };

  const handleAlumniClick = (alumni) => {
    setActiveAlumni(alumni);
  };

  const scrollYears = (direction) => {
    if (yearScrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      yearScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[22px] font-semibold text-center my-4">Our Proud Graduates</h1>

      {/* Main Layout (Swiper & Grid) */}
      <div className="flex flex-col md:flex-row gap-5 items-start mt-4">
        {/* Swiper Carousel */}
        <div className="w-full md:w-[40%] order-2 md:order-1">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="graduate-swiper"
          >
            {(activeAlumni ? [activeAlumni] : filteredAlumni).map((alumni) => (
              <SwiperSlide key={alumni.id} className="flex justify-center items-center py-4">
                <GraduateCard graduate={alumni} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Alumni Section */}
        <div className="w-full md:w-[60%] order-2 md:order-2">
          {/* Year Buttons */}
          <div className="relative w-full px-[23px] md:px-[70px]">
            <button
              onClick={() => scrollYears("left")}
              className="absolute left-0 md:ml-[40px] top-[15px] transform -translate-y-1/2 z-10 rounded-full p-1"
            >
              <ChevronLeft size={20} />
            </button>
            <div
              ref={yearScrollRef}
              className="flex gap-2 pb-2 overflow-x-auto scrollbar-hide"
            >
              {Object.keys(alumniData).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(Number(year))}
                  className={`px-4 py-1 border rounded-md transition-colors flex-shrink-0 ${
                    selectedYear === Number(year)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollYears("right")}
              className="absolute right-0 top-[15px] transform -translate-y-1/2 z-10 rounded-full p-1 md:mr-[40px]"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Alumni Grid */}
          <div className="flex md:grid-cols-4 md:grid lg:grid-cols-7 lg:grid md:gap-3 mt-4 md:px-[70px] overflow-x-auto gap-[20px] py-[10px]">
            {filteredAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className={`cursor-pointer text-center ${
                  activeAlumni?.id === alumni.id ? "ring-2 ring-blue-500 rounded-md" : ""
                }`}
                onClick={() => handleAlumniClick(alumni)}
              >
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-[150px] lg:h-[90px] lg:w-[90px] rounded-[5px] border-gray-200 border-[2px] mx-auto"
                />
                <p className="text-xs font-semibold mt-1">{alumni.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProudGraduates;