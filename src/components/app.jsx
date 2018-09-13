import React, { Component } from 'react';
import CarsArray from '../containers/cars_array';
import CarNewFrom from '../containers/car_new_form';
import Garage from '../components/garage';

class App extends Component {
	render () {
		return (
			<div className="app">
				<CarsArray />
			</div>
			)
	}
}

export default App;


// <div className="app">
// 			<Garage /> -- not rendering.
// 			<h2>fdkæjfæajfdlæ (Nothing is rendering from here yet.)</h2>
// 			<CarShow channelFromParams={props.match.params.garage} />
// 			<CarNew channelFromParams={props.match.params.garage} />
// 			<CarsArray channelFromParams={props.match.params.garage} />
// 		</div>
