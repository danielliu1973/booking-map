import React from 'react'
import ReactDOM from 'react-dom'

class BookingMap extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      map_show: false,
      active_marker: {}
    }
  }

  componentWillMount(){
  }
  
  componentWillUnmount(){
  }

  componentWillReceiveProps(nextProps){
  }

  componentDidMount(){
    var parent = this;
    google.maps.event.addDomListener(window, 'load', ()=>{
      var mapOptions = {
        zoom: parent.props.data.zoom,
        center: {lat: parent.props.data.center_lat, lng: parent.props.data.center_lng},
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER
        }
      };
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
      parent.props.data.markers.map((e,i)=>{
        var marker = new google.maps.Marker({
          position: {lat: e.lat, lng: e.lng},
          map: map,
          lots: e.lots,
          city: e.city
        });

        var infowindow = new google.maps.InfoWindow({
          content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });

        google.maps.event.addListener(marker, 'click', function() {
          // infowindow.open(map, marker);
          parent.setState({active_marker : marker});
        });
        google.maps.event.addListener(marker, 'mouseover', function() {
          // infowindow.open(map, marker);
        });
        // google.maps.event.addListener(marker, 'mouseout', function() {
        //   infowindow.close();
        // });
      });
    });
  }
  render(){
    var parent = this;
    var marker = parent.state.active_marker ;
    return (
      <div className='booking-map'>
        <div className='actions'><button onClick={e=>{
          parent.setState({map_show: !parent.state.map_show});
        }}>Show/Hide</button></div>
        <div id='map' className={parent.state.map_show?'map map-show':'map map-hide'}></div>
        <div className='info'>
        {!!!marker['position'] ? '' : (
          <div>
            <div>Lat:</div><div>{marker.getPosition().lat()}</div>
            <div>Lng:</div><div>{marker.getPosition().lng()}</div>
            <div>Lots:</div><div>{marker.lots}</div>
            <div>City:</div><div>{marker.city}</div>
          </div>
        )}
        </div>
      </div>
    )
  }
}
export default BookingMap

BookingMap.propTypes = {
  data: React.PropTypes.object
}

BookingMap.defaultProps = {
  data: {
    init: {
      Zoom: 12,
      CenterLat: 43.77974,
      CenterLng: -79.4073126
    },
    markers: [
      {
        Lat: 43.77974,
        Lng: -79.4073126
      }
    ]
  }
}
