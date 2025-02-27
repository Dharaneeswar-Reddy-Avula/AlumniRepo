import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const AlumniCard = (props) => {
  return (
    <div className='h-[100px] w-[300px] border-[2px] rounded-md flex  justify-around items-center'>
       <img src={props.image} className='h-[80px] w-[80px] rounded-full'/>
       <div>
       <h2>{props.name}{" "} 
        {props.department}
       </h2>
        <h2>{props.domain}</h2>
        <h2>{props.yog}</h2>
        </div>
        {/* <div className="flex justify-center gap-4 p-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl hover:text-blue-800 transition-all"
      >
        <FaFacebook />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-2xl hover:text-blue-600 transition-all"
      >
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 text-2xl hover:text-pink-700 transition-all"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 text-2xl hover:text-blue-900 transition-all"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 text-2xl hover:text-gray-600 transition-all"
      >
        <FaGithub />
      </a>
    </div> */}
    </div>
  )
}

export default AlumniCard