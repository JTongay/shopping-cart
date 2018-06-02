// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from '@uirouter/angularjs';
import config from './config';
import { ComponentsModule } from './components';

// Single Style Entry Point
import './index.scss';

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular-mocks/angular-mocks');
}

export const app = angular.module('app', [angularUIRouter, ComponentsModule])
  .config(config);

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
