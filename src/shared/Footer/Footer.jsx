import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white font-light ">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              Alumni Relations
            </h2>
            <address className="not-italic">
              <p>Rajiv Gandhi University of Knowledge Technologies,</p>
              <p>Nuzvid, Eluru district - 521202</p>
              <p className="mt-2">
                <a
                  href="mailto:Alumniassociation@rguktn.ac.in"
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  alumni@rguktn.ac.in
                </a>
              </p>
            </address>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/home" className="hover:text-blue-300 transition-colors duration-300">Home</Link>
              <Link to="/about" className="hover:text-blue-300 transition-colors duration-300">About Us</Link>
              <Link to="/events" className="hover:text-blue-300 transition-colors duration-300">Events</Link>
              <Link to="/getinvolved" className="hover:text-blue-300 transition-colors duration-300">Get Involved</Link>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Alumni</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Contact Us</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Home</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">News & Updates</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Testimonials</a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">Our Alumni</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300">
                <FaXTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8">
          <div className="flex justify-center items-center text-sm">
            <FaRegCopyright className="mr-2" />
            <p>2024 ALUMNI RELATIONS. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

// commend