import React from 'react'
import ReactDOM from 'react-dom'

class BookingMap extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      initialZoom: 8,
      mapCenterLat: 43.77974,
      mapCenterLng: -79.4073126
    }
  }

  componentWillMount(){
  }
  
  componentWillUnmount(){
  }

  componentWillReceiveProps(nextProps){
  }

  componentDidMount(){
    var map;
    google.maps.event.addDomListener(window, 'load', ()=>{
      var mapOptions = {
        zoom: 8,
        center: {lat: 43.77974, lng: -79.41561}
      };
      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var marker = new google.maps.Marker({
        position: {lat: 43.77974, lng: -79.41561},
        map: map
      });

      var infowindow = new google.maps.InfoWindow({
        content: '<p>Marker Location:' + marker.getPosition() + '</p>'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
    });
  }

  mapCenterLatLng() {
    var props = this.props;
    return new google.maps.LatLng(this.state.mapCenterLat, this.state.mapCenterLng);
  }

  render(){
    return (
      <div id='map' className='map'>cccc</div>
    )
  }
}
export default BookingMap

BookingMap.propTypes = {
}

BookingMap.defaultProps = {
}
