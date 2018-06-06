import Options from './Options.component';
import template from './Options.component.html';

export const OptionsComponent = {
  bindings: {
    filterBy: '<'
  },
  controller: Options,
  template
};
