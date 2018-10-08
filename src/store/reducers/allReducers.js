import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
const allReducers = combineReducers({
  authentication: authReducer,
  post: postReducer
});

export default allReducers;
