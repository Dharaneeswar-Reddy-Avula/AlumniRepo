import React, { useState } from "react";
import { Search } from "lucide-react";
// import { sponsorships } from "./data/sponsorships";
import {sponsorships} from '../Sponserships/data/Sponsorships'
import { SponsorshipCard } from "./SponsorshipCard";
import { SponsorshipDetails } from "./SponsorshipDetails";
import { RegistrationModal } from "./RegistrationModal";
import { SuccessModal } from "./SuccessModal";

const Sponserships = () => {
  const [selectedSponsorship, setSelectedSponsorship] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(sponsorships.map((s) => s.category))];

  const filteredSponsorships = sponsorships.filter((sponsorship) => {
    const matchesSearch =
      sponsorship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sponsorship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || sponsorship.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRegistrationSubmit = (data) => {
    setShowRegistration(false);
    setRegistrationSuccess(data);
    setSelectedSponsorship(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 mt-[80px] md:mt-[100px]">
     
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4 mt-[20px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search sponsorships..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSponsorships.map((sponsorship) => (
            <SponsorshipCard
              key={sponsorship.id}
              sponsorship={sponsorship}
              onClick={setSelectedSponsorship}
            />
          ))}
        </div>

        {selectedSponsorship && (
          <SponsorshipDetails
            sponsorship={selectedSponsorship}
            onClose={() => setSelectedSponsorship(null)}
            onRegister={() => setShowRegistration(true)}
          />
        )}

        {showRegistration && (
          <RegistrationModal
            sponsorship={selectedSponsorship}
            onClose={() => setShowRegistration(false)}
            onSubmit={handleRegistrationSubmit}
          />
        )}

        {registrationSuccess && (
          <SuccessModal
            registrationData={registrationSuccess}
            onClose={() => setRegistrationSuccess(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Sponserships;
