import React from "react";
import AboutUs from "../../Components/AboutUs";
import OurTeam from "../../Components/OurTeam";
import Partners from "../../Components/Partners";
import Hero from "../../Components/Hero";
import Description from "../../Components/Description";
import Cards from "../../Components/Cards";
const About = () => {
  return (
    <div className=" mt-14 md:mt-26 px-10  lg:mt-[115px] ">
      <Hero />
      <Description/>
      <Cards />
      <OurTeam />
     
    </div>
  );
};
export default About;