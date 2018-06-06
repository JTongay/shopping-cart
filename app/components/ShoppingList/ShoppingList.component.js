export default class ShoppingList {
  constructor(teaService) {
    '$inject';
    this.teaService = teaService;
  }

  $onInit() {
    this.teaService.getTea().then((data) => {
      this.allTea = data;
    });
  }
}
