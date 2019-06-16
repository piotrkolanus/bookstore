import React from 'react';
import { Provider } from 'mobx-react';
import App from './App';

import BookStore from './stores/BookStore';
import CartStore from './stores/CartStore';

const stores = {
  BookStore,
  CartStore
};

const Root = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

export default Root;
