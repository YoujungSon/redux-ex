import { createStore, combineReducers } from "redux";
import cat from "./module/cat";
const rootReducer = combineReducers({ cat });
const store = createStore(rootReducer);
export default store;
