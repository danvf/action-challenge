import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import categoriesReducer from "./categoriesReducer";
import dialogReducer from "./dialogReducer";

export default combineReducers({
    courses: coursesReducer,
    dialog: dialogReducer,
    categories: categoriesReducer,
});
