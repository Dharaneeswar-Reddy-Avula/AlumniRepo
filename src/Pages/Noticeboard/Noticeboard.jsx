import React, { useState } from 'react';
import { Flag, ChevronRight, Plus } from 'lucide-react';
import { CampaignCard } from '../Noticeboard/Components/CampaignCard';
import  NetworkCard from '../Noticeboard/Components/NetworkCard';
import { SocialShare } from '../Noticeboard/Components/SocialShare';
import { JobCard } from '../Noticeboard/Components/JobCard';
import { PollCard } from '../Noticeboard/Components/PollCard';
import { FundraiserCard } from '../Noticeboard/Components/FundraiserCard';
import { EventCard } from './Components/Eventcard';
function Noticeboard() {
  const [addPoll,setAddPoll]=useState(false);
  const Handleaddpoll = () =>{
    if(addPoll){
      setAddPoll(false)
    }
    else{
      setAddPoll(true)
    }
  }
  const campaigns = [
    {
      title: "Entrepreneurs' Journey",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300&h=300",
      endsOn: "19 Sep, 2025"
    },
    {
      title: "Alumni of the Month",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=300&h=300",
      endsOn: "18 Sep, 2025"
    },
    {
      title: "Your Network, Their Future",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=300&h=300",
      endsOn: "17 Sep, 2025"
    }
  ];

  const networks = [
    { title: "Professors, Lecturers", members: 72 },
    { title: "Engineers", members: 33 },
    { title: "Software and IT", members: 115 },
    { title: "Entrepreneurs and Business", members: 79 }
  ];
  const events = [
    {
      title: "Uttarayan SkyFest 2025",
      date: "Jan 31, 2025 - 4:25 PM",
      location: "Dimas (Estación Dimas)",
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800",
      isPastEvent: false,
    },
    {
      title: "Tech Summit 2025",
      date: "Feb 10, 2025 - 10:00 AM",
      location: "Hyderabad Convention Center",
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800",
      isPastEvent: false,
    },
    {
      title: "AI Expo 2025",
      date: "March 15, 2025 - 9:30 AM",
      location: "Bangalore Tech Park",
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800",
      isPastEvent: false,
    },
  ];
  const polls = [
    {
      author: "Muthuraja Balasubramani",
      date: "Jan 21, 2025",
      question: "How many will attend?",
      options: ["Just me", "Me +1", "Me ++"],
      totalVotes: 0,
    },
    {
      author: "Anjali Kumar",
      date: "Feb 5, 2025",
      question: "Which workshop do you prefer?",
      options: ["AI", "Blockchain", "Cybersecurity"],
      totalVotes: 50,
    },
    {
      author: "Rahul Sharma",
      date: "Feb 12, 2025",
      question: "Best programming language?",
      options: ["Python", "JavaScript", "Java"],
      totalVotes: 100,
    },
  ];
  const jobs = [
    {
      title: "Sales Officer",
      company: "ABV Ltd.",
      location: "Ahmedabad",
      deadline: "Dec 13, 2024",
      salary: "₹20,000",
      applications: "0",
    },
    {
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "Bangalore",
      deadline: "Jan 10, 2025",
      salary: "₹80,000",
      applications: "10",
    },
    {
      title: "Marketing Executive",
      company: "BrandWorks",
      location: "Mumbai",
      deadline: "Feb 20, 2025",
      salary: "₹45,000",
      applications: "5",
    },
  ];
  const fundraisers = [
    {
      title: "Support Student Scholarships",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
      amountRaised: 151000,
      goal: 1000000,
      contributors: 5,
      isCompleted: false,
    },
    {
      title: "Help Flood Victims",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
      amountRaised: 250000,
      goal: 500000,
      contributors: 50,
      isCompleted: false,
    },
    {
      title: "Education for Underprivileged Kids",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
      amountRaised: 800000,
      goal: 1000000,
      contributors: 20,
      isCompleted: false,
    },
  ];  
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="bg-gray-50 overflow-y-auto h-screen scrollbar-hide no-scrollbar mt-[100px] xl:px-[80px] ">
        <div className="w-full mx-auto p-6">
          <div className="flex justify-end items-center mb-6">
            <div className='relative'>
            <button className="bg-[#172554] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#172554]" onClick={Handleaddpoll}>
              <Plus className="w-5 h-5 mr-2" />
              START A DISCUSSION / POLL
            </button>
            <div className={`bg-white shadow rounded-lg p-4 flex-col ${addPoll?"flex":"hidden"} absolute z-50 w-[265px] mt-[10px]`}>
              <h2 className="text-lg font-semibold mb-4">Add New Poll</h2>
              <form className="space-y-4 ">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Poll Title</label>
                  <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Options</label>
                  <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                </div>
                <button type="submit" className="bg-[#172554] text-white px-4 py-2 rounded-md hover:bg-[#172554]">
                  Add Poll
                </button>
              </form>
            </div>
            </div>
          </div>
          <div className="flex  lg:gap-[80px] flex-col lg:flex-row">
            <div className="lg:w-1/3 mx-auto p-6">
        <div className="mb-8 text-center">
          <img 
            src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?auto=format&fit=crop&q=80&w=150&h=150"
            alt="University Logo"
            className="mx-auto w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Invite your connections to join Demo Organisation community
          </h2>
        </div>
        <SocialShare />     
      </div>
      <div className="space-y-6 lg:w-2/3">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Ongoing Demo Organisation Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {campaigns.map((campaign, index) => (
              <CampaignCard key={index} {...campaign} />
            ))}
          </div>
        </section>
         <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Professional Networks</h2>
            <button className="text-[#172554] hover:text-[#172554] flex items-center whitespace-nowrap">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className='flex flex-col items-center'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {networks.map((network, index) => (
              <NetworkCard key={index} {...network} />
            ))}
          </div>
          </div>
        </section>
        
        {events.map((event, index) => <EventCard key={index} {...event} />)}
              {jobs.map((job, index) => <JobCard key={index} {...job} />)}
              {polls.map((poll, index) => <PollCard key={index} {...poll} />)}
              {fundraisers.map((fundraiser, index) => <FundraiserCard key={index} {...fundraiser} />)}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Noticeboard;
