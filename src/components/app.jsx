import React from 'react';
import CarsArray from '../containers/cars_array';
import CarNew from '../containers/car_new_form';

const App = (props) => {
	return (
		<div className="app">
			<CarNew />
			<CarsArray />
		</div>
	);
};

export default App;
