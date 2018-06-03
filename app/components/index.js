import angular from 'angular';

// import {HomeComponent} from './App';
import {NavComponent} from './Nav';
import {ShoppingListComponent} from './ShoppingList';
import {ShoppingListItemComponent} from './ShoppingListItem';

export const ComponentsModule = angular.module('app.components', [])
  .component('nav', NavComponent)
  .component('shoppingList', ShoppingListComponent)
  .component('shoppingListItem', ShoppingListItemComponent)
  .name;
