import React,{useState} from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Fest from '../../../assets/Fest.jpeg'
import Fourthfest from '../../../assets/Fourthfest.jpg'
import Fifthfest from '../../../assets/Fifthfest.jpg'
import { PiCalendarDotsLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { VscSaveAll } from "react-icons/vsc";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
const Onegallery = () => {
  const navigate=useNavigate();
  const { id } = useParams();
  const[isExpanded,SetIsexpanded]=useState(false);
  const toggleExpand=()=>{
    SetIsexpanded(!isExpanded);
  }
  return (
    <>
    <div className="absolute flex flex-col gap-[4px] justify-end items-end w-full fixed mt-[200px] md:mt-[100px] fixed ml-[-6px]">
      <div className="w-[40px] h-[40px] rounded-full bg-blue-500 flex justify-center items-center text-white"><FaFacebookF /></div>
      <div className="w-[40px] h-[40px] rounded-full bg-green-500 flex justify-center items-center text-white"> <FaWhatsapp /></div>
      <div className="w-[40px] h-[40px] rounded-full bg-blue-700 flex justify-center items-center text-white"><FaLinkedinIn /></div>
      <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">   <VscSaveAll /></div>
      <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">   <CiMenuKebab /></div>
    </div>
    <div className=" relative flex flex-col m-[50px] md:m-[20px] lg:m-[200px]">
      <div><button className="flex flex-row"onClick={()=>navigate('/Gallery')}>
        <p><FaArrowLeftLong className="mt-[4px]"/></p>
        <p>Go Back</p>
        </button>
      </div>
      <div className="text-xl font-bold">Alumni life in Delhi</div>
      <div>
        <p className={`${isExpanded ? 'max-h-full':'max-h-[100px] overflow-hidden'}`}>orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales lacus augue, in hendrerit libero tempor vel.
           Praesent molestie ipsum ut turpis gravida egestas. Aliquam iaculis egestas porttitor. Proin et velit et tortor dignissim
           sodales sed nec ligula. Quisque eu velit vel velit venenatis vestibulum. Orci varius natoque penatibus et magnis dis parturient
           montes, nascetur ridiculus mus. Fusce gravida fringilla dui, vitae cursus neque elementum id. Pellentesque pulvinar porta tortor
           sed feugiat. Praesent leo velit, sagittis sed finibus in, pharetra sed tellus. Morbi sagittis nulla eget tempor faucibus. Cras 
           pharetra orci at tellus scelerisque, ut ultricies nulla luctus. Pellentesque interdum odio bibendum eros maximus, non vulputate 
           eros finibus. Vestibulum sit amet ornare felis, vestibulum pretium justo. Integer ac lorem suscipit, pulvinar felis in, consectetur 
           ipsum. Quisque quis orci eu sapien volutpat cursus in sit amet justo. Vestibulum viverra ullamcorper magna, sit amet sollicitudin est 
           aliquam quis. Aliquam gravida eget quam eget efficitur. Aliquam pharetra ornare tortor a vestibulum. Fusce eu vulputate nisi. Vestibulum 
           sit amet leo neque. Maecenas augue leo, placerat gravida lectus at, lobortis aliquet turpis. Phasellus vel hendrerit tortor. Pellentesque 
           egestas vestibulum ligula, eget semper justo dictum sit amet. Aliquam dignissim sem non erat finibus, a condimentum dolor pulvinar. Nunc
           enim eros, imperdiet sit amet libero et, semper malesuada purus. Nulla ac lectus augue. Nunc quis aliquet nulla. Cras vel tincidunt neque,
           id ullamcorper massa. Etiam non leo id felis rutrum efficitur. Nunc quis dolor a enim feugiat ullamcorper. Phasellus ex justo, ornare ac 
           iaculis ac, tristique non velit. Pellentesque bibendum eros arcu, id tempus odio malesuada ut. Suspendisse at velit sit amet felis aliquam 
           elementum in in libero. Nam magna ante, volutpat at aliquam eu, scelerisque nec massa. Cras ultricies dolor accumsan neque dignissim semper.
           Sed lobortis ut risus quis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat at eros quis placerat. Mauris blandit
           dui neque, nec tristique massa efficitur at. Curabitur lacinia justo in risus feugiat, id auctor ex congue. Nunc tempus turpis metus, a suscipit
           dui fermentum at. Nulla facilisi. Fusce efficitur, tortor vitae vestibulum euismod, dui lorem lobortis velit, ac auctor sem nibh quis mi. Aliquam
           erat volutpat. Integer posuere velit sed dui commodo tincidunt. Duis id commodo ante. Curabitur sed pretium justo. Pellentesque quam lectus, posuere
           nec volutpat ac, tempor et nisl. Integer eget cursus erat. Fusce non porttitor mi. Aliquam erat volutpat. Donec pharetra luctus viverra. Suspendisse 
           egestas porttitor tortor, et lacinia nibh ultrices id. In at sollicitudin felis. Donec dapibus sagittis turpis, vestibulum pharetra libero. Suspendisse 
           id bibendum elit. Pellentesque quis blandit sem. Maecenas semper lectus sagittis mauris volutpat sollicitudin. Quisque et ex id dui condimentum faucibus 
           et vitae nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      </div>
      <div classNamw="flex justify-start mt-[20px]">
        <button onClick={toggleExpand} className="text-blue-500 underline">
          {isExpanded?'Show Less':'Show More'}
        </button>

      </div>
      <div className="flex flex-wrap gap-[10px]">
          <div><img src={Fest}></img></div>
          <div><img src={Fourthfest}></img></div>
          <div><img src={Fifthfest}></img></div>
      </div>
      <hr className="mt-[20px]"></hr>
      <div className="flex flex-row"><p><PiCalendarDotsLight className="mt-[5px]"/></p><p>Oct 11,2024</p></div>
      <div className="flex flex-row gap-[4px] pt-[20px]"><p>Category</p><p><button className="rounded-full bg-blue-100 w-[80px] h-[30px]">Nuzvid</button></p></div>
      <div><hr></hr></div>

      
    </div>
    </>
  )
}

export default Onegallery
