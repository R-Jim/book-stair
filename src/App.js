import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import './skeleton/skeleton.css';
import BookList from './containers/Book';
import CategoryList from './containers/Category';
import { createStore } from 'redux';
import Reducer from './reducers';
import { toggleModal } from './reducers/AddBookModal';
import AddBookModal from './containers/Book/AddBookModal';
import CategoryModal from './containers/Category/CategoryModal';
import EditBookModal from './containers/Book/EditBookModal';

const store = createStore(Reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <br />
        <div className="container">
          <div className="row">
            <div className="two columns">
              <CategoryList />
            </div>
            <div className="ten columns">
              <button onClick={() => store.dispatch(toggleModal(true))}>Add Book</button>
              <BookList />
            </div>
          </div>
        </div>
        <AddBookModal />
        <EditBookModal />
        <CategoryModal />
      </Provider>
    );
  }
}

export default App;

