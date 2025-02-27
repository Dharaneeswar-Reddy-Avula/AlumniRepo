import React from "react";
import paris from "../assets/paris.jpg";
import usa from "../assets/usa.jpg";
import london from "../assets/london.jpg";
import bangalore from "../assets/bangalore.jpg";
import hyderabad from "../assets/hyderabad.jpg";
import chennai from "../assets/chennai.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const CardDesign = ({ title, img ,path}) => {
  return (
    
    <div className="group relative  w-[350px] h-[200px] overflow-hidden rounded-md">
        
      <img src={img} className="w-full group-hover:scale-[1.2] duration-[500ms] h-full rounded-md" />
      <Link to={path}>
      <div className="flex flex-col cursor-pointer justify-center items-center rounded-md absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">
        <div className="text-white font-semibold text-2xl">
          {title.toUpperCase()}
        </div>
        <div>
          <hr className="w-[30px]  bg-white" />
        </div>
      </div>
      </Link>
    </div>
  );
};
const Countries = () => {
  const [showAllF, setShowAllF] = useState(false);
  const [showAllI, setShowAllI] = useState(false);
  const foreign = [
    { title: "Paris", image: paris ,path:'/paris'},
    { title: "USA", image: usa ,path:'/usa'},
    { title: "London", image: london,path:'/london' },
    { title: "Paris", image: paris,path:'/paris' },
    { title: "USA", image: usa,path:'/usa' },
    { title: "London", image: london,path:'/london' },
  ];
  const india = [
    { title: "Bangalore", image: bangalore,path:'/bangalore' },
    { title: "Hyderabad", image: hyderabad,path:'/hyderabad' },
    { title: "Chennai", image: chennai ,path:'/chennai'},
    { title: "Bangalore", image: bangalore ,path:'/bangalore' },
    { title: "Hyderabad", image: hyderabad ,path:'/hyderabad'},
    { title: "Chennai", image: chennai,path:'/chennai' },
  ];
  return (
    <div>
      <div className="flex flex-col my-4 gap-12">
        <div className="flex flex-col gap-8">
          <div className="font-bold flex flex-col gap-2 justify-center items-center  text-blue-950">
            <div className="text-2xl font-bold">Foreign Chapters</div>
            <div>
              <hr className="w-[70px] h-1 bg-blue-950" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {(showAllF?foreign:foreign.slice(0,3)).map((data) => (
              <CardDesign title={data.title} img={data.image} path={data.path}/>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-950 text-white px-4 py-2 rounded-md shadow "
              onClick={() => setShowAllF(!showAllF)}
            >
              {showAllF ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="font-bold flex flex-col gap-2 justify-center items-center  text-blue-950">
            <div className="text-2xl font-bold">Indian Chapters</div>
            <div>
              <hr className="w-[70px] h-1 bg-blue-950" />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {(showAllI?india:india.slice(0,3)).map((data) => (
              <CardDesign title={data.title} img={data.image} path={data.path}/>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-950 text-white px-4 py-2 rounded-md shadow "
              onClick={() => setShowAllI(!showAllI)}
            >
              {showAllI ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
