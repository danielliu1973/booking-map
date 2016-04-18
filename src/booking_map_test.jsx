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
        <BookingMap mapCenterLat='-34.397' mapCenterLng='150.644'></BookingMap>
        <button onClick={e=>{}}>add</button>
    </div>
  )}
}
export default BookingMapTest
