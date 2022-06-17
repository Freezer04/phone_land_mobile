import authReducer from "./authReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    token : authReducer,
})

export default allReducers; 