const OPEN_MODAL = "categoryModal/OPEN";
const CLOSE_MODAL = "categoryModal/CLOSE";
const UPDATE_FORM = "categoryModal/UPDATE_FORM";
const CHOOSE_CATEGORY = "categoryModal/CHOOSE_CATEGORY";
const UNCHOOSE_CATEGORY = "categoryModal/UNCHOOSE_CATEGORY";
const RESET_FORM = "categoryModal/RESET";

const initialState = {
    isOpen: false,
    isEdit: false,
    categoryName: '',
    choosedCategories: [],
}

export const toggleModal = (isOpen, isEdit) => {
    return {
        type: (isOpen) ? OPEN_MODAL : CLOSE_MODAL,
        payload: isEdit
    }
}

export const updateFormValue = (fieldName, value) => {
    return {
        type: UPDATE_FORM,
        payload: {
            fieldName,
            value,
        }
    }
}

export const chooseCategory = (name) => {
    return {
        type: CHOOSE_CATEGORY,
        payload: name
    }
}

export const unchooseCategory = (name) => {
    return {
        type: UNCHOOSE_CATEGORY,
        payload: name,
    }
}

export const resetForm = () => {
    return {
        type: RESET_FORM
    }
}

const categoryModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return { ...state, isOpen: true, isEdit: action.payload }
        }
        case CLOSE_MODAL: {
            return { ...state, isOpen: false, isEdit: action.payload }
        }
        case UPDATE_FORM: {
            const payload = action.payload;
            const fieldName = payload.fieldName;
            const value = payload.value;
            return { ...state, [fieldName]: value }
        }
        case CHOOSE_CATEGORY: {
            const name = action.payload;
            const choosedCategories = [...state.choosedCategories];
            if (choosedCategories.find((category) => category.name === name))
                return state;
            return { ...state, choosedCategories: choosedCategories.concat({ name }) }
        }
        case UNCHOOSE_CATEGORY: {
            const name = action.payload;
            const choosedCategories = [...state.choosedCategories];
            return { ...state, choosedCategories: choosedCategories.filter((category) => category.name !== name) }
        }
        case RESET_FORM: {
            return { ...state, choosedCategories: [] }
        }
        default: return state;
    }
}

export default categoryModalReducer;
