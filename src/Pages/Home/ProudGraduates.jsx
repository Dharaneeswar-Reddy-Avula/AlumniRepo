import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProudGrad.css";
import grad from "../../assets/Man1.jpg"

// Placeholder image from Unsplash
const placeholderImage =  grad;

// Generate Alumni Data (20 per year)
const generateAlumniData = () => {
  const years = Array.from({ length: 17 }, (_, i) => 2008 + i);
  const alumniData = {};

  years.forEach((year) => {
    alumniData[year] = Array.from({ length: 20 }, (_, i) => ({
      id: `${year}-${i}`,
      name: `Graduate ${i + 1}`,
      year: year,
      image: placeholderImage,
      degree: ["Computer Science", "Business Administration", "Engineering", "Medicine", "Arts"][Math.floor(Math.random() * 5)],
      achievement: ["Summa Cum Laude", "Research Excellence", "Leadership Award", "Community Service", "Innovation Prize"][Math.floor(Math.random() * 5)],
      currentRole: ["Software Engineer", "Project Manager", "Entrepreneur", "Researcher", "Designer"][Math.floor(Math.random() * 5)]
    }));
  });

  return alumniData;
};

const alumniData = generateAlumniData();

const GraduateCard = ({ graduate }) => {
  return (
    <div className="flex flex-col w-[400px] h-[500px] md:h-[420px] border border-gray-200 rounded-lg shadow-md overflow-hidden">
   <div className=" h-[270px] overflow-hidden">
        <img src={placeholderImage}/>
      </div>
  
    {/* Alumni Details Container */}
    <div className="w-full flex flex-col md:flex-row md:justify-between p-4 md:h-[150px] gap-4">
      {/* Left Section - Name & Graduation Year */}
      <div className="text-left">
        <h3 className="text-lg font-bold">{graduate.name}</h3>
        <p className="text-gray-600">Year of Graduation: {graduate.year}</p>
      </div>
  
      {/* Right Section - Additional Details */}
      <div className="flex flex-col text-left text-[16px]">
        <p className="mb-1"><span className="font-semibold">Degree:</span> {graduate.degree}</p>
        <p className="mb-1"><span className="font-semibold">Achievement:</span> {graduate.achievement}</p>
        <p className="mb-1"><span className="font-semibold">Current Role:</span> {graduate.currentRole}</p>
      </div>
    </div>
  </div>
  
  );
};

const ProudGraduates = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData[2024]);
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
      const scrollAmount = direction === 'left' ? -200 : 200;
      yearScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[22px] font-semibold text-center my-4">
        Our Proud Graduates
      </h1>

      {/* Main Layout (Swiper & Grid) */}
      <div className="flex flex-col md:flex-row gap-5 items-start mt-4">
        {/* Swiper Carousel */}
        <div className="w-full md:w-[40%] order-2 md:order-1">
          <Swiper
            modules={[Navigation,  Autoplay]}
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
              onClick={() => scrollYears('left')}
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
                  data-year={year}
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
              onClick={() => scrollYears('right')}
              className="absolute right-0 top-[15px] transform -translate-y-1/2 z-10 rounded-full p-1 md:mr-[40px]"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Alumni Grid */}
          <div className="flex  md:grid-cols-4 md:grid lg:grid-cols-7 lg:grid md:gap-3 mt-4 md:px-[70px] overflow-x-auto gap-[20px] py-[10px]">
            {filteredAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className={`cursor-pointer text-center ${
                  activeAlumni?.id === alumni.id ? 'ring-2 ring-blue-500 rounded-md' : ''
                }`}
                onClick={() => handleAlumniClick(alumni)}
              >
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className=" w-[150px] lg:h-[90px] lg:w-[90px] rounded-[5px] border-gray-200 border-[2px] mx-auto"
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