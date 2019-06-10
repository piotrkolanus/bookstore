import React from 'react';

const Book = ({ title, isbn = '', pages = '' }) => {
  return (
    <li key={isbn}>
      {title} {pages}
    </li>
  );
};

export default Book;
