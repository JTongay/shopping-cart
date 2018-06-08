import Cart from './Cart.component';
import template from './Cart.component.html';

export const CartComponent = {
  bindings: {
    cart: '<'
  },
  controller: Cart,
  template
};
