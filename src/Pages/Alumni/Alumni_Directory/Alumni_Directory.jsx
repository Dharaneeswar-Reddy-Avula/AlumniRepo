import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import cramana from "../../../assets/Top20/Ramana.jpg";

import siva from "../../../assets/Top20/siva.jpg"
// import siva from "../../../assets/Top20/siva.jpg";
import Brahmi from "../../../assets/Top20/Brahmi.jpg";
import Narasimha from "../../../assets/Top20/Narasimha.jpg";
import Manoj from "../../../assets/Top20/Manoj.jpg";
import subbalakshmi from "../../../assets/Top20/subbalakshmi.jpg";
import bandisuresh from "../../../assets/Top20/sureshbandi.jpg";
import venkateshbabu from "../../../assets/Top20/venkateshbabu.jpg";
import RaghuRamReddy from "../../../assets/Top20/RaghuRamReddy.jpg";
import Satyanarayana from "../../../assets/Top20/Satyanarayana.jpg";
import Divya from "../../../assets/Top20/Divya.jpg";
// import saimadhu from "../../../../assets/Top20/saimadhu.jpg";
import saimadhu from "../../../assets/Top20/saimadhu.jpg"
import NarasimhaRao from "../../../assets/Top20/NarasimhaRao.jpg";
import SrikanthCh from "../../../assets/Top20/SrikanthCh.jpg";
import vijayKrishna from "../../../assets/Top20/vijayKrishna.jpg"
const AlumniCard = ({ name, branch, domain, year_of_graduation, image }) => (
  <div className='h-[100px] md:w-[250px] lg:w-[300px] border-[2px] rounded-md flex  justify-around items-center'>
       <img src={image} className='h-[80px] w-[80px] rounded-full'/>
       <div className="flex flex-col">
       <h2 ><span className="font-bold">{name}</span>{" "} 
        {branch}
       </h2>
        <h2>{domain}</h2>
        <h2>{year_of_graduation}</h2>
        </div>

    </div>
)

const FilterSection = ({ title, options, selected, onChange }) => (
  <div className="mb-4">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <div className="space-y-2 max-h-40 overflow-y-auto">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(option)}
            className="form-checkbox"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  </div>
)

const Alumni_Directory = () => {
  const [filters, setFilters] = useState({
    years: [],
    departments: [],
    domains: [],
  })
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }))
  }

  const filteredAlumni = useMemo(() => {
    return AlumniData.filter((alumni) => {
      const yearMatch = filters.years.length === 0 || filters.years.includes(alumni.year_of_graduation.toString())
      const departmentMatch = filters.departments.length === 0 || filters.departments.includes(alumni.department)
      const domainMatch = filters.domains.length === 0 || filters.domains.includes(alumni.domain)
      const searchMatch =
        searchTerm === "" ||
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.domain.toLowerCase().includes(searchTerm.toLowerCase())

      return yearMatch && departmentMatch && domainMatch && searchMatch
    })
  }, [filters, searchTerm])

  return (
    <div className="bg-gray-100 min-h-screen md:mt-[80px] mt-[50px] lg:mt-[130px] p-4 lg:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Alumni Directory</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search alumni..."
            className="w-full p-2 mb-4 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FilterSection
            title="Year of Graduation"
            options={year_of_graduation}
            selected={filters.years}
            onChange={(year) => handleFilterChange("years", year)}
          />
          <FilterSection
            title="Department"
            options={department}
            selected={filters.departments}
            onChange={(dept) => handleFilterChange("departments", dept)}
          />
          <FilterSection
            title="Domain"
            options={domains}
            selected={filters.domains}
            onChange={(domain) => handleFilterChange("domains", domain)}
          />
        </aside>
        <main className="w-full lg:w-3/4 md:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.length > 0 ? (
              filteredAlumni.map((alumni, index) => <AlumniCard key={index} {...alumni} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">No alumni match the selected filters.</p>
            )}
          </div>
                {/* <div className="w-full bg-gray-300 flex items-center px-[20px] opacity-20 h-[80px]">Will Update Soon</div> */}

        </main>
      </div>
    </div>
  )
}

const domains = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Data Science",
  "Software Development",
  "Cloud Computing",
  "Embedded Systems",
  "VLSI Design",
  "Signal Processing",
  "Telecommunication",
  "IoT (Internet of Things)",
  "Automobile Engineering",
  "Thermal Engineering",
  "Robotics",
  "Manufacturing Technology",
  "Design and Simulation",
  "Structural Engineering",
  "Environmental Engineering",
  "Construction Management",
  "Geotechnical Engineering",
  "Transportation Engineering",
  "Power Systems",
  "Renewable Energy",
  "Control Systems",
  "Electrical Machines",
  "Energy Systems",
  "Medical Imaging",
  "Biomaterials",
  "Clinical Engineering",
  "Rehabilitation Engineering",
  "Bioinformatics",
  "Process Engineering",
  "Petrochemical Engineering",
  "Biochemical Engineering",
  "Polymer Technology",
  "Catalysis",
  "Aerodynamics",
  "Spacecraft Design",
  "Avionics",
  "Propulsion Systems",
  "Flight Mechanics"
];

