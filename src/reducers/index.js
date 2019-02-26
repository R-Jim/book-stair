import { combineReducers } from 'redux';
import category from './Category';
import book from './Book';
import addBookModal from './AddBookModal';
import categoryModal from './CategoryModal';
import editBookModal from './EditBookModal';

export default combineReducers({
    category,
    book,
    addBookModal,
    editBookModal,
    categoryModal,
})
