import React from 'react';
import Container from "./Container";
import Slider from "./slider/slider";
import Footer from "./footer/footer";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";
import $ from "jquery"
import Card from "./card";
import CoCoBody from "./cocoBody/cocoBody";
import Maps from "./map/map";
import Modal from './map/map';
import * as actions from '../actions';
import { connect } from 'react-redux';
import "../css/buttons.scss"
import png from "../images/PAM.png";
class  App extends React.Component {
  state = { userMsg: "" };
 logout=()=>{

 }
    componentDidMount(){
        //$(".cocofade").fadeOut();
        setTimeout(()=>{ 
         // $(".cocofade").fadeIn(1000);
          //this.refs.rightSlider.style.left="-100%";
          //this.refs.rightSlider.style.transition="2.5s";
        }, 1000);
        this.props.fetchUser();
      }
  render(){
    if ('SpeechRecognition' in window) {
      // speech recognition API supported
    } else {
      // speech recognition API not supported
    }
    return (
      <div className="App">
             <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo center">
      <div className="navIcon"><img src={png} style={{height:"85px"}} />
      <span className="navText">Packers and Movers</span>
      </div>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      {this.props.user?
        <li><a href="/api/logout" >   Sign Out</a></li>:
        <li><a  href="/auth/google" >   Sign In</a></li>
      }
      </ul>
    </div>
  </nav>
         {this.props.user?
         <div className="cocofade">
        
    
         <CoCoBody/>
         <Footer userMsg={this.state.userMsg}/>
         </div> :
                
                <Slider />   
         }
      
           
       
      </div>
    );
  }
 
}
function mapStateToProps(state) {

  return state;
}
export default connect(mapStateToProps,actions)(App);; ;

