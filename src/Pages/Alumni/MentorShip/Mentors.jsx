import { useState } from "react"
import { motion } from "framer-motion"
import { LuDownload } from "react-icons/lu"
import { IoSearchOutline } from "react-icons/io5"
import { CiFilter } from "react-icons/ci"
import { FaUserPlus } from "react-icons/fa"

const Mentors = () => {
  const [activeTab, setActiveTab] = useState("My Preferences")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const tabs = ["My Preferences", "Mentorship Homepage"]

  const mentors = [
    {
      photo: "https://i.pravatar.cc/150?img=1",
      name: "Muthuraja Balasubramani",
      position: "Admin",
      seeking: ["Need help with my resume review", "Need help with HR interview"],
    },
    {
      photo: "https://i.pravatar.cc/150?img=2",
      name: "Priya Sharma",
      position: "Senior Developer",
      seeking: ["Guidance on career transition", "Advice on leadership roles"],
    },
    {
      photo: "https://i.pravatar.cc/150?img=3",
      name: "Alex Johnson",
      position: "Project Manager",
      seeking: ["Mentorship in Agile methodologies", "Networking opportunities"],
    },
    {
      photo: "https://i.pravatar.cc/150?img=4",
      name: "Sophia Chen",
      position: "Data Scientist",
      seeking: ["Machine learning project collaboration", "Industry insights"],
    },
    {
      photo: "https://i.pravatar.cc/150?img=5",
      name: "Rahul Kapoor",
      position: "UX Designer",
      seeking: ["Portfolio review", "User research techniques"],
    },
    {
      photo: "https://i.pravatar.cc/150?img=6",
      name: "Emma Wilson",
      position: "Marketing Specialist",
      seeking: ["Digital marketing strategies", "Personal branding tips"],
    },
  ]

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
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

        {/* Header and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Mentors List</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              <FaUserPlus className="mr-2" />
              Add Mentor
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition-colors">
              <LuDownload className="mr-2" />
              Download
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search mentors..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            className="flex items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <CiFilter className="mr-2" />
            Filters
          </button>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-6 flex flex-col items-center">
                <img
                  src={mentor.photo || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{mentor.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{mentor.position}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Seeking help with:</h4>
                  <ul className="text-sm text-gray-600">
                    {mentor.seeking.map((item, i) => (
                      <li key={i} className="mb-1">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mentors

