import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoShareSocialSharp } from "react-icons/io5";
import Collagetwo from "../../../assets/Collagetwo.jpg";
import Collagethree from "../../../assets/Collagethree.jpg";
import Collagefour from "../../../assets/Collagefour.jpg";
import Collageone from "../../../assets/Collageone.jpg";

const Festival = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle dropdown visibility
  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };
  // Function to handle category click
  const handleCategoryClick = (path) => {
    navigate(path);
  };

  const pho = [
    {
      id: 1,
      image: Collageone,
      Event: "Alumni life in Delhi",
      Items: "5 items",
    },
    {
      id: 2,
      image: Collagetwo,
      Event: "Alumni life in Delhi",
      Items: "5 items",
    },
    {
      id: 3,
      image: Collagethree,
      Event: "Alumni life in Delhi",
      Items: "5 items",
    },
    {
      id: 4,
      image: Collagefour,
      Event: "Alumni life in Delhi",
      Items: "5 items",
    },
  ];

  return (
    <div className="p-[10px] md:p-[30px] lg:p-[50px] mt-[100px]">
      <div className="flex flex-col md:flex-row gap-[10px]">
        {/* Sidebar */}
        <div className="flex flex-col gap-[4px]">
          <div
            className="cursor-pointer w-[300px] lg:w-[300px] bg-gray-200 h-[60px] flex justify-center items-center text-center hover:border-l-4 hover:border-black"
            onClick={() => navigate("/Gallery")}
          >
            <button>All</button>
          </div>

          {/* Categories Dropdown */}
          <div className="w-[300px] lg:w-[300px] bg-gray-200 h-[60px] flex justify-center items-center text-center">
            <button
              className="w-full h-full hover:border-l-4 hover:border-black"
              onClick={toggleList}
            >
              Categories
            </button>
          </div>

          {isOpen && (
            <div className="flex flex-col gap-[10px] pt-[10px]">
              <Link
                to="/Reunion"
                className={`mt-[10px] tab ${
                  location.pathname === "/Reunion" ? "active" : ""
                }`}
              >
                Reunion
              </Link>
              <Link
                to="/Collagedays"
                className={`mt-[15px] tab ${
                  location.pathname === "/Collagedays" ? "active" : ""
                }`}
              >
                Collagedays
              </Link>
              <Link
                to="/Video"
                className={`mt-[20px] tab ${
                  location.pathname === "/Video" ? "active" : ""
                }`}
              >
                Video
              </Link>

              <Link
                to="/Festival"
                className={`mt-[25px] tab ${
                  location.pathname === "/Festival"
                    ? "active text-blue-500"
                    : ""
                }`}
              >
                Festival
              </Link>
            </div>
          )}
        </div>

        {/* Image Gallery */}
        {/* <div className="flex flex-wrap gap-[20px]">
          {pho.map((mem) => (
            <div
              key={mem.id}
              className="relative group w-[300px] md:w-[180px] lg:w-[450px] h-[300px] md:h-[200px] lg:h-[300px] mt-[20px] md:mt-[0px] mb-[20px]"
            >
              <img
                src={mem.image}
                className="w-full h-full rounded-md opacity-100 transition-opacity duration-300 group-hover:opacity-70 cursor-pointer"
                onClick={() => navigate(`/gallery/${mem.id}`)}
                alt={mem.Event}
              />
             
              <div className="flex flex-row justify-between pt-[10px] font-bold">
                <div>{mem.Event}</div>
                <div>{mem.Items}</div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px] justify-center">
          Will Update Soon
        </div>
      </div>
    </div>
  );
};

export default Festival;
