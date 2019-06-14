import { observable, action } from 'mobx';

class CartStore {
  @observable cartContent = [];

  @action addToCart = product => {
    this.cartContent.replace(this.cartContent.concat(product));
  };
}

export default new CartStore();
