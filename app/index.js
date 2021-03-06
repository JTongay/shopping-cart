// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import angularInview from 'angular-inview';
import config from './config';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-material-data-table';
import 'angular-material-data-table/dist/md-data-table.min.css';
import 'angular-material/angular-material.css';
import { ComponentsModule } from './components';
import { AppComponent } from './components/App';
import TeaService from './services/Tea.service';
import CartService from './services/Cart.service';
import InStock from './filters/inStock.filter';
import CaffeineMeterDirective from './directives/CaffeineMeter.directive';
import mdTheme from './theme';

// Single Style Entry Point
import './index.scss';

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular-mocks/angular-mocks');
}

export const app = angular.module('app', [
    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'ngAria',
    'md.data.table',
    angularInview,
    'ui.router',
    ComponentsModule
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('green');
  })
  .component('app', AppComponent)
  .config(config)
  .service('teaService', TeaService)
  .service('cartService', CartService)
  .directive('caffeineScale', CaffeineMeterDirective)
  .filter('inStock', InStock);
