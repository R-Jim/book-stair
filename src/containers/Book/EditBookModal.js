import { connect } from 'react-redux';
import AddBookModal from '../../components/AddBookModal';
import * as EditBookModalReducer from '../../reducers/EditBookModal';
import { saveBook } from '../../reducers/Book';
import { toggleModal, chooseCategory } from '../../reducers/CategoryModal';

const mapStateToProps = (state) => {
    const editBookModal = state.editBookModal;
    return {
        isEdit: editBookModal.isEdit,
        isOpen: editBookModal.isOpen,
        book: editBookModal.book,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: function (isOpen) {
            dispatch(EditBookModalReducer.toggleModal(isOpen));
        },
        updateFormValue: function (fieldName, value) {
            dispatch(EditBookModalReducer.updateFormValue(fieldName, value));
        },
        editBook: function (book) {
            dispatch(saveBook(book));
            dispatch(EditBookModalReducer.resetForm());
        },
        toggleCategoryModal: function (isOpen, categories, isEdit) {
            dispatch(toggleModal(isOpen, isEdit));
            categories.map((category) => dispatch(chooseCategory(category)));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookModal)