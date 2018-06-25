export default class ShoppingListItem {
  constructor(
    teaService,
    cartService,
    $rootScope,
    $window,
    $mdDialog
  ) {
    '$inject';
    this.totalQuantity = [1,2,3,4,5,6,7,8,9];
    this.teaService = teaService;
    this.cartService = cartService;
    this.filterOptions = this.teaService.getFilterOptions();
    this.$rootScope = $rootScope;
    this.$window = $window;
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.quantity = 0;
  }

  addToCart(tea, quantity) {
    tea.quantity = quantity;
    tea.total = (tea.price * quantity);
    this.cartService.setCart(tea);
    this.$rootScope.$broadcast('ADD_TO_CART');
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .title('Add to cart')
        .textContent(`${this.tea.name} was added to cart`)
        .ok('Ok!')
    ).then(() => {
      this.$window.scrollTo(0,0);
      this.quantity = 0;
    });
  }
}
