const OPEN_MODAL = "addBookModal/OPEN";
const CLOSE_MODAL = "addBookModal/CLOSE";
const UPDATE_FORM_MODAL = "addBookModal/UPDATE";
const RESET_FORM = "addBookModal/RESET";


const initialState = {
    isOpen: false,
    name: '',
    author: '',
    description: '',
    categories: [],
    releaseDate: '',
}

export const toggleModal = (isOpen, book) => {
    console.log(book);
    return {
        type: (isOpen) ? OPEN_MODAL : CLOSE_MODAL,
        payload: book
    }
}

export const updateFormValue = (fieldName, value) => {
    return {
        type: UPDATE_FORM_MODAL,
        payload: {
            fieldName,
            value,
        }
    }
}

export const resetForm = () => {
    return {
        type: RESET_FORM
    }
}

const addBookModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return { ...state, isOpen: true }
        }
        case CLOSE_MODAL: {
            return { ...state, isOpen: false }
        }
        case UPDATE_FORM_MODAL: {
            const payload = action.payload;
            const fieldName = payload.fieldName;
            const value = payload.value;
            return {
                ...state,
                [fieldName]: value
            }
        }
        case RESET_FORM: return initialState;
        default: return state;
    }
}

export default addBookModalReducer;