import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaAngleRight, FaSearch } from "react-icons/fa"
import comingsoon from "../assets/coming soon.jpg"
const Sponsorship = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")
  const [sponsorships, setSponsorships] = useState([])

  const tabs = ["All", "College Infrastructure", "Events", "Students"]

  useEffect(() => {
    // Simulating API call to fetch sponsorships
    const fetchSponsorships = async () => {
      // In a real application, you would fetch this data from an API
      const mockData = [
        {
          id: 1,
          title: "",
          category: "",
          fundRaised: "",
          sponsors: "",
          startDate: "",
          image: comingsoon,
        },
        {
          id: 2,
          title: "",
          category: "",
          fundRaised: "",
          sponsors: "",
          startDate: "",
          image: comingsoon,
        },
        {
          id: 3,
          title: "",
          category: "",
          fundRaised: "",
          sponsors: "",
          startDate: "",
          image: comingsoon,
        },

      ]
      setSponsorships(mockData)
    }

    fetchSponsorships()
  }, [])

  const filteredSponsorships = sponsorships
    .filter(
      (sponsorship) =>
        (activeTab === "All" || sponsorship.category === activeTab) &&
        sponsorship.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return new Date(b.startDate) - new Date(a.startDate)
      } else if (sortBy === "fundRaised") {
        return b.fundRaised - a.fundRaised
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gradient-to-b md:mt-[140px] mt-[80px] from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Sponsorships</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our alumni have graciously contributed to building the future of the university. Explore our ongoing
            sponsorship initiatives.
          </p>
        </div>

        <div className="w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px] justify-center">
          Hoping Sponserships - Eternox 2k25
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex space-x-2 mb-4 sm:mb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sponsorships..."
                  className="pl-10 pr-4 py-2 border rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <select
                className="border rounded-full px-4 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Most Recent</option>
                <option value="fundRaised">Highest Funds</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSponsorships.map((sponsorship) => (
              <div
                key={sponsorship.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <img
                  src={sponsorship.image || "/placeholder.svg"}
                  alt={sponsorship.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{sponsorship.title}</h3>
                  <p className="text-sm text-blue-600 mb-4">{sponsorship.category}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                    <span>Funds Raised: ₹{sponsorship.fundRaised.toLocaleString()}</span>
                    <span>Sponsors: {sponsorship.sponsors}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Started: {new Date(sponsorship.startDate).toLocaleDateString()}
                    </span>
                    <button
                      className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                      onClick={() => navigate(`/sponsorship/${sponsorship.id}`)}
                    >
                      View Details <FaAngleRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sponsorship

