import likesReducer from "./likes";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import dislikesReducer from "./dislikes";

const allReducers = combineReducers({
	likes: likesReducer,
	isLogged: loggedReducer,
	dislikes: dislikesReducer,
});

export default allReducers;
