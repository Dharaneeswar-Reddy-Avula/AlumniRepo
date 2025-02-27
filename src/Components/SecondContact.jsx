import React from "react";
import { IoLocation, IoMail, IoCall } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const SecondContact = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600">
              We'd love to hear from you! Reach out with any questions,
              feedback, or collaboration ideas.
            </p>
            <hr className="border-gray-200" />
            <ContactInfo
              icon={<IoLocation className="h-6 w-6 text-blue-500" />}
              title="Location"
              description="Visit Us Here"
            />
            <ContactInfo
              icon={<IoMail className="h-6 w-6 text-green-500" />}
              title="Email"
              description="We'd Love to Hear from You! Send us a message"
            />
            <ContactInfo
              icon={<IoCall className="h-6 w-6 text-red-500" />}
              title="Call Us"
              description="Your questions are the key to better answers."
            />
            <hr className="border-gray-200" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow us on social media
              </h3>
              <div className="flex space-x-4">
                <SocialIcon Icon={FaFacebookF} />
                <SocialIcon Icon={FaTwitter} />
                <SocialIcon Icon={FaYoutube} />
                <SocialIcon Icon={FaInstagram} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Send a message</h2>
            <p className="text-gray-600">
              Communication is the key to understanding.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="Name" id="name" placeholder="Your name" />
                <InputField
                  label="Branch"
                  id="branch"
                  placeholder="Your branch"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone"
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <InputField
                label="Subject"
                id="subject"
                placeholder="Message subject"
              />
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const SocialIcon = ({ Icon }) => (
  <a
    href="#"
    className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
  >
    <span className="sr-only">Social media</span>
    <Icon className="h-6 w-6" />
  </a>
);

const InputField = ({ label, id, type = "text", placeholder }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
      placeholder={placeholder}
    />
  </div>
);

export default SecondContact;
