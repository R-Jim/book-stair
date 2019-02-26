export const ADD_CATEGORY = "category/ADD";
export const LOAD_ALL_CATEGORIES = "category/LOAD_ALL";
export const UPDATE_CATEGORY = "category/UPDATE";
export const DELETE_CATEGORY = "category/DELETE";

const initialState = {
    categories: [{ name: 'Sci-fi' }, { name: 'fiction' }],
}

export const loadAllCategories = (categories) => {
    return {
        type: LOAD_ALL_CATEGORIES,
        payload: categories,
    }
}

export const addCategory = (name) => {
    return {
        type: ADD_CATEGORY,
        payload: { name }
    }
}

export const updateCategory = (oldCategory, newCategory) => {
    return {
        type: UPDATE_CATEGORY,
        payload: {
            oldCategory,
            newCategory,
        }
    }
}

export const deleteCategory = (category) => {
    return {
        type: DELETE_CATEGORY,
        payload: category,
    }
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY: {
            let categories = [...state.categories];
            const newCategory = action.payload;
            categories = categories.concat(newCategory);
            return { ...state, categories: categories }
        }
        case LOAD_ALL_CATEGORIES: {
            const categories = action.payload;
            return { ...state, categories: categories }
        }
        case UPDATE_CATEGORY: {
            const categories = [...state.categories];
            const payload = action.payload;
            const oldCategory = payload.oldCategory;
            const newCategory = payload.newCategory;
            return {
                ...state, categories: categories.map((category) => {
                    return category = (category.name === oldCategory.name) ? category = newCategory : category
                })
            }
        }
        case DELETE_CATEGORY: {
            const categories = [...state.categories];
            const name = action.payload;
            return {
                ...state, categories: categories.filter((category) => category.name !== name)
            }
        }
        default: return state;
    }
}

export default categoryReducer;

