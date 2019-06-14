import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cartStore from '../stores/CartStore';

@observer
class Cart extends Component {
  // TODO:create cart item, resolve duplicate keys issue
  render() {
    return (
      <>
        <h1>elo</h1>
        {cartStore.cartContent.map(item => (
          <li key={item.isbn}>
            {item.title} {item.pages}
          </li>
        ))}
      </>
    );
  }
}

export default Cart;
