import React from "react";
import { ChevronRight, Mail, Linkedin } from "lucide-react";

const AlumniTalks = () => {
  const alumni = [
    {
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Emma Johnson",
      class: "Class of 2015",
      job: "Software Engineer at Google",
      story:
        "From campus hackathons to Google's AI team, Emma's journey is nothing short of inspirational.",
    },
    {
      photo: "https://i.pravatar.cc/150?img=2",
      name: "Michael Chen",
      class: "Class of 2017",
      job: "Data Scientist at Amazon",
      story:
        "Michael's passion for big data led him to revolutionize Amazon's recommendation system.",
    },
    {
      photo: "https://i.pravatar.cc/150?img=3",
      name: "Sophia Rodriguez",
      class: "Class of 2016",
      job: "UX Designer at Apple",
      story:
        "Sophia's creative flair has shaped the user experience of millions of Apple users worldwide.",
    },
    {
      photo: "https://i.pravatar.cc/150?img=4",
      name: "David Kim",
      class: "Class of 2018",
      job: "Startup Founder",
      story:
        "David's entrepreneurial spirit drove him to create a successful EdTech startup right after graduation.",
    },
    {
      photo: "https://i.pravatar.cc/150?img=5",
      name: "Olivia Patel",
      class: "Class of 2014",
      job: "AI Researcher at DeepMind",
      story:
        "Olivia's groundbreaking work in AI is pushing the boundaries of what's possible in machine learning.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 md:mt-[140px] mt-[70px] bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Alumni Talks
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear from our successful alumni and their inspiring journeys
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {alumni.map((alum, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="p-6">
                {/* <img src={alum.photo || "/placeholder.svg"} alt={alum.name} className="h-24 w-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 text-center">{alum.name}</h3>
                <p className="text-sm text-gray-500 text-center mb-2">{alum.class}</p>
                <p className="text-md font-medium text-blue-950 text-center mb-4">{alum.job}</p>
                <p className="text-gray-600 text-sm mb-4">{alum.story}</p> */}
                <div className="text-xl bg-gray-300 opacity-20 flex items-center px-20 h-[50px]">
                  Will Update Soon ...
                </div>
                <div className="mt-4 flex justify-center">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    View Full Story
                    <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-950 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Share Your Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-blue-200">
                Are you an alumnus? We'd love to feature your journey and
                inspire others. Your story could be the spark that ignites
                someone else's success!
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-950 bg-white hover:bg-blue-50"
                >
                  Contact Us
                  <Mail className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-950"
                >
                  Connect on LinkedIn
                  <Linkedin className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniTalks;
