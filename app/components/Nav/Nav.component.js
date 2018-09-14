import './_Nav.scss';

export default class Nav {
  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  $onInit() {
    this.currentState = this.$state.$current.name;
  }
}
