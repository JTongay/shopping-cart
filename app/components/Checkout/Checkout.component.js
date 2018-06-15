export default class Checkout {
  constructor(
    cartService,
    $scope
  ) {
    '$inject';
    this.cartService = cartService;
    this.$scope = $scope;
    this.$scope.$on('UPDATED_TOTAL', () => {
      this.grandTotal = this.cartService.getGrandTotal();
    });
    this.$scope.$on('DELETED_ITEM', () => {
      this.grandTotal = this.cartService.getGrandTotal();
    });
  }

  $onInit() {
    this.grandTotal = this.cartService.getGrandTotal();
    this.cart = this.cartService.getCart();
  }
}
