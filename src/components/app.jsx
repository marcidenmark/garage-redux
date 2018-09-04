import React from 'react';
import CarsArray from '../containers/cars_array';
import CarNew from '../containers/car_new_form';
import Garage from '../components/garage';

const App = (props) => {
	return (
		<div className="app">
			<Garage />
			<h2>fdkæjfæajfdlæ (Nothing is rendering from here yet.)</h2>
			<CarShow channelFromParams={props.match.params.garage} />
			<CarNew channelFromParams={props.match.params.garage} />
			<CarsArray channelFromParams={props.match.params.garage} />
		</div>
	);
};

export default App;
