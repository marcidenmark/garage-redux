// like posts_show in blog redux app
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import action + +
//

class CarsArray extends Component {
	// componentWillMount() {
	// 	this.fetchCars();
	// }

	render () {
		return (
			<div className="right-scene">
			<h2>Baæfjkdæsajfdlæajæ</h2>
			</div>



		);
	}
}


function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchCars }, dispatch);
// }

export default connect(mapStateToProps)(CarsArray);
