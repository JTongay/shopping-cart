export default class CartService {
  constructor() {
    this.cart = [];
  }

  getCart() {
    return this.cart;
  }

  setCart(val) {
    this.cart.push(val)
  }

  setCartItem(val, index) {
    let newItem = Object.assign({}, val);
    console.log(this.cart[index], 'previous');
    console.log(newItem, 'newIteam');
    this.cart[index] = newItem;
  }

  getGrandTotal() {
    let grandTotal = 0;
    if (!this.cart.length) {
      return grandTotal;
    }
    this.cart.forEach((tea) => {
      grandTotal += (tea.price * tea.quantity);
    });
    return grandTotal;
  }
};
