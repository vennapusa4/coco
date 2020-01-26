import React from 'react';
import { connect } from 'react-redux';
import {postMessage} from "../../actions";
import Loader from "../loader/loader";
import Card from "../card/card";
import coco from "../../images/logo.png";
import "./cocoBody.css";

class  CoCoBody extends React.Component {
    componentDidUpdate()
    {
        window.scrollTo(0,document.body.scrollHeight);
    }
    // componentDidMount(){
    //     $(".cocoBody").fadeOut();
    //     setTimeout(()=>{ 
    //       $(".cocoBody").fadeIn(2000);
    //       //this.refs.rightSlider.style.left="-100%";
    //       //this.refs.rightSlider.style.transition="2.5s";
    //     }, 2000);
       
    //   }
     renercontent=() =>{
var data=this.props.messages.data;


    var a=  data.map((element,i)=>{
        if(element.message==""){
            return null;
        }
        else if (element.from) {
            return(
                
                <div className="cocoBody">
                        <div className="headerIcon">
                  <img src={coco} className="logoWidth"/>
              </div>
                     <h1 className="nomargin cocoHere">
                     {element.message}
            </h1>
            <div className="contentbuttons">
                <button className="btn_content" onClick={(e) => this.sendonbnclick("What can you do?")}>
                    What can you do?
           </button>
                <button className="btn_content" onClick={(e) => this.sendonbnclick("Schedule a Delivery")}>
                Schedule a Delivery
           </button>
                <button className="btn_content" onClick={(e) => this.sendonbnclick("Track Order")}>
                Track Order
           </button>
           </div>
           
          </div>
            
            )
        }
        else {
            if (this.props.loading && data.length==i+1) {
                return (<React.Fragment>
                    <Card message={element.message} date={element.date} />
                    <Loader />
                </React.Fragment> )   
            }
            else return (<Card message={element.message} date={element.date} /> )   
         
        }
      
    })
  return a;

        
    }
    sendonbnclick=(userMsg)=>{
        let today = new Date();
        let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
        //this.props.setMessage(userMsg)
        this.props.postMessage(userMsg,date);
       }
    render(){
        return (
            <React.Fragment> 
                {this.renercontent()} 
             </React.Fragment>
                       
           
          );
    }
 
}
function mapStateToProps(state) {

    return state;
  }
export default connect(mapStateToProps,{postMessage})(CoCoBody);; ;
