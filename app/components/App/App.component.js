import './_App.scss';

export class App {
  constructor() {
    '$inject';
    this.test = 'booyah';
  }

  $onInit() {
    console.log('booyah');
  }
}
