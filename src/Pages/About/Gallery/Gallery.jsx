import React, { useState } from 'react';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { IoShareSocialSharp } from "react-icons/io5";
// import Fest from '../../../assets/Fest.jpeg';
// import Meet from '../../../assets/Meet.jpg';
// import Secondmeet from '../../../assets/Secondmeet.jpg';
// import Thirdmeet from '../../../assets/Thirdmeet.jpg';
import comingsoon from "../../../assets/coming soon.jpg"
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle dropdown visibility
  const toggleList = () => {
    setIsOpen(prev => !prev);
  };
  // Function to handle category click
  const handleCategoryClick = (path) => {
    navigate(path);
  };

  const pho = [
    // { id: 1, image: Fest, Event: "Alumni life in Delhi", Items: "5 items" },
    // { id: 2, image: Meet, Event: "Alumni life in Delhi", Items: "5 items" },
    // { id: 3, image: Secondmeet, Event: "Alumni life in Delhi", Items: "5 items" },
    // { id: 4, image: Thirdmeet, Event: "Alumni life in Delhi", Items: "5 items" }
    { id: 1, image: comingsoon},
    // { id: 2, image: comingsoon},
    // { id: 3, image: comingsoon},
    // { id: 4, image: comingsoon},
   
  ];

  return (
    <div className="p-[10px] md:p-[30px] lg:p-[50px] mt-[100px] overflow-x-hidden">
                      <div className="w-full h-[50px] mb-5 bg-gray-300 opacity-20 flex items-center px-[20px] justify-center">
          Eternox 2k25 will be updated soon
        </div>
      <div className="flex flex-col md:flex-row gap-[10px]">
        <div className="flex flex-col gap-[4px]">
          <div className="cursor-pointer w-[300px] lg:w-[300px] bg-gradient-to-r from-gray-200 to-gray-300 h-[60px] flex justify-center items-center text-center hover:border-l-4 hover:border-black shadow-md" onClick={() => navigate('/Gallery')}>
            <button className="transition duration-300 ease-in-out transform hover:scale-105">All</button>
          </div>
          <div className="w-[300px] lg:w-[300px] bg-gradient-to-r from-gray-200 to-gray-300 h-[60px] flex justify-center items-center text-center shadow-md">
            <button 
              className="w-full h-full hover:border-l-4 hover:border-black transition duration-300 ease-in-out transform hover:scale-105" 
              onClick={toggleList}
            >
              Categories
            </button>
          </div>

          {isOpen && (
            <div className="flex flex-col gap-[10px] pt-[10px] bg-white border border-gray-200 rounded-md shadow-lg p-4">
              <Link
                to="/Reunion"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 ${location.pathname === "/Reunion" ? "bg-gray-100" : ""}`}
              >
                Reunion
              </Link>
              <Link
                to="/Collagedays"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 ${location.pathname === "/Collagedays" ? "bg-gray-100" : ""}`}
              >
                Collagedays
              </Link>
              <Link
                to="/Video"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 ${location.pathname === "/Video" ? "bg-gray-100" : ""}`}
              >
                Video
              </Link>
              <Link
                to="/Festivals"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 ${location.pathname === "/Festival" ? "bg-gray-100" : ""}`}
              >
                Festival
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center">
          {pho.map((mem) => (
            <div
              key={mem.id}
              className="relative group w-[300px] md:w-[180px] lg:w-[450px] h-[300px] md:h-[200px] lg:h-[300px] mt-[20px] md:mt-[0px] mb-[20px] shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link to={`/gallery/${mem.id}`}>
                <img
                  src={mem.image}
                  className="w-full h-full rounded-md opacity-100 transition-opacity duration-300 group-hover:opacity-70 cursor-pointer"
                  onClick={() => navigate(`/gallery/${mem.id}`)}
                  alt={mem.Event}
                />
              </Link>
              <IoShareSocialSharp className="opacity-0 absolute group-hover:opacity-70 p-[4px] bg-white rounded-full w-[30px] h-[30px] ml-[260px] md:ml-[380px] mt-[-280px] md:mt-[-280px] shadow-md" />
              <div className="flex flex-row justify-between pt-[10px] font-bold">
                <div>{mem.Event}</div>
                <div>{mem.Items}</div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px]'>Will Update Soon</div> */}
      </div>
    </div>
  );
};

export default Gallery;
