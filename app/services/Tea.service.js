import { Tea } from '../utils/teaData';

export default class TeaService {
  constructor() {
    this.cart = [];
  }

  getTea() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(Tea), 500);
    })
  }

  getCart() {
    return this.cart;
  }

  setCart(val) {
    this.cart.push(val);
  }

}
