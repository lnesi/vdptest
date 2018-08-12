import { PHONE_LIST_FETCH } from "./types";

export function fetchList() {
	return dispatch => {
		fetch("data/phones.json").then(response => {
			response.json().then(data => {
				dispatch({ type: PHONE_LIST_FETCH, payload: data });
			});
		});
	};
}