import React from 'react';
import "./slider.css";
import coco from "../../images/logo.png";
import $ from "jquery"
class  Slider extends React.Component {
  
  componentDidMount(){
    setTimeout(()=>{ 
      $(".rightSlider").fadeOut(2000);
      //this.refs.rightSlider.style.left="-100%";
      //this.refs.rightSlider.style.transition="2.5s";
    }, 1500);
   
  }
    render(){
        return (
            <div className="rightSlider" ref="rightSlider">
              <div className="homeIcon">
                  <img src={coco} style={{width:"50%"}}/>
              </div>
              <div>
                <h1 className="nomargin homeText">Conversational App</h1>
              </div>         
            </div>
          );
    }
 
}
export default Slider;
