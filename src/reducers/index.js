import { combineReducers } from "redux";
import HeroPhoneReducers from "./HeroPhone";
import PhoneListReducer from "./PhoneList";

const rootReducer = combineReducers({
    HeroPhone: HeroPhoneReducers,
    PhoneList: PhoneListReducer
});

export default rootReducer;