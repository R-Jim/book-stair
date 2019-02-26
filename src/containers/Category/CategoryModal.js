import { connect } from 'react-redux';
import CategoryModal from '../../components/CategoryModal';
import { addCategory, updateCategory, deleteCategory } from '../../reducers/Category';
import * as CategoryModalReducer from '../../reducers/CategoryModal';
import { updateFormValue as updateFormValueAddModal } from '../../reducers/AddBookModal';
import { updateFormValue as updateFormValueEditModal } from '../../reducers/EditBookModal';
import { updateCategoryAllBook } from '../../reducers/Book';


const mapStateToProps = (state) => {
    const category = state.category;
    const categoryModal = state.categoryModal;
    return {
        isOpen: categoryModal.isOpen,
        isEdit: categoryModal.isEdit,
        categories: category.categories,
        categoryName: categoryModal.categoryName,
        choosedCategories: categoryModal.choosedCategories,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: function (name) {
            dispatch(addCategory(name));
        },
        toggleModal: function (isOpen, categories, isEdit) {
            dispatch(CategoryModalReducer.toggleModal(isOpen));
            if (!isOpen) {
                if (isEdit) {
                    dispatch(updateFormValueEditModal('categories', categories.map((category) => { return category.name })));
                } else
                    dispatch(updateFormValueAddModal('categories', categories.map((category) => { return category.name })));
                dispatch(CategoryModalReducer.resetForm());
            }
        },
        updateFormValue: function (fieldName, value) {
            dispatch(CategoryModalReducer.updateFormValue(fieldName, value));
        },
        chooseCategory: function (name) {
            dispatch(CategoryModalReducer.chooseCategory(name));
        },
        unchooseCategory: function (name) {
            dispatch(CategoryModalReducer.unchooseCategory(name));
        },
        resetForm: function () {
            dispatch(CategoryModalReducer.resetForm());
        },
        updateCategory: function (oldCategory, newCategory) {
            dispatch(updateCategory(oldCategory, newCategory));
            dispatch(updateCategoryAllBook(oldCategory.name, newCategory.name));
        },
        deleteCategory: function (category) {
            dispatch(deleteCategory(category));
            dispatch(updateCategoryAllBook(category, null));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);