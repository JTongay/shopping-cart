import './_Options.scss';

export default class Options {
  constructor(
    teaService,
    cartService,
    $mdDialog,
    $rootScope
  ) {
    '$inject';
    this.teaService = teaService;
    this.cartService = cartService;
    this.options = [];
    this.filterOptions = {};
    this.$rootScope = $rootScope;
    this.$mdDialog = $mdDialog;
    this.$rootScope.$on('ADD_TO_CART', () => {
      this.totalItems = this.cartService.getCart().length;
    });
  }

  $onInit() {
    this.teaService.getTea().then((data) => {
      const returnedTea = data.map((tea) => {
        return tea.categories;
      });
      const flattened = this.flattenArray(returnedTea);
      this.options = flattened.filter((val, i, self) => {
        return self.indexOf(val) === i;
      });
    });
    this.totalItems = this.cartService.getCart().length;
  }

  setOptions() {
    this.teaService.setFilterOptions(this.filterOptions);
  }

  clearOptions() {
    this.filterOptions = {};
    this.teaService.setFilterOptions({});
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Clearing Options')
        .textContent('Options cleared')
        .ok('Close')
    );
  }

  flattenArray(arr) {
    let emptyArr = [];
    return emptyArr.concat.apply([], arr)
  }
};
