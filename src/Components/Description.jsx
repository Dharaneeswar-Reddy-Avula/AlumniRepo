import React from "react";

const Description = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-200">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
        Description
      </h2>

      <div className="text-lg text-gray-700 leading-relaxed space-y-8">
        <section className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">
            Alumni Association
          </h3>
          <p>
            The RGUKT Nuzvid Alumni Association is a vibrant bridge between our 
            distinguished alumni and their alma mater, fostering an enduring bond 
            built upon shared experiences, mutual enrichment, and a pursuit of excellence.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Mission</h3>
          <p>
            We aim to build a dynamic association that facilitates contact among alumni, 
            students, and faculty members, enhancing personal and professional growth while 
            contributing to the development of RGUKT Nuzvid.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Objectives</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><span className="font-semibold text-gray-900">Strengthening Bonds:</span> Facilitate meaningful interactions between alumni and the university.</li>
            <li><span className="font-semibold text-gray-900">Professional Growth:</span> Offer mentorship, networking, and skill-building opportunities.</li>
            <li><span className="font-semibold text-gray-900">Student Assistance:</span> Provide scholarships and support for students’ academic and career growth.</li>
            <li><span className="font-semibold text-gray-900">Institutional Development:</span> Collaborate with the university to nurture future global leaders.</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Activities</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><span className="font-semibold text-gray-900">Alumni Meetups:</span> Organize online and offline gatherings to foster connections.</li>
            <li><span className="font-semibold text-gray-900">Mentorship Programs:</span> Create platforms for alumni to guide current students.</li>
            <li><span className="font-semibold text-gray-900">Workshops & Seminars:</span> Conduct industry-relevant skill-building sessions.</li>
            <li><span className="font-semibold text-gray-900">Community Service:</span> Engage in initiatives that benefit society and uphold our values.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Description;
