import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
const HeroContact = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 mt-24 md:mt-32 ">
      <div className="relative bg-gradient-to-r from-blue-950 to-blue-800 rounded-lg overflow-hidden shadow-xl">
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
            <path
              d="M159.52 175.75C94.5552 166.394 35.3958 140.051 0 100.205V282.998H375V0C349.462 21.9296 321.066 41.4003 290.211 56.9884C259.355 72.5765 226.088 84.1789 191.52 91.1305C156.952 98.0822 121.321 100.205 85.7738 97.5C50.2264 94.7949 15.7738 87.2615 0 75V282.998H375V0C349.462 21.9296 321.066 41.4003 290.211 56.9884C259.355 72.5765 226.088 84.1789 191.52 91.1305C156.952 98.0822 121.321 100.205 85.7738 97.5C50.2264 94.7949 15.7738 87.2615 0 75"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>
        <div className="relative z-10 px-6 py-16 sm:py-24 lg:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Contact Us 📞📧
            </h1>
            <p className="max-w-xl mx-auto text-xl text-blue-100 sm:text-2xl">We'd love to hear from you! Whether you have questions, suggestions, or want to stay connected with your alumni network, we're here to help.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
              >
                <FaEnvelope className="mr-2" />
                <Link to='/getintouch'>Get in Touch</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContact

