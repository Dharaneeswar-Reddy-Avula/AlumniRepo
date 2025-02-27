import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Briefcase, MapPin, Clock, DollarSign, Filter } from "lucide-react"

const Logo = "https://via.placeholder.com/50" // Placeholder for logo

const JobCard = ({ job, applyToJob }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 h-auto w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
  >
    <div className="flex items-start gap-4">
      <div className="shrink-0">
        <img src={Logo || "/placeholder.svg"} alt={job.company} className="w-12 h-12 rounded-full shadow-md" />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
        <p className="text-sm text-gray-600 flex items-center">
          <MapPin size={14} className="mr-1" /> {job.location}
        </p>
      </div>
    </div>
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-blue-950">{job.position}</h4>
      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
        <span className="flex items-center">
          <Briefcase size={14} className="mr-1" /> {job.type}
        </span>
        <span className="flex items-center">
          <Clock size={14} className="mr-1" /> {job.duration}
        </span>
      </div>
      <p className="text-gray-700 text-sm">{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-950 text-xs font-medium px-2.5 py-0.5 rounded">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2">
        <span className="text-lg font-bold text-green-600 flex items-center">
          <DollarSign size={18} className="mr-1" /> {job.salary}/month
        </span>
        <button
          onClick={() => applyToJob(job.id)}
          className="bg-blue-950 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Apply
        </button>
      </div>
    </div>
  </motion.div>
)

const Oppurtunities = () => {
  const [opportunities, setOpportunities] = useState([])
  const [filteredOpportunities, setFilteredOpportunities] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")

  useEffect(() => {
    // Simulating API call to fetch opportunities
    const fetchOpportunities = async () => {
      // In a real application, you would fetch data from an API here
      const mockOpportunities = [
        {
          id: 1,
          company: "TechCorp",
          position: "Frontend Developer",
          location: "San Francisco, CA",
          type: "Full Time",
          duration: "Permanent",
          description: "We're seeking a talented Frontend Developer to join our innovative team...",
          skills: ["React", "TypeScript", "Tailwind CSS"],
          salary: "8,000",
        },
        {
          id: 2,
          company: "DataSystems",
          position: "Data Scientist",
          location: "New York, NY",
          type: "Contract",
          duration: "6 months",
          description: "Join our data science team to work on cutting-edge machine learning projects...",
          skills: ["Python", "TensorFlow", "SQL"],
          salary: "12,000",
        },
        {
          id: 3,
          company: "CloudNine",
          position: "DevOps Engineer",
          location: "Remote",
          type: "Full Time",
          duration: "Permanent",
          description: "Help us scale our cloud infrastructure and implement CI/CD pipelines...",
          skills: ["AWS", "Docker", "Kubernetes"],
          salary: "10,000",
        },
        {
          id: 4,
          company: "GreenEnergy",
          position: "Sustainability Analyst",
          location: "Boston, MA",
          type: "Part Time",
          duration: "1 year",
          description: "Contribute to our mission of promoting sustainable energy solutions...",
          skills: ["Data Analysis", "Environmental Science", "Report Writing"],
          salary: "6,000",
        },
        {
          id: 5,
          company: "HealthTech",
          position: "Mobile App Developer",
          location: "Chicago, IL",
          type: "Full Time",
          duration: "Permanent",
          description: "Develop innovative mobile health applications to improve patient care...",
          skills: ["React Native", "iOS", "Android"],
          salary: "9,000",
        },
        {
          id: 6,
          company: "FinTech Solutions",
          position: "Blockchain Developer",
          location: "Miami, FL",
          type: "Contract",
          duration: "1 year",
          description: "Join our blockchain team to develop decentralized finance solutions...",
          skills: ["Solidity", "Ethereum", "Smart Contracts"],
          salary: "11,000",
        },
      ]
      setOpportunities(mockOpportunities)
      setFilteredOpportunities(mockOpportunities)
    }

    fetchOpportunities()
  }, [])

  useEffect(() => {
    const results = opportunities.filter(
      (job) =>
        (job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.position.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterType === "All" || job.type === filterType),
    )
    setFilteredOpportunities(results)
  }, [searchTerm, filterType, opportunities])

  const applyToJob = (jobId) => {
    // In a real application, you would handle the job application process here
    alert(`Applied to job with ID: ${jobId}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900"
        >
          Seek New Opportunities
        </motion.h1>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-950 focus:border-blue-950"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <div className="relative">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
              <option value="All">All Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter className="h-5 w-5" />
            </div>  
          </div>
        </div>
        <span className="text-center text-2xl">"No opportunities available yet."</span>
        {/* <motion.div layout className="flex flex-wrap gap-6 justify-center">
          <AnimatePresence>
            {filteredOpportunities.map((job) => (
              <JobCard key={job.id} job={job} applyToJob={applyToJob} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredOpportunities.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-600 mt-8">
            No opportunities found. Try adjusting your search or filters.
          </motion.p>
        )} */}
      </div>
    </div>
  )
}

export default Oppurtunities

