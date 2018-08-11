import { combineReducers } from "redux";
import PhoneListReducer from "./PhoneList";

const rootReducer = combineReducers({
	PhoneList: PhoneListReducer
});

export default rootReducer;