import React from "react";
import BusinessCard from "../img/business-card.jpg"

export const OpenCard = () => {
    return(
       <div className="card">
           <div className="container">
               <p>Learn Web Development</p><span className="close">x</span>
               <hr />
               <div className="imagecontainer">
               <img src={BusinessCard} />
               </div>
           </div>
       </div>
    )
        
};
