import data from "../data/data.json";
import { CONSTANTS } from "../actions";

const userCoursesReducer = (state = data.client.courses, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userCoursesReducer;
