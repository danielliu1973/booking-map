import React from 'react';
import {Link} from 'react-router'

class OtherPage extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render(){
    return 
      <div>
        <Link to='/map'>Return</Link>
      </div>
  }
}
export default OtherPage
