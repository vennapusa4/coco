import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';

import {setuserMessage} from "../../actions"
class Modal extends Component {
  googleMapRef = React.createRef()
  componentDidMount() {
  
    
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
this.createMarker();
this.open_modal();
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

   
  createMarker = () =>
  {
    var geocoder = new window.google.maps.Geocoder();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos)=> {
        var mapOptions={
          center: { lat:  pos.coords.latitude, lng:   pos.coords.longitude},
          zoom: 18
        }
       var map=new window.google.maps.Map(document.getElementById('map'), mapOptions);
        var myloc=new window.google.maps.Marker({
          position: { lat: pos.coords.latitude, lng: pos.coords.longitude },
          map: map
        })
          var me = new window.google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
          myloc.setPosition(me);
          map.addListener('click', (e) =>{
            window.aa=e.latLng;
            var me = new window.google.maps.LatLng(e.latLng.lat(),e.latLng.lng());
            myloc.setPosition(me);
            map.setCenter(myloc.getPosition());
            this.props.setuserMessage("banglore");
            // geocoder.geocode({
            //   'latLng': e.latLng
            // }, function(results, status) {
            //   if (status == window.google.maps.GeocoderStatus.OK) {
            //     if (results[0]) {
            //       alert(results[0].formatted_address);
            //     }
            //   }
            // });
          });
      }, function(error) {
          // ...
      });
     
  }
  }  
   open_modal() {
    var elem = document.getElementById("modal1");
    var instance = M.Modal.getInstance(elem);
    instance.open();
}
  render() {
    function close_modal() {
      var elem = document.getElementById("modal1");
      var instance = M.Modal.getInstance(elem);
      instance.close();
  }

    return (
     
      <div>
        
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
         
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
          <i className="iconsize material-icons" onClick={close_modal}>close</i> 
          <div id="map"  ref={this.googleMapRef} style={{height:"500px"}}></div>
          </div>
          
        </div>
        
      </div>
    );
  }
}
export default connect(null,{setuserMessage})(Modal);

