import { PHONE_LIST_FETCH } from "./types";
import axios from "axios";

export function fetchList() {
    return dispatch => {
        axios.get("/data/phones.json").then(response => {
            dispatch({ type: PHONE_LIST_FETCH, payload: response.data });
        });
    };
}