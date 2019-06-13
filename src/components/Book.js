import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const Book = ({ title, isbn, pages, addToCart, isAddedToCart }) => {
  const handleClick = () => {
    addToCart(isbn);
    console.log(isbn);
  };
  return (
    <ListGroupItem key={isbn}>
      {title} {pages} {isAddedToCart}
      <button onClick={handleClick} type="button">
        Buy
      </button>
    </ListGroupItem>
  );
};

export default Book;
