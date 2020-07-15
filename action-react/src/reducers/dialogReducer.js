import { CONSTANTS } from "../actions";

const dialogReducer = (state = false, action) => {
    switch (action.type) {
        case CONSTANTS.OPEN_DIALOG:
            return true;
        case CONSTANTS.CLOSE_DIALOG:
            return false;
        default:
            return state;
    }
};

export default dialogReducer;
