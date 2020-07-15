import data from "../data/data.json";
import { CONSTANTS } from "../actions";

function moveBetweenArrays(source, target, id) {
    for (let i = 0; i < source.length; i++) {
        let element = source[i];
        if (String(element.id) === String(id)) {
            source.splice(i, 1);
            target.push(element);
        }
    }
}

const coursesReducer = (state = data.courses, action) => {
    let clientCourses, moodarCourses, courseId, newState;

    switch (action.type) {
        case CONSTANTS.ADD_COURSE:
            clientCourses = state.client;
            moodarCourses = state.moodar;
            courseId = action.payload.courseId;
            moveBetweenArrays(moodarCourses, clientCourses, courseId);

            newState = {
                ...state,
                client: clientCourses,
                moodar: moodarCourses,
            };

            return newState;
        case CONSTANTS.REMOVE_COURSE:
            clientCourses = state.client;
            moodarCourses = state.moodar;
            courseId = action.payload.courseId;
            moveBetweenArrays(clientCourses, moodarCourses, courseId);

            newState = {
                ...state,
                client: clientCourses,
                moodar: moodarCourses,
            };
            return newState;
        default:
            return state;
    }
};

export default coursesReducer;
