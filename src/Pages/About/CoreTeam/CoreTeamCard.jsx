//TeamCard.js
// import React from "react";
// import "./CoreTeam";

// const TeamCard = ({ name, title, branch, image , twitter , facebook, linkedin ,logo }) => {
//   return (
//     <div className="team-card">
//       <img src={image} alt={name} className="team-image" />  
//       <div className="details">
//       <h2 className="CoreName"> 
//       {name}</h2>
//       <h3 className="CoreTitle"><i class="fas fa-award"></i>&nbsp;&nbsp;{title}</h3>
//       <h3 className="branch"><i class={logo}></i>&nbsp;&nbsp;
//       {branch}</h3>
//       <div className="social-icons">
//             <a href={linkedin} target="_blank" className="icon" id="icon-1"><i class="fab fa-linkedin fa-1.5x"></i></a>
//       </div>
//       </div>
      

//             {/*   */}
//     </div>
//   );
// };

// export default TeamCard;
//TeamCard.js

import React from "react";
import "./CoreTeam";

const TeamCard = ({ name, title, branch, image , twitter , facebook, linkedin ,logo }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-image" />  
      <div className="details">
      <h2 className="CoreName"> 
      {name}</h2>
      <h3 className="CoreTitle"><i class="fas fa-award"></i>&nbsp;&nbsp;{title}</h3>
      <h3 className="branch"><i class={logo}></i>&nbsp;&nbsp;
      {branch}</h3>
      <div className="social-icons">
            <a href={linkedin} target="_blank" className="icon" id="icon-1"><i class="fab fa-linkedin fa-1.5x"></i></a>
      </div>
      </div>
      

            {/*   */}
    </div>
  );
};

export default TeamCard;