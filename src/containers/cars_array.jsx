// like posts_show in blog redux app
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Garage from '../components/garage'
import CarNew from '../containers/car_new_form';
import CarShow from '../containers/car_show';
//
// worng: this.props.fetchCars();
// right:
class CarsArray extends Component {
	// componentWillMount() {
	// 	this.props.fetchCars(this.props.garage);
	// }

	renderCars() {
		return this.props.cars.map((car) => {
			return (
				<div>
					<Link to={`/cars/${car.id}`} key={car.id} />
					<div className="car-list">
						<h2>{car.brand}</h2>
					</div>

				</div>
				);
		});
	}
// add <Garage component here.
	render () {
		if (this.props.cars.length === 0) {
			return [
			<Garage key="garage" garage={this.props.garage}>
				<Link to="car/new">Add a car  </Link>
			</Garage>,
			<div className="owner" key="owner"> No Car Yet</div>
			];
		}
		return [
			<div className="right-scene">
				<h2>Test text not dynamic. Coming from the cars_array.jsx file</h2>
{/*				<Garage key="garage" garage={this.props.garage}>
					<Link to="car/new">Add a car  </Link>
				</Garage>*/}

			     <div className="list-container" key="cars">
			     {this.renderCars()}
{/*				     {this.props.cars.map((car) => {
				          return (

				            <div key={car.id} className="car-smallad">
				              <Link to={`/cars/${car.id}`} key={car.id} />
				              <img className="car-logo" src="assets/images/logo_square.svg" />
				              <div className="car-details">
				                <span>{car.brand} - {car.model}</span>
				                <ul>
				                  <li><strong>Owner:</strong> {car.owner}</li>
				                </ul>
				              </div>
				            </div>
				          );
			     	})}*/}
			     </div>

				<div className="garage"> Sample text. Garage Name TKTK</div>
				<div className="brand">	Brand, TKTK</div>
				<div className="owner"> Owner: <span className = 'owner-bold'> namenot dynamic yet</span> </div>
		</div>
			// {this.renderCars()}
		];
	}
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsArray);
