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
                city: 'North York',
                address: '3 ROBINGLADE DR, Toronto, Ontario   M9B2P9',
                image: 'https://cdn.realtor.ca/listing/TS635931375190430000/reb82/highres/0/w3433930_1.jpg',
                price: '$30,000'
              },
              {
                lat: 43.79974,
                lng: -79.4573126,
                lots: 100,
                city: 'Toronto',
                address: '888 Yonge St, Toronto, Ontario   M5L8V2',
                image: 'https://cdn.realtor.ca/listing/TS635952077306770000/reb82/highres/7/e3453907_1.jpg',
                price: '$690,000'
              },
              {
                lat: 43.81974,
                lng: -79.4173126,
                lots: 150,
                city: 'Scarborough',
                address: '300 BLOOR ST E, Toronto, Ontario   M4W3S2',
                image: 'https://cdn.realtor.ca/listing/TS635750811687570000/reb82/highres/5/c3286675_1.jpg',
                price: '$880,000'
              },
              {
                lat: 43.79974,
                lng: -79.3873126,
                lots: 40,
                city: 'Richmond Hill',
                address: '120 HARRISON GARDEN BLVD, Toronto, Ontario   M2N0C2',
                image: 'https://cdn.realtor.ca/listing/TS635899586727930000/reb82/highres/6/c3392836_1.jpg',
                price: '$350,000'
              }]}}></BookingMap>
    </div>
  )}
}
export default BookingMapTest
