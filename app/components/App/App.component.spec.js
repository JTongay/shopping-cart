import {App} from './App.component';

describe('Hero', () => {
  let $rootScope, makeController;
  beforeEach(window.module('app'));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new App();
    };
  }));
  it('should exist', () => {
    let controller = makeController();
    expect(controller).toBeDefined();
  })
});
