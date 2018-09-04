const BASE_URL = 'https://wagon-garage-api.herokuapp.com/cars';


export const FETCH_CARS = 'FETCH_CARS';
export const CAR_POSTED = 'CAR_POSTED';
export const FETCH_CAR = 'FETCH_CAR';

export function createCar (brand, model, owner, plate) {
	const url = `${BASE_URL}/cars`;
	const promise = fetch(url, {
		method: 'POST',
		headers: {
			Accept:  'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(r => r.json());

	return {
		type: CAR_POSTED,
		payload: promise
	}
}

export function fetchCar(id) {
	const promise = fetch('https://wagon-garage-api.herokuapp.com/cars')
		.then(response => response.json());

	return {
		type: FETCH_CAR,
		payload: promise
	}
}

export function fetchCars(id) {
	const url = `${BASE_URL}/cars`;
	const promise = fetch(url).then(r => r.json());

	return {
		type: FETCH_CARS,
		payload: promise
	};
}