const department = ["CSE", "ECE", "EEE", "MECHANICAL", "CIVIL", "CHEMICAL", "METALLURGY"]

const year_of_graduation = [
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
]

// const Alumni_data = [
//   {
//     name: "Aarav Patel",
//     department: "CSE",
//     domain: "Software Development",
//     year_of_graduation: 2019,
//     profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     name: "Meera Sharma",
//     department: "ECE",
//     domain: "Embedded Systems",
//     year_of_graduation: 2018,
//     profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Ravi Kumar",
//     department: "Mechanical",
//     domain: "Robotics",
//     year_of_graduation: 2020,
//     profile_pic: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     name: "Priya Singh",
//     department: "Civil",
//     domain: "Structural Engineering",
//     year_of_graduation: 2017,
//     profile_pic: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     name: "Kiran Desai",
//     department: "CSE",
//     domain: "Cybersecurity",
//     year_of_graduation: 2021,
//     profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     name: "Anjali Verma",
//     department: "EEE",
//     domain: "Renewable Energy Systems",
//     year_of_graduation: 2020,
//     profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
//   {
//     name: "Rohit Agarwal",
//     department: "Chemical",
//     domain: "Process Engineering",
//     year_of_graduation: 2016,
//     profile_pic: "https://randomuser.me/api/portraits/men/7.jpg",
//   },
//   {
//     name: "Neha Gupta",
//     department: "MME",
//     domain: "Material Science",
//     year_of_graduation: 2022,
//     profile_pic: "https://randomuser.me/api/portraits/women/8.jpg",
//   },
//   {
//     name: "Vikram Rao",
//     department: "CSE",
//     domain: "Data Science",
//     year_of_graduation: 2014,
//     profile_pic: "https://randomuser.me/api/portraits/men/9.jpg",
//   },
//   {
//     name: "Sneha Kapoor",
//     department: "ECE",
//     domain: "Telecommunication",
//     year_of_graduation: 2019,
//     profile_pic: "https://randomuser.me/api/portraits/women/10.jpg",
//   },
//   {
//     name: "Arjun Nair",
//     department: "Mechanical",
//     domain: "Automotive Engineering",
//     year_of_graduation: 2023,
//     profile_pic: "https://randomuser.me/api/portraits/men/11.jpg",
//   },
//   {
//     name: "Divya Mishra",
//     department: "Civil",
//     domain: "Urban Planning",
//     year_of_graduation: 2015,
//     profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
//   },
//   {
//     name: "Siddharth Jain",
//     department: "EEE",
//     domain: "Power Systems",
//     year_of_graduation: 2018,
//     profile_pic: "https://randomuser.me/api/portraits/men/13.jpg",
//   },
//   {
//     name: "Pooja Mehta",
//     department: "Chemical",
//     domain: "Environmental Engineering",
//     year_of_graduation: 2024,
//     profile_pic: "https://randomuser.me/api/portraits/women/14.jpg",
//   },
//   {
//     name: "Rahul Bose",
//     department: "MME",
//     domain: "Mining and Metallurgy",
//     year_of_graduation: 2020,
//     profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
//   },
//   {
//     name: "Aarav Patel",
//     department: "CSE",
//     domain: "Software Development",
//     year_of_graduation: 2019,
//     profile_pic: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     name: "Meera Sharma",
//     department: "ECE",
//     domain: "Embedded Systems",
//     year_of_graduation: 2018,
//     profile_pic: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Ravi Kumar",
//     department: "Mechanical",
//     domain: "Robotics",
//     year_of_graduation: 2020,
//     profile_pic: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     name: "Priya Singh",
//     department: "Civil",
//     domain: "Structural Engineering",
//     year_of_graduation: 2017,
//     profile_pic: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     name: "Kiran Desai",
//     department: "CSE",
//     domain: "Cybersecurity",
//     year_of_graduation: 2021,
//     profile_pic: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     name: "Anjali Verma",
//     department: "EEE",
//     domain: "Renewable Energy Systems",
//     year_of_graduation: 2020,
//     profile_pic: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
//   {
//     name: "Rohit Agarwal",
//     department: "Chemical",
//     domain: "Process Engineering",
//     year_of_graduation: 2016,
//     profile_pic: "https://randomuser.me/api/portraits/men/7.jpg",
//   },
//   {
//     name: "Neha Gupta",
//     department: "MME",
//     domain: "Material Science",
//     year_of_graduation: 2022,
//     profile_pic: "https://randomuser.me/api/portraits/women/8.jpg",
//   },
//   {
//     name: "Vikram Rao",
//     department: "CSE",
//     domain: "Data Science",
//     year_of_graduation: 2014,
//     profile_pic: "https://randomuser.me/api/portraits/men/9.jpg",
//   },
//   {
//     name: "Sneha Kapoor",
//     department: "ECE",
//     domain: "Telecommunication",
//     year_of_graduation: 2019,
//     profile_pic: "https://randomuser.me/api/portraits/women/10.jpg",
//   },
//   {
//     name: "Arjun Nair",
//     department: "Mechanical",
//     domain: "Automotive Engineering",
//     year_of_graduation: 2023,
//     profile_pic: "https://randomuser.me/api/portraits/men/11.jpg",
//   },
//   {
//     name: "Divya Mishra",
//     department: "Civil",
//     domain: "Urban Planning",
//     year_of_graduation: 2015,
//     profile_pic: "https://randomuser.me/api/portraits/women/12.jpg",
//   },
//   {
//     name: "Siddharth Jain",
//     department: "EEE",
//     domain: "Power Systems",
//     year_of_graduation: 2018,
//     profile_pic: "https://randomuser.me/api/portraits/men/13.jpg",
//   },
//   {
//     name: "Pooja Mehta",
//     department: "Chemical",
//     domain: "Environmental Engineering",
//     year_of_graduation: 2024,
//     profile_pic: "https://randomuser.me/api/portraits/women/14.jpg",
//   },
//   {
//     name: "Rahul Bose",
//     department: "MME",
//     domain: "Mining and Metallurgy",
//     year_of_graduation: 2020,
//     profile_pic: "https://randomuser.me/api/portraits/men/15.jpg",
//   },
// ];
const AlumniData = [
  {
    "name": "Chintakayala Ramanna",
    "branch": "CHEMICAL",
    "current_position": "Assistant Director, Film Industry",
    "year_of_graduation": 2008,
    "image": cramana
  },
  {
    "name": "Siva V",
    "branch": "CIVIL",
    "current_position": "Deputy General Manager, Highways & Transport",
    "year_of_graduation": 2008,
    "image": siva
  },
  {
    "name": "Dr. Mukkanti Veera Bramha",
    "branch": "CIVIL",
    "current_position": "Head of Faculty, NIT AP",
    "year_of_graduation": 2008,
    "image": Brahmi
  },
  {
    "name": "Narasimha Rao Yenugula",
    "branch": "CIVIL",
    "current_position": "Senior Design Specialist, Cyient",
    "year_of_graduation": 2008,
    "image": Narasimha
  },
  {
    "name": "B. Manoj",
    "branch": "CSE",
    "current_position": "Senior Data Scientist, Ixigo",
    "year_of_graduation": 2008,
    "image": Manoj
  },
  {
    "name": "Sai Madhu Polamuri",
    "branch": "CSE",
    "current_position": "Lead Data Scientist, Wells Fargo",
    "year_of_graduation": 2008,
    "image": saimadhu
  },
  {
    "name": "Narasimha Rao Manuka",
    "branch": "CSE",
    "current_position": "Lead Engineer, KiddeFenwal",
    "year_of_graduation": 2008,
    "image": NarasimhaRao
  },
  {
    "name": "Ch. Srikanth",
    "branch": "CHEM",
    "current_position": "Deputy Manager, ITC",
    "year_of_graduation": 2008,
    "image": SrikanthCh
  },
  {
    "name": "M. Suresh Babu",
    "branch": "CHEM",
    "current_position": "Assistant Manager, Pidilite Industry",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Vijay Krishna Malluri",
    "branch": "CHEM",
    "current_position": "Assistant Manager, HPCL",
    "year_of_graduation": 2008,
    "image": vijayKrishna
  },
  {
    "name": "Aurifur Rehman Mohammed",
    "branch": "MECH",
    "current_position": "Azure Data Engineer",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "P. Subbalakshmi",
    "branch": "CHEM",
    "current_position": "Program Manager, Amazon",
    "year_of_graduation": 2008,
    "image": subbalakshmi
  },
  {
    "name": "Kokkirapati VV Satyanarayana",
    "branch": "CHEM",
    "current_position": "Post Doctoral Researcher (In South Korea)",
    "year_of_graduation": 2008,
    "image": Satyanarayana
  },
  {
    "name": "Raghu Ram Reddy Pilli",
    "branch": "ECE",
    "current_position": "ISRO, URSC Scientist",
    "year_of_graduation": 2008,
    "image": RaghuRamReddy
  },
  {
    "name": "Darala Suman",
    "branch": "MECH",
    "current_position": "Scientific Officer 'E', NPCL",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Annam Venkatesh Babu",
    "branch": "MECH",
    "current_position": "Reserve Bank of India (RBI) Assistant, Bangalore",
    "year_of_graduation": 2008,
    "image": venkateshbabu
  },
  {
    "name": "Sateesh Kumar Injaratu",
    "branch": "ECE",
    "current_position": "Qualcomm Senior Manager, Bangalore",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "B. Suresh",
    "branch": "MME",
    "current_position": "Assistant Professor (MNIT Jaipur)",
    "year_of_graduation": 2008,
    "image": bandisuresh
  },
  {
    "name": "Linga Murthy",
    "branch": "MECH",
    "current_position": "GKN Aerospace Engine Private Limited - Research Engineer",
    "year_of_graduation": 2008,
    "image": "image_url"
  },
  {
    "name": "Kasula Divya Teja",
    "branch": "ECE",
    "current_position": "Manager at Deloitte, Hyderabad",
    "year_of_graduation": 2008,
    "image": Divya
  }
];
export default Alumni_Directory

