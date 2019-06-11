import React from 'react';

const Book = ({ title, isbn, pages, addToCart, isAddedToCart }) => {
  const handleClick = () => {
    addToCart(isbn);
    console.log(isbn);
  };
  return (
    <li key={isbn}>
      {title} {pages} {isAddedToCart}
      <button onClick={handleClick} type="button">
        Buy
      </button>
    </li>
  );
};

export default Book;
