import { createStore, bindActionCreators } from "redux";
import { reducer } from "./reducers";

export const store = createStore(reducer);
console.log(store.getState());
