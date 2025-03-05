import { useState } from "react"
import { Calendar, MapPin, Users } from "lucide-react"
import comingsoon from "../../../assets/upcoming.jpg"

const Upcoming = () => {
  const [showAll, setShowAll] = useState(false)
  const events = [
    {
      // title: "Class of 2018 Reunion",
      date: "MAR 22, 2025  && MAR 23 2025",
      location: "RGUKT NUZVID",
      // image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      image:comingsoon,
      // attendees: 120,
    },
    // {
    //   // title: "Engineering Alumni Mixer",
    //   // date: "Feb 15, 2025",
    //   // location: "TechHub Conference Center",
    //   // image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    //   // attendees: 85,
    //   image:comingsoon
    // },
    // {
    //   // title: "Business School Networking Event",
    //   // date: "Mar 5, 2025",
    //   // location: "Downtown Business Center",
    //   // image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    //   // attendees: 150,
    //   image:comingsoon
    // },
    // {
    //   // title: "Arts and Humanities Symposium",
    //   // date: "Apr 20, 2025",
    //   // location: "University Art Gallery",
    //   // image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    //   // attendees: 95,
    //   image:comingsoon
    // },
    // {
    //   // title: "Science Alumni Conference",
    //   // date: "May 10, 2025",
    //   // location: "Science Center Auditorium",
    //   // image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    //   // attendees: 200,
    //   image:comingsoon
    // },
    // {
    //   // title: "Global Alumni Summit",
    //   // date: "Jun 1, 2025",
    //   // location: "International Convention Center",
    //   // image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    //   // attendees: 500,
    //   image:comingsoon
    // },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Upcoming Alumni Events</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Join us for exciting reunions, networking opportunities, and celebrations of our alma mater's legacy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? events : events.slice(0, 3)).map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.attendees} Attendees</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-blue-50">
               <a href="https://forms.gle/JRjkpbGHY37zDBAg9" target="blank"><button className="w-full bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Register Now
                </button>
                </a> 
              </div>
            </div>
          ))}

        </div>
        <div className='w-full h-[50px] bg-gray-300 opacity-20 flex items-center px-[20px] justify-center'>Will Update Soon</div>


        {events.length > 3 && (
          <div className="text-center mt-12">
            <button
              className="bg-blue-950 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Events"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Upcoming

