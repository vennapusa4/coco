import React from 'react';
import logo from ".././images/logo.png"
import user from ".././images/user.png"
import { connect } from 'react-redux';
import {postMessage} from ".././actions"
function renercontent(data) {

    console.log(data);
  
    var a=  data.map(element=>{
        if (element.from) {
            return(
                <div className="cardSection">
                <div  className="cardlogo">
                    <img style={{ width: "100%" }} src={logo}></img>
                </div>
                <div  style={{ width: "100%" }}>
                    <div  className="card-panel">
                        <span className="white-text">{element.message}
                        </span>
                      
                    </div>
                    <span className="date" style={{float:"left"}} >{element.date}</span>
                </div>
            </div>
            )
        }
        else{
    return(<div className="cardSection" >
             
    <div style={{ width: "100%" }}>
        <div style={{ float: "right" }}>
        <div onDoubleClick={()=>postMessage(element.message)} className="card-panel card-panel_R">
            <span className="white-text">{element.message}
            </span>
          
        </div>
        <span className="date" style={{float:"left"}} >{element.date}</span>
        </div>
       
      
    </div>
    <div  className="cardlogo_R">
        <img style={{ width: "100%" }} src={user}></img>
    </div>
    </div>)
        }
    })
  return a;;
   
    
}
const Card = ({data}) => {
  return (
    <div>   
      {renercontent(data)} 
    </div>
  );
};
function mapStateToProps({messages}) {
    
    return messages;
  }
  export default connect(mapStateToProps,postMessage)(Card);
