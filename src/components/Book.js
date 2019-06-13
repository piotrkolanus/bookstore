import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const Book = ({ title, isbn, pages, addToCart, isAddedToCart }) => {
  const handleClick = () => {
    addToCart(isbn);
    console.log(isbn);
  };
  return (
    <ListGroupItem key={isbn}>
      {title} {pages} {isAddedToCart}
      <Button variant="outline-secondary" onClick={handleClick} type="button">
        Buy
      </Button>
    </ListGroupItem>
  );
};

export default Book;
