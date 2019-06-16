import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import cartStore from '../stores/CartStore';
@inject('CartStore')
@observer
class Cart extends Component {
  // TODO:create cart item, resolve duplicate keys issue
  render() {
    const {
      CartStore: { cartContent }
    } = this.props;
    return (
      <>
        <h1>elo</h1>
        {cartContent.map(item => (
          <li key={item.isbn}>
            {item.title} {item.pages}
          </li>
        ))}
      </>
    );
  }
}

export default Cart;
