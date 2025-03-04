import React, { useState } from "react";

const DirectorMessage = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:p-6 bg-gray-100 min-h-screen flex-shrink-0">
      {/* Left Section: Image and Director Info */}
      <div className="md:w-1/3 flex flex-col items-center p-8 bg-white shadow-lg rounded-lg mt-8 md:mt-28">
        <img
          src="https://rguktn.ac.in/administration/images/director.jpg"
          alt="Dr. Amarendra Kumar Sandra"
          className="w-49 h-48 rounded-lg object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          Dr. Amarendra Kumar Sandra
        </h2>
        <p className="text-md text-gray-600">Director, RGUKT, Nuzvid</p>
        <a
          href="https://www.rguktrkv.ac.in/pdfdoc/DrAmarendra_Profile.pdf"
          className="mt-4 px-8 py-2 bg-[#172554] text-white rounded-lg hover:bg-[#0f1a3c]"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Profile
        </a>
      </div>

      {/* Right Section: Message */}
      <div className="md:w-2/3 p-6">
        <h1 className="text-3xl font-bold text-[#172554] mb-7 text-center">
          Director's Message
        </h1>
        <p className="text-gray-700 leading-7">
          <b>Dear Alumnus /Alumna,</b>
          <br />
          <br />
          Greetings and Best wishes to our Alma mater!
          <br />
          <br />
          Since its establishment in 2008, the Rajiv Gandhi University of Knowledge Technologies (RGUKT), also known as AP IIIT, has guided thousands of rural students toward achieving their dreams. The institute is committed to providing top-quality education to the top 1% of meritorious students in Andhra Pradesh.
        </p>

        <p className="text-gray-700 leading-7 mt-4">
        RGUKT nurtures talent, producing graduates who contribute to nation-building. Our alumni hold prestigious positions in India and abroad. The institute excels in academics, research, and outreach, attracting top rural talent. Research output is growing, with faculty and students publishing in reputed journals. Students also shine in co-curricular and extracurricular activities, winning various awards. RGUKT collaborates with top institutions and industries and actively participates in social initiatives through NSS, NCC, and Helping Hands. Accredited by NAAC for six years, it continues to strengthen its academic reputation.
        </p>

        {showFullMessage && (
          <div className="text-gray-700 leading-7 mt-4">
            <p>
              I look forward to your keen participation in the
              growth of this institution by providing support in technical
              endeavors, placement/ internship opportunities, research
              promotion/collaborations, and financial aspects as well.
            </p>
            <br />
            <p>Thank you for your kind attention.</p>
            <br />
            <p>Warm Regards and best wishes.</p>
            <br />
            <p>Dr. Amarendra Kumar Sandra.</p>
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

export default DirectorMessage;
