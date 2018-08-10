import { HERO_PHONE_GET_PHONE } from "./types";

export function getPhone(index) {
    return (dispatch, getState) => {
        dispatch({
            type: HERO_PHONE_GET_PHONE,
            payload: getState().PhoneList.list[index]
        });
    };
}