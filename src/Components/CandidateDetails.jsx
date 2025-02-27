import React from "react";
import company from "../assets/company.png";
import { FaArrowLeft } from "react-icons/fa";
const CandidateDetails = () => {
  return (
    <div className="flex flex-col items-center pb-8 gap-6 mt-[80px] bg-gray-200 md:mt-[100px] lg:mt-[130px] overflow-hidden">
      <div className="flex flex-col w-screen bg-blue-950 py-12 md:flex-row  md:justify-evenly items-center gap-8">
        <div className="w-[150px] h-[100px] rounded-lg">
          <img
            src={company}
            alt="company logo"
            className="rounded-lg w-full h-full"
          />
        </div>
        <div className="flex flex-col text-white gap-4 md:w-[50%] lg:w-[30%] w-[90%]">
          <div className="font-bold text-2xl ">Company Name</div>
          <div>
            ELECTRONICS CITY,HOSUR ROAD,BANGALORE KARNATAKA KA IN 560100.
          </div>
        </div>
      </div>
      <div className="md:w-[550px] p-2 px-4 w-[96%] rounded-lg bg-white shadow-md flex flex-col">
        <div className="font-semibold w-full text-center text-blue-950 text-lg">
          Candidate Details
        </div>
        <div>
          <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="fname">First name</label>
              <input
                type="text"
                name="fname"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lname">Last name</label>
              <input
                type="text"
                name="lname"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone">Mobile no</label>
              <input
                type="phone"
                name="phone"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="gender">Gender</label>
              <div className="flex flex-row p-2 gap-4">
                <div className="flex flex-row gap-2">
                  <input type="radio" name="gender" />
                  <label htmlFor="gender">Male</label>
                </div>
                <div className="flex flex-row gap-2">
                  <input type="radio" name="gender" />
                  <label htmlFor="gender">Female</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="designation">Designation</label>
              <select
                name="designation"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
              >
                <option value="none" selected disabled>
                  Select an option
                </option>
                <option value="mtech">Mtech</option>
                <option value="btech">Btech</option>
                <option value="puc">Puc</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="branch">Branch</label>
              <select
                name="branch"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
              >
                <option value="none" selected disabled>
                  Select Branch
                </option>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="eee">EEE</option>
                <option value="mme">MME</option>
                <option value="mech">MECH</option>
                <option value="chem">CHEM</option>
                <option value="civil">CIVIL</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="year">Graduating Year</label>
              <input
                type="number"
                name="year"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="exp">Work Experience</label>
              <input
                type="number"
                name="exp"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="prj">Projects</label>
              <input
                type="text"
                name="prj"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="exp">CV/Resume Submission</label>
              <input
                type="file"
                name="file"
                className="w-full px-2 py-1  rounded-lg border border-gray-300 bg-none outline-none focus:border-blue-800"
                required
              />
            </div>
            <div className="flex flex-row my-4 justify-between items-center">
                <button className="flex px-2 py-1 font-bold text-blue-950 rounded-xl bg-white shadow-md border flex-row gap-2 items-center">
                <FaArrowLeft /> Back
                </button>
                <button className="rounded-xl py-1 px-2 font-bold text-white bg-blue-950">
                    Submit
                </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
