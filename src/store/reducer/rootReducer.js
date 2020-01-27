import { combineReducers } from "redux";
//import { reducer as formReducer } from "redux-form";

import userReducer from "./userReducer"
import errorReducer from "./errorReducer"
import metaReducer from "./metaReducer"
const rootReducer = combineReducers({
    user: userReducer,
    error: errorReducer,
    meta: metaReducer
});

export default rootReducer;
