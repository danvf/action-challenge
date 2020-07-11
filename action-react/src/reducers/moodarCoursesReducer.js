import data from "../data/data.json";
import { CONSTANTS } from "../actions";

const moodarCoursesReducer = (state = data.moodar.courses, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default moodarCoursesReducer;
