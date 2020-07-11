import data from "../data/data.json";
import { CONSTANTS } from "../actions";

const categoriesReducer = (state = data.moodar.categories, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default categoriesReducer;
