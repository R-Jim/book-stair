import { connect } from 'react-redux';
import AddBookModal from '../../components/AddBookModal';
import * as AddBookModalReducer from '../../reducers/AddBookModal';
import { addNewBook } from '../../reducers/Book';
import { toggleModal, chooseCategory } from '../../reducers/CategoryModal';

const mapStateToProps = (state) => {
    const addBookModal = state.addBookModal;
    return {
        isOpen: addBookModal.isOpen,
        name: addBookModal.name,
        author: addBookModal.author,
        description: addBookModal.description,
        categories: addBookModal.categories,
        releaseDate: addBookModal.releaseDate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: function (isOpen) {
            dispatch(AddBookModalReducer.toggleModal(isOpen));
        },
        updateFormValue: function (fieldName, value) {
            dispatch(AddBookModalReducer.updateFormValue(fieldName, value));
        },
        addNewBook: function (book) {
            dispatch(addNewBook(book));
            dispatch(AddBookModalReducer.resetForm());
        },
        toggleCategoryModal: function (isOpen, categories) {
            dispatch(toggleModal(isOpen));
            categories.map((category) => dispatch(chooseCategory(category)));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookModal)