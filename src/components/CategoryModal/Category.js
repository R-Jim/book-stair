import React from 'react'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            category: this.props.category.name
        }
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick() {
        this.setState({
            isEditing: true
        })
    }

    handleCategoryInput = (e) => {
        const value = e.target.value;
        this.setState({
            category: value
        })
    }

    updateCategory = (oldCategory) => {
        const updateCategory = this.props.updateCategory;
        updateCategory(oldCategory, { name: this.state.category });
    }

    render() {
        const category = this.props.category;
        const onClick = this.props.onClick;
        const editable = this.props.editable;

        if (this.state.isEditing) {
            return (
                <div>
                    <input
                        type="text"
                        value={this.state.category}
                        onChange={this.handleCategoryInput}
                    />
                    <button type="button" onClick={() => this.updateCategory(category)}>Save</button>
                </div>
            );
        } else {
            return (
                <code>
                    <span onClick={() => onClick(category.name)}>{category.name}</span>
                    {(editable) ? <span>  <span onClick={() => this.props.deleteCategory(category.name)}>X</span></span> : ''}
                    {(editable) ? <span>  <span onClick={this.handleEditClick}>Edit</span></span> : ''}
                </code>
            );
        }
    }
}

export default Category;