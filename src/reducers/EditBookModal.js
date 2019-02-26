const OPEN_MODAL = "editBookModal/OPEN";
const CLOSE_MODAL = "editBookModal/CLOSE";
const UPDATE_FORM_MODAL = "editBookModal/UPDATE";
const RESET_FORM = "editBookModal/RESET";

const initialState = {
    isEdit: true,
    isOpen: false,
    book: {
        id: '',
        name: '',
        author: '',
        description: '',
        categories: [],
        releaseDate: '',
    }
}

export const toggleModal = (isOpen, book) => {
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

const editBookModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return { ...state, isOpen: true, book: action.payload }
        }
        case CLOSE_MODAL: {
            return { ...state, isOpen: false }
        }
        case UPDATE_FORM_MODAL: {
            const payload = action.payload;
            const fieldName = payload.fieldName;
            const value = payload.value;
            const book = { ...state.book };
            const newBook = { ...book, [fieldName]: value };
            return {
                ...state,
                book: newBook,
            }
        }
        case RESET_FORM: return initialState;
        default: return state;
    }
}

export default editBookModalReducer;