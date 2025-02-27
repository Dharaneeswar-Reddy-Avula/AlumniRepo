import React, { useState } from 'react';
import { Facebook, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialShare() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle invite submission
    console.log('Invite submitted:', formData);
  };

  return (
    <div className="mb-8">
      {/* Social Media Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button className="bg-[#1877F2] text-white  h-[50px] w-[50px] rounded-full flex items-center justify-center hover:opacity-90">
        <FaFacebookF className='text-[30px]'/>

        </button>
        <button className="bg-[#25D366] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:opacity-90">
        <FaWhatsapp className='text-[30px]'/>

        </button>
        <button className="bg-[#0A66C2] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:opacity-90">
        <FaLinkedinIn className='text-[30px]'/>

        </button>
        <button className="bg-[#229ED9] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:opacity-90">
        <FaTelegramPlane className='text-[30px]'/>

        </button>
        <button className="bg-black text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:opacity-90">
        <FaXTwitter className='text-[30px]'/>

        </button>
        <button className="bg-[#EA4335] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:opacity-90">
        <IoMdMail className='text-[30px]'/>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center mb-6">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="px-4 text-gray-500 text-sm">OR</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>

      {/* Invite Form */}
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div>
            <label className="block text-sm text-[#172554] mb-1">Role *</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Student">Student</option>
              <option value="Alumni">Alumni</option>
              <option value="Faculty">Faculty</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#172554] text-white py-2 rounded-md hover:bg-[#172554] transition-colors"
          >
            INVITE
          </button>
        </div>
      </form>
    </div>
  );
}

export { SocialShare };