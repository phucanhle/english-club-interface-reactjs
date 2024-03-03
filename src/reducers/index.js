// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer"; // import your auth reducer

const rootReducer = combineReducers({
    auth: authReducer, // add your auth reducer to the root reducer
    // add more reducers here if you have them
});

export default rootReducer;
