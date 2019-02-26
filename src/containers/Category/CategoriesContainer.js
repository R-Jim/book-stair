import React from 'react';
import { connect } from 'react-redux';
import CategoryList from '../../components/CategoryList';
import { fillterBooks } from '../../reducers/Book';
import * as CategoryReducer from '../../reducers/Category';

const CategoryContainer = ({ categories, switchCategory }) => {
    return <CategoryList switchCategory={switchCategory} categories={categories} />
}

const fillterCategories = (books, baseCategories) => {
    let categories = baseCategories.map((category) => { return { name: category.name, nob: 0 } });
    let booksWithNoCategories = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].categories !== undefined && books[i].categories.length !== 0) {
            for (let k = 0; k < books[i].categories.length; k++) {
                let exist = false;
                for (let j = 0; j < categories.length; j++) {
                    if (books[i].categories[k] === categories[j].name) {
                        exist = true;
                        categories[j].nob++;
                        break;
                    }
                }
                if (!exist) {
                    categories.push({ name: books[i].categories[k], nob: 1 });
                }
                if (!baseCategories.find((category) => category.name === books[i].categories[k])) {
                    baseCategories.push({ name: books[i].categories[k] });
                }
            }
        } else {
            booksWithNoCategories++;
        }
    }
    return [{ name: 'All', nob: books.length }]
        .concat(categories)
        .concat((booksWithNoCategories !== 0) ? { name: 'None', nob: booksWithNoCategories } : []);
}

const mapStateToProps = (state) => {
    const books = state.book.books;
    const categories = state.category.categories;
    return {
        categories: fillterCategories(books, categories)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchCategory: function (category) {
            dispatch(fillterBooks([category]));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);