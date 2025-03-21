import React, { useState } from "react";
// import sivalal from "../../../assets/Faculty/sivalal.jpeg"
const IARMessage = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-gray-100 min-h-screen">
      {/* Left Section: Image and Director Info */}
      <div className="md:w-1/3 flex flex-col items-center p-8 bg-white shadow-lg rounded-lg mt-8 md:mt-20">
        <img
          src="http://intranet.rguktn.ac.in/CITADEL/profile/profileimg/medium/RN071116001.jpg"
          // src={sivalal}
          alt="Mr. K.Sivalal"
          className="w-48 h-49  rounded-lg object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">Mr. K.Sivalal</h2>
        <p className="text-md text-gray-600">Asst. Professor, RGUKT, Nuzvid</p>
        
      </div>

      {/* Right Section: Message */}
      <div className="md:w-2/3 p-6">
        <h1 className="text-3xl font-bold text-[#172554] mb-7 text-center">
        IAR Coordinator's Message
        </h1>
        <p className="text-gray-700 leading-7">
          Greetings and Best wishes to our Alma mater!
          <br />
          <br />
          The Office of International and Alumni Relations is the primary communications link between the University and our alumni. It is our goal to encourage and foster lifelong alumni participation, involvement, and commitment.
        </p>
        <br />

        <p className="text-gray-700 leading-7">
        Our goal is to strengthen the bond between the University and our alumni, creating programs that match their interests and needs. We aim to maintain strong relationships with seasoned alumni while increasing engagement with younger alumni. Achieving this requires a team effort involving University administration, friends, and alumni. Together, we can build a thriving alumni network that supports and uplifts our University community.
        </p>

        {showFullMessage && (
          <div className="text-gray-700 leading-7 mt-4">
            <p>
            We recognize, acknowledge, and embrace our alumni as vital stakeholders in the advancement of the University. Therefore, we encourage all alumni to participate in and support the programs, services, and numerous campus activities and events. Please stay connected through involvement and participation in the RGUKT Nuzvid IAR. We also encourage each alumnus and friend of the University to be ambassadors for Andhra Pradesh State in their respective communities by assisting with the recruitment of students and by supporting programs via your time, talent, and finances.
            </p>
            <br />
            <p>Thank you for your kind attention.</p>
            <br />
            <p>Help us keep the "Trojan Experience" alive.</p>
            <br />
            <p className="text-right">Mr. K.Sivalal.</p>
            <p className="text-right">Asst. Professor in department of Electronics & Communications Engineering</p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={() => setShowFullMessage(!showFullMessage)}
            className="mt-4 px-6 py-2 bg-[#172554] text-white rounded-lg hover:bg-[#0f1a3c]"
          >
            {showFullMessage ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IARMessage;
