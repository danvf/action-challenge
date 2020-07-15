import { CONSTANTS } from "../actions";

export const addCourse = (courseId) => {
    return {
        type: CONSTANTS.ADD_COURSE,
        payload: { courseId },
    };
};

export const removeCourse = (courseId) => {
    return {
        type: CONSTANTS.REMOVE_COURSE,
        payload: { courseId },
    };
};
