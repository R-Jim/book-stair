import React from 'react';

class Category extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <span>
                <span>{category.name}</span>
                <span> ({category.nob})</span>
            </span>
        );
    }
}

export default Category;