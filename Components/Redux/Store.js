import { legacy_createStore as createStore } from "redux";
import { myReducer } from "./Reducer";

export const mystore = createStore(myReducer);