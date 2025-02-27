import { useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { CiFilter } from "react-icons/ci"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserTie } from "react-icons/fa"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Workshops = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const liveWorkshops = [
    {
      id: 1,
      title: "AI/ML in Practice",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=600&q=80",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=600&q=80",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80",
    },
  ]

  const upcomingWorkshops = [
    {
      id: 1,
      title: "Blockchain Technology",
      mentor: "Dr. Sarah Johnson",
      branch: "Computer Science",
      date: "2023-08-15",
      time: "14:00",
      location: "Virtual",
    },
    {
      id: 2,
      title: "IoT and Smart Systems",
      mentor: "Prof. Michael Chen",
      branch: "Electrical Engineering",
      date: "2023-08-20",
      time: "10:00",
      location: "Lab 101",
    },
    {
      id: 3,
      title: "Cybersecurity Essentials",
      mentor: "Eng. Lisa Patel",
      branch: "Information Technology",
      date: "2023-08-25",
      time: "13:00",
      location: "Virtual",
    },
  ]

  const completedWorkshops = [
    {
      id: 1,
      title: "Cloud Computing",
      mentor: "Dr. James Wilson",
      branch: "Computer Science",
      date: "2023-07-10",
      participants: 150,
    },
    {
      id: 2,
      title: "Robotics and Automation",
      mentor: "Prof. Emily Brown",
      branch: "Mechanical Engineering",
      date: "2023-07-15",
      participants: 120,
    },
    {
      id: 3,
      title: "Big Data Analytics",
      mentor: "Dr. Robert Lee",
      branch: "Data Science",
      date: "2023-07-20",
      participants: 180,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 md:mt-[140px] mt-[80px]  pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Alumni Workshops</h1>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search workshops..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            className="flex items-center px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <CiFilter className="mr-2" />
            Filters
          </button>
        </div>

        {/* Live Workshops */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Live Workshops</h2>
          <Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-xl overflow-hidden"
          >
            {liveWorkshops.map((workshop) => (
              <SwiperSlide key={workshop.id}>
                <div className="relative h-72 sm:h-96">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="text-white text-2xl sm:text-4xl font-bold text-center px-4">{workshop.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Upcoming Workshops */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {upcomingWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.branch}</p>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaUserTie className="mr-2" />
                    <span>{workshop.mentor}</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaClock className="mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))} */}
          </div>
          <div className="w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px]">Will Update Soon...</div>

        </section>

        {/* Completed Workshops */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Completed Workshops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {completedWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.branch}</p>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaUserTie className="mr-2" />
                    <span>{workshop.mentor}</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaUserTie className="mr-2" />
                    <span>{workshop.participants} Participants</span>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                    View Resources
                  </button>
                </div>
              </div>
            ))} */}
          </div>
          <div className="w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px] ">Will Update Soon...</div>

        </section>
      </div>
    </div>
  )
}

export default Workshops

