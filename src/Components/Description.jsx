import React from "react";

const Description = () => {
  return (
    <div className="W-FULL mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-200">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
        Description
      </h2>

      
      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
       
          <h3 className="text-2xl font-semibold text-gray-900">Alumini Association</h3>
          <p>
          The RGUKT Nuzvid Alumni Association is a lively bridge between our distinguished alumni and their alma mater, developing an enduring bond that is founded upon common experience, mutual enrichment, and a desire for excellence.
          </p>
        
       
          <h3 className="text-2xl font-semibold text-gray-900">Mission</h3>
          {/* <ul className="list-disc pl-5 space-y-2">
            <li>Learn, grow, and create unforgettable experiences.</li>
            <li>Develop life skills, build friendships, and explore new interests.</li>
            <li>Exchange ideas and participate in extracurricular activities.</li>
          </ul> */}
          <p>We aim to build a dynamic association that facilitates contact among alumni, students, and faculty members and thus enhances the personal and professional growth of our members as well as the development of RGUKT Nuzvid.</p>
     
        
          <h3 className="text-2xl font-semibold text-gray-900">Objectives</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Strengthening Bonds: </b> Create meaningful interactions between alumni and the university to ensure lasting relationships.</li>

            <li><b>Professional Growth: </b>Offer opportunities for career growth through mentorship initiatives, workshops, and networking sessions.</li>

            <li><b>Student Assistance: </b> Provide support, scholarships, and facilities to current students, helping them in their academic and professional growth.</li>
            <li><b>Institutional Development: </b> Work with the university in its endeavors, helping it achieve its goal of shaping rural youth into global leaders.</li>
          </ul>
        
          <h3 className="text-2xl font-semibold text-gray-900">Activities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Alumni Meetups: </b>Hold frequent meetings, both online and offline, to get together and exchange stories.</li>

            <li><b>Mentorship Programs: </b>Set up platforms through which alumni can guide existing students, offering insights into different professions.</li>

            <li><b>Workshops and Seminars: </b>Organize events relating to skill-building, current trends in industries, and self-improvement.</li>

            <li><b>Community Service: </b>Participate in activities that help the community at large, keeping alive the values acquired during our days at RGUKT Nuzvid.</li>
          </ul>
        
          </div>
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
