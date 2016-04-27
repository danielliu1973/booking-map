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
    var mapOptions = {
      zoom: parent.props.data.zoom,
      center: {lat: parent.props.data.center_lat, lng: parent.props.data.center_lng},
      mapTypeControl: true,
      mapTypeControlOptions: {
        // style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        // position: google.maps.ControlPosition.TOP_CENTER
      }
    };
    var map = new google.maps.Map(parent.refs['map'], mapOptions);
    parent.props.data.markers.map((e,i)=>{
      var marker = new google.maps.Marker({
        position: {lat: e.lat, lng: e.lng},
        map: map,
        lots: e.lots,
        city: e.city,
        address: e.address,
        image: e.image,
        price: e.price
      });

      var infowindow = new google.maps.InfoWindow({
        content: '<p>Marker Location:' + marker.getPosition() + '</p>' +
                 '<div><a><img src=' + marker.image + ' height="180" width="180"></img></a></div>'
      });

      google.maps.event.addListener(marker, 'click', ()=>{});
      google.maps.event.addListener(marker, 'mouseover', ()=>{
        infowindow.open(map, marker);
        parent.setState({active_marker : marker});
      });
      google.maps.event.addListener(marker, 'mouseout', ()=>{
        infowindow.close();
      });
    });
  }
  render(){
    var parent = this;
    var marker = parent.state.active_marker ;
    return (
      <div className={parent.state.map_show ? 'booking-map map-show' : 'booking-map map-hide'}>
        <div className='actions'><button className={parent.state.map_show ? 'map-show' : 'map-hide'} 
          onClick={e=>{parent.setState({map_show: !parent.state.map_show});}}></button></div>
        <div ref='map' id='map' className='map'></div>
        <div className='info'>
        {!!!marker['position'] ? '' : (
          <div>
            <div>{marker.address}</div>
            <div><a><img src={marker.image}></img></a>
            </div>
            <div>Lots:</div><div>{marker.lots}</div>
            <div>City:</div><div>{marker.city}</div>
            <div>Price:</div><div>{marker.price}</div>
            <button>Book</button>
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
