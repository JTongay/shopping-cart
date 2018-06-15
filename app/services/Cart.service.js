export default class CartService {
  constructor() {
    this.cart = [];
    this.grandTotal = 0;
  }

  getCart() {
    return this.cart;
  }

  setCart(val) {
    this.cart.push(val)
  }

  deleteCartItem(val) {
    this.cart = this.cart.filter((item) => {
      return item._id !== val._id
    });
  }

  setCartItem(val, index) {
    let newItem = Object.assign({}, val);
    newItem.total = newItem.quantity * newItem.price;
    this.cart[index] = newItem;
  }

  getGrandTotal() {
    this.grandTotal = 0;
    if (!this.cart.length) {
      return this.grandTotal;
    }
    this.cart.forEach((tea) => {
      this.grandTotal += tea.total;
    });
    console.log(this.grandTotal, 'total in service');
    console.log(this.cart);
    return this.grandTotal;
  }
};
