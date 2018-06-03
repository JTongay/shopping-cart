import './Home.scss';

export class Home {
  constructor() {
    '$inject';
    this.test = 'booyah';
  }

  $onInit() {
    console.log('booyah');
  }
}
