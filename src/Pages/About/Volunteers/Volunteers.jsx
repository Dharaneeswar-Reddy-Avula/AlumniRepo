
import React from 'react';
import { LinkedinIcon } from 'lucide-react';

function Volunteers() {
  const team = [
    {
      "Name": "R Sai Chaitanya",
      "Year": "E-2",
      "Branch": "MECHANICAL",
      "Mobile Number": "8333092510",
      "LinkedIn": "https://www.linkedin.com/in/ruppa-sai-chaitanya-a43697325"
    },
    {
      "Name": "Ananthalakshmi Kothapalli",
      "Year": "E-2",
      "Branch": "ECE",
      "Mobile Number": "8328444295",
      "LinkedIn": "https://www.linkedin.com/in/ananthalakshmi-kothapalli-67ab7a288"
    },
    {
      "Name": "PRADEEP SAVARA",
      "Year": "E-3",
      "Branch": "CSE",
      "Mobile Number": "8008368930",
      "LinkedIn": "https://www.linkedin.com/in/savara-pradeep-8220832b0"
    },
    {
      "Name": "Ponnaganti Teja",
      "Year": "E-2",
      "Branch": "ECE",
      "Mobile Number": "8341537729",
      "LinkedIn": "https://www.linkedin.com/in/ponnaganti-teja-153013289"
    },
    {
      "Name": "K. Pranay",
      "Year": "E-2",
      "Branch": "ECE",
      "Mobile Number": "6301470772",
      "LinkedIn": "https://www.linkedin.com/in/k-pranay-69ab81288"
    },
    {
      "Name": "Sudharshan Paul",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "6303483585",
      "LinkedIn": "https://www.linkedin.com/in/sudharshan-paul-ganta-37895531b"
    },
    {
      "Name": "Madhulatha Seerapu",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "7989845870",
      "LinkedIn": "https://www.linkedin.com/in/madhulatha-seerapu-8a269b325"
    },
    {
      "Name": "Amara Venkata Naga Saiteja",
      "Year": "E-3",
      "Branch": "EEE",
      "Mobile Number": "9573150169",
      "LinkedIn": "https://www.linkedin.com/in/a-v-n-sai-teja-89977a253"
    },
    {
      "Name": "SARITHA G",
      "Year": "E-2",
      "Branch": "EEE",
      "Mobile Number": "6304758966",
      "LinkedIn": "https://www.linkedin.com/in/saritha-gorakala-710038275"
    },
    {
      "Name": "RAJANA VIJAY SAMUEL",
      "Year": "E-2",
      "Branch": "METALLURGY",
      "Mobile Number": "7793909673",
      "LinkedIn": "https://www.linkedin.com/in/vijay-samuel-756527291"
    },
    {
      "Name": "K. Ravi Naik",
      "Year": "E-3",
      "Branch": "METALLURGY",
      "Mobile Number": "9959430294",
      "LinkedIn": "https://www.linkedin.com/in/karamthot-ravi-naik-3a90bb2a1"
    },
    {
      "Name": "A. Sankar Chaitanya",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "8185020485",
      "LinkedIn": "https://www.linkedin.com/in/sankar-chaitanya-amasa-3aa698325"
    },
    {
      "Name": "Lakshmana Teja",
      "Year": "E-3",
      "Branch": "ECE",
      "Mobile Number": "9346761645",
      "LinkedIn": "https://www.linkedin.com/in/lakshman-mogili-561711253"
    },
    {
      "Name": "Sai Manikanta Eswar Machara",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "9392005772",
      "LinkedIn": "https://www.linkedin.com/in/sai-manikanta-eswar-machara"
    },
    {
      "Name": "D.V. Bharat Venu",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "9550389821",
      "LinkedIn": "https://www.linkedin.com/in/bharat-venu-doddi-545b6b30b"
    },
    {
      "Name": "Prodduturu Janaki Ram",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "9381606509",
      "LinkedIn": "https://www.linkedin.com/in/prodduturu-janaki-ram-2438a3287"
    },
    {
      "Name": "Y. Gayathri Devi",
      "Year": "E-3",
      "Branch": "METALLURGY",
      "Mobile Number": "7093882984",
      "LinkedIn": "https://www.linkedin.com/in/gayathri-devi-a2b544325"
    },
    {
      "Name": "R Naga Ruchitha",
      "Year": "E-3",
      "Branch": "CHEMICAL",
      "Mobile Number": "6281975194",
      "LinkedIn": "https://www.linkedin.com/in/ruchitha-ravuri"
    },
    {
      "Name": "Neerukonda Thanusha",
      "Year": "E-2",
      "Branch": "CIVIL",
      "Mobile Number": "7995053382",
      "LinkedIn": "https://www.linkedin.com/in/thanusha-neerukonda-93baa4291"
    },
    {
      "Name": "Ramya Varshini Avvaru",
      "Year": "E-2",
      "Branch": "MECHANICAL",
      "Mobile Number": "8919761779",
      "LinkedIn": "none"
    },
    {
      "Name": "S SOUMYA",
      "Year": "E-3",
      "Branch": "CSE",
      "Mobile Number": "8374408111",
      "LinkedIn": "https://www.linkedin.com/in/s-soumya-12141b253"
    },
    {
      "Name": "Yukthesh Chowdary",
      "Year": "E-2",
      "Branch": "CIVIL",
      "Mobile Number": "9390801050",
      "LinkedIn": "https://www.linkedin.com/in/yukthesh-chowdary-38a244345"
    },
    {
      "Name": "T. Vineela",
      "Year": "E-2",
      "Branch": "ECE",
      "Mobile Number": "7416634762",
      "LinkedIn": "https://www.linkedin.com/in/tiyyagura-vineela-484716288"
    },
    {
      "Name": "Nandakishore Kalavathula",
      "Year": "E-2",
      "Branch": "CSE",
      "Mobile Number": "6304678590",
      "LinkedIn": "https://www.linkedin.com/in/nandakishore-kalavathula-314307278"
    },
    {
      "Name": "S. Varun Sandesh",
      "Year": "E-3",
      "Branch": "MECHANICAL",
      "Mobile Number": "8332071680",
      "LinkedIn": "https://www.linkedin.com/in/varun-sandesh-surada-876562246"
    },
    {
      "Name": "Sravanthi Gottipilli",
      "Year": "E-3",
      "Branch": "MECHANICAL",
      "Mobile Number": "7093734859",
      "LinkedIn": "https://www.linkedin.com/in/sravanthi-gottipilli-a84678325"
    },
    {
      "Name": "Surisetty Rakesh Meher Sai",
      "Year": "E-2",
      "Branch": "EEE",
      "Mobile Number": "7893566279",
      "LinkedIn": "https://www.linkedin.com/in/rakesh-meher-sai-surisetty-4242b2294"
    }
  ];

  // Group students by branch
  const groupedByBranch = team.reduce((acc, student) => {
    if (!acc[student.Branch]) {
      acc[student.Branch] = [];
    }
    acc[student.Branch].push(student);
    return acc;
  }, {});

  // Sort branches in desired order
  const branchOrder = ['CSE', 'ECE', 'EEE', 'MECHANICAL', 'CIVIL', 'METALLURGY', 'CHEMICAL'];
  const sortedBranches = Object.keys(groupedByBranch).sort((a, b) => {
    return branchOrder.indexOf(a) - branchOrder.indexOf(b);
  });

  return (
    <div className="flex flex-col md:mt-[140px] mt-[80px] items-center w-full min-h-screen p-6 bg-gray-100">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Meet Our Department Coordinators
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          A team dedicated to making a difference!
        </p>
      </div>

      {/* Branch-wise Tables */}
      <div className="w-full max-w-6xl space-y-8">
        {sortedBranches.map((branch) => (
          <div key={branch} className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-blue-800">{branch} Domain</h2>
            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden border border-collapse border-gray-300 rounded-lg">
                <thead className="text-white bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-center">Name</th>
                    <th className="px-6 py-3 text-center">Year</th>
                    <th className="px-6 py-3 text-center">LinkedIn</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedByBranch[branch].map((member, index) => (
                    <tr
                      key={index}
                      className="text-gray-700 transition duration-200 border-b bg-gray-50 hover:bg-gray-200"
                    >
                      <td className="px-6 py-3 text-center">{member.Name}</td>
                      <td className="px-6 py-3 text-center">{member.Year}</td>
                      <td className="flex justify-center px-6 py-3 text-center">
                        <a
                          href={member.LinkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 transition-colors hover:text-blue-800"
                        >
                          <LinkedinIcon className="w-6 h-6" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Impact Section */}
      <div className="w-full max-w-6xl p-6 mt-12 text-center rounded-lg shadow-lg bg-blue-50">
        <h2 className="text-2xl font-semibold text-blue-900">
          The Importance of Our Department Coordinators
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          Our Department Coordinators dedicate their time and effort to support
          events, assist peers, and drive positive change within our community.
          Their commitment is instrumental in shaping a brighter future for all.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 text-sm text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Meet Our Department Coordinators | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Volunteers;