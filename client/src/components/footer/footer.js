import React from 'react';
import "./footer.css";
import { connect } from 'react-redux';
import {postMessage,setuserMessage} from "../../actions"
var click=1;
class  Footer extends React.Component {
  state = { userMsg: "" };
  recognition = new window.SpeechRecognition();
  styles="cocoMicBlue";
  
   sendfrom=()=>{
    if (this.state.userMsg!="")
    {
    let today = new Date();
    let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    this.props.postMessage(this.state.userMsg,date);
    this.props.setuserMessage("");
    }
   }
  send=(e)=> {
    e.preventDefault();
  if (this.state.userMsg!="" && e.keyCode === 13) {
      let today = new Date();
      let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
      this.props.postMessage(this.state.userMsg,date);
      this.setState({userMsg:""});
      this.props.setuserMessage("");
   
  }
 }
 componentDidMount(){
  window.recording=false;
  this.recognition.onaudiostart = (event)=> {
    this.styles="cocoMicRed";
    this.refs.mic.className="cocoMicRed";
    this.refs.inputbox.attributes.placeholder.value="I am listening speak now";

  }
  this.recognition.onaudioend = ()=> {
    this.styles="cocoMicRed";
    this.refs.mic.className="cocoMicBlue";
    this.refs.inputbox.attributes.placeholder.value="Type a message"
  }
  this.recognition.onspeechstart = ()=>{
    this.styles="cocoMicRed";
  }
  this.recognition.onstart =  () =>{
    window.recording = true;
   };
   this.recognition.onend =  ()=> {
    window.recording = false;
   };


  this.recognition.onspeechend = ()=> {
  }
  this.recognition.onresult = (event)=> {
  
   if (event.results[0][0].transcript) {
    this.setState({ userMsg: event.results[0][0].transcript }); 
    this.refs.inputbox.focus(); 
   }
   
  }
 }
componentWillReceiveProps(nextProps) {
  this.setState({ userMsg: nextProps.userMsg });  
}
startcono=()=>{
  if (!window.recording) {
    this.recognition.start()
  }
}

    render(){
        return (
            <div className="cocoFooter" style={{marginTop:"40px"}}>
              <div className="cocoSearchBox">
              <input ref="inputbox" onKeyUp={this.send} onChange={(e)=> this.setState({userMsg:e.target.value})} value={this.state.userMsg}   className="cocoInput" placeholder="Type a message"/>
              <div ref="mic" className="cocoMicBlue" onClick={()=>{this.startcono()}}>       
              </div>
              <div className="cocoSend" onClick={this.sendfrom}>       
              </div>
              </div>
            </div>
          );
    }
 
}
function mapStateToProps(state) {

  return state;
}
export default  connect(mapStateToProps,{postMessage,setuserMessage})(Footer);
