'use strict';
import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import createHistory from 'history/lib/createHashHistory'

import BookingMapTest from './booking_map_test.jsx'
import OtherPage from './other_page.jsx'
import MainPage from './main_page.jsx'

render(
	<div>
		<Router history={createHistory({queryKey: false})}>
			<Route path="/" component={MainPage}>
				<Route path="map" component={BookingMapTest}/> 
				<Route path="other" component={OtherPage}/>
			</Route>
		</Router>
	</div>,
	document.getElementById('app')
)