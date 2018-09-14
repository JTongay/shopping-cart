import './_Checkout.scss';

export default class Checkout {
  constructor(
    cartService,
    $scope,
    $window
  ) {
    '$inject';
    this.cartService = cartService;
    this.$scope = $scope;
    this.$window = $window;
    this.updateGrandTotal = this.updateGrandTotal.bind(this);
    this.$scope.$on('UPDATED_TOTAL', this.updateGrandTotal);
    this.$scope.$on('DELETED_ITEM', this.updateGrandTotal);
  }

  $onInit() {
    this.$window.scrollTo(0, 0);
    this.grandTotal = this.cartService.getGrandTotal();
    this.cart = this.cartService.getCart();
    // this.cart = [{
    //   '_id': '55c8ee82152165d244b98300',
    //   'name': 'Bayard stew',
    //   'ingredients': 'concentrated gluten, jewelry, dill, beetle nut, toast',
    //   'caffeineScale': 244,
    //   'price': 1540,
    //   'inStock': false,
    //   'rating': 1,
    //   'total': 32312,
    //   'quantity': 4,
    //   'grandTotal': 23904,
    //   'imageUrl': 'http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$',
    //   '__v': 0,
    //   'categories': ['dark', 'cold']
    // }]
  }

  updateGrandTotal() {
    this.grandTotal = this.cartService.getGrandTotal();
  }
}
