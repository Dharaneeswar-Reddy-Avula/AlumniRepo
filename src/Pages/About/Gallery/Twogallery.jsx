import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { PiCalendarDotsLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscSaveAll } from "react-icons/vsc";
import { CiMenuKebab } from "react-icons/ci";
import Fest from '../../../assets/Fest.jpeg';
import Fourthfest from '../../../assets/Fourthfest.jpg';
import Fifthfest from '../../../assets/Fifthfest.jpg';

const galleryData = [
  {
    id: '1',
    event: 'Alumni Life in Delhi',
    date: 'Oct 11, 2024',
    category: 'Nuzvid',
    images: [Fest, Fourthfest, Fifthfest],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales lacus augue, in hendrerit libero tempor vel.',
  },
  {
    id: '2',
    event: 'Reunion Fun Times',
    date: 'Nov 12, 2024',
    category: 'Hyderabad',
    images: [Fest, Fourthfest],
    content: 'Phasellus ultricies, libero at fermentum gravida, felis sapien venenatis quam, at fermentum velit velit ac justo.',
  },
  {
    id: '3',
    event: 'Nuzvid',
    date: 'Nov 12, 2024',
    category: 'Hyderabad',
    images: [Fest],
    content: 'Phasellus ultricies, libero at fermentum gravida, felis sapien venenatis quam, at fermentum velit velit ac justo.',
  },
  {
    id: '4',
    event: 'Nuzvid',
    date: 'Nov 12, 2024',
    category: 'Hyderabad',
    images: [Fourthfest],
    content: 'Phasellus ultricies, libero at fermentum gravida, felis sapien venenatis quam, at fermentum velit velit ac justo.',
  },
 
];

const Twogallery = () => {
  const { id } = useParams();
  const galleryItem = galleryData.find(item => item.id === id);
  const navigate = useNavigate();

  if (!galleryItem) {
    return <div>Gallery not found</div>;
  }

  return (
    <>
     
      <div className="absolute flex flex-col gap-[4px] justify-end items-end w-full fixed mt-[100px] ml-[-4px]">
        <div className="w-[40px] h-[40px] rounded-full bg-blue-500 flex justify-center items-center text-white"><FaFacebookF /></div>
        <div className="w-[40px] h-[40px] rounded-full bg-green-500 flex justify-center items-center text-white"><FaWhatsapp /></div>
        <div className="w-[40px] h-[40px] rounded-full bg-blue-700 flex justify-center items-center text-white"><FaLinkedinIn /></div>
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center"><VscSaveAll /></div>
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center"><CiMenuKebab /></div>
      </div>

     
      <div className="relative flex flex-col m-[10px] md:m-[20px] lg:m-[200px] m-[50px] md:m-[80px]">
       
        <button className="flex flex-row" onClick={() => navigate('/Gallery')}>
          <p><FaArrowLeftLong className="mt-[4px]" /></p>
          <p>Go Back</p>
        </button>
        <div className="text-xl font-bold">{galleryItem.event}</div>
        <div>
          <p>{galleryItem.content}</p>
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {galleryItem.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>

        <hr className="mt-[20px]" />
        <div className="flex flex-row">
          <p><PiCalendarDotsLight className="mt-[5px]" /></p>
          <p>{galleryItem.date}</p>
        </div>
        <div className="flex flex-row gap-[4px] pt-[20px]">
          <p>Category</p>
          <p><button className="rounded-full bg-blue-100 w-[80px] h-[30px]">{galleryItem.category}</button></p>
        </div>

        <div><hr /></div>
      </div>
    </>
  );
}

export default Twogallery;
