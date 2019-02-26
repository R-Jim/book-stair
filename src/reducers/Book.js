const ADD_BOOK = "book/ADD";
const FILLTER = "book/FILLTER";
const LOAD_ALL_BOOKS = "book/LOAD_ALL";
const UPDATE_CATEGORY_ALL_BOOK = "book/UPDATE_CATEGORY_ALL"
const SAVE_BOOK = "book/SAVE";

const BOOKS = [
    { id: 1, name: "jungle book", categories: ['action', 'horror'] },
    { id: 2, name: "jungle book 1", categories: ['fiction'] },
    { id: 3, name: "jungle book 2" },
    { id: 4, name: "jungle book 3" }
];


const initialState = {
    books: BOOKS,
    fillter: [],
}

export const fillterBooks = (fillter) => {
    return {
        type: FILLTER,
        payload: fillter
    }
}


export const loadAllBooks = (category) => {
    return {
        type: LOAD_ALL_BOOKS,
        payload: category,
    }
}

export const addNewBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book,
    }
}

export const updateCategoryAllBook = (oldCategory, newCategory) => {
    return {
        type: UPDATE_CATEGORY_ALL_BOOK,
        payload: {
            oldCategory,
            newCategory,
        }
    }
}

export const saveBook = (book) => {
    return {
        type: SAVE_BOOK,
        payload: book
    }
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK: {
            let nob = state.books.id;
            const book = action.payload;
            book.id = nob++;
            const newBooks = [...state.books].concat(book);
            return { ...state, books: newBooks };
        }
        case LOAD_ALL_BOOKS: {
            const category = action.payload;
            return { ...state, category: category };
        }
        case FILLTER: {
            const fillter = action.payload;
            return { ...state, fillter: fillter };
        }
        case UPDATE_CATEGORY_ALL_BOOK: {
            const payload = action.payload;
            const oldCategory = payload.oldCategory;
            const newCategory = payload.newCategory;
            const newBooks = [...state.books].map(
                (book) => {
                    if (book.categories !== undefined) {
                        if (newCategory === null) {
                            book.categories = book.categories.filter((category) => category !== oldCategory);
                        } else {
                            book.categories = book.categories.map(
                                (category) => { return (category === oldCategory) ? newCategory : category }
                            )
                        }
                    } return book;
                }
            );
            return { ...state, books: newBooks };
        }
        case SAVE_BOOK: {
            const newBook = action.payload;
            const newBooks = [...state.books].map((book) => { return (book.id === newBook.id) ? newBook : book });
            return {
                ...state,
                books: newBooks,
            }
        }
        default: return state;
    }
}

export default bookReducer;