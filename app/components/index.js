import angular from 'angular';
import 'angular-animate';

// import {HomeComponent} from './App';
import { NavComponent } from './Nav';
import { ShoppingListComponent } from './ShoppingList';
import { ShoppingListItemComponent } from './ShoppingListItem';
import { OptionsComponent } from './Options';
import { CheckoutComponent } from './Checkout';
import { CartComponent } from './Cart';

export const ComponentsModule = angular.module('app.components', ['ngAnimate'])
  .component('nav', NavComponent)
  .component('shoppingList', ShoppingListComponent)
  .component('shoppingListItem', ShoppingListItemComponent)
  .component('options', OptionsComponent)
  .component('checkout', CheckoutComponent)
  .component('cart', CartComponent)
  .name;
