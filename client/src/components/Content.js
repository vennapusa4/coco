import React from 'react';
import Footer from "./Footer";
import { connect } from 'react-redux';
import Card from "./card";
import {postMessage} from ".././actions"

class  Content extends React.Component {
  state = { userMsg: "" };
  send=(e)=> {
    
      e.preventDefault();
    if (this.state.userMsg!="" && e.keyCode === 13) {
        let today = new Date();
        let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
        this.props.postMessage(this.state.userMsg,date);
     
    }
   }
   sendonbnclick=(userMsg)=>{
    let today = new Date();
    let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    this.setState({userMsg})
    this.props.postMessage(userMsg,date);
   }
    render(){
        return (
            <div className="content">
            <div className="contentbg">
              <div className="contentbody">
              <div className="contenticons" >
              <i className="iconsize material-icons" >remove</i>
              <i className="iconsize material-icons" >close</i> 
              
              </div>
              <div className="contenthead">
              <i  style={{display:"block"}} className="iconsize material-icons" >bubble_chart</i>
                Hi, how can i help?
              </div>
              <div className="contentbuttons">
               
             <button className="btn_content" onClick={(e)=> this.sendonbnclick("What can you do?")}>
               What can you do?
             </button>
             <button className="btn_content" onClick={(e)=> this.sendonbnclick("What's on my screen")}>
             What's on my screen
             </button>
             <button className="btn_content" onClick={(e)=> this.sendonbnclick("Play music")}>
              Play music
             </button>
             
              </div>
              <Card ></Card>
              <div className="contentsearch">
               <input onChange={(e)=> this.setState({userMsg:e.target.value})} value={this.state.userMsg} className="contentinput" onKeyUp={this.send} placeholder="Type a message"/>
               <div className="mic" >       
              </div>
              </div>
              </div>
             
            </div>
            </div>
          );
    }
 
}




export default connect(null,{postMessage})(Content);