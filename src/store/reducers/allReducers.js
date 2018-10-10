import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
const allReducers = combineReducers({
  authentication: authReducer,
  post: postReducer,
  firestore: firestoreReducer
});

export default allReducers;
