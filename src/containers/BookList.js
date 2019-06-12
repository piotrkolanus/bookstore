import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Book from '../components/Book';

@inject('BookStore')
@observer
class BookList extends Component {
  state = {
    filteredBooks: [],
    isFilterActive: false,
    books: [
      {
        isbn: '9781593275846',
        title: 'Eloquent JavaScript, Second Edition',
        subtitle: 'A Modern Introduction to Programming',
        author: 'Marijn Haverbeke',
        published: '2014-12-14T00:00:00.000Z',
        publisher: 'No Starch Press',
        pages: 472,
        description:
          'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
        website: 'http://eloquentjavascript.net/'
      }
    ]
  };

  filterBooksHandler = e => {
    const { books } = this.state;
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    let isFilterActive = true;
    if (e.target.value === 0) {
      isFilterActive = false;
    }
    this.setState({ filteredBooks: filtered, isFilterActive });
  };

  sortByTitle = () => {
    const { books } = this.state;
    const currentBooks = [...books];
    console.log('currentBooks: ', currentBooks);

    const sorted = currentBooks.sort((a, b) => a.title.localeCompare(b.title));

    this.setState({ books: sorted });
  };

  addToCartHandle = id => {
    const { books } = this.state;
    const currentBooks = [...books];

    const booksAfterAddingAnyToCart = currentBooks.map(book =>
      book.isbn === id ? { ...book, isAddedToCart: true } : book
    );

    this.setState({ books: booksAfterAddingAnyToCart });
  };

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
    const { books, isFilterActive, filteredBooks } = this.state;
    return (
      <>
        <input onChange={this.filterBooksHandler} />
        <button type="button" onClick={this.sortByTitle}>
          Sort by title
        </button>
        <ul>
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
        </ul>
      </>
    );
  }
}

export default BookList;
