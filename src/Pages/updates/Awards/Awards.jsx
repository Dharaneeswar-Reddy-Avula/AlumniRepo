import { Trophy, Calendar, MapPin, DollarSign, Users } from "lucide-react"
import rgukt from "../../../assets/rgukt.jpeg"
import Hackathon from "../../../assets/Hackathon.png"
import AIHackathon from "../../../assets/AIHackathon.png"

const AwardCard = ({ image, title, organizer, prize, date, venue, participants }) => (
  <div className="flex flex-col md:flex-row items-center w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="w-full md:w-2/5">
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-[200px] object-cover" />
    </div>
    <div className="flex flex-col gap-4 p-6 w-full md:w-3/5">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="flex items-center text-gray-600">
        <Trophy className="w-5 h-5 mr-2" />
        <span>{organizer}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <DollarSign className="w-5 h-5 mr-2" />
        <span>Cash prize: ₹{prize}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Calendar className="w-5 h-5 mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-5 h-5 mr-2" />
        <span>{venue}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-5 h-5 mr-2" />
        <span>{participants} participants</span>
      </div>
    </div>
  </div>
)

const Awards = () => {
  const awards = [
    {
      image: Hackathon,
      title: "Smart India Hackathon 2024 - Winners",
      organizer: "Government of India",
      prize: "1,00,000",
      date: "August 15-16, 2024",
      venue: "IIT Delhi",
      participants: 10000,
    },
    {
      image: AIHackathon,
      title: "Intel AI Hackathon 2024 - 2nd Runner Up",
      organizer: "IEEE and Intel AI",
      prize: "15,000",
      date: "September 22-23, 2024",
      venue: "Virtual Event",
      participants: 5000,
    },
    {
      image: "https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&q=80&w=1000",
      title: "National Robotics Challenge 2024 - 1st Place",
      organizer: "Ministry of Science and Technology",
      prize: "50,000",
      date: "October 5-7, 2024",
      venue: "BITS Pilani",
      participants: 3000,
    },
  ]

  return (
    <div className="flex flex-col bg-gray-100 lg:mt-[80px] pb-[60px] overflow-hidden">
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img src={rgukt || "/placeholder.svg"} alt="RGUKT Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RGUKT ACHIEVEMENTS</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center">
            Celebrating excellence and innovation in technology and research
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Recent Accolades</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">RGUKT by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">Students Participated</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">₹10M+</p>
              <p className="text-gray-600">Prize Money Earned</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">30+</p>
              <p className="text-gray-600">Partnering Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards

