import { CONSTANTS } from "../actions";

export const openDialog = () => {
    return {
        type: CONSTANTS.OPEN_DIALOG,
    };
};

export const closeDialog = () => {
    return {
        type: CONSTANTS.CLOSE_DIALOG,
    };
};
