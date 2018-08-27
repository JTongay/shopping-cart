import './_ShoppingList.scss';

export default class ShoppingList {
  constructor(teaService, $mdTheming) {
    '$inject';
    this.$mdTheming = $mdTheming;
    this.teaService = teaService;
    this.filterOptions = this.teaService.getFilterOptions();
  }

  $onInit() {
    this.teaService.getTea().then((data) => {
      this.allTea = data;
    });
  }
}
