import React from 'react';
import Modal from 'react-modal';
import Category from '../CategoryModal/Category';

class AddBookModal extends React.Component {
    handleCloseModal = () => {
        const closeModal = this.props.toggleModal(false);
        return closeModal;
    }

    handleInputName = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('name', value);
    }

    handleInputAuthor = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('author', value);
    }

    handleInputDescription = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('description', value);
    }

    handleInputReleaseDate = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('releaseDate', value);
    }

    handleUnchooseCategory = (name, categories) => {
        const updateFormValue = this.props.updateFormValue;
        updateFormValue('categories', categories.filter((category) => category !== name));
    }

    finishForm = (e) => {
        if (this.props.isEdit) {
            const editBook = this.props.editBook;
            editBook(this.props.book);
        } else {
            const addNewBook = this.props.addNewBook;
            addNewBook({
                name: this.props.name,
                author: this.props.author,
                description: this.props.description,
                releaseDate: this.props.releaseDate,
                categories: this.props.categories,
            });
        }
        this.handleCloseModal();
        e.preventDefault();
    }

    renderChoosedCategories = (categories) => {
        if (categories === undefined || categories.length === 0)
            return '';
        const rows = categories.map((category) => { return <Category key={category} onClick={() => this.handleUnchooseCategory(category, categories)} category={{ name: category }} /> });
        return rows;
    }

    render() {
        const isEdit = this.props.isEdit;
        const isOpen = this.props.isOpen;
        const book = (isEdit) ? this.props.book : this.props;
        const categories = (isEdit) ? book.categories : this.props.categories;
        console.log(book);
        const toggleCategoryModal = this.props.toggleCategoryModal;
        return <Modal isOpen={isOpen} onRequestClose={this.handleCloseModal}>
            <h1>{(isEdit) ? 'Edit book' : 'Add New Book'}</h1>
            <form onSubmit={this.finishForm}>
                <div>Name:</div>
                <input
                    type="text"
                    value={book.name}
                    onChange={this.handleInputName}
                />
                <div>Author:</div>
                <input
                    type="text"
                    value={book.author}
                    onChange={this.handleInputAuthor}
                />
                <div>Description:</div>
                <input
                    type="text"
                    value={book.description}
                    onChange={this.handleInputDescription}
                />
                <div>Categories</div>
                <div>{this.renderChoosedCategories(categories)}</div>
                <button type="button" onClick={() => toggleCategoryModal(true, book.categories, isEdit)}>Add Categories</button>
                <div>Release date:</div>
                <input
                    type="date"
                    value={book.releaseDate}
                    onChange={this.handleInputReleaseDate}
                />
                <br />
                <button className="button-primary" type="submit">{(isEdit) ? 'Save' : 'Add Book'}</button>
            </form>
        </Modal>
    }
}

Modal.setAppElement('body');

export default AddBookModal;