import React from 'react';
import Container from "./Container";
import Slider from "./slider/slider";
import Footer from "./footer/footer";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";
import $ from "jquery"
import Card from "./card";
import CoCoBody from "./cocoBody/cocoBody";
class  App extends React.Component {
  state = { userMsg: "" };
  updatestate=(userMsg)=>{
    alert(1)
    this.setState({userMsg})
   }
    componentDidMount(){
        $(".cocofade").fadeOut();
        setTimeout(()=>{ 
          $(".cocofade").fadeIn(2000);
          //this.refs.rightSlider.style.left="-100%";
          //this.refs.rightSlider.style.transition="2.5s";
        }, 2000);
       
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
        <div className="cocofade">
        <CoCoBody/>
        <Footer userMsg={this.state.userMsg}/>
        </div>    
        
      </div>
    );
  }
 
}

export default  App;
