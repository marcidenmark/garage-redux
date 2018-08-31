import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';


class CarNew extends Component {
	render () {
		return (
			<div className="left-scene">
			fdjsaæjfadsæ
			</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		car: state.car
	};
}


// class CarNew extends Component {
// 	onSubmit = (values) => {
// 		this.props.createCar(values, (car) => {
// 			this.props.history.push('/');
// 			return car;
// 		});
// 	}

// 	renderField(field) {
// 		return (
// 			<div className="form-group">
// 				<label {field.label} </label>
// 				<input
// 					className="form-control"
// 					type={field.type}
// 					{...field.input}
// 				/>
// 			</div>
// 		);
// 	}

// 	render() {
// 		return (
// 			<div>

// 			</div>

// 		);
// 	}
// }
export default connect (mapStateToProps)(CarNew);
// export default reduxForm({form: 'newCarForm'})(
// 	connect(null, { createCar }) (CarNew)
// );
