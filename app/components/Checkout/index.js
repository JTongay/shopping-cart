import Checkout from './Checkout.component';
import template from './Checkout.component.html';

export const CheckoutComponent = {
  bindings: {
    cart: '<'
  },
  controller: Checkout,
  template
}
