import template from './ShoppingListItem.component.html';
import ShoppingListItem from './ShoppingListItem.component';

export const ShoppingListItemComponent = {
  bindings: {
    tea: '<'
  },
  controller: ShoppingListItem,
  template
};
