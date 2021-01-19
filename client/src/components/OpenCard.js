import React from "react";
import BusinessCard from "../img/business-card.jpg"

export const OpenCard = () => {
    return(
       <div className="card">
           <div className="container">
               <p>Learn Web Development</p>
               <hr />
               <div className="imagecontainer">
               <img src={BusinessCard} />
               </div>
           </div>
       </div>
    )
        
};

// <div className="card">
// <img src={BusinessCard}>
//     <div className="container">
//         <h4>John Doe</h4>
//         <p>Architect & Engineer</p>
//     </div>
// </div>