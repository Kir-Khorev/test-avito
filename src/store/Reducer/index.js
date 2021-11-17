import { combineReducers } from "redux";
import Reducer from "./Reducer";
import ModalReducer from './ModalReducer';

const reducers = combineReducers({
    // Img: Reducer,
    State: Reducer,
    ModalState: ModalReducer
})

export default reducers;