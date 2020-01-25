import React from 'react';
import "./footer.css";
import { connect } from 'react-redux';
import {postMessage} from "../../actions"
class  Footer extends React.Component {
  state = { userMsg: "" };
  recognition = new window.SpeechRecognition();
  styles="cocoMicBlue"
  send=(e)=> {
    e.preventDefault();
  if (this.state.userMsg!="" && e.keyCode === 13) {
      let today = new Date();
      let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
      this.props.postMessage(this.state.userMsg,date);
      this.setState({userMsg:""});
   
  }
 }
 componentDidMount(){

  this.recognition.onaudiostart = (event)=> {
    console.log('Audio capturing started');
    this.styles="cocoMicRed";
    this.refs.mic.className="cocoMicRed";
    debugger;
    this.refs.inputbox.attributes.placeholder.value="I am listening speak now";

  }
  this.recognition.onaudioend = (event)=> {
    console.log('Audio capturing started');
    this.styles="cocoMicRed";
    this.refs.mic.className="cocoMicBlue";
    this.refs.inputbox.attributes.placeholder.value="Type a message"
  }
  this.recognition.onspeechstart = (event)=>{
    console.log('Speech has been detected');
    this.styles="cocoMicRed";
  }
  this.recognition.onspeechend = (event)=> {
    console.log('Speech has been ened');
    this.styles="cocoMicBlue"
  }
  this.recognition.onresult = (event)=> {
   
   if (event.results[0][0].transcript) {
    this.setState({ userMsg: event.results[0][0].transcript });  
   }
   
  }
 }
componentWillReceiveProps(nextProps) {
  this.setState({ userMsg: nextProps.userMsg });  
}
    render(){
        return (
            <div className="cocoFooter" >
              <div className="cocoSearchBox">
              <input ref="inputbox" onKeyUp={this.send} onChange={(e)=> this.setState({userMsg:e.target.value})} value={this.state.userMsg}   className="cocoInput" placeholder="Type a message"/>
              <div ref="mic" className="cocoMicBlue" onClick={()=>{this.recognition.start()}}>       
              </div>
              </div>
            </div>
          );
    }
 
}
export default  connect(null,{postMessage})(Footer);
