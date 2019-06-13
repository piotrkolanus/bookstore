import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ListGroup from 'react-bootstrap/ListGroup';
import Book from '../components/Book';
import bookStore from '../stores/BookStore';

@inject('BookStore')
@observer
class BookList extends Component {
  sortByTitle = () => {
    bookStore.sortByTitle();
  };

  // add another store for that
  // addToCartHandle = id => {
  //   const { books } = this.state;
  //   const currentBooks = [...books];

  //   const booksAfterAddingAnyToCart = currentBooks.map(book =>
  //     book.isbn === id ? { ...book, isAddedToCart: true } : book
  //   );

  //   this.setState({ books: booksAfterAddingAnyToCart });
  // };

  // rethink
  // showNotFoundMsg = () => {
  //   const { filteredBooks, isFilterActive } = this.state;
  //   let notFoundMsg;
  //   console.log('im in');
  //   if (isFilterActive && filteredBooks.length === 0) {
  //     notFoundMsg = [{ title: 'Book not found' }];
  //   }
  //   this.setState({ filteredBooks: notFoundMsg });
  // };

  render() {
    const { books, isFilterActive, filteredBooks } = bookStore;
    return (
      <>
        <button type="button" onClick={this.sortByTitle}>
          Sort by title
        </button>
        <ListGroup>
          {!isFilterActive
            ? books.map(book => (
                <Book
                  title={book.title}
                  isbn={book.isbn}
                  pages={book.pages}
                  key={book.isbn}
                  addToCart={this.addToCartHandle}
                  isAddedToCart={book.isAddedToCart}
                />
              ))
            : filteredBooks.map(book => (
                <Book
                  title={book.title}
                  isbn={book.isbn}
                  pages={book.pages}
                  key={book.isbn}
                  addToCart={this.addToCartHandle}
                />
              ))}
        </ListGroup>
      </>
    );
  }
}

export default BookList;
