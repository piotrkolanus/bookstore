import React from 'react';
import { Provider } from 'mobx-react';
import Container from 'react-bootstrap/Container';
import App from './App';

import BookStore from './stores/BookStore';

const stores = {
  BookStore
};

const Root = () => (
  <Container>
    <Provider {...stores}>
      <App />
    </Provider>
  </Container>
);

export default Root;
