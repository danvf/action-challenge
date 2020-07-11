import { combineReducers } from "redux";
import userCoursesReducer from "./userCoursesReducer";
import moodarCoursesReducer from "./moodarCoursesReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
    clientCourses: userCoursesReducer,
    moodarCourses: moodarCoursesReducer,
    categories: categoriesReducer,
});
