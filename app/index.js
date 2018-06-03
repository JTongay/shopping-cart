// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from '@uirouter/angularjs';
import config from './config';
import 'angular-animate';
import 'angular-material/angular-material.css';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import { ComponentsModule } from './components';

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
  angularUIRouter,
  ComponentsModule
]).config(config).config(($mdThemingProvider)=> {
  const neonRedMap = $mdThemingProvider.extendPalette('red', {
    '500': '#ff0000',
    'contrastDefaultColor': 'dark'
  });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('neonRed', neonRedMap);

  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('neonRed');
}).run(() => {
  console.log('booyah is ready');
  console.log(ngMaterial);
})

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
