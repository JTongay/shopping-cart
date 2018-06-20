export default class Checkout {
  constructor(
    cartService,
    $scope
  ) {
    '$inject';
    this.cartService = cartService;
    this.$scope = $scope;
    this.updateGrandTotal = this.updateGrandTotal.bind(this);
    this.$scope.$on('UPDATED_TOTAL', this.updateGrandTotal);
    this.$scope.$on('DELETED_ITEM', this.updateGrandTotal);
  }

  $onInit() {
    this.grandTotal = this.cartService.getGrandTotal();
    this.cart = this.cartService.getCart();
  }

  updateGrandTotal() {
    this.grandTotal = this.cartService.getGrandTotal();
  }
}
