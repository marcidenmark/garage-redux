// like posts_show in blog redux app
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import CarNew from '../containers/car_new_form';
import CarShow from '../containers/car_show';
// import action + +
//

class CarsArray extends Component {
	componentWillMount() {
		this.props.fetchCars();
	}

	renderCars() {
		return this.props.cars.map((car) => {
			return (
				<Link to={`/cars/${car.id}`} key={car.id}>
					<div className="car">
						<h3>{car.brand} </h3>
						<p>{car.model} </p>
					</div>
				</Link> );
		});
	}

	// fetchCars = () => {
	// 	this.props.fetchCars(this.props.car);
	// }
		// { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },

	render () {
		return (
			<div className="right-scene">
				<h2>Test text not dynamic. Coming from the cars_array.jsx file.</h2>
				<div className="garage"> Garage Name TKTK</div>
				<div className="brand">	Brand, TKTK</div>
				<div className="owner"> Owner: <span className = 'owner-bold'> namenot dynamic yet</span>

				</div>


			</div>
			// {this.renderCars()}
		);
	}
}


function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsArray);
