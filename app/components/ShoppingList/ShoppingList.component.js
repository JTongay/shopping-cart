import './_ShoppingList.scss';

export default class ShoppingList {
  constructor(teaService, $mdTheming, $animate, $timeout) {
    '$inject';
    this.$mdTheming = $mdTheming;
    this.teaService = teaService;
    this.$animate = $animate;
    this.$timeout = $timeout;
    this.filterOptions = this.teaService.getFilterOptions();
  }

  $onInit() {
    this.teaService.getTea().then((data) => {
      this.allTea = data;
    });
    this.show = false;
    this.$timeout(() => {
      this.show = true;
    }, 200);
  }
}
