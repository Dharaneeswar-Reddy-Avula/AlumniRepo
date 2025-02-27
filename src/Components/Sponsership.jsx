import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaAngleRight, FaSearch } from "react-icons/fa"

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
          title: "I2 Hostel",
          category: "College Infrastructure",
          fundRaised: 100000,
          sponsors: 10,
          startDate: "2024-08-10",
          image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 2,
          title: "Annual Tech Fest",
          category: "Events",
          fundRaised: 50000,
          sponsors: 5,
          startDate: "2024-09-15",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 3,
          title: "Scholarship Fund",
          category: "Students",
          fundRaised: 200000,
          sponsors: 20,
          startDate: "2024-07-01",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 4,
          title: "New Library Wing",
          category: "College Infrastructure",
          fundRaised: 300000,
          sponsors: 15,
          startDate: "2024-10-01",
          image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 5,
          title: "Sports Complex",
          category: "College Infrastructure",
          fundRaised: 500000,
          sponsors: 25,
          startDate: "2024-11-20",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 6,
          title: "Research Grant",
          category: "Students",
          fundRaised: 150000,
          sponsors: 8,
          startDate: "2024-09-01",
          image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&h=250&q=80",
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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div> */}

          <div className="w-full flex justify-center items-center bg-gray-300 opacity-20 h-[50px]">Will Update Soon</div>
        </div>
      </div>
    </div>
  )
}

export default Sponsorship

