import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const NewNotifications = () => {
  const notific = [
    { 
      id:1,
      title:"Note1",
      time:'2m ago',
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
    },
    {
      id:2,
      title:"Note2",
      time:'3m ago',
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
    },
    {
      id:3,
      title:"Note3",
      time:'9m ago',
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
    },
    {
      id:4,
      title:'Note4',
      time:'1hr ago',
      note: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate?",
    },
  ];
  // const [msg, setMsg] = useState(null);
  // const toggleMessage = (id) => {
  //   msg === id ? setMsg(null) : setMsg(id);
  // };

  const [tab, setTab] = useState("direct");
  return (
    <div className=" duration-[1000ms]  w-[300px] md:w-[350px] z-[1000] gap-4 bg-white   border border-black/20 shadow-md p-4  right-4 flex flex-col rounded-xl ">
      <div className='text-2xl font-bold text-blue-950'>Notifications</div>
      <div className='flex flex-row gap-4'>
        <div className={`${tab=="direct"?'text-blue-950':'text-gray-500'} font-semibold cursor-pointer flex flex-col`} onClick={()=>{setTab('direct')}}>
          Direct
          {
            tab=='direct'?(<hr className="horizontal bg-blue-950 h-[3px] mt-1" />):''
          }

        </div>
        <div className={`${tab=="overall"?'text-blue-950':'text-gray-500'}  font-semibold cursor-pointer flex flex-col`} onClick={()=>{setTab('overall')}}>
          Overall
          {
            tab=='overall'?(<hr className="horizontal bg-blue-950 h-[3px] mt-1" />):''
          }
        </div>
        

      </div>
      <div><hr className="h-[2px] mt-[-20px] w-full bg-gray-200"/></div>
      <div className="flex flex-col gap-0 ">
      {tab=="direct" && (notific.map((data) => (
        <div
          className="duration-[500ms]  text-sm  p-1 px-2 cursor-pointer hover:bg-blue-950 hover:bg-opacity-20 rounded-md sm:text-md "
          key={data.id}
          onClick={() => toggleMessage(data.id)}
        >
            <div className="flex flex-row justify-between">
                <div className="font-bold text-blue-950">{data.title}</div>
                <div className="font-semibold text-gray-700">{data.time}</div>
                </div>
           <div>{data.note}</div>
           <div><hr className="mt-4 bg-gray-800"/></div>
        </div>
      )))}
      {tab=="overall" && (notific.map((data) => (
        <div
          className="duration-[500ms]  text-sm px-2 hover:bg-blue-950 hover:bg-opacity-20  p-1 cursor-pointer  rounded-md sm:text-md "
          key={data.id}
          onClick={() => toggleMessage(data.id)}
        >
            <div className="flex flex-row justify-between">
                <div className="font-bold text-blue-950">{data.title}</div>
                <div className="font-semibold text-gray-700">{data.time}</div>
                </div>
           <div>{data.note}</div>
           <div><hr className="mt-4 bg-gray-800"/></div>
        </div>
      )))}

      </div>
      
      <div>
        <Link to='/notifications'>
        <button className="duration-[500ms] bg-blue-950 text-white font-bold w-full p-1 rounded-lg hover:scale-[0.8] ">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default NewNotifications;
{/* {notific.map((data) => (
        <div
          className="duration-[500ms]  text-sm   border   p-1 cursor-pointer  rounded-md sm:text-md hover:scale-[1.1]"
          key={data.id}
          onClick={() => toggleMessage(data.id)}
        >
            <div className="flex flex-row justify-between">
                <div className="font-bold text-blue-950">{data.title}</div>
                <div className="font-semibold text-gray-700">{data.time}</div>
                </div>
          {" "}
          {data.id === msg ? data.note : `${data.note.substring(0, 30)}...`}
        </div>
      ))} */}
