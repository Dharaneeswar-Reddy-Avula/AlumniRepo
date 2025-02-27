import React from "react";
import SSIT from "../assets/SSIT.avif";

const Business = () => {
  return (
    <div className="flex flex-col bg-gray-100 mt-24 w-full px-4 lg:px-16">
      {/* Business Connect Section */}
      <div className="flex flex-col gap-6 py-10">
        <h2 className="text-3xl font-semibold text-center bg-gray-400 py-4 rounded-md">
          Business Connect
        </h2>
        <p className="text-gray-600 text-center">
          Discover businesses, connect with industry leaders, and explore
          opportunities in various sectors.
        </p>
        <div className="text-gray-600">
          At Rajiv Gandhi University of Knowledge Technologies, we believe in fostering strong connections
          between academia and industry. While our Business & Industry
          Collaborations section is currently evolving, we are committed to
          creating impactful partnerships in the near future. Our goal is to
          bridge the gap between education and the professional world, providing
          students with real-world exposure, internships, and career
          opportunities. Stay tuned as we expand our network and bring valuable
          collaborations that benefit both our students and industry leaders.
          For future partnership opportunities, feel free to reach out to us
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search Business"
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:outline-none"
          />
          <button className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2,3,4,5,6,7,8,9,10].map((item) => (
            <div key={item} className="flex border border-gray-300 rounded-md bg-white shadow-md p-6">
              <div className="w-1/3 flex flex-col items-center">
                <img src={SSIT} alt="SSIT" className="w-32 h-24" />
                <h3 className="font-semibold mt-2">SSIT</h3>
                <p className="text-gray-500 text-sm">Private Limited</p>
              </div>
              <div className="w-2/3 flex flex-col gap-2 pl-4">
                <p><span className="font-semibold">Industry:</span> Technology</p>
                <p><span className="font-semibold">Description:</span> A startup focused on AI-driven solutions.</p>
                <p><span className="font-semibold">Website:</span> <a href="https://www.ssit.ac.in" className="text-blue-600">www.ssit.ac.in</a></p>
                <p><span className="font-semibold">Contact:</span> ssit@gmail.com</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full bg-gray-300 opacity-20 flex justify-center items-center h-[50px]">Will Update Soon</div>
       
      </div>

      {/* Job Promotions Section */}
      <div className="flex flex-col gap-6 py-10">
        <h2 className="text-2xl font-semibold">Job Promotions</h2>
        <p className="text-gray-600">
          Explore job opportunities and career growth with top companies.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search Job"
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2 focus:outline-none"
          />
          <button className="bg-blue-950 text-white px-6 py-2 rounded-md hover:bg-blue-800">
            Search
          </button>
        </div>
        <div className="w-full bg-gray-300 opacity-20 flex justify-center items-center h-[50px]">Will Update Soon</div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2,3,4,5,6,7,8,9,10].map((item) => (
            <div key={item} className="flex border border-gray-300 rounded-md bg-white shadow-md p-6">
              <div className="w-1/3 flex flex-col items-center">
                <img src={SSIT} alt="SSIT" className="w-32 h-24" />
                <h3 className="font-semibold mt-2">SSIT</h3>
                <p className="text-gray-500 text-sm">Private Limited</p>
              </div>
              <div className="w-2/3 flex flex-col gap-2 pl-4">
                <p><span className="font-semibold">Industry:</span> Technology</p>
                <p><span className="font-semibold">Description:</span> Hiring AI engineers and software developers.</p>
                <p><span className="font-semibold">Website:</span> <a href="https://www.ssit.ac.in" className="text-blue-600">www.ssit.ac.in</a></p>
                <p><span className="font-semibold">Contact:</span> careers@ssit.com</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Business;
