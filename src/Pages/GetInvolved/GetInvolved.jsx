import React from "react";
import HelpUs from "../../Components/HelpUs";
import SeekersSays from "../../Components/SeekersSays";
import Fund from "../../Components/Fund";
import Contributors from "../../Components/Contributors";
import Oppurtunities from "../../Components/Oppurtunities";
const GetInvolved = () => {
  
  
  return (
   
        
      <div className="m-4 mx-4 mt-20 md:mt-24  lg:mt-[150px] flex flex-col gap-8">
        <HelpUs/>
        <SeekersSays/>
         {/* <Fund/> */}
        {/* <Contributors/>  */}
        <Oppurtunities/>
        
        
       
        
      </div>
      
    
  );
};

export default GetInvolved;
