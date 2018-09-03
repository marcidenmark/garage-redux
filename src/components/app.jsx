import React from 'react';
import CarsArray from '../containers/cars_array';
import CarNew from '../containers/car_new_form';

const App = (props) => {
	return (
		<div className="app">
			<CarShow channelFromParams={props.match.params.garage} />
			<CarNew channelFromParams={props.match.params.garage} />
			<CarsArray channelFromParams={props.match.params.garage} />
		</div>
	);
};

export default App;
