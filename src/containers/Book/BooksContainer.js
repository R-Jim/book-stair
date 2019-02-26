import React from 'react';
import { connect } from 'react-redux';
import BookList from '../../components/BookList';
import { toggleModal } from '../../reducers/EditBookModal';

const BooksContainer = ({ books, editBook, fillter }) => {
    return <BookList fillter={fillter} editBook={editBook} books={books} />
}

const mapStateToProps = (state) => {
    const book = state.book;
    return {
        books: book.books,
        fillter: book.fillter,
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        editBook: function (book) {
            dispatch(toggleModal(true, book));
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(BooksContainer)