const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

// FIRST ATTEMPT -- problems:
// 1. export function createCar (brand, model, owner, plate)
// 2. const url = `${BASE_URL}/cars`;

// SECOND ATTEMPT-- problems resolved:
// export function createCar (garage, car, callback) {
// const url = `${BASE_URL}/${garage}/cars`;
export function createCar (garage, car, callback) {
	const url = `${BASE_URL}/${garage}/cars`;
	const promise = fetch(url, {
		method: 'POST',
		headers: {
			Accept:  'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(r => r.json());

	return {
		type: 'CAR_POSTED',
		payload: promise
	}
}

// FIRST ATTEMPT -- problems:
// 1. const url = `${BASE_URL}/cars`;
//
// // SECOND ATTEMPT-- problems resolved:
// export function createCar (garage, car, callback) {
//
export function fetchCars(garage) {
	const url = `${BASE_URL}/${garage}/cars`;
	const promise = fetch(url)
		.then(r => r.json());

	return {
		type: 'FETCH_CARS',
		payload: promise
	};
}

//	!!!!!

//not needed:
// export function fetchCar(id) {
// 	const promise = fetch('https://wagon-garage-api.herokuapp.com/cars')
// 		.then(response => response.json());

// 	return {
// 		type: FETCH_CAR,
// 		payload: promise
// 	}
// }
