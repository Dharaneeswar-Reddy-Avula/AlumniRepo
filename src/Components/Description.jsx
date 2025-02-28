import React from "react";

const Description = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Description
      </h2>
      
      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">Alumini Association</h3>
          <p>
          The RGUKT Nuzvid Alumni Association is a lively bridge between our distinguished alumni and their alma mater, developing an enduring bond that is founded upon common experience, mutual enrichment, and a desire for excellence.
          </p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">Mission</h3>
          {/* <ul className="list-disc pl-5 space-y-2">
            <li>Learn, grow, and create unforgettable experiences.</li>
            <li>Develop life skills, build friendships, and explore new interests.</li>
            <li>Exchange ideas and participate in extracurricular activities.</li>
          </ul> */}
          <p>We aim to build a dynamic association that facilitates contact among alumni, students, and faculty members and thus enhances the personal and professional growth of our members as well as the development of RGUKT Nuzvid.</p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">Objectives</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Strengthening Bonds:</b> Create meaningful interactions between alumni and the university to ensure lasting relationships.</li>

            <li><b>Professional Growth:</b>Offer opportunities for career growth through mentorship initiatives, workshops, and networking sessions.</li>

            <li><b>Student Assistance: </b> Provide support, scholarships, and facilities to current students, helping them in their academic and professional growth.</li>
            <li><b>nstitutional Development:</b> Work with the university in its endeavors, helping it achieve its goal of shaping rural youth into global leaders.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">Activities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Alumni Meetups: </b>Hold frequent meetings, both online and offline, to get together and exchange stories.</li>

            <li><b>Mentorship Programs: </b>Set up platforms through which alumni can guide existing students, offering insights into different professions.</li>

            <li><b>Workshops and Seminars: </b>Organize events relating to skill-building, current trends in industries, and self-improvement.</li>

            <li><b>Community Service: </b>Participate in activities that help the community at large, keeping alive the values acquired during our days at RGUKT Nuzvid.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Description;
