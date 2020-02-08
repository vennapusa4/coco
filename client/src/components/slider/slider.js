import React from 'react';
import "./slider.css";
import coco from "../../images/logo.png";
import $ from "jquery";
import { connect } from 'react-redux';
class  Slider extends React.Component {
  
  componentDidMount(){
    
    setTimeout(()=>{ 
      if (this.props.user) {
        $(".rightSlider").fadeOut(2000);
      }
     
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
                <h2 className="nomargin homeText">
                This is CoCo, your sweet little friend. Login to chat more with more <span>&#128515;</span><br/>
                </h2>

                {//this.props.user?null:
                
                // <a className="btn_content" style={{marginTop:"80px"}} href="/auth/google">
                // Sign in Google</a>
                }
             
              </div>         
            </div>
          );
    }
 
}
function mapStateToProps(state) {

  return state;
}
export default connect(mapStateToProps,{})(Slider);; ;

