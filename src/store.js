// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // import rootReducer, where you combine all your reducers

const store = createStore(rootReducer);

export default store;
