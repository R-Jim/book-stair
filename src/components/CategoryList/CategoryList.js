import React from 'react';
import Category from '../Category';

class CategoryList extends React.Component {
    render() {
        const categories = this.props.categories;
        const rows = categories.map((category) =>
            <li key={category.name} onClick={() => this.props.switchCategory(category.name)}>
                <Category category={category} />
            </li>
        );
        return (
            <div>
                <h3>Category</h3>
                <ul>
                    {rows}
                </ul>
            </div>
        );
    }
}

export default CategoryList;