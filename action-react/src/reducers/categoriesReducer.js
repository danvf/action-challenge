import data from "../data/data.json";

const categoriesReducer = (state = data.categories, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default categoriesReducer;
