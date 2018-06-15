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
    // this.cart = [{
    //   '_id': '55c8ee82152165d244b98300',
    //   'name': 'Bayard stew',
    //   'ingredients': 'concentrated gluten, jewelry, dill, beetle nut, toast',
    //   'caffeineScale': 244,
    //   'price': 1540,
    //   'inStock': false,
    //   'rating': 1,
    //   'quantity': 5,
    //   'total': 7700,
    //   'imageUrl': 'http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$',
    //   '__v': 0,
    //   'categories': ['dark', 'cold']
    //   },
    //   {
    //     '_id': '55c8ee82152165d244b98301',
    //     'name': 'Incompactness syrup',
    //     'ingredients': 'fennel, nutmeg leaves, parsley, cream of \'cream of cream\', blarney',
    //     'caffeineScale': 49,
    //     'price': 7348,
    //     'inStock': true,
    //     'rating': 2,
    //     'quantity': 2,
    //     'total': 12903,
    //     'imageUrl': 'http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$',
    //     '__v': 0,
    //     'categories': ['awesome']
    //   }];
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
