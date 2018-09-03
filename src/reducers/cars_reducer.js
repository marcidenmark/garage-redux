import { FETCH_CARS, CAR_POSTED, FETCH_CAR } from '../actions';

export default function(state, action) {
	if (state === null) {
		return [];
	}
	switch (action.type) {
		case FETCH_CARS: {
			return action.payload.cars;
		}
		case CAR_POSTED: {
			const copiedState = state.slice(0);
			copiedState.push(action.payload);
			return copeidState;
		}
	default:
		return state;
	}
}

