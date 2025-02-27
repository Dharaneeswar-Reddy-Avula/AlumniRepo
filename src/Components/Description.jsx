import React from "react";

const Description = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
        Description
      </h2>
      
      <div className="text-lg text-gray-700 leading-relaxed space-y-6">
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">What is College?</h3>
          <p>
            College is an academic institution that provides higher education. Students earn degrees
            and develop skills for their careers. It is a transformative phase that bridges the gap
            between adolescence and adulthood.
          </p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">What Can Students Do at College?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Learn, grow, and create unforgettable experiences.</li>
            <li>Develop life skills, build friendships, and explore new interests.</li>
            <li>Exchange ideas and participate in extracurricular activities.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">What is Required to Enter College?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>In most countries, students need a high school diploma or equivalent.</li>
            <li>In the U.S. and Canada, a GED is considered equivalent to a high school diploma.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold text-gray-900">Benefits of College</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Develop knowledge, confidence, and academic skills.</li>
            <li>Gain technical expertise and career opportunities.</li>
            <li>Enhance social skills and contribute to society.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Description;
