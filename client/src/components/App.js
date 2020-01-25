import React from 'react';
import Container from "./Container";
import Slider from "./slider/slider";
import Footer from "./footer/footer";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";

import Card from "./card";
import CoCoBody from "./cocoBody/cocoBody";
class  App extends React.Component {
  state = { userMsg: "" };
  updatestate=(userMsg)=>{
    alert(1)
    this.setState({userMsg})
   }
  render(){
    if ('SpeechRecognition' in window) {
      // speech recognition API supported
    } else {
      // speech recognition API not supported
    }
    return (
      <div className="App">
        <Slider />       
         <CoCoBody/>
        <Footer userMsg={this.state.userMsg}/>
      </div>
    );
  }
 
}

export default  App;
