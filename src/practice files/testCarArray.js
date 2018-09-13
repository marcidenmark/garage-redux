// like posts_show in blog redux app
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import CarNewForm from '../containers/car_new_form';
import CarShow from '../containers/car_show';
// import action + +
//

class CarsArray extends Component {
	componentWillRecieveProps(nextProps) {
		if (nextProps.carFromParams !== this.props.carFromParams) {
		this.props.fetchCars(nextProps.carFromParams);
		}
	}

	renderCar = (car) => {
		return this.props.cars.map((car) => {
			return (
				<li
					key={car}
					className={car === this.props.carFromParams}
				>
				<Link to={`/cars/${car.id}`} key={car.id} >
					<div className="car">
						<h3>{car.brand} </h3>
						<p>{car.model} </p>
					</div>
				</Link>
			</li>
			);
		}

	render () {
		return (
			<div className="right-scene">
				<h2>Test text not dynamic. Coming from the cars_array.jsx file.</h2>
				<ul>
				 	{this.props.car.map(this.renderCar)}
				</ul>
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
    car: state.cars
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsArray);
