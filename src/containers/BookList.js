import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Book from '../components/Book';
import bookStore from '../stores/BookStore';
import cartStore from '../stores/CartStore';

@observer
class BookList extends Component {
  sortByTitle = () => {
    bookStore.sortByTitle();
  };

  addToCartHandle = id => {
    const boughtProduct = bookStore.books.find(book => book.isbn === id);
    cartStore.addToCart(boughtProduct);
  };

  render() {
    const { books, isFilterActive, filteredBooks } = bookStore;
    return (
      <Container>
        <Row>
          {/* <button type="button" onClick={this.sortByTitle}>
            Sort by title
          </button> */}
          <Col>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
