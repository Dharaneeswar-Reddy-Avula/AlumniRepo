import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import comingsoon from "../assets/coming soon.jpg"
const SeekersSays = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3

  const alumni = [
    {
      img: comingsoon,
      // name: "John Doe",
      // graduationYear: "2015",
      // testimonial:
      //   "My time at the university was transformative. The connections I made and the knowledge I gained have been invaluable in my career.",
      // contribution: "$10,000",
      // company: "Tech Innovations Inc.",
    },
    {
      img: comingsoon,
      // name: "Jane Smith",
      // graduationYear: "2008",
      // testimonial:
      //   "The alumni network has been a fantastic resource. I've found mentors and even business partners through our shared connection to the university.",
      // contribution: "$5,000",
      // company: "Global Finance Group",
    },
    {
      img: comingsoon,
      // name: "Mike Johnson",
      // graduationYear: "2019",
      // testimonial:
      //   "Giving back to my alma mater feels great. I'm proud to support the next generation of students and see the university continue to grow.",
      // contribution: "$2,500",
      // company: "Green Energy Solutions",
    },
    {
      img:comingsoon,
      // name: "Sarah Lee",
      // graduationYear: "2012",
      // testimonial:
      //   "The skills I learned during my time at the university have been the foundation of my success. I'm grateful for the education I received.",
      // contribution: "$7,500",
      // company: "Healthcare Innovations",
    },
    {
      img: comingsoon,
      // name: "David Chen",
      // graduationYear: "2005",
      // testimonial:
      //   "As an international student, the university provided me with incredible opportunities. Now, I'm happy to give back and support similar students.",
      // contribution: "$15,000",
      // company: "Global Trade Partners",
    },
    {
      img: comingsoon,
      // name: "Emily Taylor",
      // graduationYear: "2017",
      // testimonial:
      //   "The research opportunities I had as an undergraduate set me on my current career path. I'm proud to be an alumna of this great institution.",
      // contribution: "$3,000",
      // company: "BioTech Research Labs",
    },
  ]

  const pageCount = Math.ceil(alumni.length / testimonialsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pageCount - 1 ? prev + 1 : prev))
  }

  const displayedAlumni = alumni.slice(currentPage * testimonialsPerPage, (currentPage + 1) * testimonialsPerPage)

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
          Alumni Voices: Our Shared Legacy
        </h2>
        <span className="text-center text-2xl">Coming Soon..</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedAlumni.map((alum, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={alum.img || "/placeholder.svg"} alt={alum.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Name</h3>
                    {/* <p className="text-sm text-gray-600">Class of {alum.graduationYear}</p> */}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{alum.testimonial}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Contribution:</span> {alum.contribution}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Company:</span> {alum.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded-l-md disabled:bg-gray-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pageCount - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md disabled:bg-gray-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SeekersSays

