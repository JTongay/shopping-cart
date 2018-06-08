export default class Options {
  constructor(
    teaService
  ) {
    '$inject';
    this.teaService = teaService;
    this.options = [];
    this.filterOptions = {};
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
  }

  setOptions() {
    this.teaService.setFilterOptions(this.filterOptions);
  }

  clearOptions() {
   this.filterOptions = {};
   this.teaService.setFilterOptions({});
  }

  flattenArray(arr) {
    let emptyArr = [];
    return emptyArr.concat.apply([], arr)
  }
};
