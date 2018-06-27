import './_Cart.scss';

export default class Cart {
  constructor(
    cartService,
    $scope
  ) {
    '$inject';
    this.cartService = cartService;
    this.editing = false;
    this.$scope = $scope;
    this.quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  changeTotal() {
    this.$scope.$emit('UPDATED_TOTAL');
    this.triggerEditMode();
  }

  deleteItem(tea) {
    this.cartService.deleteCartItem(tea);
    this.cart = this.cartService.getCart();
    this.$scope.$emit('DELETED_ITEM');
  }

  triggerEditMode() {
    this.editing = !this.editing;
  }

  changeAmount(tea, index) {
    this.cartService.setCartItem(tea, index);
    this.cart = this.cartService.getCart();
  }

}
