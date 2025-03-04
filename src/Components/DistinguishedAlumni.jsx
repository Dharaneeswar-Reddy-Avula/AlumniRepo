import React from "react";
import img from "../assets/logo.png";
const DistinguishedAlumni = () => {
  const alumni = [
    {
      
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
      
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
      
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
      
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
    {
       
        name: '5R1848u',
        position:'BlockChain and Full Stack Developer'

    },
  ];
  return (
   
    <div className="w-full md:w-[45%]  border bg-white shadow-lg rounded-md">
      {/* Header */}
      <div className="flex items-center px-4 py-4 border-b">
        <h2 className="text-lg font-bold text-blue-950">DISTINGUISHED ALUMNI</h2>
      </div>

      {/* Alumni List */}
      <div className="h-[400px] overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          {alumni.map((data, index) => (
            <div key={index} className="flex items-center gap-4 hover:bg-gray-200 rounded-md p-3">
              <img src={data.profile} className="w-12 h-12 rounded-full" alt="profile" />
              <div>
                <div className="font-semibold">{data.name}</div>
                <div className="text-gray-500 text-sm">{data.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  
  );
};

export default DistinguishedAlumni;
