import React from 'react';
import { connect } from 'react-redux';
import {postMessage,setuserMessage} from "../../actions";
import Loader from "../loader/loader";
import Card from "../card/card";
import coco from "../../images/logo.png";
import "./cocoBody.css";
import Maps from "../map/map";
import Modal from '../map/map';
class  CoCoBody extends React.Component {
   state={showmap:false}
    
    componentDidUpdate(previousProps, previousState) {
        if(this.props.loading){
            window.scrollTo(0, document.body.scrollHeight-10);
          }
          else if (this.forScroll.current) {
            window.scrollTo(0,this.forScroll.current.offsetTop-10);
          } 
        if (previousState.showmap == true) {
            this.setState({showmap:false})
        }
    }

    constructor(props) {
        super(props);
        this.forScroll = React.createRef();
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
                        <img src={coco} className="logoWidth" />
                    </div>
                    <h1 dangerouslySetInnerHTML={{ __html: element.message }} className="nomargin cocoHere">

                    </h1>
                    <div className="contentbuttons">
                        {this.renderoptions(element.options)}
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
            else return (<div  ref={this.forScroll}>
                <Card ref="forScroll" message={element.message} date={element.date} />
                 </div>)   
         
        }
      
    })
  return a;

        
    }
    renderoptions=(options)=>{
    
    var a=  options.map((element,i)=>{
        if(element==""){
            return null;
        }
        else{
            return  <React.Fragment>
            <button className="btn_content" onClick={(e) => this.sendonbnclick(element)}>
            {element}
            </button>
      
       </React.Fragment>
        }
    

    })
    return a;
}
    sendonbnclick=(userMsg)=>{
       
        if (userMsg=="Pick up the location") {
            this.setState({showmap:true})
        }
        
        else{
          let today = new Date();
          let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
            if (userMsg=="Current date and time") {
                userMsg =date
            }
            this.setState({showmap:false})
            //this.props.setMessage(userMsg)
            this.props.postMessage(userMsg,date);
            this.props.setuserMessage("")
        }
       
       }
    render(){
        return (
            <React.Fragment> 
                {this.renercontent()} 
                {
                  this.state.showmap?<Modal></Modal>:""
                }
                
             </React.Fragment>
                       
           
          );
    }
 
}
function mapStateToProps(state) {

    return state;
  }
export default connect(mapStateToProps,{postMessage,setuserMessage})(CoCoBody);; ;
