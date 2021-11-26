import { combineReducers } from "redux";
import Reducer from "./Reducer";

const reducers = combineReducers({
    State: Reducer,
})

export default reducers;