import React from 'react';
import Modal from 'react-modal';
import Category from './Category';

class CategoryModal extends React.Component {
    handleCloseModal = (isEdit) => {
        const closeModal = this.props.toggleModal(false, this.props.choosedCategories, isEdit);
        return closeModal;
    }

    handleInputCategoryName = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('categoryName', value);
    }

    handleAddNewCategory = () => {
        const name = this.props.categoryName;
        this.props.addCategory(name);
    }

    renderSelectedCategory = (selectedCategories) => {
        const unchooseCategory = this.props.unchooseCategory;
        const rows = selectedCategories.map((category) => {
            return <Category key={category.name} category={category} onClick={unchooseCategory} />
        });
        return rows;
    }

    renderUnselectedCategory = (categories, selectedCategories) => {
        const chooseCategory = this.props.chooseCategory;
        const updateCategory = this.props.updateCategory;
        const deleteCategory = this.props.deleteCategory;
        const rows = categories.map((category) => {
            return <Category editable={true} deleteCategory={deleteCategory} updateCategory={updateCategory} key={category.name} category={category} onClick={chooseCategory} />
        });
        return rows;
    }

    render() {
        const isOpen = this.props.isOpen;
        const isEdit = this.props.isEdit;
        const categories = this.props.categories;
        const categoryName = this.props.categoryName;
        const choosedCategories = this.props.choosedCategories;
        return (
            <Modal isOpen={isOpen} onRequestClose={() => this.handleCloseModal(isEdit)}>
                <div>
                    {this.renderSelectedCategory(choosedCategories)}
                </div>
                <div>
                    <div>Category:</div>
                    <input
                        type="text"
                        value={categoryName}
                        onChange={this.handleInputCategoryName}
                    />
                    <button type="button" onClick={this.handleAddNewCategory}>Add New</button>
                    <div>
                        {this.renderUnselectedCategory(categories)}
                    </div>
                </div>
            </Modal>
        );
    }
}

Modal.setAppElement('body');

export default CategoryModal;