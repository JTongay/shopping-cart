import { Tea } from '../utils/teaData';

export default class TeaService {
  constructor() {
    this.filterOptions = {};
  }

  getTea() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(Tea), 500);
    })
  }

  setFilterOptions(val) {
    this.filterOptions = val;
  }

  getFilterOptions() {
    return this.filterOptions;
  }

}
