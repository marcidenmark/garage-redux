const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(car) {
	const url = `${BASE_URL}/${garage}/cars`;
	const promise = fetch(url).then(r => r.json());

	return {
		type: FETCH_CARS,
		payload: promise
	};
}

export function createCar (brand, model, owner, plate) {
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
		type: CAR_POSTED,
		payload: promise
	}
}
