import { CONSTANTS } from "../actions";

export const addCourse = () => {
    return {
        type: CONSTANTS.ADD_COURSE,
        payload: {},
    };
};

export const removeCourse = () => {
    return {
        type: CONSTANTS.REMOVE_COURSE,
        payload: {},
    };
};
