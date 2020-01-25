import React from 'react';
import "./slider.css";
import coco from "../../images/coco.png";
class  Slider extends React.Component {
  
  componentDidMount(){
    setTimeout(()=>{ 
      this.refs.rightSlider.style.left="-100%";
      this.refs.rightSlider.style.transition="2.5s";
    }, 2000);
   
  }
    render(){
        return (
            <div className="rightSlider" ref="rightSlider">
              <div className="homeIcon">
                  <img src={coco} style={{width:"100%"}}/>
              </div>
              <div>
                <h1 className="nomargin homeText">Conversational App</h1>
              </div>         
            </div>
          );
    }
 
}
export default Slider;
