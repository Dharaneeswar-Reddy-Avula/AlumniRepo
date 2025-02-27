import React from "react";

const Faculty_Contact = () => {
  const faculty = [
    {
      Sno: 1,
      Name: "K Sivalal",
      Position: "Faculty Incharge Alumni Cell-RGUKT Nuzvid",
      Designation: "Assistant Professor-ECE",
      Mail: "shiv.rathod@rguktn.ac.in",
      Mobile: "7207007777",
    },
    {
      Sno: 2,
      Name: "K venkateswara Rao",
      Position: "Faculty Incharge –Alumni Affairs-ECE",
      Designation: "Assistant Professor-ECE",
      Mail: "kankata.venkat@rguktn.ac.in",
      Mobile: "9493245680",
    },
    {
      Sno: 3,
      Name: "Y Priyanka",
      Position: "Faculty Incharge – Alumni Affairs-ECE",
      Designation: "Assistant Professor-ECE",
      Mail: "yennipriyankay@rguktn.ac.in",
      Mobile: "7780303089",
    },
    {
      Sno: 4,
      Name: "K sravan Kumar",
      Position: "Faculty Incharge –Alumni Affairs-CSE",
      Designation: "Assistant Professor-CSE",
      Mail: "sravan.kalapala@rguktn.ac.in",
      Mobile: "9440824125",
    },
    {
      Sno: 5,
      Name: "Ch Srinivasu",
      Position: "Faculty Incharge – Alumni Affairs-CSE",
      Designation: "Assistant Professor-CSE",
      Mail: null,
      Mobile: "9959552795",
    },
    {
      Sno: 6,
      Name: "Sk Shemeera",
      Position: "Faculty Incharge –Alumni Affairs-CE",
      Designation: "Assistant Professor-CE",
      Mail: "shemeera@rguktn.ac.in",
      Mobile: "8466856737",
    },
    {
      Sno: 7,
      Name: "G Mohan Rao",
      Position: "Faculty Incharge – Alumni Affairs-ME",
      Designation: "Assistant Professor-ME",
      Mail: "mohanmech322@rguktn.ac.in",
      Mobile: "9491696769",
    },
    {
      Sno: 8,
      Name: "T Sivakumar",
      Position: "Faculty Incharge – Alumni Affairs- MME",
      Designation: "Assistant Professor-MME",
      Mail: "sivakumar.tummeda@rguktn.ac.in",
      Mobile: "9000553680",
    },
    {
      Sno: 9,
      Name: "B Jyothilalnaik",
      Position: "Faculty Incharge – Alumni Affairs- EEE",
      Designation: "Assistant Professor-EEE",
      Mail: "nayakeee@rguktn.ac.in",
      Mobile: "7659996010",
    },
  ];

  return (

    <div className="facultytable p-[30px] w-[97%] max-w-full min-w-[300px] pb-[70px] overflow-y-auto overflow-x-auto lg:overflow-hidden">
      <table className="w-full text-center border-separate  border-spacing-4 bg-white/30 backdrop-blur-md backdrop-saturate-200 rounded-xl shadow-lg min-w-[900px]">
        <thead className="bg-white/50  border-gray-300 rounded-t-lg">
          <tr className="bg-white/50 hover:bg-white/70 transition-colors rounded-lg shadow-md">
            <th className="px-4 py-2 text-gray-700 font-semibold">S.No</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">Name</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">Position</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">
              Designation
            </th>
            <th className="px-4 py-2 text-gray-700 font-semibold">Mail</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">Mobile</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {faculty.map((faculty, index) => (
            <tr
              key={index}
              className="bg-white/50 hover:bg-white/70 transition-colors rounded-lg shadow-md"
            >
              <td className="px-4 py-2  border-gray-300 rounded-lg">
                {faculty.Sno}
              </td>
              <td className="px-4 py-2  border-gray-300 rounded-lg">
                {faculty.Name}
              </td>
              <td className="px-4 py-2  border-gray-300 rounded-lg">
                {faculty.Position}
              </td>
              <td className="px-4 py-2  border-gray-300 rounded-lg">
                {faculty.Designation}
              </td>
              <td className="px-4 py-2  border-gray-300 rounded-lg">
                {faculty.Mail}
              </td>
              <td className="px-4 py-2  border-gray-300 rounded-lg">
                {faculty.Mobile}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty_Contact;
