import { PHONE_LIST_FETCH } from "../actions/types";

export default function(state = { list: [] }, action) {
	switch (action.type) {
		case PHONE_LIST_FETCH:
			return { ...state, list: action.payload };
		default:
			return state;
	}
}