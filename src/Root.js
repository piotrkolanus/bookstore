import React from 'react';
import { Provider } from 'mobx-react';
import App from './App';

import BookStore from './stores/BookStore';

const stores = {
  BookStore
};

const Root = () => (
  <Provider {...stores}>
    <App />
  </Provider>
);

export default Root;
