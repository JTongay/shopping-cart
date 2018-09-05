import './_Splash.scss';

export default class SplashComponent {
  constructor($timeout) {
    '$inject';
    this.$timeout = $timeout;
  }

  $onInit() {
    this.show = false;
    this.$timeout(() => {
      this.show = true;
    }, 200);
  }
}
