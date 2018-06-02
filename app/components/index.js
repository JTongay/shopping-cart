import angular from 'angular';

import {HomeComponent} from './Home/index';

export const ComponentsModule = angular.module('app.components', [])
  .component('home', HomeComponent)
  .name;
