//external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

//internal modules
import CarsArray from './containers/cars_array';
import CarNewForm from './containers/car_new_form';
import CarShow from './containers/car_show';
import App from './components/app';

//styles
import '../assets/stylesheets/application.scss';

// state and reducers
import carsReducer from './reducers/cars_reducer';

// garage: {marci-garage},
	cars: [
		{ id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
		{ id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
		{ id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
		{ id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
	]
// (state)
// (this prompt comes immediately)
// PROMPT:
// const garageName = prompt("What is your garage's name?") || ` garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
	// garage: garageName,
	cars:[]
};

//Reducers
const reducers = combineReducers({
	// garage: (state = null, action) => state,
	cars: carsReducer,
	form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger));

// remember, SWITCH is for the routes

// render an instance of the component in the DOM
ReactDOM.render(
	<Provider store={createStore(reducers, initialState, middlewares)}>
   	<Router history={history}>
    	<div>
     	<Switch>
     		<Route path="/" exact component={App} />
	         	<Route path="/car/new" exact component={CarNewForm} />
	          <Route path="/car/:id" component={CarShow} />
		</Switch>
	</div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

//	<Route path="/" component={CarsArray} />
//	took out this root and put it into the App

