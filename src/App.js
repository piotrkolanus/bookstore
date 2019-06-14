import React from 'react';
import BookList from './containers/BookList';
import Header from './components/Header';
import Cart from './containers/Cart';

const App = () => {
  return (
    <>
      <Header />
      <BookList />
      <Cart />
    </>
  );
};

export default App;
