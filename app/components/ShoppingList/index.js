import template from './ShoppingList.component.html';
import ShoppingList from './ShoppingList.component';

export const ShoppingListComponent = {
  bindings: {
    tea: '<'
  },
  controller: ShoppingList,
  template
};
