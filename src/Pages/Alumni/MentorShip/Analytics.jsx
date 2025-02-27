import { useState } from "react"
import { motion } from "framer-motion"
import { FaUserTie, FaUserGraduate } from "react-icons/fa"
import { AiOutlineExclamation } from "react-icons/ai"

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("My Preferences")

  const tabs = ["My Preferences", "Mentorship Homepage"]

  const stats = [
    { title: "Total Mentors", count: 40, change: "+1 new mentor in last 30 days", icon: FaUserTie },
    { title: "Total Mentees", count: 50, change: "+3 new mentees in last 30 days", icon: FaUserGraduate },
  ]

  const actions = [
    {
      title: "Increase mentor engagement",
      description:
        "Promoting the mentorship platform regularly will encourage mentors to connect with mentees as and when needed.",
      action: "Promote Mentorship",
    },
    {
      title: "Improve mentee retention",
      description:
        "Regularly check in with mentees and gather feedback to improve their experience and keep them engaged.",
      action: "Survey Mentees",
    },
  ]

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
              activeTab === tab ? "bg-blue-950 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Top Analytics */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Analytics</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-700">{stat.title}</h3>
                <stat.icon className="text-3xl text-blue-950" />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">{stat.count}</p>
              <p className="text-sm text-green-600 font-medium">{stat.change}</p>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 text-sm font-medium text-blue-950 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors">
                  View all
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-md hover:bg-blue-700 transition-colors">
                  {stat.title === "Total Mentors" ? "Increase Mentors" : "Increase Mentees"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Important Actions */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Actions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {actions.map((action, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <AiOutlineExclamation className="text-2xl text-blue-950" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold text-gray-800">{action.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-md hover:bg-blue-700 transition-colors">
                {action.action}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Analytics

