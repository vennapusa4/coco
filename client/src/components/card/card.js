import React from 'react';
import user from "../../images/user.png"

const Card = ({message,date}) => {
  return (
    <div>   
      <div className="cardSection" >
             
             <div style={{ width: "100%" }}>
                 <div style={{ float: "right" }}>
                 <div  className="card-panel card-panel_R">
                     <span className="white-text">{message}
                     </span>
                   
                 </div>
                 <span className="date" style={{float:"left"}} >{date}</span>
                 </div>
                
               
             </div>
             <div  className="cardlogo_R">
                 <img style={{ height:"47px"}} src={user}></img>
             </div>
             </div>
    </div>
  );
};

  export default Card;
