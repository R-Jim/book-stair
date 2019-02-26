import React from 'react';

class Book extends React.Component {
    render() {
        const book = this.props.book;
        const editBook = this.props.editBook;
        const rows = (book.categories !== undefined) ? book.categories.map((category) => { return <code key={category}>{category}</code> }) : '';
        return (
            <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td>{rows}</td>
                <td>{book.releaseDate}</td>
                <td><button type="button" onClick={() => editBook(book)}>Edit</button></td>
            </tr>
        );
    }
}

export default Book;