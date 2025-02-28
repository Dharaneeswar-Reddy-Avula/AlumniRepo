import React from "react";

const StudentVolunteers = () => {
  const team = [
    {
      id: 1,
      Name: "Star",
      Id: "N210615",
      Year: "E-2",
      Branch: "CSE",
      Linked: "Nakshatra",
    },
    {
      id: 2,
      Name: "Bindu",
      Id: "N210323",
      Year: "E-2",
      Branch: "CSE",
      Linked: "BinduSree",
    },
    {
      id: 3,
      Name: "Sireesha",
      Id: "N210413",
      Year: "E-2",
      Branch: "CSE",
      Linked: "Sireesha",
    },
    {
      id: 4,
      Name: "Star",
      Id: "N210615",
      Year: "E-2",
      Branch: "CSE",
      Linked: "Nakshatra",
    },
    {
      id: 5,
      Name: "Bindu",
      Id: "N210323",
      Year: "E-2",
      Branch: "CSE",
      Linked: "BinduSree",
    },
  ];

  return (
    <div className="flex flex-col md:mt-[140px] mt-[80px  ] items-center w-full min-h-screen p-6 bg-gray-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Meet Our Department Coordinators
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          A team dedicated to making a difference!
        </p>
      </div>

      {/* Volunteer Table */}
      <div className="overflow-x-auto w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Id</th>
              <th className="py-3 px-6 text-center">Year</th>
              <th className="py-3 px-6 text-center">Branch</th>
              <th className="py-3 px-6 text-center">LinkedIn Profile</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr
                key={member.id}
                className="text-gray-700 bg-gray-50 border-b hover:bg-gray-200 transition duration-200"
              >
                <td className="py-3 px-6 text-center">{member.Name}</td>
                <td className="py-3 px-6 text-center">{member.Id}</td>
                <td className="py-3 px-6 text-center">{member.Year}</td>
                <td className="py-3 px-6 text-center">{member.Branch}</td>
                <td className="py-3 px-6 text-center">
                  <a
                    href={`https://www.linkedin.com/in/${member.Linked}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {member.Linked}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Volunteer Impact Section */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg w-full max-w-6xl text-center shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-900">
          Why Department Coordinators Matter
        </h2>
        <p className="text-lg text-gray-700 mt-3">
          {" "}
          Department Coordinators contribute their time and effort to support
          events, help peers, and drive positive change in the community. Their
          dedication shapes a better future for everyone.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Department Coordinators | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default StudentVolunteers;
