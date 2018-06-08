export default class Checkout {
  constructor(
    cartService
  ) {
    '$inject';
    this.cartService = cartService;
  }

  $onInit() {
    this.grandTotal = this.cartService.getGrandTotal();
    this.cart = this.cartService.getCart();
  }
}
