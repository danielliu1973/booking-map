import React from 'react'
import BookingMap from './booking_map.jsx'

class BookingMapTest extends React.Component{
  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentDidMount(){

  }
  componentWillUnmount(){

  }
  
	render(){
    var parent = this
    return (
      <div className='map-page'>
        <BookingMap 
          data={{
            zoom: 12,
            center_lat: 43.77974,
            center_lng: -79.4073126,
            markers: [
              {
                lat: 43.77974,
                lng: -79.4173126,
                lots: 50,
                city: 'North York'
              },
              {
                lat: 43.79974,
                lng: -79.4573126,
                lots: 100,
                city: 'Toronto'
              },
              {
                lat: 43.81974,
                lng: -79.4173126,
                lots: 150,
                city: 'Scarborough'
              },
              {
                lat: 43.79974,
                lng: -79.3873126,
                lots: 40,
                city: 'Richmond Hill'
              }]}}></BookingMap>
    </div>
  )}
}
export default BookingMapTest
