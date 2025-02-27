import { useState } from "react"
import { motion } from "framer-motion"
import { FaChartBar, FaBullhorn, FaUserTie, FaUserGraduate, FaLightbulb } from "react-icons/fa"
import Promote from "./Promote"
import Analytics from "./Analytics"
import Mentors from "./Mentors"
import Mentees from "./Mentees"

const MentorShip = () => {
  const [selectedTab, setSelectedTab] = useState("Promote Mentorship")

  const data = [
    { name: "Analytics", icon: <FaChartBar />, component: <Analytics /> },
    { name: "Promote Mentorship", icon: <FaBullhorn />, component: <Promote /> },
    { name: "View Mentors List", icon: <FaUserTie />, component: <Mentors /> },
    { name: "View Mentees List", icon: <FaUserGraduate />, component: <Mentees /> },
  ]

  const mentorshipBenefits = [
    "Career guidance and development",
    "Networking opportunities",
    "Skill enhancement and knowledge sharing",
    "Personal growth and confidence building",
    "Industry insights and trends",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b md:mt-[140px] mt-[80px] from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Mentorship Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of professionals through knowledge sharing and guidance.
          </p>
        </div>

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Active Mentors", value: "50+" },
            { label: "Mentees Enrolled", value: "200+" },
            { label: "Successful Matches", value: "150+" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-950 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* Tabs Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {data.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedTab(item.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTab === item.name
                    ? "bg-blue-950 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Section */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg rounded-lg p-6 mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{selectedTab}</h2>
          {data.find((item) => item.name === selectedTab)?.component}
        </motion.div>

        {/* Benefits of Mentorship */}
        <div className="bg-blue-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
            <FaLightbulb className="mr-2" />
            Benefits of Our Mentorship Program
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mentorshipBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our mentorship program today and take the next step in your professional journey.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-950 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              Become a Mentor
            </button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors">
              Find a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorShip

