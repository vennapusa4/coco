 <!--  <div id="map" style="height:100px"></div>
    <script>
      var map;
      var postions;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


function showPosition(position) {
  postions=position;
}
function showPositions(position) {
  return postions;
}

      function initMap() {
        var aa=showPositions();
        var mapOptions = {
      center: { lat: aa.coords.latitude, lng:  aa.coords.longitude},
      zoom: 18
    };
        // map = new google.maps.Map(document.getElementById('map'), mapOptions);
        // map.setMyLocationEnabled(true);
        var myloc = new google.maps.Marker({
    clickable: false,
    icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                                                    new google.maps.Size(22,22),
                                                    new google.maps.Point(0,18),
                                                    new google.maps.Point(11,11)),
    shadow: null,
    zIndex: 999,
    map: new google.maps.Map(document.getElementById('map'), mapOptions)
});
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
        var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        myloc.setPosition(me);
    }, function(error) {
        // ...
    });
}
      } 
      
    </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXvc-CLagYE88IaqZqTEZVZihxWCDdios&callback=initMap"
        async defer></script> -->