import React from 'react'
import Book from '../Book'

class BookList extends React.Component {
    fillterBook = (book, fillter) => {
        if (fillter === undefined || fillter.length === 0 || fillter[0] === 'All') {
            return true;
        }
        return fillter.some((category) => {
            if (category === 'None' && (book.categories === undefined || book.categories.length === 0)) {
                return true;
            }
            if (book.categories !== undefined && book.categories.includes(category)) {
                return true;
            }
            return false;
        });
    }

    render() {
        const books = this.props.books;
        const editBook = this.props.editBook;
        const fillter = this.props.fillter;
        if (books === undefined || books.length === undefined) {
            return <h3>No book found for this category</h3>;
        }
        const rows = books.map((book) => {
            if (this.fillterBook(book, fillter)) {
                return <Book key={book.id} book={book} editBook={editBook} />
            }
            return null;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Release date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default BookList;